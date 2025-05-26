import Link from "next/link"
import { GitHubLink, LinkedinLink } from "@/settings/navigation"
import { FiGithub, FiLinkedin } from "react-icons/fi"

import { cn } from "@/lib/utils"

export default function RightSideBar() {
  return (
    <div className="flex flex-col gap-3 rounded-lg p-3">
      <h3 className="text-sm font-semibold">Contact Me</h3>
      <div className="flex flex-col gap-2">
        <Link
          href={GitHubLink.href}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "flex items-center text-sm text-neutral-800 no-underline dark:text-neutral-300/85"
          )}
        >
          <FiGithub className="mr-1 inline-block h-4 w-4" /> My Github
        </Link>
        <Link
          href={LinkedinLink.href}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "flex items-center text-sm text-neutral-800 no-underline dark:text-neutral-300/85"
          )}
        >
          <FiLinkedin className="mr-1 inline-block h-4 w-4" /> Visit my Linkedin
        </Link>
      </div>
    </div>
  )
}
