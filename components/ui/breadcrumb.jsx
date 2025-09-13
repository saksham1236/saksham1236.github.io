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
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { BsThreeDots } from "react-icons/bs";
import { LuChevronRight } from "react-icons/lu";
import { cn } from "@/lib/utils";
function Breadcrumb(_a) {
    var props = __rest(_a, []);
    return (<nav className="overflow-auto" aria-label="breadcrumb" data-slot="breadcrumb" {...props}/>);
}
function BreadcrumbList(_a) {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (<ol data-slot="breadcrumb-list" className={cn("text-muted flex items-center gap-0.5 text-lg font-medium text-pretty sm:gap-0.5", className)} {...props}/>);
}
function BreadcrumbItem(_a) {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (<li data-slot="breadcrumb-item" className={cn("inline-flex items-center gap-0.5 rounded-full", className)} {...props}/>);
}
function BreadcrumbLink(_a) {
    var { asChild, className } = _a, props = __rest(_a, ["asChild", "className"]);
    const Comp = asChild ? Slot : "a";
    return (<Comp data-slot="breadcrumb-link" className={cn("hover:text-primary/60 rounded-full p-2 text-nowrap transition-colors", className)} {...props}/>);
}
function BreadcrumbPage(_a) {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (<span data-slot="breadcrumb-page" role="link" aria-disabled="true" aria-current="page" className={cn("text-primary/80 p-2 font-bold text-nowrap", className)} {...props}/>);
}
function BreadcrumbSeparator(_a) {
    var { children, className } = _a, props = __rest(_a, ["children", "className"]);
    return (<li data-slot="breadcrumb-separator" role="presentation" aria-hidden="true" className={cn("[&>svg]:size-3.5", className)} {...props}>
      {children !== null && children !== void 0 ? children : <LuChevronRight />}
    </li>);
}
function BreadcrumbEllipsis(_a) {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (<span data-slot="breadcrumb-ellipsis" role="presentation" aria-hidden="true" className={cn("flex size-9 items-center justify-center", className)} {...props}>
      <BsThreeDots className="size-4"/>
      <span className="sr-only">More</span>
    </span>);
}
export { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator, BreadcrumbEllipsis, };
