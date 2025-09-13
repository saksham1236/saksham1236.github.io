"use client";
import * as React from "react";
import { useTheme } from "next-themes";
import { MaterialSymbolsLightModeRounded, MaterialSymbolsDarkModeRounded } from "../ui/icons/icons";
import { Button } from "@/components/ui/button";
export function ModeToggle() {
    const { theme, setTheme } = useTheme();
    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };
    return (<Button variant="outline" size="icon" onClick={toggleTheme} className="size-12 cursor-pointer"><span className="flex flex-col contain-paint relative h-full w-full">
        <MaterialSymbolsLightModeRounded className="absolute top-[20%] left-[20%] size-7 transform-gpu transition-all ease-in-out duration-500 dark:top-[-200%]"/>
        <MaterialSymbolsDarkModeRounded className="absolute top-[200%] left-[20%] transform-gpu size-7 transition-all ease-in-out duration-500 dark:top-[20%]"/>
      </span>
      <span className="sr-only">Toggle theme</span>
    </Button>);
}
