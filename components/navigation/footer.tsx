import Image from "next/image"
import Link from "next/link"
import { Company } from "@/lib/meta"
import { iconMap } from "@/settings/icons"

const ExtIcon = iconMap["arrowUpRight"]

export function Footer() {

  return (
    <footer className="h-16 w-full border-t">
      <div className="text-muted-foreground flex h-full w-full flex-wrap items-center justify-center gap-4 px-2 py-3 text-sm sm:justify-between sm:gap-0 sm:px-4 sm:py-0 lg:px-8">
        <p className="text-center flex-basis-0">
          {new Date().getFullYear()}{" "}
          <Link className="font-semibold" href={Company.link}>
            {Company.name}
          </Link>
          .
        </p>
        <p className="text-center">Bored? try <Link className="font-semibold text-amber-400 inline-flex items-center gap-1" target="_blank"
          rel="noopener noreferrer" href="https://saksham1236.github.io/pacman/">Pacman<ExtIcon /></Link></p>
        {Company.branding !== false && (
          <div className="hidden text-center md:block">
            <Image
              src="/icon.png"
              alt="Froto Design Logo"
              width={30}
              height={30}
            />
          </div>
        )}
      </div>
    </footer>
  )
}
