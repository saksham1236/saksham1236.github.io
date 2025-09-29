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
import { useCallback } from "react";
import NextLink from "next/link";
import { useTransitionRouter } from "./use-transition-router";
const supportsViewTransitions = typeof document !== "undefined" && "startViewTransition" in document;
function isModifiedEvent(event) {
    const eventTarget = event.currentTarget;
    const target = eventTarget.getAttribute("target");
    return ((target && target !== "_self") ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey ||
        (event.nativeEvent && event.button === 1));
}
function shouldPreserveDefault(e) {
    return e.currentTarget.nodeName.toUpperCase() === "A" && isModifiedEvent(e);
}
const formatUrl = (url) => typeof url === "string"
    ? url
    : new URL(url.pathname || "", window.location.href).toString();
export function Link(props) {
    const router = useTransitionRouter();
    const { href, as, replace, scroll, onClick } = props, rest = __rest(props, ["href", "as", "replace", "scroll", "onClick"]);
    const handleClick = useCallback((e) => {
        if (onClick) {
            onClick(e);
        }
        if (!supportsViewTransitions || shouldPreserveDefault(e)) {
            return;
        }
        e.preventDefault();
        const navigate = replace ? router.replace : router.push;
        navigate(formatUrl(as !== null && as !== void 0 ? as : href), { scroll: scroll !== null && scroll !== void 0 ? scroll : true });
    }, [onClick, href, as, replace, scroll, router]);
    return <NextLink {...rest} href={href} as={as} onClick={handleClick}/>;
}
