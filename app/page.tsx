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
import Introduction from "@/components/ui/intro"
import { Emoji } from "@/components/ui/icons/icons"
import SKillSection from "@/components/ui/skillSection/skillSection"
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

      const elements = document.querySelectorAll(".fade-up");
      elements.forEach(element => {
        gsap.from(element, {
          scrollTrigger: {
            trigger: element,
            start: "top 80%"
          },
          y: 100,
          opacity: 0,
          duration: 0.5,
          stagger: 0.5
        });
      });
    }
  )

  return (
    <>
      <div className="sm:min-w-swh flex min-h-[calc(100svh-80px)] flex-col items-center justify-around gap-2 sm:min-h-[calc(100svh-96px)] sm:gap-8 lg:pt-16 lg:pb-16 mb-16" ref={main}>
        <div className="unicorn absolute top-0 left-0 z-[-1] h-[100svh] w-[99dvw] opacity-50 dark:opacity-25">
          <UnicornView />
        </div>
        <div className="flex flex-row flex-wrap gap-4 justify-center items-center">
          <h2 className="flex items-center gap-2 text-md lg:text-3xl"><Emoji className="size-12 lg:size-18" emoji ="👋"/>Hi I am Saksham.</h2>
        </div>
        <Hero />
        <Link className="group" href="#intro">
          <div className="text-muted-foreground flex flex-col items-center justify-center text-lg">
            Scroll Down
            <MaterialSymbolsArrowDownwardAltRounded className="size-8 group-hover:-translate-y-1 transition-transform" />
          </div>
        </Link>
      </div>
      <main className="flex flex-col gap-24 py-12 md:p-24">
        <div className="intro pt-24 fade-up" id="intro">
          <Introduction />
        </div>
        <div className="skills fade-up">
          <SKillSection />
        </div>
        <div className="myWork">
          <MyWork />
        </div>
      </main>
    </>
  )
}
