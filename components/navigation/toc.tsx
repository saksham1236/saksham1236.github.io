"use client"

import Link from "next/link"
import clsx from "clsx"

export type TocProps = {
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
    <div className="flex w-full flex-col gap-3 overflow-y-hidden rounded-lg dark:bg-[#00000033]">
      <h3 className="text-sm font-semibold">On this page</h3>
      <div className="link-map bg-sheet-primary flex flex-col overflow-y-auto rounded-sm text-sm text-neutral-800 dark:text-neutral-300/85">
        {tocs.map(({ href, level, text }) => (
          <Link
            key={href}
            href={href}
            scroll={false}
            onClick={(e) => handleSmoothScroll(e, href)}
            className={clsx({
              "l2 pb-1 pl-0": level == 2,
              "l3 py-1.5 pl-2 text-sm": level == 3,
              "l4 pl-4 opacity-80": level == 4,
            })}
          >
            {text}
          </Link>
        ))}
      </div>
    </div>
  )
}
