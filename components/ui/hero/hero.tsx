import { MaterialSymbolsArrowUpwardRounded } from "../icons/icons";
import styles from "./hero.module.css";
export default function Hero() {
  return (
    <div className="flex">
      <div className={`text-2xl lg:text-5xl font-extrabold flex flex-col gap-4 lg:gap-6 text-white [&>*]:justify-center [&>*]:items-center [&>*]:flex-wrap sm:dark:[&>*]:mix-blend-screen`}>
        <div className="flex gap-4 lg:gap-6">
          <h2 className={`h-text flex bg-[#00C7A3] px-3 py-4 lg:px-12 lg:py-10.5 grow rounded-full items-center justify-center order-1`}>
            Doodle visions
          </h2>
          <h2 className={`h-text flex bg-[#0095E2] px-3 py-4 lg:px-12 lg:py-10.5 grow rounded-full items-center justify-center order-3 xl:order-2`}>
            Design with passion
          </h2>
          <MaterialSymbolsArrowUpwardRounded className={`flex items-center justify-center rounded-full bg-[#0095E2] p-3 size-16 lg:size-36 rotate-225 order-2 xl:order-3`} />
        </div>
        <div className="flex gap-4 lg:gap-6 grow">
          <h2 className="h-text whitespace-pre-wrap flex border-6 lg:border-10 border-[#F19A26] text-[#F19A26] px-3 py-3 lg:px-12 lg:py-8.5 rounded-full items-center justify-center grow">
            Develop with precision
          </h2>
          <h2 className={`h-text flex px-3 py-4 lg:px-12 lg:py-10.5 rounded-full items-center justify-center grow bg-[#ED602E]`}>
            Deliver impact
          </h2>
        </div>
        <div className="flex flex-row items-center justify-center gap-6">
          <div className="flex grow flex-row-reverse relative [&:>*]:rounded-full flex-2/5">
            <span className="w-full rounded-full bg-[#1C51DD] h-16 lg:h-36" />
            <span className="w-[88.5%] rounded-full bg-[#F3A3AC] absolute right-0 h-16 lg:h-36" />
            <span className="w-[75%] rounded-full bg-[#ED602E] absolute right-0 h-16 lg:h-36" />
            <span className="w-[62.5%] rounded-full bg-[#F19A26] absolute right-0 h-16 lg:h-36" />
            <span className="w-[50%] rounded-full bg-[#00C7A3] absolute right-0 h-16 lg:h-36" />
            <span className="w-[35%] sm:w-[40%] rounded-full bg-[#0095E2] absolute right-0 h-16 lg:h-36" />
            <MaterialSymbolsArrowUpwardRounded className="flex items-center justify-center rounded-full bg-[#262626] dark:bg-[#F6F3EE] p-3 size-16 lg:size-36 rotate-90 dark:text-primary-foreground z-10 absolute right-0" />
          </div>
          <div className="flex grow">
            <h2 className="h-text flex grow bg-[#262626] dark:bg-[#F6F3EE] dark:text-[#262626] px-3 py-4 lg:px-12 lg:py-10.5 rounded-full items-center justify-center hover:bg-[#1C51DD] dark:hover:bg-[#1C51DD] transition-colors duration-300">
              View My Work
            </h2>
            <span className="h-16 lg:h-36 w-12 lg:w-20 rounded-l-full bg-[#00C7A3]" />
            <span className="h-16 lg:h-36 w-12 lg:w-20 rounded-l-full bg-[#C267FE]" />
          </div>
        </div>
      </div>
    </div>
  )
}
