import { useRef, useState } from "react"
import gsap from 'gsap'
import { useGSAP } from "@gsap/react"
import SplitType from 'split-type'
type skillsSpanProps = {
    className?: string
}
import { cn } from "@/lib/utils"

gsap.registerPlugin(useGSAP);

export default function SkillsSpan({ className }: skillsSpanProps) {
    const words = ["These are word", "Another Word", "Hello World"]
    const [word, setWord] = useState(words[0])
    const container = useRef<HTMLDivElement>(null);
    const index = 0
    useGSAP(()=> {
        const tl = gsap.timeline({repeat: -1})
        let text = new SplitType("#skillSpan", {types: "chars"})
        tl.from(
            text.chars, {
                opacity: 0,
                y: 20,
                duration: 0.5,
                stagger: {amount: 0.2},
            }
        ).to(
            "#skillSpan", {
                onStart: () => {
                    console.log(word, index)
                    setWord("Word")
                    text = new SplitType("#skillSpan", {types: "chars"})
                }
            }
        )
    })
    return (
        <span id = "skillSpan" className={cn(className)} ref={container}>{word}</span>
    )
}