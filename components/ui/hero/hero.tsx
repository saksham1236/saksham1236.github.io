"use client"
import { DioraDesignLogo, Emoji } from "../icons/icons"
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
      gsap.set(".headline", { visibility: "visible" });
      gsap.set(".greeting", {visibility: "visible"});
      const text = new SplitType(".headline", {types: "chars"})
      gsap.set(text.chars, {y: "100%", opacity: 0, autoAlpha: 0,})
      gsap.to(text.chars,
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
    <div className="flex flex-row flex-wrap w-full gap-2 justify-center items-center md:py-24 !text-white" ref={headline}>
      <div className="flex flex-col gap-12 md:gap-6 items-center md:items-start">
        <DioraDesignLogo className="invisible greeting fade-up w-32 h-auto text-white opacity-50 mb-4"/>
        <h1 className="flex invisible greeting fade-up items-center gap-2 text-xl md:text-5xl fade-in-translate-full">Hi I am Saksham.<Emoji className="size-12 md:size-18" emoji="👋" /></h1>
        <h2 className={cn("headline text-4xl md:text-8xl leading-tight invisible")}>I build engaging <b>Experiences</b>,<br/>to deliver <b>impact.</b></h2>
      </div>
    </div>
  )
}
