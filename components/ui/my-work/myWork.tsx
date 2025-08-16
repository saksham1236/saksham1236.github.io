import Card from "./card";

export default function MyWork() {
    return (
        <div className="flex flex-col gap-6">
            <h2 className="text-3xl md:text-8xl font-bold">My Work</h2>
            <p className="text-lg">Here are some of my recent projects.</p>
            <Card />
        </div>
    )
}