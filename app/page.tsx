import Hero from "@/components/ui/hero/hero";
import { LineMdChevronSmallTripleDown } from "@/components/ui/icons/icons";
import { Icon } from "@iconify/react";
export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center py-16 gap-12 h-[calc(100svh-96px)] w-swh">
        <div className="text-4xl font-extrabold flex flex-row items-center">
          <Icon icon="meteocons:star-fill" width="96" height="96" className="p-0 m-0" /><h1>Hi I am Saksham.</h1>
        </div>
        <Hero />
        <div className="flex flex-col items-center justify-center text-lg mt-32 animate-pulse text-muted-foreground">
          Scroll Down
          <LineMdChevronSmallTripleDown className="size-8" />
        </div>
      </div>
    </>
  )
}
