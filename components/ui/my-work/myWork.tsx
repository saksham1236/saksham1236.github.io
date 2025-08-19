import Card from "./card";

export default function MyWork() {
    return (
        <div className="flex flex-col gap-6 md:px-16">
            <h2 className="text-3xl md:text-5xl font-medium text-muted">Here are some of my recent projects.</h2>
            <Card 
            title="Bounce Back Coin" 
            image="/images/bb-learning/thumb.png" 
            description="Bounce Back Coin Learning platform, an LMS where users earn crypto via education, manage their crypto portfolios via a wallet dashboard, and access discussion boards/messaging."
            cta = "View Project"
            />
        </div>
    )
}