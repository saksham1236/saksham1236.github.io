"use client"
import Link from "next/link"
import clsx from "clsx"
import { useEffect, useState, useRef } from "react"
export type TocProps = {
  tocs: { href: string; level: number; text: string }[]
}
type tocprop = {
  href: string; level: number; text: string
}
import { cn } from "@/lib/utils"
export default function Toc({ tocs }: TocProps) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      const visibleEntry = entries.find((entry) => entry.isIntersecting);
      if (visibleEntry) {
        setActiveId(visibleEntry.target.id);
      }
    };

    observer.current = new IntersectionObserver(handleIntersect, {
      root: null,
      rootMargin: "-20px 0px 0px 0px",
      threshold: 0.1,
    });

    const elements = tocs.map((item:tocprop) =>
      document.getElementById(item.href.slice(1))
    );

    elements.forEach((el) => {
      if (el && observer.current) {
        observer.current.observe(el);
      }
    });

    return () => {
      if (observer.current) {
        elements.forEach((el: HTMLElement | null) => {
          if (el) {
            observer.current!.unobserve(el);
          }
        });
      }
    };
  }, [tocs]);

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
      <div className="flex w-full flex-col gap-3 overflow-y-hidden rounded-4xl bg-card p-6">
        <h3 className="text-lg font-semibold">On this page</h3>
        <div className="link-map flex flex-col overflow-y-auto text-md no-underline">
          {tocs.map(({ href, level, text }) => (
            <Link
              key={href}
              href={href}
              scroll={false}
              onClick={(e) => handleSmoothScroll(e, href)}
              className={cn("flex flex-row items-center gap-2", clsx({
                "l2 py-1 not-last:border-b no-underline saturate-50 text-primary/50": level == 2,
                "l3 py-1 no-underline !text-sm saturate-50 text-primary/50": level == 3,
                "l4 py-1 opacity-80 !text-sm no-underline saturate-50 text-primary/50": level == 4,
                "text-primary/100 font-bold saturate-100": activeId === href.slice(1),
              }))}> 
              {(level === 2 || level === 3 || level ===4) && (
              <hr className={cn("hidden lg:inline-flex shrink-0", level === 2 && "w-0", level === 3 && "w-4 ml-2", level === 4 && "w-8 ml-2")}/>
            )}
              {text}
            </Link>
          ))}
        </div>
      </div>
    )
  }
