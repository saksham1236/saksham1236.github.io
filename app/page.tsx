"use client"

import Hero from "@/components/ui/hero/hero"
import {
  MaterialSymbolsArrowDownwardAltRounded,
  // MeteoconsStarFill,
} from "@/components/ui/icons/icons"
import MyWork from "@/components/ui/my-work/myWork"
import UnicornView from "@/components/ui/unicornViewer"
import Link from "next/link"
import gsap from 'gsap';
import { useRef } from 'react';
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react";
// import SkillsSpan from "@/components/ui/hero/skillsSpan"
import Emoji from "@/components/ui/emoji"
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
        <div className="flex flex-row flex-wrap gap-4 justify-center items-center text-4xl">
          <h2 className="flex gap-2">Hi I am Saksham.<Emoji emoji="😊" className="inline-flex size-12"/></h2>
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
