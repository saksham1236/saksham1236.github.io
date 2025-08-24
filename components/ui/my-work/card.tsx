import { useState, useEffect } from "react"
import { Button } from "../button"
import { LineMdArrowRight, LineMdMinus } from "../icons/icons"
import { cn } from "@/lib/utils"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import Link from "next/link"
import Autoplay from "embla-carousel-autoplay"

type cardProps = {
  title: string
  subtitle?: string
  className?: string
  description: string
  imgClassName?: string
  cta?: string
  link: string
  children?: React.ReactNode[]
}
export default function Card({
  title,
  subtitle,
  description,
  className,
  cta,
  link,
  children
}: cardProps) {

  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!api) {
      return
    }
    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
      api.plugins().autoplay.reset();
    })
  }, [api])

  return (
    <div className={`card lg:h-120 flex flex-col-reverse gap-4 rounded-[48px] border-1 p-6 lg:flex-row lg:gap-12 lg:p-0 contain-paint ${className}`}>
      <div className="flex w-full flex-col gap-4 lg:gap-8 lg:w-1/3 justify-center lg:pl-16">
        <div className="flex flex-col gap-4 lg:gap-8">
          <div className="flex flex-col gap-2">
            <h2 className="text-md lg:text-lg font-bold text-primary opacity-75">{subtitle}</h2>
            <h3 className="text-3xl lg:text-4xl font-bold">{title}</h3>
          </div>
          <p className="text-lg opacity-85">{description}</p>
        </div>
        {cta && (
          <Link href={link}>
            <Button className="w-fit group cursor-pointer" variant="default">
              {cta}
              <div className="relative flex flex-row size-6 overflow-clip">
                <LineMdMinus className="absolute size-6 left-[0%] group-hover:left-[100%] transition-all duration-200 ease-in-out" />
                <LineMdArrowRight className="absolute size-6 left-[-100%] group-hover:left-[0%] transition-all duration-200 ease-in-out" />
              </div>
            </Button>
          </Link>
        )}
      </div>
      <div className="flex aspect-auto lg:aspect-none lg:h-full flex-grow items-center justify-center carousel lg:w-1/3">
        {(children?? []).length === 1 ? (
          <div className="h-full w-full rounded-4xl contain-paint">
            {children}
          </div>
        ) : (
          < Carousel
          className="carousel aspect-3/2 lg:aspect-auto lg:h-full"
        setApi={setApi}
        plugins={[
          Autoplay({
            delay: 6000,
            stopOnMouseEnter: true,
            stopOnInteraction: false,
          }),
        ]}
        >
        <CarouselContent className="h-full rounded-4xl">
          {(children ?? []).map((child, index) => (
            <CarouselItem
              className={cn("transition-all duration-700 ease h-full cursor-grab", index == 0 ? "lg:basis-1/1" : "lg:basis-4/5")}
              key={index}
            >
              <div className="h-full w-full rounded-4xl contain-paint">
                {child}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex flex-row absolute w-full justify-end px-4 bottom-[16px]">
          <div className=" flex items-center gap-2 p-2 bg-nav-noise rounded-full contain-paint shadow-lg">
            <CarouselPrevious className="hidden lg:flex size-8" />
            {Array.from({ length: count }).map((_, index) => (
              <button
                key={index}
                onClick={() => (api?.scrollTo(index))}
                className={cn("size-2 rounded-full bg-primary/50 transition-all duration-150 ease-in-out", {
                  "bg-primary !w-8": current === index + 1,
                })}
              />
            ))}
            <CarouselNext className="hidden lg:flex size-8" />
          </div>
        </div>
      </Carousel>
        )
        }
    </div>
    </div >
  )
}
