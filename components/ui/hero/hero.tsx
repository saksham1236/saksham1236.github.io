'use client';
import React from 'react';
import styles from './hero.module.css';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import SplitType from 'split-type';

gsap.registerPlugin(useGSAP);

export default function Hero() {
    const container = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const text = new SplitType('.animate', { types: 'lines' });
        // Create a timeline for span animations
        const tl = gsap.timeline({}); // Infinite loop with delay

        tl
            .from(text.lines, {
                y: '100%',
                opacity: 0,
                duration: 0.5,
                ease: 'sine',
                stagger: 0.2,
            })
            .to(`.${styles.red}`, {
                backgroundPosition: "0 0",
                duration: 0.4,
                ease:"sine.inOut",
            })
            .to(`.${styles.blue}`, {
                backgroundPosition: "0 0",
                duration: 0.4,
                ease:"sine.inOut",
            })
            .to(`.${styles.yellow}`, {
                backgroundPosition: "0 0",
                duration: 0.4,
                ease:"sine.inOut",
            })
    });

    return (
        <div className="hero mt-6" ref={container}>
            <h1 className="sm:text-md md:text-lg mb-4 animate">Made by Saksham Tandon.</h1>
            <h2 className="text-4xl/12 2xl:text-5xl/16 mb-8 font-bold max-w-300 animate">
                I craft engaging experiences through{' '}
                <span className={`${styles.hoverText} ${styles.red} hover:text-white dark:hover:text-[#002a69]`}>UX Design</span>, specializing in{' '}
                <span className={`${styles.hoverText} ${styles.blue} hover:text-white dark:hover:text-[#002a69]`}>Web Development</span> to bring ideas to life, and drive results with a passion for{' '}
                <span className={`${styles.hoverText} ${styles.yellow} hover:text-white dark:hover:text-[#002a69]`}>Data Science</span>.
            </h2>
        </div>
    );
}

