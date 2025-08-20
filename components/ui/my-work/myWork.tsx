import { CardGrid } from "@/components/markdown/card"

import Card from "./card"

export default function MyWork() {
  return (
    <div className="flex flex-col gap-6 py-12 md:p-24">
      <h2 id="mywork" className="text-muted text-3xl font-medium md:text-5xl">
        Here are some of my recent projects.
      </h2>
      <CardGrid className="!grid-cols-1">
        <Card
          title="Bounce Back Coin"
          image="/images/bb-learning/thumb.png"
          description="Bounce Back Coin Learning platform, an LMS where users earn crypto via education, manage their crypto portfolios via a wallet dashboard, and access discussion boards/messaging."
          cta="View Project"
        />
        <Card
          title="Bounce Back Coin"
          image="/images/bb-learning/thumb.png"
          description="Bounce Back Coin Learning platform, an LMS where users earn crypto via education, manage their crypto portfolios via a wallet dashboard, and access discussion boards/messaging."
          cta="View Project"
        />
        <Card
          title="Bounce Back Coin"
          image="/images/bb-learning/thumb.png"
          description="Bounce Back Coin Learning platform, an LMS where users earn crypto via education, manage their crypto portfolios via a wallet dashboard, and access discussion boards/messaging."
          cta="View Project"
        />
      </CardGrid>
    </div>
  )
}
