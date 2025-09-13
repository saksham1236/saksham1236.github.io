var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { promises as fs } from "fs";
import path from "path";
import { Documents } from "@/settings/documents";
import grayMatter from "gray-matter";
import remarkMdx from "remark-mdx";
import remarkParse from "remark-parse";
import remarkStringify from "remark-stringify";
import { unified } from "unified";
import { visit } from "unist-util-visit";
const docsDir = path.join(process.cwd(), "contents/docs");
const outputDir = path.join(process.cwd(), "public", "search-data");
function isMdxJsxFlowElement(node) {
    return node.type === "mdxJsxFlowElement" && "name" in node;
}
function isRoute(node) {
    return "href" in node && "title" in node;
}
function createSlug(filePath) {
    const relativePath = path.relative(docsDir, filePath);
    const parsed = path.parse(relativePath);
    const slugPath = parsed.dir ? `${parsed.dir}/${parsed.name}` : parsed.name;
    const normalizedSlug = slugPath.replace(/\\/g, "/");
    if (parsed.name === "index") {
        return `/${parsed.dir.replace(/\\/g, "/")}` || "/";
    }
    else {
        return `/${normalizedSlug}`;
    }
}
function findDocumentBySlug(slug) {
    function searchDocs(docs, currentPath = "") {
        for (const doc of docs) {
            if (isRoute(doc)) {
                const fullPath = currentPath + doc.href;
                if (fullPath === slug)
                    return doc;
                if (doc.items) {
                    const found = searchDocs(doc.items, fullPath);
                    if (found)
                        return found;
                }
            }
        }
        return null;
    }
    return searchDocs(Documents);
}
function ensureDirectoryExists(dir) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield fs.access(dir);
        }
        catch (_a) {
            yield fs.mkdir(dir, { recursive: true });
        }
    });
}
function removeCustomComponents() {
    const customComponentNames = [
        "Tabs",
        "TabsList",
        "TabsTrigger",
        "pre",
        "Mermaid",
        "Card",
        "CardGrid",
        "Step",
        "StepItem",
        "Note",
        "FileTree",
        "Folder",
        "File",
        "Button",
        "ImageViewer"
    ];
    return (tree) => {
        visit(tree, "mdxJsxFlowElement", (node, index, parent) => {
            if (isMdxJsxFlowElement(node) &&
                parent &&
                Array.isArray(parent.children) &&
                customComponentNames.includes(node.name)) {
                parent.children.splice(index, 1);
            }
        });
    };
}
function cleanContentForSearch(content) {
    let cleanedContent = content;
    cleanedContent = cleanedContent.replace(/```[\s\S]*?```/g, " ");
    cleanedContent = cleanedContent.replace(/`([^`]+)`/g, "$1");
    cleanedContent = cleanedContent.replace(/#{1,6}\s+(.+)/g, "$1");
    cleanedContent = cleanedContent
        .replace(/\*\*(.+?)\*\*/g, "$1")
        .replace(/_(.+?)_/g, "$1");
    cleanedContent = cleanedContent.replace(/\[([^\]]+)\]\([^\)]+\)/g, "$1");
    cleanedContent = cleanedContent.replace(/\|.*\|[\r\n]?/gm, (match) => {
        return match
            .split("|")
            .filter((cell) => cell.trim())
            .map((cell) => cell.trim())
            .join(" ");
    });
    cleanedContent = cleanedContent.replace(/<(?:Note|Card|Step|FileTree|Folder|File|Mermaid)[^>]*>([\s\S]*?)<\/(?:Note|Card|Step|FileTree|Folder|File|Mermaid)>/g, "$1");
    cleanedContent = cleanedContent
        .replace(/^\s*[-*+]\s+/gm, "")
        .replace(/^\s*\d+\.\s+/gm, "")
        .replace(/^\s*\[[x\s]\]\s+/gm, "")
        .replace(/^\s*>\s+/gm, "");
    cleanedContent = cleanedContent
        .replace(/[^\w\s-:]/g, " ")
        .replace(/\s+/g, " ")
        .toLowerCase()
        .trim();
    return cleanedContent;
}
function processMdxFile(filePath) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a;
        const rawMdx = yield fs.readFile(filePath, "utf-8");
        const { content, data: frontmatter } = grayMatter(rawMdx);
        const processed = yield unified()
            .use(remarkParse)
            .use(remarkMdx)
            .use(removeCustomComponents)
            .use(remarkStringify)
            .process(content);
        const documentContent = String(processed.value);
        const headings = ((_a = documentContent
            .match(/^##\s+(.+)$/gm)) === null || _a === void 0 ? void 0 : _a.map((h) => h.replace(/^##\s+/, "").trim())) || [];
        const extractedKeywords = new Set([
            ...(frontmatter.keywords || []),
            ...headings,
            ...(documentContent.match(/\*\*([^*]+)\*\*/g) || []).map((m) => m.replace(/\*\*/g, "").trim()),
            ...(documentContent.match(/`([^`]+)`/g) || []).map((m) => m.replace(/`/g, "").trim()),
        ]);
        const slug = createSlug(filePath);
        const matchedDoc = findDocumentBySlug(slug);
        return {
            slug,
            title: frontmatter.title ||
                (matchedDoc && isRoute(matchedDoc) ? matchedDoc.title : "Untitled"),
            description: frontmatter.description || "",
            content: documentContent,
            _searchMeta: {
                cleanContent: cleanContentForSearch(documentContent),
                headings,
                keywords: Array.from(extractedKeywords),
            },
        };
    });
}
function getMdxFiles(dir) {
    return __awaiter(this, void 0, void 0, function* () {
        let files = [];
        const items = yield fs.readdir(dir, { withFileTypes: true });
        for (const item of items) {
            const fullPath = path.join(dir, item.name);
            if (item.isDirectory()) {
                const subFiles = yield getMdxFiles(fullPath);
                files = files.concat(subFiles);
            }
            else if (item.name.endsWith(".mdx")) {
                files.push(fullPath);
            }
        }
        return files;
    });
}
function convertMdxToJson() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield ensureDirectoryExists(outputDir);
            const mdxFiles = yield getMdxFiles(docsDir);
            const combinedData = [];
            for (const file of mdxFiles) {
                const jsonData = yield processMdxFile(file);
                combinedData.push(jsonData);
            }
            const combinedOutputPath = path.join(outputDir, "documents.json");
            yield fs.writeFile(combinedOutputPath, JSON.stringify(combinedData, null, 2));
        }
        catch (err) {
            console.error("Error processing MDX files:", err);
        }
    });
}
convertMdxToJson();
