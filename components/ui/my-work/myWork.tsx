"use client"

import { CardGrid } from "@/components/markdown/card"
import gsap from "gsap"
import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import Card from "./card"
import Image from "next/image"

gsap.registerPlugin(useGSAP);

export default function MyWork() {
  const container = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      const elements = document.querySelectorAll(".fade-up-card");
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
    })
  return (
    <div className="flex flex-col gap-6 py-12 md:p-24" ref={container}>
      <h2 id="mywork" className="text-muted text-3xl font-medium md:text-5xl">
        Here are some of my recent projects.
      </h2>
      <CardGrid className="!grid-cols-1">
        <Card
          className="fade-up-card bg-gradient-to-br from-[#06D6A0] to-[#007E5D]"
          title="Bounce Back Coin"
          subtitle="UX Design, EdTech"
          description="Bounce Back Coin Learning platform, an LMS where users earn crypto via education, manage their crypto portfolios via a wallet dashboard, and access discussion boards/messaging."
          cta="View Project"
          link="/docs/recent-work/bounce-back-learning"
        >
          <Image className="w-full h-full lg:object-left" alt="Bounce Back Coin" src="/images/bb-learning/thumb-new.png" width={1200} height={800} />
          <div className="bg-blue-400 w-full h-full p-5">
            <p className="text-lg">This is some cool text</p>
          </div>
          <Image className="w-full h-full" alt="Bounce Back Coin" src="/images/bb-learning/thumb.png" width={300} height={300} />
        </Card>
        <Card
          className="fade-up-card bg-gradient-to-br from-[#63b1ff] to-[#1f7cda]"
          title="Lynk"
          subtitle="UX Design, Product Design"
          description="Lynk is a platform designed to combat social isolation by connecting individuals with local activities and communities."
          cta="View Project"
          link="/docs/recent-work/bounce-back-learning"
        >
          <Image className="w-full h-full lg:object-bottom-left" alt="Bounce Back Coin" src="/images/lynk/thumb-new.png" width={1200} height={800} />
          <Image className="w-full h-full" alt="Bounce Back Coin" src="/images/bb-learning/thumb.png" width={300} height={300} />
        </Card>
        <Card
          className="fade-up-card bg-gradient-to-br from-[#000] to-[#141414]"
          title="Bounce Back Digital"
          subtitle="Branding"
          description="Bounce Back Digital, a digital agency and fintech startup that focuses on providing innovative solutions in the digital space."
          cta="View Project"
          link="/docs/recent-work/bounce-back-learning"
        >
          <Image className="w-full h-full lg:object-top-left" alt="Bounce Back Coin" src="/images/bb-digital-branding/thumb-new.png" width={1200} height={800} />
          <Image className="w-full h-full" alt="Bounce Back Coin" src="/images/bb-learning/thumb.png" width={300} height={300} />
        </Card>
      </CardGrid>
    </div>
  )
}
