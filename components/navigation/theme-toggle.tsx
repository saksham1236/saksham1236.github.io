"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { FluentEmojiSun, FluentEmojiCresentMoon } from "../ui/icons/icons"
import { Button } from "@/components/ui/button"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      className="size-12 cursor-pointer"
    ><span className="flex flex-col contain-paint relative h-full w-full">
        <FluentEmojiSun className="absolute top-[25%] left-[25%] size-6 transform-gpu transition-all ease-in-out duration-500 dark:top-[-200%]" />
        <FluentEmojiCresentMoon className="absolute top-[200%] left-[25%] transform-gpu size-6 transition-all ease-in-out duration-500 dark:top-[25%]" />
      </span>
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
