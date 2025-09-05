import React, { PropsWithChildren, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { Emoji } from '../icons/icons';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    type CarouselApi,
} from "@/components/ui/carousel"
import AutoScroll from 'embla-carousel-auto-scroll'
import LottiePlayer from '../lottiePlayer/lottiePlayer';

type skillCardProps = PropsWithChildren & {
    className?: string
    text: string
    src?: string
}
export function SkillCard({ className, text, src, children }: skillCardProps) {
    return (
        <div className={cn("h-full rounded-4xl bg-primary relative contain-paint", className)}>
            {src && <Image className='w-full h-full object-cover' src={src} alt={text} width={800} height={800} />}
            {children}
            <h3 className='bg-nav-noise text-xl absolute rounded-2xl px-4 py-2 top-4 right-4 font-bold flex justify-end'>{text}</h3>
        </div>
    )
}
export function SkillCarousel({ children }: PropsWithChildren) {
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
        })
    }, [api])
    return (
        < Carousel
            className="carousel"
            setApi={setApi}
            opts={{
                dragFree: true,
                loop: true
            }}
            plugins={[AutoScroll({
                playOnInit: true,
                stopOnInteraction: false,
                stopOnFocusIn: false,
                startDelay: 100,
            })]}
        >
            <CarouselContent className="h-100 rounded-4xl">
                {(Array.isArray(children) ? children : []).map((child, index) => (
                    <CarouselItem
                        className={cn("h-full cursor-grab basis-3/4 md:basis-1/4")}
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
                    {Array.from({ length: count }).map((_, index) => (
                        <button
                            key={index}
                            onClick={() => (api?.scrollTo(index))}
                            className={cn("size-2 rounded-full bg-primary/50 transition-all duration-150 ease-in-out", {
                                "bg-primary !w-8": current === index + 1,
                            })}
                        />
                    ))}
                </div>
            </div>
        </Carousel>
    )
}
export default function SkillSection() {
    return (
        <div className='flex flex-col gap-6 w-full'>
 <h2 className="flex items-center gap-4 text-muted text-3xl font-medium md:text-5xl">What I do...<Emoji className="size-12 lg:size-18" emoji="✍️" /></h2>
            <SkillCarousel>
                <SkillCard text="UX Design"><LottiePlayer className="flex h-full w-auto"/></SkillCard>
                <SkillCard text="Web Development" />
                <SkillCard text="Branding" />
                <SkillCard text="Scientific Illustration" />
                <SkillCard text="Motion Design" src="/images/skills/motion-design.gif" />
            </SkillCarousel>
        </div>
    )
}