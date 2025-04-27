"use client"

import Link from "next/link"
import clsx from "clsx"

import { ScrollArea } from "@/components/ui/scroll-area"

type TocProps = {
  tocs: { href: string; level: number; text: string }[]
}

export default function Toc({ tocs }: TocProps) {
  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault()
    const id = href.startsWith("#") ? href.slice(1) : href
    const targetElement = document.getElementById(id)
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" })
      window.history.pushState(null, "", href)
    }
  }

  if (!tocs.length) {
    return null
  }

  return (
    <div className="flex w-full flex-col gap-3 rounded-lg p-3 bg-secondary dark:bg-[#00000033]">
      <h3 className="text-sm font-semibold">On this page</h3>
      <ScrollArea className="pt-0.5">
        <div className="flex flex-col gap-2.5 text-sm text-neutral-800 rounded-sm dark:text-neutral-300/85 bg-[#002A6915] p-2 dark:bg-[#ffffff11]">
          {tocs.map(({ href, level, text }) => (
            <Link
              key={href}
              href={href}
              scroll={false}
              onClick={(e) => handleSmoothScroll(e, href)}
              className={clsx({
                "pl-0": level == 2,
                "border-l border-ring pl-3": level == 3,
                "border-l border-ring pl-6": level == 4,
              })}
            >
              {text}
            </Link>
          ))}
        </div>
      </ScrollArea>
    </div>
  )
}
