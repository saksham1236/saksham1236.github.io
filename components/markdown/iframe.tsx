import { cn } from "@/lib/utils"

export function Iframe({
  src,
  title,
  className,
}: {
  src: string
  title?: string
  className?: string
}) {
  if (!src) {
    return (
      <div className="border-border mb-12 h-96 w-full rounded-lg border-1 bg-neutral-200 dark:bg-neutral-800">
        <h2>404</h2>
        <p>Iframe not found</p>
      </div>
    )
  } else {
    return (
      <iframe
        src={src}
        className={cn(
          "chart-frame border-border mb-3 h-128 w-full rounded-lg border-1",
          className
        )}
        title={title}
        loading="lazy"
      />
    )
  }
}
