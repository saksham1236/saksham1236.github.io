import Hero from "@/components/ui/hero/hero";
import { LineMdChevronSmallTripleDown, SvgSpinnersPulseRing } from "@/components/ui/icons/icons";
import MyWork from "@/components/ui/my-work/myWork";
import { MeteoconsStarFill } from "@/components/ui/icons/icons";
export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center p-2 lg:py-16 gap-4 md:gap-8 sm:min-h-[calc(100svh-96px)] sm:min-w-swh">
        <div className="text-2xl md:text-4xl font-extrabold flex flex-row items-center">
          <MeteoconsStarFill className="size-16 md:size-24"/><h1>Hi I am Saksham.</h1>
        </div>
        <Hero />
        <div className="flex flex-col items-center justify-center text-lg xl:mt-32 text-muted-foreground">
          Scroll Down
          <LineMdChevronSmallTripleDown className="size-8" />
        </div>
      </div>
      <div>
        <MyWork />
      </div>
    </>
  )
}
