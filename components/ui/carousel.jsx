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
import * as React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { MaterialSymbolsArrowForwardRounded as ArrowRight, MaterialSymbolsArrowBackRounded as ArrowLeft } from "./icons/icons";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
const CarouselContext = React.createContext(null);
function useCarousel() {
    const context = React.useContext(CarouselContext);
    if (!context) {
        throw new Error("useCarousel must be used within a <Carousel />");
    }
    return context;
}
function Carousel(_a) {
    var { orientation = "horizontal", opts, setApi, plugins, className, children } = _a, props = __rest(_a, ["orientation", "opts", "setApi", "plugins", "className", "children"]);
    const [carouselRef, api] = useEmblaCarousel(Object.assign(Object.assign({}, opts), { axis: orientation === "horizontal" ? "x" : "y" }), plugins);
    const [canScrollPrev, setCanScrollPrev] = React.useState(false);
    const [canScrollNext, setCanScrollNext] = React.useState(false);
    const onSelect = React.useCallback((api) => {
        if (!api)
            return;
        setCanScrollPrev(api.canScrollPrev());
        setCanScrollNext(api.canScrollNext());
    }, []);
    const scrollPrev = React.useCallback(() => {
        api === null || api === void 0 ? void 0 : api.scrollPrev();
    }, [api]);
    const scrollNext = React.useCallback(() => {
        api === null || api === void 0 ? void 0 : api.scrollNext();
    }, [api]);
    const handleKeyDown = React.useCallback((event) => {
        if (event.key === "ArrowLeft") {
            event.preventDefault();
            scrollPrev();
        }
        else if (event.key === "ArrowRight") {
            event.preventDefault();
            scrollNext();
        }
    }, [scrollPrev, scrollNext]);
    React.useEffect(() => {
        if (!api || !setApi)
            return;
        setApi(api);
    }, [api, setApi]);
    React.useEffect(() => {
        if (!api)
            return;
        onSelect(api);
        api.on("reInit", onSelect);
        api.on("select", onSelect);
        return () => {
            api === null || api === void 0 ? void 0 : api.off("select", onSelect);
        };
    }, [api, onSelect]);
    return (<CarouselContext.Provider value={{
            carouselRef,
            api: api,
            opts,
            orientation: orientation || ((opts === null || opts === void 0 ? void 0 : opts.axis) === "y" ? "vertical" : "horizontal"),
            scrollPrev,
            scrollNext,
            canScrollPrev,
            canScrollNext,
        }}>
      <div onKeyDownCapture={handleKeyDown} className={cn("relative", className)} role="region" aria-roledescription="carousel" data-slot="carousel" {...props}>
        {children}
      </div>
    </CarouselContext.Provider>);
}
function CarouselContent(_a) {
    var { className } = _a, props = __rest(_a, ["className"]);
    const { carouselRef, orientation } = useCarousel();
    return (<div ref={carouselRef} className={cn("overflow-hidden", className)} data-slot="carousel-content">
      <div className={cn("flex", orientation === "horizontal" ? "-ml-4" : "-mt-0 flex-col gap-12", className)} {...props}/>
    </div>);
}
function CarouselItem(_a) {
    var { className } = _a, props = __rest(_a, ["className"]);
    const { orientation } = useCarousel();
    return (<div role="group" aria-roledescription="slide" data-slot="carousel-item" className={cn("min-w-0 shrink-0 grow-0 basis-full", orientation === "horizontal" ? "pl-4" : "pt-4", className)} {...props}/>);
}
function CarouselPrevious(_a) {
    var { className, variant = "outline", size = "icon" } = _a, props = __rest(_a, ["className", "variant", "size"]);
    const { orientation, scrollPrev, canScrollPrev } = useCarousel();
    return (<Button data-slot="carousel-previous" variant={variant} size={size} className={cn("rounded-full", orientation === "horizontal"
            ? "top-1/2 -left-12"
            : "-top-12 left-1/2 -translate-x-1/2 rotate-90", className)} disabled={!canScrollPrev} onClick={scrollPrev} {...props}>
      <ArrowLeft className="size-fit"/>
      <span className="sr-only">Previous slide</span>
    </Button>);
}
function CarouselNext(_a) {
    var { className, variant = "outline", size = "icon" } = _a, props = __rest(_a, ["className", "variant", "size"]);
    const { orientation, scrollNext, canScrollNext } = useCarousel();
    return (<Button data-slot="carousel-next" variant={variant} size={size} className={cn("rounded-full bg-primary-foreground", orientation === "horizontal"
            ? "top-1/2 -right-12"
            : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90", className)} disabled={!canScrollNext} onClick={scrollNext} {...props}>
      <ArrowRight className="size-fit"/>
      <span className="sr-only">Next slide</span>
    </Button>);
}
export { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext, };
