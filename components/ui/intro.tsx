import Link from "next/link";
import Image from "next/image";
import { TwemojiMapleLeaf } from "./icons/icons";
export default function Introduction() {
    return (
        <div className="flex flex-col md:flex-row gap-4 lg:gap-16 items-center text-2xl lg:text-5xl leading-snug">
            <div className="flex h-full flex-grow md:basis-1/3">
                <Image className="rounded-[48px] h-full w-auto object-contain" src="/images/about/selfie-2.jpg" alt="Headshot in sunlight" width={800} height={800} />
            </div>
            <div className="flex flex-col gap-4 md:basis-2/3 text-primary/75">
                <h2><span className="font-bold text-primary">Hi, I’m <Link className="underline hover:text-blue-400 transition-all duration-200" href="/docs/about">Saksham Tandon</Link></span> — a designer and software engineer based in Canada.<span className="inline-flex items-center"><TwemojiMapleLeaf className="size-6 lg:size-10" /></span></h2>
                <p>I am proficient in User Experience, Web Development, and Scientific Illustration, to create impactful and
                    engaging experiences.
                </p>
            </div>
        </div>
    )
}