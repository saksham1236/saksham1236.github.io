import Link from 'next/link'
import { Button } from '../atoms/button'
import { Button as PrimButton } from '../button'
import { DeviconPlainNextjs, Emoji, RiBehanceFill, RiGithubFill, RiLinkedinFill, SimpleIconsGsap, VscodeIconsFileTypeShadcn } from '../icons/icons'
import { UnicornContact } from '../unicornViewer'
export default function ContactForm() {
    return (
        <>
            <div className="dark contact-bg relative md:items-start flex flex-col gap-6 form contain-paint p-6 md:p-16 md:pt-8 rounded-[48px]">
                <div className='hidden md:flex items-center justify-center gap-4 text-white/50 grow'>
                    <span>Built with</span>
                    <span className='flex items-center gap-1'><DeviconPlainNextjs className='size-6' />Next.js</span>
                    <span className='flex items-center gap-1'><SimpleIconsGsap className='size-12' /></span>
                    <span className='flex items-center gap-1'><VscodeIconsFileTypeShadcn className='size-6' />Shadcn/UI</span>
                </div>
                <div className='!text-white hidden gap-4 md:flex md:flex-col'>
                    <h2 className="flex items-center gap-4 text-3xl font-medium md:text-5xl leading-snug">Let’s Work Together on</h2><h2 className='-mt-8 flex items-center gap-4 text-3xl font-medium md:text-5xl leading-relaxed md:leading-snug'>Something Great<Emoji className="size-12 lg:size-18" emoji="🤙" /></h2>
                </div>
                <div className='!text-white  flex flex-col gap-4 md:hidden'>
                    <Emoji className="size-12 lg:size-18" emoji="🤙" />
                    <h2 className="flex items-center gap-4 text-3xl font-medium md:text-5xl leading-snug">Let’s Work Together on Something Great</h2>
                </div>
                <div className='flex flex-col md:flex-row gap-6'>
                    <Button href="mailto:s9tandon@uwaterloo.ca">Contact Me</Button>
                    <div className='hidden md:flex gap-4'>
                        <Link className='cursor-pointer' href="https://www.linkedin.com/in/s9tandon/"><PrimButton className="!px-4 text-white bg-sky-400 hover:bg-sky-600" variant={"secondary"}><RiLinkedinFill className='size-8' /></PrimButton></Link>
                        <Link className='cursor-pointer' href="https://www.behance.net/s9tandon"><PrimButton className="!px-4 text-white bg-blue-500" variant={"secondary"}><RiBehanceFill className='size-8' /></PrimButton></Link>
                        <Link className='cursor-pointer' href="https://github.com/saksham1236"><PrimButton className="!px-3 text-white bg-black" variant={"secondary"}><RiGithubFill className='size-10' /></PrimButton></Link>
                    </div>
                </div>
                <div className="unicorn absolute top-0 left-0 z-[-1] h-full w-full mix-blend-screen">
                    <UnicornContact />
                </div>
            </div>
            <div className='flex md:hidden items-center justify-center gap-4 pt-8 text-white/50 grow'>
                <span>Built with</span>
                <span className='flex items-center gap-1'><DeviconPlainNextjs className='size-6' />Next.js</span>
                <span className='flex items-center gap-1'><SimpleIconsGsap className='size-12' /></span>
                <span className='flex items-center gap-1'><VscodeIconsFileTypeShadcn className='size-6' />Shadcn/UI</span>
            </div>
        </>
    )
}