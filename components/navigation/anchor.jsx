"use client";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { usePathname } from "next/navigation";
import { Link } from "lib/transition";
import { cn } from "@/lib/utils";
export default function Anchor(_a) {
    var { absolute, className = "", activeClassName = "", disabled, children } = _a, props = __rest(_a, ["absolute", "className", "activeClassName", "disabled", "children"]);
    const path = usePathname();
    let isMatch = absolute
        ? props.href.toString().split("/")[1] +
            props.href.toString().split("/")[2] ==
            path.split("/")[1] + path.split("/")[2]
        : path === props.href;
    if (props.href.toString().includes("http"))
        isMatch = false;
    if (disabled)
        return <div className={cn(className, "cursor-not-allowed")}>{children}</div>;
    return (<Link className={cn(className, isMatch && activeClassName)} {...props}>
      {children}
    </Link>);
}
