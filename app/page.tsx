import { Link } from "lib/transition"
import { PageRoutes } from "@/lib/pageroutes"
import { buttonVariants } from "@/components/ui/button"
import SplineView from "@/components/ui/splineView/splineView"
import { iconMap } from "@/settings/icons"
import { CardGrid, Card } from "@/components/markdown/card"
const RightIcon = iconMap['arrowRight']
export default function Home() {
  return (
    <section className="flex h-[calc(100dvh-128px)] flex-col items-center justify-center px-2 py-8 text-center">
      <h1 className="mb-4 text-4xl font-bold sm:text-7xl">Froto Design</h1>
      <p className="text-foreground mb-8 max-w-[600px] sm:text-base">
        A Versatile Designer and Software Developer with a passion for Data Science, bringing over 3 years of experience in UX Design, Motion Design, Scientific Illustration and expertise in Full-Stack Web Development, I help craft innovative digital solutions.
      </p>
      <SplineView className="h-auto"></SplineView>
      <div className="flex items-center gap-5">
        <Link
          href={`/docs${PageRoutes[0].href}`}
          className={buttonVariants({ className: "px-6", size: "lg" })}
        >
          View My Work<RightIcon />
        </Link>
      </div>
      <div className="py-8">
        <CardGrid>
          <Card
            subtitle="My Dev Projects"
            title="Visit My Github"
            description="Get started with Documents using our quick start installation guide to get your project started."
            href="https://github.com/saksham1236"
            external={true}
            icon="github"
          />
          <Card
            subtitle="My Art Projects"
            title="Visit My Behance"
            description="Australia's leading branding, marketing and web development company."
            href="https://www.rubixstudios.com.au/"
            external={true}
            icon="behance"
          />
        </CardGrid>
      </div>
    </section>
  )
}
