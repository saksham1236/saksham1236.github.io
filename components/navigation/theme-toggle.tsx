"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { MaterialSymbolsDarkModeRounded, MaterialSymbolsLightModeRounded } from "../ui/icons/icons"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
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
      className={cn("size-12 cursor-pointer flex items-center justify-center")}
    >
      {theme === "dark" ? (<MaterialSymbolsDarkModeRounded className="absolut size-6 scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />): 
      <MaterialSymbolsLightModeRounded className="size-6 scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />}
      
      
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
