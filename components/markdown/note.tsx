import { PropsWithChildren } from "react"
import clsx from "clsx"

import { cn } from "@/lib/utils"

type NoteProps = PropsWithChildren & {
  title?: string
  type?: "note" | "success" | "warning" | "danger" | "info"
}

export default function Note({ children, title, type = "note" }: NoteProps) {
  const noteClassNames = clsx({
    "dark:bg-neutral-900 bg-neutral-50": type == "note",
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
        "note mb-3 rounded-xl border px-4 py-3 text-sm tracking-wide",
        noteClassNames
      )}
    >
      {title && <p className="-mb-3 text-sm font-semibold">{title}:</p>}
      {children}
    </div>
  )
}
