import Link from "next/link"
import { GitHubLink, LinkedinLink, Navigations } from "@/settings/navigation"
import { FiGithub, FiLinkedin } from "react-icons/fi"
import { MaterialSymbolsArrowOutwardRounded } from "../ui/icons/icons"
import { buttonVariants } from "@/components/ui/button"
import { SheetClose } from "@/components/ui/sheet"
import Anchor from "@/components/navigation/anchor"
import { Logo } from "@/components/navigation/logo"
import { SheetLeft } from "@/components/navigation/sidebar"
import { ModeToggle } from "@/components/navigation/theme-toggle"
export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 h-20 md:h-24 w-full px-2 md:px-4">
      <div className="mx-auto flex max-w-392 h-full items-center justify-between p-1 sm:p-3 md:gap-2 [&>*]:shadow-xl [&>*]:bg-primary-foreground/65 [&:*]:rounded-full">
        <div className="hidden rounded-full md:flex p-2 pr-4 bg-nav-noise">
          <Logo />
        </div>
        <div className="rounded-full p-2 text-muted-foreground hidden items-center gap-2 md:flex bg-nav-noise">
          <NavMenu />
        </div>
        <div className="flex items-center gap-2 rounded-full p-2 bg-nav-noise">
          <div className="flex gap-2 sm:ml-0">
            {GitHubLink.href && (
              <Link
                href={GitHubLink.href}
                className={buttonVariants({ variant: "outline", size: "icon" })}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View the repository on GitHub"
              >
                <FiGithub className="h-12 w-12" />
              </Link>
            )}
            <Link
              href={LinkedinLink.href}
              className={buttonVariants({ variant: "outline", size: "icon" })}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View my Linkekin"
            >
              <FiLinkedin className="h-[1.1rem] w-[1.1rem]" />
            </Link>
            <ModeToggle />
          </div>
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
            className="hover:bg-hover-b flex items-center gap-1 rounded-full py-3 px-4 text-md transition-all"
            href={item.href}
            target={item.external ? "_blank" : undefined}
            rel={item.external ? "noopener noreferrer" : undefined}
          >
            {item.title}{" "}
            {item.external && (
              <MaterialSymbolsArrowOutwardRounded className="h-4 w-4"/>
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
