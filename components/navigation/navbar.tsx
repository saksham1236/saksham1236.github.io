"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { GitHubLink, LinkedinLink, Navigations } from "@/settings/navigation"
import { FiLinkedin } from "react-icons/fi"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { SheetClose } from "@/components/ui/sheet"
import Anchor from "@/components/navigation/anchor"
import { Logo } from "@/components/navigation/logo"
import { SheetLeft } from "@/components/navigation/sidebar"
import { ModeToggle } from "@/components/navigation/theme-toggle"

import {
  MaterialSymbolsArrowOutwardRounded,
  MdiGithub,
} from "../ui/icons/icons"

export function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      setIsVisible(false); // Hide navbar when scrolling down
    } else {
      setIsVisible(true); // Show navbar when scrolling up
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav id="nav" className={cn("sticky top-0 z-50 h-20 w-full px-2 md:h-24 md:px-4 transition-transform duration-300", isVisible ? "translate-y-0" : "-translate-y-full")}>
      <div className="[&>*]:bg-primary-foreground/65 mx-auto flex h-full max-w-392 items-center justify-between p-1 sm:p-3 md:gap-2 [&:*]:rounded-full [&>*]:shadow-xl">
        <div className="bg-nav-noise flex rounded-full p-2 pr-4">
          <Logo />
        </div>
        <div className="text-muted-foreground bg-nav-noise hidden items-center gap-2 rounded-full p-2 md:flex">
          <NavMenu />
        </div>
        <div className="bg-nav-noise hidden rounded-full md:flex">
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
            className={buttonVariants({ variant: "outline", size: "icon" })}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View the repository on GitHub"
          >
            <MdiGithub className="h-12 w-12" />
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
  )
}
