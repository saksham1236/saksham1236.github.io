import Link from "next/link"
import { iconMap } from "@/settings/icons"
import { Company } from "@/lib/meta"
import { DioraDesignLogo } from "../ui/icons/icons"
const ExtIcon = iconMap["arrowUpRight"]

export function Footer() {
  return (
    <footer className="h-16 w-full border-t">
      <div className="text-muted-foreground flex h-full w-full flex-wrap items-center justify-center gap-4 px-2 py-3 text-sm sm:justify-between sm:gap-0 sm:px-4 sm:py-0 lg:px-8">
        <p className="flex-basis-0 text-center">
          {new Date().getFullYear()}{" "}
          <Link className="font-semibold" href={Company.link}>
            {Company.name}
          </Link>
          .
        </p>
        <p className="text-center">
          Bored? try{" "}
          <Link
            className="inline-flex items-center gap-1 font-semibold text-amber-400"
            target="_blank"
            rel="noopener noreferrer"
            href="https://saksham1236.github.io/pacman/"
          >
            Pacman
            <ExtIcon />
          </Link>
        </p>
        {Company.branding !== false && (
          <div className="hidden text-center md:block">
            <DioraDesignLogo
            className="size-16"
            />
          </div>
        )}
      </div>
    </footer>
  )
}
