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
import { startTransition, useCallback, useMemo } from "react";
import { useRouter as useNextRouter } from "next/navigation";
import { useSetFinishViewTransition } from "./transition-context";
export function useTransitionRouter() {
    const router = useNextRouter();
    const finishViewTransition = useSetFinishViewTransition();
    const triggerTransition = useCallback((cb, { onTransitionReady } = {}) => {
        if ("startViewTransition" in document) {
            const transition = document.startViewTransition(() => new Promise((resolve) => {
                startTransition(() => {
                    cb();
                    finishViewTransition(() => resolve);
                });
            }));
            if (onTransitionReady) {
                transition.ready.then(onTransitionReady);
            }
        }
        else {
            cb();
        }
    }, [finishViewTransition]);
    const push = useCallback((href, _a = {}) => {
        var { onTransitionReady } = _a, options = __rest(_a, ["onTransitionReady"]);
        triggerTransition(() => router.push(href, options), {
            onTransitionReady,
        });
    }, [triggerTransition, router]);
    const replace = useCallback((href, _a = {}) => {
        var { onTransitionReady } = _a, options = __rest(_a, ["onTransitionReady"]);
        triggerTransition(() => router.replace(href, options), {
            onTransitionReady,
        });
    }, [triggerTransition, router]);
    return useMemo(() => (Object.assign(Object.assign({}, router), { push,
        replace })), [push, replace, router]);
}
