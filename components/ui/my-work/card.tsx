import { PropsWithChildren } from "react"
import { Button } from "../button"
import Image from "next/image"

type cardProps = PropsWithChildren & {
    title: string
    image?: string
    className?: string
    description: string
    imgClassName?: string
    cta?: string
}
export default function Card({ title, image, description, className, imgClassName, cta, children }: cardProps) {
    return (
        <div className="card flex flex-col sm:flex-row border-1 rounded-[48px] p-4 md:p-8 gap-8 sm:gap-12">
            {image && (
                <Image
                    src={image}
                    alt={title}
                    className={`w-full sm:w-1/3 h-full rounded-[32px] aspect-square object-cover ${imgClassName}`}
                    width={300}
                    height={300}
                />
            )}
            <div className="flex flex-col gap-4 w-full sm:w-2/3">

                <h3 className="text-3xl md:text-5xl font-bold">{title}</h3>
                <p className="text-lg text-muted-foreground">{description}</p>
                {cta && (
                    <Button className="w-fit" variant="default">
                        {cta}
                    </Button>
                )}
            </div>
        </div>
    )

}