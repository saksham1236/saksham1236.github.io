"use client";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { useState } from "react";
import { LuCheck, LuCopy } from "react-icons/lu";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
export default function Copy({ content }) {
    const [isCopied, setIsCopied] = useState(false);
    function handleCopy() {
        return __awaiter(this, void 0, void 0, function* () {
            yield navigator.clipboard.writeText(content);
            setIsCopied(true);
            setTimeout(() => {
                setIsCopied(false);
            }, 2000);
        });
    }
    return (<Button variant="outline" size="icon" onClick={handleCopy} className="!size-8 cursor-pointer">
      <LuCopy className={cn("absolute !size-3.5 transform transition-opacity duration-300", isCopied ? "scale-90 opacity-0" : "scale-100 opacity-100")}/>
      <LuCheck className={cn("absolute !size-3.5 transform transition-opacity duration-300", isCopied ? "scale-100 opacity-100" : "scale-90 opacity-0")}/>
    </Button>);
}
