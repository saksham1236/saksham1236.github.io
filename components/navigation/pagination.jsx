import { Link } from "lib/transition";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import { getPreviousNext } from "@/lib/markdown";
export default function Pagination({ pathname }) {
    const res = getPreviousNext(pathname);
    return (<div className="flex flex-col flex-wrap items-center !justify-between py-5 sm:flex-row sm:py-7">
      {res.prev && (<Link className="border-input hover:bg-accent hover:text-accent-foreground focus-visible:ring-ring mb-3 inline-flex h-9 w-full grow items-center justify-center rounded-full border px-4 py-2 text-sm font-medium whitespace-nowrap !no-underline transition-colors focus-visible:ring-1 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 sm:mb-0 sm:w-auto sm:grow-0" href={`/docs${res.prev.href}`}>
          <LuChevronLeft className="mr-1 h-[1rem] w-[1rem]"/>
          <p className="w-fit truncate !text-sm">{res.prev.title}</p>
        </Link>)}
      {res.next && (<Link className="border-input hover:bg-accent hover:text-accent-foreground focus-visible:ring-ring ml-auto inline-flex h-9 w-full grow items-center justify-center rounded-full border px-4 py-2 text-sm font-medium whitespace-nowrap !no-underline transition-colors focus-visible:ring-1 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 sm:w-auto sm:grow-0" href={`/docs${res.next.href}`}>
          <p className="w-fit truncate !text-sm">{res.next.title}</p>
          <LuChevronRight className="ml-1 h-[1rem] w-[1rem]"/>
        </Link>)}
    </div>);
}
