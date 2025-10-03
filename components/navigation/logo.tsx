import Image from "next/image"
import { Link } from "lib/transition"
import { Settings } from "@/lib/meta"
import { LineMdArrowRight } from "../ui/icons/icons"
export function Logo() {
  return (
    <Link href="/" className="group flex items-center gap-4 transition-all">
      <Image
        src={Settings.siteicon}
        alt={`${Settings.title} main logo`}
        width={48}
        height={48}
        loading="lazy"
        decoding="async"
        className="h-12 w-12 object-contain"
      />
      <span className="relative flex text-md font-bold mr-3 flex-col h-6 w-fit overflow-clip">
        <span className="relative top-0 left-0 group-hover:top-[-100%] transition-all group-hover:transition-all duration-300">{Settings.title}</span>
        <span className="absolute top-[100%] left-0 group-hover:top-0 transition-all group-hover:transition-all duration-300 flex gap-2">Home<LineMdArrowRight className="size-6"/></span>
      </span>
    </Link>
  )
}
