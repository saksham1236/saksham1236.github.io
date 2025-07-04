"use client"

import React, { useRef } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import SplitType from "split-type"

import styles from "./hero.module.css"

gsap.registerPlugin(useGSAP)

export default function Hero() {
  const container = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const text = new SplitType(".animate", { types: "lines" })
    // Create a timeline for span animations
    const tl = gsap.timeline({})

    tl.to(`.hero`, {
      opacity: 1,
      duration: 0.4,
      ease: "sine",
    })
      .from(text.lines, {
        y: "100%",
        opacity: 0,
        duration: 0.4,
        ease: "sine",
        stagger: 0.1,
        delay: 1,
      })
      .to(`.${styles.red}`, {
        backgroundPosition: "0 0",
        duration: 0.4,
        ease: "sine.inOut",
      })
      .to(`.${styles.blue}`, {
        backgroundPosition: "0 0",
        duration: 0.4,
        ease: "sine.inOut",
      })
      .to(`.${styles.yellow}`, {
        backgroundPosition: "0 0",
        duration: 0.4,
        ease: "sine.inOut",
      })
  })

  return (
    <div className="hero" ref={container}>
      <h2 className="animate text-pretty max-w-320 text-xl sm:text-2xl md:text-3xl lg:text-4xl/12 font-bold">
        I craft engaging experiences through{" "}
        <span
          className={`${styles.hoverText} ${styles.red} hover:text-white dark:hover:text-[#002a69]`}
        >
          UX Design
        </span>
        {" "}specializing in{" "}
        <span
          className={`${styles.hoverText} ${styles.blue} hover:text-white dark:hover:text-[#002a69]`}
        >
          Web Development
        </span>{" "}
        to bring ideas to life, and drive results with a passion for{" "}
        <span
          className={`${styles.hoverText} ${styles.yellow} hover:text-white dark:hover:text-[#002a69]`}
        >
          Data Science
        </span>
        .
      </h2>
    </div>
  )
}
