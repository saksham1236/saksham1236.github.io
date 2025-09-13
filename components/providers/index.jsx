import React from "react";
import { ViewTransitions } from "@/lib/transition";
import { ThemeProvider } from "@/components/providers/theme";
export const Providers = ({ children, }) => {
    return (<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <ViewTransitions>{children}</ViewTransitions>
    </ThemeProvider>);
};
