"use client"

import Hero from "@/components/ui/hero/hero";
import { MaterialSymbolsArrowDownwardAltRounded } from "@/components/ui/icons/icons";
import MyWork from "@/components/ui/my-work/myWork";
import { MeteoconsStarFill } from "@/components/ui/icons/icons";
import UnicornView from "@/components/ui/unicornViewer";
export default function Home() {
  return (
    <>
      <div className="absolute top-0 left-0 w-full h-full z-[-1] opacity-40 dark:mix-blend-plus-darker">
        <UnicornView />
      </div>
      <div className="flex flex-col items-center justify-center lg:py-16 gap-4 sm:gap-8 min-h-[calc(100svh-80px)] sm:min-h-[calc(100svh-96px)] sm:min-w-swh">
        <div className="text-2xl md:text-4xl font-extrabold flex flex-row items-center">
          <MeteoconsStarFill className="size-16 md:size-24"/><h1>Hi I am Saksham.</h1>
        </div>
        <Hero />
        <div className="flex flex-col items-center justify-center text-lg xl:mt-32 text-muted-foreground">
          Scroll Down
          <MaterialSymbolsArrowDownwardAltRounded className="size-8 animate-out" />
        </div>
      </div>
      <div>
        <MyWork />
      </div>
    </>
  )
}
