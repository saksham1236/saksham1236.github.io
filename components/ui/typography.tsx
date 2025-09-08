import { PropsWithChildren } from "react"
import { cn } from "@/lib/utils"

type props = PropsWithChildren & {
  className: string
}

export function Typography({ children, className }: props) {
  return <div className={cn("typography", className)}>{children}</div>
}
