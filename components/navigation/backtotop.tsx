"use client"
import { MaterialSymbolsArrowUpwardRounded } from "../ui/icons/icons"
import type { ReactElement } from "react"
import { useEffect, useRef } from "react"
import cn from "clsx"

function ScrollUp() {
  if (typeof window !== "undefined") {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }
}

export function BackToTop({ className }: { className?: string }): ReactElement {
  const ref = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    function toggleVisible() {
      const { scrollTop } = document.documentElement
      if (ref.current) {
        ref.current.classList.toggle("opacity-0", scrollTop < 300)
      }
    }

    window.addEventListener("scroll", toggleVisible)
    return () => {
      window.removeEventListener("scroll", toggleVisible)
    }
  }, [])

  return (
    <button
      ref={ref}
      onClick={ScrollUp}
      className={cn(
        "ml-2 flex cursor-pointer items-center opacity-0 transition",
        className
      )}
    >
      <span className="hidden md:flex pl-2">Scroll to top</span>
      <MaterialSymbolsArrowUpwardRounded className="md:ml-2 inline-flex h-6 w-6 align-middle" />
    </button>
  )
}
