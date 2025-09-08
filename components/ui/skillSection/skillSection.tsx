import React, { PropsWithChildren, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
// import Image from 'next/image';
import { Emoji, FluentColorClipboardTextEdit32, FluentColorCode24, FluentColorLightbulbFilament32 } from '../icons/icons';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    type CarouselApi,
} from "@/components/ui/carousel"
import AutoScroll from 'embla-carousel-auto-scroll'

type skillCardProps = PropsWithChildren & {
    className?: string
    text?: string
    src?: string
}
// export function SkillCard({ className, text, src, children }: skillCardProps) {
//     return (
//         <div className={cn("h-full rounded-4xl bg-primary relative contain-paint", className)}>
//             {src && <Image className='w-full h-full object-cover' src={src} alt={text} width={800} height={800} />}
//             {children}
//             {text && <h3 className='bg-nav-noise text-xl absolute rounded-2xl px-4 py-2 top-4 right-4 font-bold flex justify-end'>{text}</h3>}
//         </div>
//     )
// }

export function SkillCard({ className, text, children }: skillCardProps) {
    return (
        <div className={cn("h-full flex grow-0 justify-start items-center rounded-4xl bg-primary-foreground relative contain-paint p-4 gap-4", className)}>
            {children}
            {text && <h3 className='flex justify-center text-2xl font-bold pr-3 whitespace-nowrap'>{text}</h3>}
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
            <CarouselContent className="h-24 rounded-4xl">
                {(Array.isArray(children) ? children : []).map((child, index) => (
                    <CarouselItem
                        className={cn("group h-full cursor-grab min-w-fit shrink grow-0")}
                        key={index}
                    >
                        {child}
                    </CarouselItem>
                ))}
            </CarouselContent>
            <div className="sr-only flex flex-row absolute w-full justify-end px-4 bottom-[16px]">
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
// export default function SkillSection() {
//     return (
//         <div className='flex flex-col gap-6 w-full'>
//             <h2 className="flex items-center gap-4 text-muted text-3xl font-medium md:text-5xl">What I do...<Emoji className="size-12 lg:size-18" emoji="✍️" /></h2>
//             <SkillCarousel>
//                 <SkillCard text="UX Design"><LottiePlayer className="flex h-full w-auto" /></SkillCard>
//                 <SkillCard text="Web Development" />
//                 <SkillCard text="Branding" />
//                 <SkillCard text="Scientific Illustration" />
//                 <SkillCard text="Motion Design" src="/images/skills/motion-design.gif" />
//             </SkillCarousel>
//         </div>
//     )
// }

export default function SkillSection() {
    return (
        <div className='flex flex-col gap-6 w-full'>
            <h2 className="flex items-center gap-4 text-muted text-4xl font-medium md:text-5xl">What I do...<Emoji className="size-12 lg:size-18" emoji="✍️" /></h2>
            <SkillCarousel>
                <SkillCard text="UX/UI Design"><FluentColorClipboardTextEdit32 className='size-16' /></SkillCard>
                <SkillCard text="Web Development"><FluentColorCode24 className='size-16' /></SkillCard>
                <SkillCard text="Branding"><Emoji className='size-16' type="3d" emoji='🎨' /></SkillCard>
                <SkillCard text="Scientific Illustration"><Emoji className='size-16' type="3d" emoji='🧪' /></SkillCard>
                <SkillCard text="Motion Design"><Emoji className='size-16' type="3d" emoji='🎞️' /></SkillCard>
                <SkillCard text="Product Design"><FluentColorLightbulbFilament32 className='size-16'/></SkillCard>
            </SkillCarousel>
        </div>
    )
}