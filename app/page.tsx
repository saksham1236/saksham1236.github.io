"use client"

import Hero from "@/components/ui/hero/hero"
import {
  MaterialSymbolsArrowDownwardAltRounded,
  MeteoconsStarFill,
} from "@/components/ui/icons/icons"
import MyWork from "@/components/ui/my-work/myWork"
import UnicornView from "@/components/ui/unicornViewer"

export default function Home() {
  return (
    <>
      <div className="sm:min-w-swh flex min-h-[calc(100svh-80px)] flex-col items-center justify-between gap-4 p-3 sm:min-h-[calc(100svh-96px)] sm:gap-8 lg:py-16">
        <div className="absolute top-0 left-0 z-[-1] h-full w-full opacity-50">
          <UnicornView />
        </div>
        <div className="flex flex-row items-center text-2xl font-extrabold md:text-4xl">
          <MeteoconsStarFill className="size-16 md:size-24" />
          <h1>Hi I am Saksham.</h1>
        </div>
        <Hero />
        <div className="text-muted-foreground flex flex-col items-center justify-center text-lg">
          Scroll Down
          <MaterialSymbolsArrowDownwardAltRounded className="animate-out size-8" />
        </div>
      </div>
      <div>
        <MyWork />
      </div>
    </>
  )
}
