import React from 'react'
import styles from './hero.module.css';

export default function Hero() {
    return (
        <div className="hero">

            <h1 className="font-bold sm:text-md md:text-lg  mb-4">Made by Saksham Tandon.</h1>
            <h2 className="text-3xl/8 sm:text-3xl/8 md:text-6xl/18 mb-8 font-bold px-4 max-w-400">
                I craft engaging experiences through <span className={styles.hoverText}>UX Design</span>, specializing in <span className={styles.hoverText}>Web Development</span> to bring ideas to life, and drive results with a passion for <span className={styles.hoverText}>Data Science.</span>
            </h2>
        </div>
    )
}