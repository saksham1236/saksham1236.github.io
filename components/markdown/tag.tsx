import clsx from "clsx"
import { cn } from "@/lib/utils"

type TagProps = React.PropsWithChildren & {
  type?: "sm" | "lg"
}

export default function Tag({ children, type }: TagProps) {
  const tagClassNames = clsx({
    "!text-md": type == "sm",
    "!text-sm": type === "lg",
  })
  return (
    <span
      className={cn(
        "tag bg-card !text-primary mr-2 mb-2 inline-flex h-16 flex-row items-center gap-1.5 rounded-xl px-6 not-prose",
        tagClassNames
      )}
    >
      {children}
    </span>
  )
}
