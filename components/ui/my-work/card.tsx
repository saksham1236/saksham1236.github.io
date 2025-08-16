import { PropsWithChildren } from "react"

type cardProps = PropsWithChildren & {
    title: string
    image?: string
    className?: string
    description?: string
}
export default function Card({title, image, description, className, children}: cardProps) {
    return (
        <div className="card flex flex-col bg-accent rounded-lg p-6 shadow-lg">
        <h3 className="text-5xl">{title}</h3>
        </div>
    )

}