import Link from "next/link"
import { GitHubLink, LinkedinLink, Navigations } from "@/settings/navigation"
import { buttonVariants } from "@/components/ui/button"
import { SheetClose } from "@/components/ui/sheet"
import Anchor from "@/components/navigation/anchor"
import { Logo } from "@/components/navigation/logo"
import { SheetLeft } from "@/components/navigation/sidebar"
import { ModeToggle } from "@/components/navigation/theme-toggle"

import {
  MaterialSymbolsArrowOutwardRounded,
  RiGithubFill,
  RiLinkedinFill,
} from "../ui/icons/icons"
import { cn } from "@/lib/utils"

export function Navbar() {
  return (
    <nav className="navbar sticky top-0 z-50 h-20 w-full px-2 md:h-24 md:px-4">
      <div className="gradient-blur h-full w-full absolute top-0 left-0 right-0 bottom-0">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="[&>*]:bg-primary-foreground/65 mx-auto flex h-full max-w-392 items-center justify-between p-1 sm:p-3 md:gap-2 [&:*]:rounded-full [&>*]:shadow-xl">
        <div className="bg-nav-noise flex rounded-full p-1 md:p-2 border hover:scale-110 transition-all ease-[cubic-bezier(0.25,-1.0,0.25,2.0)] duration-300">
          <Logo />
        </div>
        <div className="text-muted-foreground bg-nav-noise hidden items-center gap-2 rounded-full p-2 md:flex border hover:scale-110 transition-all ease-[cubic-bezier(0.25,-1.0,0.25,2.0)] duration-300">
          <NavMenu />
        </div>
        <div className="bg-nav-noise hidden rounded-full md:flex border hover:scale-110 transition-all ease-[cubic-bezier(0.25,-1.0,0.25,2.0)] duration-300">
          <SocialLinks />
        </div>
        <SheetLeft />
      </div>
    </nav>
  )
}

export function NavMenu({ isSheet = false }) {
  return (
    <>
      {Navigations.map((item) => {
        const Comp = (
          <Anchor
            key={item.title + item.href}
            activeClassName="font-bold text-white bg-nav-active"
            absolute
            className="group hover:bg-hover-b text-md flex items-center gap-1 rounded-full px-4 py-3 transition-all"
            href={item.href}
            target={item.external ? "_blank" : undefined}
            rel={item.external ? "noopener noreferrer" : undefined}
          >
            {item.title}{" "}
            {item.external && (
              <div className="flex relative h-4 w-4">
                <MaterialSymbolsArrowOutwardRounded className="absolute h-4 w-4 top-0 right-0 group-hover:top-[-15%] group-hover:right-[-15%] transition-all duration-200 ease-in-out" />
              </div>
            )}
          </Anchor>
        )
        return isSheet ? (
          <SheetClose key={item.title + item.href} asChild>
            {Comp}
          </SheetClose>
        ) : (
          Comp
        )
      })}
    </>
  )
}

export function SocialLinks({ }) {
  return (
    <div className="md:bg-nav-noise flex items-center gap-2 rounded-full md:p-2">
      <div className="flex gap-2 sm:ml-0">
        {GitHubLink.href && (
          <Link
            href={GitHubLink.href}
            className={cn(buttonVariants({ variant: "link", size: "icon" }), "bg-black/100  text-white")}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View the repository on GitHub"
          >
            <RiGithubFill className="size-8" />
          </Link>
        )}
        <Link
          href={LinkedinLink.href}
          className={cn(buttonVariants({ variant: "link", size: "icon" }), "bg-sky-600/100 text-white")}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View my Linkekin"
        >
          <RiLinkedinFill className="size-6" />
        </Link>
        <ModeToggle />
      </div>
    </div>
  )
}
