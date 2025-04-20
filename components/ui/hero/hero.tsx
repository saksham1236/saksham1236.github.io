'use client';
import React from 'react'
import styles from './hero.module.css';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP)

export default function Hero() {
    const {contextSafe} = useGSAP();
    const red = useRef<HTMLSpanElement>(null);

    const onEnter = contextSafe(({ currentTarget }: { currentTarget: EventTarget & HTMLElement }) => {
        gsap.to(currentTarget, 
            {
                scrollTrigger: {
                  start: "top 80%",
                  end: "top 30%",
                  scrub: true,
                },
                opacity: 0,
                y: 50,
                duration: 2,
              },
        );
      });
    
    return (
        <div className="hero mt-6">
            <h1 className="sm:text-md md:text-lg  mb-4">Made by Saksham Tandon.</h1>
            <h2 className="text-4xl/12 2xl:text-5xl/16 mb-8 font-bold max-w-300">
                I craft engaging experiences through <span onMouseOver={onEnter} className={`${styles.hoverText} ${styles.red}`}>UX Design</span>, specializing in <span className={styles.hoverText}>Web Development</span> to bring ideas to life, and drive results with a passion for <span className={styles.hoverText}>Data Science.</span>
            </h2>
        </div>
    )
}