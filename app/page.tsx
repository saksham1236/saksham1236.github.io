"use client"

import Hero from "@/components/ui/hero/hero"
import {
  MaterialSymbolsArrowDownwardAltRounded,
  MeteoconsStarFill,
} from "@/components/ui/icons/icons"
import MyWork from "@/components/ui/my-work/myWork"
import UnicornView from "@/components/ui/unicornViewer"
import Link from "next/link"
import gsap from 'gsap';
import { useRef } from 'react';
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react";
// import SkillsSpan from "@/components/ui/hero/skillsSpan"

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Home() {
  const main = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      gsap.to(".unicorn", {
        scrollTrigger: {
          trigger: ".myWork",
          toggleActions: "play reverse play reverse"
        },
        opacity: 0,
        duration: 0.5,
      })
    }
  )
  return (
    <>
      <div className="sm:min-w-swh flex min-h-[calc(100svh-80px)] flex-col items-center justify-around gap-4 sm:min-h-[calc(100svh-96px)] sm:gap-8 lg:pt-4 lg:pb-8 mb-16" ref={main}>
        <div className="unicorn absolute top-0 left-0 z-[-1] h-[100svh] w-[99dvw] opacity-50">
          <UnicornView />
        </div>
        <div className="header flex flex-row items-center text-2xl font-extrabold md:text-4xl">
          <MeteoconsStarFill className="size-16 md:size-24" />
          <h1>Hi I am Saksham.</h1>
        </div>
        <Hero />
        <Link href="#mywork">
          <div className="text-muted-foreground flex flex-col items-center justify-center text-lg">
            Scroll Down
            <MaterialSymbolsArrowDownwardAltRounded className="animate-out size-8" />
          </div>
        </Link>
      </div>
      <div className="myWork">
        <MyWork />
      </div>
    </>
  )
}
