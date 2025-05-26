'use client'
import { Suspense } from "react"
import { iconMap } from "@/settings/icons"
import { Link } from "lib/transition"

import { PageRoutes } from "@/lib/pageroutes"
import { buttonVariants } from "@/components/ui/button"
import Hero from "@/components/ui/hero/hero"
import SplineView from "@/components/ui/splineView/splineView"
import { Card } from "@/components/markdown/card"
import { useRef } from "react"
import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"
gsap.registerPlugin(useGSAP)


const RightIcon = iconMap["arrowRight"]
export default function Home() {
    const container = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    gsap.from(".fade-up", {
      delay: 0.3,
      autoAlpha: 0,
      opacity: 0,
      y: 20,
      duration: 0.3,
      stagger: 0.1,
    }

    )
  })
  return (
    <>
      <section className="flex h-auto grow flex-col items-center justify-center px-2 py-8 sm:min-h-[calc(100dvh-8em)] 2xl:h-[calc(100dvh-8em)]">
        {/* <Hero />
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
          <CardGrid>
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
              className="transition gradient-bg"
              title="View My Work"
              href="https://github.com/saksham1236"
              icon="brush"
              external={true}
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
        </div> */}
        <div className="grid grid-cols-2 md:grid-cols-6 md:grid-row-6 gap-6 w-full fade-up">
          <div className="gradient-bg flex gap-6 flex-col col-span-2 md:col-span-4 justify-between p-6 sm:px-12 sm:py-8 rounded-xl">
            <div className="text-sm sm:text-lg fade-up"><h1>Made by Froto Designs.</h1></div>
            <Hero />
            <Link
              href={`/docs${PageRoutes[0].href}`}
              className={buttonVariants({ class: "px-6 w-fit", size: "lg" })}
            >
              View My Work
              <RightIcon />
            </Link>
          </div>
          <div className="border-2 rounded-xl col-span-2 md:col-span-2 fade-up">
            <SplineView className="flex aspect-square max-h-full" />
          </div>
          <Card
            variant="bg"
            className="transition bg-[url(/images/bb-coin-branding/header.png)] bg-cover bg-center hover:!bg-sky-100 hover:transition dark:hover:!bg-sky-800"
            linkClassName="aspect-square sm:aspect-auto col-span-2 md:row-span-2 fade-up"
            title="Bounce Back Digital Branding"
            titleHidden = {true}
            href="/docs/recent-work/bounce-back-digital-branding"
            image="/images/bb-digital-branding/thumb.png"
          />
          <Card
            variant="bg"
            className="transition bg-[url(/images/bb-digital-branding/thumb.png)] bg-cover bg-center hover:!bg-sky-100 hover:transition dark:hover:!bg-sky-800"
            linkClassName="aspect-square sm:aspect-auto col-span-2 md:col-span-2 md:row-span-2 fade-up"
            title="Bounce Back Digital Branding"
            titleHidden = {true}
            href="/docs/recent-work/bounce-back-digital-branding"
            image="/images/bb-digital-branding/thumb.png"
          />
          <Card
            className="transition bg-blue-600 hover:!bg-sky-100 hover:transition dark:hover:!bg-sky-800"
            linkClassName="col-span-2 md:col-span-2 md:row-span-1 fade-up"
            subtitle="My Art Projects"
            title="Visit My Behance"
            description="UX Design, Motion Design, and Scientific Illustration."
            href="https://www.behance.net/s9tandon"
            external={true}
            icon="behance"
          />
          <Card
            className="transition hover:!bg-purple-200 hover:transition dark:hover:!bg-slate-800"
            linkClassName="col-span-2 md:row-span-1 fade-up"
            subtitle="My Dev Projects"
            title="Visit My Github"
            description="Web Dev, Data Science, and ML projects."
            href="https://github.com/saksham1236"
            external={true}
            icon="github"
          />
        </div>
      </section>
      <Suspense
        fallback={
          <div className="h-96 w-full animate-pulse rounded-lg bg-slate-200 dark:bg-slate-700" />
        }
      />
    </>
  )
}
