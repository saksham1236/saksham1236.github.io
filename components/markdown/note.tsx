import { PropsWithChildren } from "react"
import clsx from "clsx"
import { ClassNameValue } from "tailwind-merge"

import { cn } from "@/lib/utils"

type NoteProps = PropsWithChildren & {
  title?: string
  type?: "note" | "success" | "warning" | "danger" | "info"
  className?: ClassNameValue
  titleClassName?: ClassNameValue
}

export default function Note({
  children,
  title,
  type = "note",
  className,
  titleClassName,
}: NoteProps) {
  const noteClassNames = clsx({
    "bg-card text-primary": type == "note",
    "dark:bg-green-950 bg-green-100 border-green-300 dark:border-green-900":
      type === "success",
    "dark:bg-yellow-950 bg-orange-100 border-orange-300 dark:border-orange-900":
      type === "warning",
    "dark:bg-red-950 bg-red-100 border-red-300 dark:border-red-900":
      type === "danger",
    "dark:bg-sky-950 bg-blue-100 border-blue-300 dark:border-blue-900":
      type === "info",
  })

  return (
    <div
      className={cn(
        "note mb-3 rounded-3xl p-6 text-sm tracking-wide border",
        noteClassNames,
        className
      )}
    >
      {title && <h3 className={cn("-mb-3 !text-base !font-bold !text-muted !mx-0", titleClassName)}>{title}:</h3>}
      <div className="prose-p:!text-neutral-invert prose-p:!mx-0">{children}</div>
    </div>
  )
}
