import { cn } from "@/lib/utils";
export function Typography({ children, className }) {
    return <div className={cn("typography", className)}>{children}</div>;
}
