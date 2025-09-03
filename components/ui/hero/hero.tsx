import { Flower_9, Misc_8, Moon_13, Moon_9, Star_8, Triangle_6, Triangle_8, Wheel_5 } from "../icons/icons";
import styles from "./hero.module.css";
import { cn } from "@/lib/utils";
// import Emoji from "../emoji";
export default function Hero() {
  return (
    // <div className="flex">
    //   <div className={`${styles.hero} text-2xl lg:text-5xl font-extrabold flex flex-col gap-4 lg:gap-6 text-white [&>*]:justify-center [&>*]:items-center [&>*]:flex-wrap`}>
    //     <div className="flex gap-4 lg:gap-6">
    //       <h2 className={`h-text flex ${styles.green} px-3 py-4 lg:px-12 lg:py-0.50.5 grow rounded-full items-center justify-center order-1`}>
    //         Doodle visions
    //       </h2>
    //       <h2 className={`h-text flex ${styles.blue} px-3 py-4 lg:px-12 lg:py-0.50.5 grow rounded-full items-center justify-center order-3 xl:order-2`}>
    //         Design with passion
    //       </h2>
    //       <MaterialSymbolsArrowUpwardRounded className={`shadow-bg flex items-center justify-center rounded-full ${styles.blue} p-3 size-16 lg:size-36 rotate-225 order-2 xl:order-3`} />
    //     </div>
    //     <div className="flex gap-4 lg:gap-6 grow">
    //       <h2 className="h-text whitespace-pre-wrap flex border-6 lg:border-10 border-[#F19A26] text-[#F19A26] px-3 py-3 lg:px-12 lg:py-8.5 rounded-full items-center justify-center grow bg-white/40 dark:bg-transparent">
    //         Develop with precision
    //       </h2>
    //       <h2 className={`h-text flex px-3 py-4 lg:px-12 lg:py-0.50.5 rounded-full items-center justify-center grow ${styles.orange}`}>
    //         Deliver impact
    //       </h2>
    //     </div>
    //     <div className="shadow-bg flex flex-row items-center justify-center gap-6">
    //       <div className="flex grow flex-row-reverse relative [&:>*]:rounded-full flex-2/5">
    //         <span className="w-full rounded-full bg-[#1C51DD] h-16 lg:h-36" />
    //         <span className="w-[88.5%] rounded-full bg-[#F3A3AC] absolute right-0 h-16 lg:h-36" />
    //         <span className="w-[75%] rounded-full bg-[#ED602E] absolute right-0 h-16 lg:h-36" />
    //         <span className="w-[62.5%] rounded-full bg-[#F19A26] absolute right-0 h-16 lg:h-36" />
    //         <span className="w-[50%] rounded-full bg-[#00C7A3] absolute right-0 h-16 lg:h-36" />
    //         <span className="w-[35%] sm:w-[40%] rounded-full bg-[#0095E2] absolute right-0 h-16 lg:h-36" />
    //         <span className="bg-[#0095E2]">
    //           <MaterialSymbolsArrowUpwardRounded className={cn("flex items-center justify-center rounded-full bg-[#262626] dark:bg-[#F6F3EE] p-3 size-16 lg:size-36 rotate-90 dark:text-primary-foreground z-10 absolute right-0", styles.white)} />
    //         </span>
    //       </div>
    //       <div className="flex grow shadow-bg">
    //         <Link href="#mywork" className="flex grow">
    //           <h2 className={`${styles.white} h-text flex grow dark:text-[#262626] px-3 py-4 lg:px-12 lg:py-0.50.5 rounded-full items-center justify-center transition-colors duration-300`}>
    //             View My Work
    //           </h2>
    //         </Link>
    //         <span className="h-16 lg:h-36 w-12 lg:w-20 rounded-l-full bg-[#00C7A3]" />
    //         <span className="h-16 lg:h-36 w-12 lg:w-20 rounded-l-full bg-[#C267FE]" />
    //       </div>
    //     </div>
    //   </div>
    // </div>


    <div className="flex flex-row flex-wrap w-full gap-2 justify-center items-center">
      <h1 className="sr-only">Hi I am Saksham. I can help you with Branding, UX Design & Web Development</h1>
      <h2 className="sr-only"> Building enganging experiences, Developing Websites to deliver impact.</h2>
      <div className="flex flex-row flex-wrap items-center justify-start p-0 sm:px-8 md:px-18 text-[28px] sm:text-3xl lg:text-8xl gap-y-2 gap-x-2 lg:gap-x-4">
        <span>Building</span>
        <Star_8 className="size-10 lg:size-34" />
        <span className={cn("text-white italic px-1 py-0.5 lg:px-8 lg:py-4 rounded-full flex flex-grow justify-center", styles.orange)}>Experiences</span>
        <Moon_9 className="size-10 lg:size-32 hue-rotate-180" />
        <span className={cn("text-white px-1 py-0.5 lg:px-8 lg:py-4 rounded-full flex flex-grow justify-center", styles.green)}>Crafting</span>
        <Misc_8 className="size-12 lg:size-38 rotate-90" />
        <Moon_13 className="size-10 lg:size-28" />
        <span>Websites</span><Triangle_6 className="flex lg:hidden size-8 rotate-90" />
        <span className="flex flex-row items-center justify-center gap-2 lg:gap-4">
          <span className="hidden lg:block"><Triangle_8 className="size-28 rotate-90" /></span>
          <span>to Deliver</span>
        </span>
          <Flower_9 className="size-10 lg:size-28" />
          <span className={cn("text-white font-bold  px-1 py-0.5 lg:px-8 lg:py-4 rounded-full flex flex-grow justify-center", styles.blue)}>impact
            </span>
            <Wheel_5 className="size-12 lg:size-32 rotate-25" />
      </div>
    </div>

  )
}


