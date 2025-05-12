import { cn } from "@/lib/utils";
export function Iframe({ src, title, className }: { src: string; title?: string; className?: string }) {
    if (!src) {
        return (
            <div className="w-full h-96 border-1 border-border rounded-lg bg-neutral-200 dark:bg-neutral-800 mb-12">
                <h2>404</h2>
                <p>Iframe not found</p>
            </div>
        )
    } else {
        return (
            <iframe
                src={src}
                className={cn("chart-frame w-full h-256 border-1 border-border rounded-lg mb-3", className)}
                title={title}
                loading="lazy"
            />
        )
    }
}