import { Link } from "lib/transition"
import { PageRoutes } from "@/lib/pageroutes"
import { buttonVariants } from "@/components/ui/button"
import SplineView from "@/components/ui/splineView/splineView"
import { iconMap } from "@/settings/icons"
import { CardGrid, Card } from "@/components/markdown/card"
import Hero from "@/components/ui/hero/hero"
const RightIcon = iconMap['arrowRight']
export default function Home() {
  return (
    <section className="flex grow h-auto sm:min-h-[calc(100dvh-8em)] 2xl:h-[calc(100dvh-8em)] flex-col items-center justify-center px-2 py-8 text-center">
      <Hero/>
      {/* <p className="text-foreground mb-8 max-w-[600px] sm:text-base">
        A Versatile Designer and Software Developer with a passion for Data Science, bringing over 3 years of experience in UX Design, Motion Design, Scientific Illustration and expertise in Full-Stack Web Development, I help craft innovative digital solutions.
      </p> */}
      <SplineView className="flex grow md:shrink md:grow items-center max-h-full min-h-[300px] w-auto aspect-square  md:aspect-[inherit] md:min-h-0 md:w-full "/>
      <div className="flex items-center gap-5">
        <Link
          href={`/docs${PageRoutes[0].href}`}
          className={buttonVariants({ className: "px-6", size: "lg" })}
        >
          View My Work<RightIcon />
        </Link>
      </div>
      <div className="py-8 float-center">
        <CardGrid>
          <Card
            className="hover:!bg-purple-200 dark:hover:!bg-slate-800 hover:transition transition"
            subtitle="My Dev Projects"
            title="Visit My Github"
            description="Get started with Documents using our quick start installation guide to get your project started."
            href="https://github.com/saksham1236"
            external={true}
            icon="github"
          />
          <Card
            className="hover:!bg-sky-100 dark:hover:!bg-sky-800 hover:transition transition"
            subtitle="My Art Projects"
            title="Visit My Behance"
            description="Australia's leading branding, marketing and web development company."
            href="https://www.behance.net/s9tandon"
            external={true}
            icon="behance"
          />
        </CardGrid>
      </div>
    </section>
  )
}
