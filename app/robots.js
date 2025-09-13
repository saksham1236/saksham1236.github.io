import { Settings } from "@/lib/meta";
export const dynamic = "force-static";
export default function robots() {
    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
            },
        ],
        sitemap: `${Settings.metadataBase}/sitemap.xml`,
    };
}
