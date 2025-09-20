import Image from "next/image"
import { Link } from "lib/transition"

import { Settings } from "@/lib/meta"

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-4">
      <Image
        src={Settings.siteicon}
        alt={`${Settings.title} main logo`}
        width={48}
        height={48}
        loading="lazy"
        decoding="async"
        className="h-12 w-12 object-contain"
      />
      <span className="text-md font-semibold mr-3">{Settings.title}</span>
    </Link>
  )
}
