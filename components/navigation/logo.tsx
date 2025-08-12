import Image from "next/image"
import { Link } from "lib/transition"

import { Settings } from "@/lib/meta"

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2.5">
      <Image
        src={Settings.siteicon}
        alt={`${Settings.title} main logo`}
        width={48}
        height={48}
        loading="lazy"
        decoding="async"
        className="rounded-full h-12 w-12 object-cover"
      />
      <span className="text-md font-semibold">{Settings.title}</span>
    </Link>
  )
}
