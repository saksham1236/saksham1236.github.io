import { Icon } from "@iconify/react";
import { MaterialSymbolsArrowUpwardRounded } from "../icons/icons";
export default function Hero() {
  return (
    <div className="flex">
      <div className="text-6xl font-extrabold flex flex-col gap-6 text-white [&>*]:h-36 [&>*]:justify-center [&>*]:items-center">
        <div className="flex gap-6">
          <div className="flex bg-[#00C7A3] px-12 py-10.5 grow rounded-full items-center justify-center">
            Doodle visions
          </div>
          <div className="flex bg-[#0095E2] px-12 py-10.5 grow rounded-full items-center justify-center">
          Design with Passion
          </div>
          <MaterialSymbolsArrowUpwardRounded className="flex items-center justify-center rounded-full bg-[#0095E2] p-3 size-36 rotate-225" />
        </div>
        <div className="flex gap-6 grow">
          <div className="flex border-10 border-[#F19A26] text-[#F19A26] h-36 px-12 py-8.5 rounded-full items-center justify-center grow">
            Develop with precision
          </div>
          <div className="flex bg-[#ED602E] px-12 py-10.5 rounded-full items-center justify-center grow">
            Deliver impact
          </div>
        </div>
        <div className="flex flex-row items-center justify-center gap-6">
          <div className="flex grow flex-row-reverse relative [&:*]:h-36 [&:>*]:rounded-full flex-2/5">
            <span className="w-full rounded-full bg-[#1C51DD] h-36" />
            <span className="w-[88.5%] rounded-full bg-[#F3A3AC] absolute right-0 h-36" />
            <span className="w-[75%] rounded-full bg-[#ED602E] absolute right-0 h-36" />
            <span className="w-[62.5%] rounded-full bg-[#F19A26] absolute right-0 h-36" />
            <span className="w-[50%] rounded-full bg-[#00C7A3] absolute right-0 h-36" />
            <span className="w-[37.5%] rounded-full bg-[#0095E2] absolute right-0 h-36" />
            <MaterialSymbolsArrowUpwardRounded className="flex items-center justify-center rounded-full bg-[#262626] dark:bg-[#F6F3EE] p-3 size-36 rotate-90 dark:text-primary-foreground z-10 absolute right-0" />
          </div>
          <div className="flex grow">
            <div className="flex grow bg-[#262626] dark:bg-[#F6F3EE] dark:text-[#262626] px-12 py-10.5 rounded-full items-center justify-center hover:bg-[#1C51DD] dark:hover:bg-[#1C51DD] transition-colors duration-300">
              View My Work
            </div>
            <span className="h-36 w-20 rounded-l-full bg-[#00C7A3]" />
            <span className="h-36 w-20 rounded-l-full bg-[#C267FE]" />
          </div>
        </div>
      </div>
    </div>
  )
}
