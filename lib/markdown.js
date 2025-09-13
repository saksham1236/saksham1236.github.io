var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
import { createReadStream, promises as fs } from "fs";
import path from "path";
import { GitHubLink } from "@/settings/navigation";
import { compileMDX } from "next-mdx-remote/rsc";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeCodeTitles from "rehype-code-titles";
import rehypeKatex from "rehype-katex";
import rehypePrism from "rehype-prism-plus";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import { visit } from "unist-util-visit";
import { components } from "@/lib/components";
import { Settings } from "@/lib/meta";
import { PageRoutes } from "@/lib/pageroutes";
function parseMdx(rawMdx) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield compileMDX({
            source: rawMdx,
            options: {
                parseFrontmatter: true,
                mdxOptions: {
                    rehypePlugins: [
                        preCopy,
                        rehypeCodeTitles,
                        rehypeKatex,
                        rehypePrism,
                        rehypeSlug,
                        rehypeAutolinkHeadings,
                        postCopy,
                    ],
                    remarkPlugins: [remarkGfm],
                },
            },
            components,
        });
    });
}
const documentPath = (slug) => {
    return Settings.gitload
        ? `${GitHubLink.href}/raw/main/contents/docs/${slug}/index.mdx`
        : path.join(process.cwd(), "/contents/docs/", `${slug}/index.mdx`);
};
const getDocumentPath = (() => {
    const cache = new Map();
    return (slug) => {
        if (!cache.has(slug)) {
            cache.set(slug, documentPath(slug));
        }
        return cache.get(slug);
    };
})();
export function getDocument(slug) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a;
        try {
            const contentPath = getDocumentPath(slug);
            let rawMdx = "";
            let lastUpdated = null;
            if (Settings.gitload) {
                const response = yield fetch(contentPath);
                if (!response.ok) {
                    throw new Error(`Failed to fetch content from GitHub: ${response.statusText}`);
                }
                rawMdx = yield response.text();
                lastUpdated = (_a = response.headers.get("Last-Modified")) !== null && _a !== void 0 ? _a : null;
            }
            else {
                rawMdx = yield fs.readFile(contentPath, "utf-8");
                const stats = yield fs.stat(contentPath);
                lastUpdated = stats.mtime.toISOString();
            }
            const parsedMdx = yield parseMdx(rawMdx);
            const tocs = yield getTable(slug);
            return {
                frontmatter: parsedMdx.frontmatter,
                content: parsedMdx.content,
                tocs,
                lastUpdated,
            };
        }
        catch (err) {
            console.error(err);
            return null;
        }
    });
}
const headingsRegex = /^(#{2,4})\s(.+)$/gm;
export function getTable(slug) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a, e_1, _b, _c;
        const extractedHeadings = [];
        let rawMdx = "";
        if (Settings.gitload) {
            const contentPath = `${GitHubLink.href}/raw/main/contents/docs/${slug}/index.mdx`;
            try {
                const response = yield fetch(contentPath);
                if (!response.ok) {
                    throw new Error(`Failed to fetch content from GitHub: ${response.statusText}`);
                }
                rawMdx = yield response.text();
            }
            catch (error) {
                console.error("Error fetching content from GitHub:", error);
                return [];
            }
        }
        else {
            const contentPath = path.join(process.cwd(), "/contents/docs/", `${slug}/index.mdx`);
            try {
                const stream = createReadStream(contentPath, { encoding: "utf-8" });
                try {
                    for (var _d = true, stream_1 = __asyncValues(stream), stream_1_1; stream_1_1 = yield stream_1.next(), _a = stream_1_1.done, !_a; _d = true) {
                        _c = stream_1_1.value;
                        _d = false;
                        const chunk = _c;
                        rawMdx += chunk;
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (!_d && !_a && (_b = stream_1.return)) yield _b.call(stream_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            }
            catch (error) {
                console.error("Error reading local file:", error);
                return [];
            }
        }
        let match;
        while ((match = headingsRegex.exec(rawMdx)) !== null) {
            const level = match[1].length;
            const text = match[2].trim();
            extractedHeadings.push({
                level: level,
                text: text,
                href: `#${innerslug(text)}`,
            });
        }
        return extractedHeadings;
    });
}
function innerslug(text) {
    return text
        .trim()
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^a-zA-Z0-9\u4e00-\u9fa5\-_]/g, "");
}
const pathIndexMap = new Map(PageRoutes.map((route, index) => [route.href, index]));
export function getPreviousNext(path) {
    const index = pathIndexMap.get(`/${path}`);
    if (index === undefined || index === -1) {
        return { prev: null, next: null };
    }
    const prev = index > 0 ? PageRoutes[index - 1] : null;
    const next = index < PageRoutes.length - 1 ? PageRoutes[index + 1] : null;
    return { prev, next };
}
const preCopy = () => (tree) => {
    visit(tree, "element", (node) => {
        var _a;
        if (node.tagName === "pre") {
            const [codeEl] = node.children;
            if ((codeEl === null || codeEl === void 0 ? void 0 : codeEl.tagName) === "code") {
                const textNode = (_a = codeEl.children) === null || _a === void 0 ? void 0 : _a[0];
                node.raw = (textNode === null || textNode === void 0 ? void 0 : textNode.value) || "";
            }
        }
    });
};
const postCopy = () => (tree) => {
    visit(tree, "element", (node) => {
        if (node.tagName === "pre" && node.raw) {
            node.properties = node.properties || {};
            node.properties["raw"] = node.raw;
        }
    });
};
