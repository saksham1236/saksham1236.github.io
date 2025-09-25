import { Paths } from "@/lib/pageroutes"

export const Documents: Paths[] = [
  {
    title: "My Work",
    href: "/recent-work",
    items: [
      {
        title: "Featured Work",
        href: "",
        items: [
          {
            title: "Bounce Back Learning App",
            href: "/bounce-back-learning",
          },
          {
            title: "Lynk",
            href: "/lynk",
            items: [
              {
                title: "Lynk Case Study",
                href: "/lynk-full",
              },
            ],
          },
          {
            title: "Bounce Back Coin Branding",
            href: "/bounce-back-coin-branding",
            items: [
              {
                title: "Bounce Back Coin Full",
                href: "/bounce-back-coin-branding-full",
              },
            ],
          },
          {
            title: "Bounce Back Digital Branding",
            href: "/bounce-back-digital-branding",
          },
          {
            title: "Mind Games",
            href: "/mind-games",
          },
        ],
      },
    ],
  },
  {
    title: "About Me",
    href: "/about",
  },
]
