"use client"

import { CardGrid } from "@/components/markdown/card"
import gsap from "gsap"
import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import Card from "./card"
import Image from "next/image"
import { Emoji } from "../icons/icons"
import { Button } from "../atoms/button"
import { AutoTextSize } from 'auto-text-size'
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
            start: "top 80%",
          },
          y: 100,
          opacity: 0,
          duration: 0.5,
          stagger: 0.5
        });
      });
    })
  return (
    <div className="flex flex-col gap-6" ref={container}>
      <div className="flex flex-col md:flex-row justify-between">
        <h2 className="flex items-center gap-4 text-muted text-3xl font-medium md:text-5xl">Featured Work<Emoji className="size-12 lg:size-18" emoji="🚀" /></h2>
        <Button href ="/docs/recent-work" className="hidden md:flex bg-transparent hover:bg-transparent text-primary">View all my Work</Button>
      </div>
      <CardGrid className="!grid-cols-1">
        <Card
          className="fade-up-card bg-gradient-to-br from-[#06D6A0] to-[#007E5D]"
          title="Bounce Back Learning App"
          subtitle="UX Design, EdTech"
          description="Learning, earning, managing, and connecting, all in one crypto-powered platform."
          cta="View Project"
          link="/docs/recent-work/bounce-back-learning"
        >
          <Image className="w-full h-full lg:object-left" alt="Bounce Back Coin" src="/images/bb-learning/thumb-new.png" width={1200} height={800} />
          <div className="w-full h-full flex flex-col gap-4 p-4 md:p-12 bg-card/50 overflow-y-auto
          "><h2 className="text-xl md:text-3xl font-bold">Summary</h2><AutoTextSize className="h-full" mode="box">Bounce Back Learning was an experimental LMS that blended education with crypto rewards, letting users earn coins through courses and quizzes, manage portfolios with a wallet dashboard, and engage in peer discussions. I led UX/UI design, building a reusable component library, shaping the visual system, and refining features under tight deadlines. The final product combined learning, earning, and community tools into one platform, teaching me how to balance complexity, collaborate effectively, and prioritize features.</AutoTextSize></div>
        </Card>
        <Card
          className="fade-up-card bg-gradient-to-br from-[#63b1ff] to-[#1f7cda]"
          title="Lynk"
          subtitle="UX Design, Product Design"
          description="Lynk connects people with local activities and communities to fight social isolation."
          cta="View Project"
          link="/docs/recent-work/lynk"
        >
          <Image className="w-full h-full lg:object-bottom-left" alt="Bounce Back Coin" src="/images/lynk/thumb-new.png" width={1200} height={800} />
        </Card>
        <Card
          className="fade-up-card bg-gradient-to-br from-[#000] to-[#141414]"
          title="Bounce Back Digital"
          subtitle="Branding"
          description="Bounce Back Digital, a digital agency and fintech startup that focuses on providing innovative solutions in the digital space."
          cta="View Project"
          link="/docs/recent-work/bounce-back-digital-branding"
          dark
        >
          <Image className="w-full h-full lg:object-top-left" alt="Bounce Back Coin" src="/images/bb-digital-branding/thumb-new.png" width={1200} height={800} />
        </Card>
        <Button href ="/docs/recent-work" className="flex md:hidden p-0 bg-transparent hover:bg-transparent text-primary">View all my Work</Button>
      </CardGrid>
    </div>
  )
}
