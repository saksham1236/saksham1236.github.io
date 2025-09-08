import { Emoji } from "../icons/icons";
import { Button } from "../atoms/button"
import Image from "next/image";
export default function MyExperience() {
    return (
        <div className="flex flex-col gap-6 md:gap-12">
            <div className="flex flex-col md:flex-row justify-between">
                <h2 className="flex items-center gap-4 text-muted text-3xl font-medium md:text-5xl">My Design Journey<Emoji className="size-12 lg:size-18" emoji={`🐣`} /></h2>
                <Button href="/docs/recent-work" className="hidden md:flex bg-transparent hover:bg-transparent text-primary">More About Me</Button>
            </div>
            <div className="experience flex flex-col gap-4 md:flex-row pb-8 border-b-1 fade-up">
                <div className="flex flex-col gap-2 md:flex-1/3">
                    <h3 className="text-4xl font-semibold">
                        UX/Web Designer
                    </h3>
                    <h4 className="text-xl text-muted">
                        CDW Canada
                    </h4>
                    <span className="text-xl text-muted">
                        Full-Time | 2022 — Present
                    </span>
                </div>
                <div className="flex flex-col gap-4 text-xl md:text-3xl md:flex-2/3 leading-relaxed md:leading-snug">
                    <p>
                        I specialize in creating responsive webpage layouts for {`CDW.ca’s`} landing pages using Adobe Experience Manager, HubSpot, HTML, CSS, and JavaScript. My strategic approach to content planning and design implementation has driven significant results, including a 193% year-over-year increase in Research Hub article views and a 93% boost in partner showcase page traffic.
                    </p>
                    <p>
                        To further streamline design workflows, I built a Figma plugin that automates layer renaming with tokens and conditional rules. I continue to develop innovative tools to enhance efficiency and collaboration for designers.
                    </p>
                    <Button className="bg-accent/50 hover:bg-accent text-primary" href="https://www.figma.com/community/plugin/1499494471654319987/re-layer">
                        <Image className="rounded-md size-8 mr-3" src="/images/re-layer/icon.png" alt="re-layer-icon" width={200} height={300} />
                        Checkout my Figma Plugin
                    </Button>
                </div>
            </div>
            <div className="experience flex flex-col gap-4 md:flex-row pb-8 border-b-1 fade-up">
                <div className="flex flex-col gap-2 md:flex-1/3">
                    <h3 className="text-4xl font-semibold">
                        UX Designer
                    </h3>
                    <h4 className="text-xl text-muted">
                        Bounce Back Digital
                    </h4>
                    <span className="text-xl text-muted">
                        Full-Time | 2021 — 2022
                    </span>
                </div>
                <div className="flex flex-col gap-4 text-xl md:text-3xl md:flex-2/3 leading-relaxed md:leading-snug">
                    <p>
                        Led UX Design, branding, and visual design efforts for the EdTech and FinTech startup, including the Bounce Back Digital Learning Platform and Bounce Back Coin, establishing a distinct digital brand identity.
                    </p>
                    <p>
                        Created promotional assets and dynamic motion graphics for LinkedIn, Instagram, Twitter, and other platforms.
                    </p>
                </div>
            </div>
            <div className="experience flex flex-col gap-4 md:flex-row fade-up">
                <div className="flex flex-col gap-2 md:flex-1/3">
                    <h3 className="text-4xl font-semibold">
                        Scientific Illustrator
                    </h3>
                    <h4 className="text-xl text-muted">
                        Freelance | 2021 — Present
                    </h4>
                    <h4 className="text-xl text-muted">
                        {`University of Hawai'i`} | 2020 — 2021
                    </h4>
                </div>
                <div className="flex flex-col gap-4 text-xl md:text-3xl md:flex-2/3 leading-relaxed md:leading-snug">
                    <p>
                        Designed scientific illustrations and journal covers enhancing research papers and presentations, including a published cover for the prestigious Biophysical journal..
                    </p>
                </div>
            </div>
        </div>
    )
}