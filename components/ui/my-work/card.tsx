import { PropsWithChildren } from "react"
import Image from "next/image"

import { Button } from "../button"
import { LineMdArrowRight, LineMdMinus } from "../icons/icons"

type cardProps = PropsWithChildren & {
  title: string
  image?: string
  className?: string
  description: string
  imgClassName?: string
  cta?: string
}
export default function Card({
  title,
  image,
  description,
  className,
  imgClassName,
  cta,
}: cardProps) {
  return (
    <div className={`card flex flex-col gap-8 rounded-[48px] border-1 px-4 py-8 sm:flex-row sm:gap-12 md:p-8 ${className}`}>
      <div className="flex w-full flex-col gap-8 sm:w-1/2 justify-between">
        <div className="flex flex-col gap-8">
          <h3 className="text-3xl font-bold md:text-5xl">{title}</h3>
          <p className="text-muted-foreground text-lg">{description}</p>
        </div>
        {cta && (
          <Button className="w-fit group" variant="default">
            {cta}
            <div className="relative flex flex-row size-6 overflow-clip">
              <LineMdMinus className="absolute size-6 left-[0%] group-hover:left-[100%] transition-all duration-200 ease-in-out"/>
              <LineMdArrowRight className="absolute size-6 left-[-100%] group-hover:left-[0%] transition-all duration-200 ease-in-out" />
            </div>
          </Button>
        )}
      </div>
      {image && (
        <Image
          src={image}
          alt={title}
          className={`aspect-16/9 h-full w-full rounded-[32px] object-cover sm:w-1/2 ${imgClassName}`}
          width={300}
          height={300}
        />
      )}
    </div>
  )
}
