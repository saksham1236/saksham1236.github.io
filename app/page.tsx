import { iconMap } from "@/settings/icons"
import { Link } from "lib/transition"
import { PageRoutes } from "@/lib/pageroutes"
import { buttonVariants } from "@/components/ui/button"
import Hero from "@/components/ui/hero/hero"
import SplineView from "@/components/ui/splineView/splineView"
import { Card, CardGrid } from "@/components/markdown/card"

const RightIcon = iconMap["arrowRight"]
export default function Home() {
  return (
    <section className="flex h-auto grow flex-col items-center justify-center px-2 py-8 text-center sm:min-h-[calc(100dvh-8em)] 2xl:h-[calc(100dvh-8em)]">
      <Hero />
      <SplineView className="flex aspect-square max-h-full min-h-[300px] w-auto grow items-center md:aspect-[inherit] md:min-h-0 md:w-full md:shrink md:grow" />
      <div className="flex items-center gap-5">
        <Link
          href={`/docs${PageRoutes[0].href}`}
          className={buttonVariants({ className: "px-6", size: "lg" })}
        >
          View My Work
          <RightIcon />
        </Link>
      </div>
      <div className="float-center items-center justify-center py-8">
        <CardGrid className="xl:!grid-cols-2">
          <Card
            className="transition hover:!bg-purple-200 hover:transition dark:hover:!bg-slate-800"
            subtitle="My Dev Projects"
            title="Visit My Github"
            description="Web Dev, Data Science, and ML projects."
            href="https://github.com/saksham1236"
            external={true}
            icon="github"
          />
          <Card
            className="transition hover:!bg-sky-100 hover:transition dark:hover:!bg-sky-800"
            subtitle="My Art Projects"
            title="Visit My Behance"
            description="UX Design, Motion Design, and Scientific Illustration."
            href="https://www.behance.net/s9tandon"
            external={true}
            icon="behance"
          />
        </CardGrid>
      </div>
    </section>
  )
}
