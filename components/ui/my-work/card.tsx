import { Button } from "../button"
import { LineMdArrowRight, LineMdMinus } from "../icons/icons"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"



type cardProps = {
  title: string
  className?: string
  description: string
  imgClassName?: string
  cta?: string
  children?: React.ReactNode[]
}
export default function Card({
  title,
  description,
  className,
  cta,
  children
}: cardProps) {
  return (
    <div className={`card h-120 flex flex-col-reverse gap-8 rounded-[48px] border-1 px-4 py-8 sm:flex-row sm:gap-12 md:p-8 ${className}`}>
      <div className="flex w-full flex-col gap-8 sm:w-1/4 justify-center">
        <div className="flex flex-col gap-8">
          <h3 className="text-4xl font-bold">{title}</h3>
          <p className="text-muted-foreground text-lg">{description}</p>
        </div>
        {cta && (
          <Button className="w-fit group" variant="default">
            {cta}
            <div className="relative flex flex-row size-6 overflow-clip">
              <LineMdMinus className="absolute size-6 left-[0%] group-hover:left-[100%] transition-all duration-200 ease-in-out" />
              <LineMdArrowRight className="absolute size-6 left-[-100%] group-hover:left-[0%] transition-all duration-200 ease-in-out" />
            </div>
          </Button>
        )}
      </div>
      <div className="flex flex-grow items-center justify-center carousel w-2/3">
        <Carousel
          className="cursor-grab h-full">
          <CarouselContent className="h-full rounded-4xl">
            {(children ?? []).map((child, index) => (
              <CarouselItem className="h-full sm:basis-3/4 " key={index}>
                <div className="h-full w-full rounded-4xl contain-paint">
                  {child}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="absolute flex rounded-full p-2 gap-2 bottom-[16px] left-[16px] bg-nav-noise">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>
      </div>
    </div>
  )
}
