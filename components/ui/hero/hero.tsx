import { MaterialSymbolsArrowUpwardRounded } from "../icons/icons";
import styles from "./hero.module.css";
import Link from "next/link";
import { cn } from "@/lib/utils";
export default function Hero() {
  return (
    <div className="flex">
      <div className={`${styles.hero} text-2xl lg:text-5xl font-extrabold flex flex-col gap-4 lg:gap-6 text-white [&>*]:justify-center [&>*]:items-center [&>*]:flex-wrap`}>
        <div className="flex gap-4 lg:gap-6">
          <h2 className={`h-text flex ${styles.green} px-3 py-4 lg:px-12 lg:py-10.5 grow rounded-full items-center justify-center order-1`}>
            Doodle visions
          </h2>
          <h2 className={`h-text flex ${styles.blue} px-3 py-4 lg:px-12 lg:py-10.5 grow rounded-full items-center justify-center order-3 xl:order-2`}>
            Design with passion
          </h2>
          <MaterialSymbolsArrowUpwardRounded className={`shadow-bg flex items-center justify-center rounded-full ${styles.blue} p-3 size-16 lg:size-36 rotate-225 order-2 xl:order-3`} />
        </div>
        <div className="flex gap-4 lg:gap-6 grow">
          <h2 className="h-text whitespace-pre-wrap flex border-6 lg:border-10 border-[#F19A26] text-[#F19A26] px-3 py-3 lg:px-12 lg:py-8.5 rounded-full items-center justify-center grow bg-white/40 dark:bg-transparent">
            Develop with precision
          </h2>
          <h2 className={`h-text flex px-3 py-4 lg:px-12 lg:py-10.5 rounded-full items-center justify-center grow ${styles.orange}`}>
            Deliver impact
          </h2>
        </div>
        <div className="shadow-bg flex flex-row items-center justify-center gap-6">
          <div className="flex grow flex-row-reverse relative [&:>*]:rounded-full flex-2/5">
            <span className="w-full rounded-full bg-[#1C51DD] h-16 lg:h-36" />
            <span className="w-[88.5%] rounded-full bg-[#F3A3AC] absolute right-0 h-16 lg:h-36" />
            <span className="w-[75%] rounded-full bg-[#ED602E] absolute right-0 h-16 lg:h-36" />
            <span className="w-[62.5%] rounded-full bg-[#F19A26] absolute right-0 h-16 lg:h-36" />
            <span className="w-[50%] rounded-full bg-[#00C7A3] absolute right-0 h-16 lg:h-36" />
            <span className="w-[35%] sm:w-[40%] rounded-full bg-[#0095E2] absolute right-0 h-16 lg:h-36" />
            <span className="bg-[#0095E2]">
              <MaterialSymbolsArrowUpwardRounded className={cn("flex items-center justify-center rounded-full bg-[#262626] dark:bg-[#F6F3EE] p-3 size-16 lg:size-36 rotate-90 dark:text-primary-foreground z-10 absolute right-0", styles.white)} />
            </span>
          </div>
          <div className="flex grow shadow-bg">
            <Link href="#mywork" className="flex grow">
              <h2 className={`${styles.white} h-text flex grow dark:text-[#262626] px-3 py-4 lg:px-12 lg:py-10.5 rounded-full items-center justify-center transition-colors duration-300`}>
                View My Work
              </h2>
            </Link>
            <span className="h-16 lg:h-36 w-12 lg:w-20 rounded-l-full bg-[#00C7A3]" />
            <span className="h-16 lg:h-36 w-12 lg:w-20 rounded-l-full bg-[#C267FE]" />
          </div>
        </div>
      </div>
    </div>

  )
}
