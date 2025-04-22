import { Link } from "lib/transition"
import { LuChevronLeft, LuChevronRight } from "react-icons/lu"

import { getPreviousNext } from "@/lib/markdown"

export default function Pagination({ pathname }: { pathname: string }) {
  const res = getPreviousNext(pathname)

  return (
    <div className="flex flex-wrap items-center !justify-between py-5 sm:py-7 flex-col sm:flex-row">
        {res.prev && (
          <Link
            className="border-input bg-background hover:bg-accent hover:text-accent-foreground focus-visible:ring-ring inline-flex w-full sm:w-auto grow sm:grow-0 h-9 items-center justify-center rounded-md border px-4 py-2 mb-3 sm:mb-0 text-sm font-medium whitespace-nowrap !no-underline shadow-sm transition-colors focus-visible:ring-1 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
            href={`/docs${res.prev.href}`}
          >
            <LuChevronLeft className="mr-1 h-[1rem] w-[1rem]" />
            <p className="w-fit truncate">{res.prev.title}</p>
          </Link>
        )}
        {res.next && (
          <Link
            className="border-input bg-background hover:bg-accent hover:text-accent-foreground focus-visible:ring-ring ml-auto inline-flex grow w-full sm:w-auto sm:grow-0 h-9 items-center justify-center rounded-md border py-2 px-4 text-sm font-medium whitespace-nowrap !no-underline shadow-sm transition-colors focus-visible:ring-1 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
            href={`/docs${res.next.href}`}
          >
            <p className="w-fit truncate">{res.next.title}</p>
            <LuChevronRight className="ml-1 h-[1rem] w-[1rem]" />
          </Link>
        )}
    </div>
  )
}
