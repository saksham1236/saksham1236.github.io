"use client"
import { DioraDesignLogoWithText, Emoji } from "../icons/icons"
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
      const text = new SplitType(".headline", {types: "words,chars"})
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
    <div className="flex flex-row flex-wrap w-full gap-2 justify-center items-center md:py-24 !text-white mt-auto mb-auto" ref={headline}>
      <div className="flex flex-col gap-24 md:gap-6 items-center md:items-start">
        <div className="flex flex-col-reverse lg:flex-row w-full justify-between items-center">
           <h1 className="flex invisible greeting fade-up items-center gap-2 text-xl md:text-5xl fade-in-translate-full">Hi I am Saksham.<Emoji className="size-8 md:size-18" emoji="👋" /></h1>
           <DioraDesignLogoWithText className="invisible greeting fade-up w-24 h-auto text-white opacity-50 mb-4"/>
        </div>
        <div className={cn("flex items-center md:items-start text-4xl md:text-8xl leading-tight invisible")}><h2 className="headline text-center md:text-left">Building engaging <b>Experiences</b> <br/>and tools that streamline <br/><b>Design Workflows.</b></h2></div>
      </div>
    </div>
  )
}
