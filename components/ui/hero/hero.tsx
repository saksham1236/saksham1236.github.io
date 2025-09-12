"use client"
import { Emoji } from "../icons/icons"
import gsap from 'gsap';
import { useRef } from 'react';
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react";
import SplitType from "split-type"
import { cn } from "@/lib/utils";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Hero() {
  const headline = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      const text = new SplitType(".headline", {types: "chars,lines"})
      gsap.fromTo(text.chars, {
        y: "100%",
        opacity: 0,
      },
      {
        y: "0",
        opacity: 1,
        autoAlpha: 1,
        delay: 1,
        duration: 0.4, 
        ease: "sine",
        stagger: 0.02,
      })
    }
  )
  return (
    <div className="flex flex-row flex-wrap w-full gap-2 justify-center items-start md:py-24 !text-white" ref={headline}>
      <div className="flex flex-col gap-4">
        <h1 className="flex items-center gap-2 text-xl md:text-5xl fade-in-translate-full">Hi I am Saksham.<Emoji className="size-12 md:size-18" emoji="👋" /></h1>
        <h2 className={cn("headline text-4xl md:text-8xl leading-tight")}>I build enganging <b>Experiences</b>,<br/>to deliver <b>impact.</b></h2>
      </div>
    </div>
  )
}


