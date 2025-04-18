import { Link } from "lib/transition"
import { PageRoutes } from "@/lib/pageroutes"
import { buttonVariants } from "@/components/ui/button"
import SplineView from "@/components/ui/splineView/splineView"
import { iconMap } from "@/settings/icons"

const RightIcon = iconMap['arrowRight']
export default function Home() {
  return (
    <section className="flex min-h-[86.5vh] flex-col items-center justify-center px-2 py-8 text-center">
      <h1 className="mb-4 text-4xl font-bold sm:text-7xl">Froto Design</h1>
      <p className="text-foreground mb-8 max-w-[600px] sm:text-base">
        A simple open-source product documentation platform. That&apos;s simple
        to use and easy to customize.
      </p>
      <SplineView></SplineView>
      <div className="flex items-center gap-5">
        <Link
          href={`/docs${PageRoutes[0].href}`}
          className={buttonVariants({className: "px-6", size:"lg" })}
        >
          View My Work<RightIcon/>
        </Link>
      </div>
    </section>
  )
}
