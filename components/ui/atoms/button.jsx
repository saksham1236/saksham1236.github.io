import Link from "next/link";
import { Button as ButtonPrim } from "../button";
import { LineMdArrowRight, LineMdMinus } from "../icons/icons";
import { cn } from "@/lib/utils";
export function Button({ children, href, className }) {
    if (href) {
        return (<Link href={href}>
                <ButtonPrim className={cn("w-full lg:w-fit group cursor-pointer", className)} variant="default">
                    {children}
                    <div className="relative flex flex-row size-6 overflow-clip">
                        <LineMdMinus className="absolute size-6 left-[0%] group-hover:left-[100%] transition-all duration-200 ease-in-out"/>
                        <LineMdArrowRight className="absolute size-6 left-[-100%] group-hover:left-[0%] transition-all duration-200 ease-in-out"/>
                    </div>
                </ButtonPrim>
            </Link>);
    }
    else {
        return (<ButtonPrim className={cn("w-full lg:w-fit group cursor-pointer", className)} variant="default">
                {children}
                <div className="relative flex flex-row size-6 overflow-clip">
                    <LineMdMinus className="absolute size-6 left-[0%] group-hover:left-[100%] transition-all duration-200 ease-in-out"/>
                    <LineMdArrowRight className="absolute size-6 left-[-100%] group-hover:left-[0%] transition-all duration-200 ease-in-out"/>
                </div>
            </ButtonPrim>);
    }
}
