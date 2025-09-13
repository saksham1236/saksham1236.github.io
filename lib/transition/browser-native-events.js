var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { use, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { useHash } from "./use-hash";
const suspenseBoundaries = new Set();
let suspenseResolve = null;
export function useTrackSuspense(id) {
    useEffect(() => {
        suspenseBoundaries.add(id);
        return () => {
            suspenseBoundaries.delete(id);
            if (suspenseBoundaries.size === 0 && suspenseResolve) {
                suspenseResolve();
                suspenseResolve = null;
            }
        };
    }, [id]);
}
export function useBrowserNativeTransitions() {
    const pathname = usePathname();
    const currentPathname = useRef(pathname);
    const [currentViewTransition, setCurrentViewTransition] = useState(null);
    useEffect(() => {
        if (!("startViewTransition" in document)) {
            return;
        }
        const onPopState = () => {
            let pendingViewTransitionResolve;
            const pendingViewTransition = new Promise((resolve) => {
                pendingViewTransitionResolve = resolve;
            });
            const pendingStartViewTransition = new Promise((resolve) => {
                document.startViewTransition(() => {
                    resolve();
                    return pendingViewTransition;
                });
            });
            setCurrentViewTransition([
                pendingStartViewTransition,
                pendingViewTransitionResolve,
            ]);
        };
        window.addEventListener("popstate", onPopState);
        return () => {
            window.removeEventListener("popstate", onPopState);
        };
    }, []);
    if (currentViewTransition && currentPathname.current !== pathname) {
        use(currentViewTransition[0]);
    }
    const transitionRef = useRef(currentViewTransition);
    useEffect(() => {
        transitionRef.current = currentViewTransition;
    }, [currentViewTransition]);
    const hash = useHash();
    useEffect(() => {
        const finishTransition = () => __awaiter(this, void 0, void 0, function* () {
            currentPathname.current = pathname;
            if (transitionRef.current) {
                if (suspenseBoundaries.size > 0) {
                    yield new Promise((resolve) => {
                        suspenseResolve = resolve;
                    });
                }
                transitionRef.current[1]();
                transitionRef.current = null;
            }
        });
        finishTransition();
    }, [hash, pathname]);
}
