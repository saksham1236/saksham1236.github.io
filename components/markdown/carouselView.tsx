"use client"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi,
} from "@/components/ui/carousel";
import { PropsWithChildren } from "react";
import { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";
export default function CarouselView({ children }: PropsWithChildren) {
    const [api, setApi] = useState<CarouselApi>()
    const [current, setCurrent] = useState(0)
    const [count, setCount] = useState(0)
    const [mountKey, setMountKey] = useState(0)
    const containerRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        if (!api) {
            return
        }
        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap() + 1)
        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1)
        })
    }, [api])

    useEffect(() => {
        const el = containerRef.current
        if (!el) return

        const obs = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // increment key to force remount when entering view
                        setMountKey((k) => k + 1)
                    }
                })
            },
            { threshold: 0.2 }
        )

        obs.observe(el)
        return () => obs.disconnect()
    }, [])
    return (
        <div ref={containerRef} className="flex aspect-auto lg:aspect-none lg:h-full flex-grow items-center justify-center carousel">
            {((Array.isArray(children))) ? (
                < Carousel
                    key={mountKey}
                    className="carousel lg:h-full"
                    setApi={setApi}
                    plugins={[]}
                >
                    <CarouselContent className="h-full rounded-4xl">
                        {(Array.isArray(children) ? children : []).map((child, index) => (
                            <CarouselItem
                                className="not-prose h-full cursor-grab min-w-fit shrink grow-0 pl-3 md:pl-4"
                                key={index}
                            >
                                <div className="h-full rounded-4xl contain-paint">
                                    {child}
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <div className="flex flex-row absolute w-full justify-end px-4 top-[16px]">
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
            ) : (
                <div className="h-full w-full rounded-4xl contain-paint">
                    {children}
                </div>
            )
            }
        </div>
    )
}