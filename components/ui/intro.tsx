import Link from "next/link";
import Image from "next/image";
import { TwemojiMapleLeaf } from "./icons/icons";
export default function Introduction() {
    return (
        <div className="flex gap-16 items-center">
            <Image className="rounded-[48px]" src="/images/about/selfie-2.jpg" alt = "Headshot in sunlight" width={800} height={800}/>
            <h2 className="text-5xl leading-snug"><span className="font-bold">Hi, I’m <Link className="underline hover:text-blue-400 transition-all duration-200" href = "/docs/about">Saksham Tandon</Link></span> — a designer and software engineer based in Canada.<span className="inline-flex items-center"><TwemojiMapleLeaf className="size-10"/></span> <br/> I am proficient in
                User Experience, Web Development, and Scientific Illustration, to create impactful and
                engaging experiences.
            </h2>
        </div>
    )
}