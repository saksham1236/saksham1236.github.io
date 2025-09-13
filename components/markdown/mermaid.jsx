"use client";
import React, { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState, } from "react";
import clsx from "clsx";
import mermaid from "mermaid";
mermaid.initialize({
    theme: "neutral",
});
const Mermaid = ({ chart, className }) => {
    const ref = useRef(null);
    const [mounted, setMounted] = useState(false);
    const renderMermaid = useCallback(() => {
        if (ref.current) {
            ref.current.innerHTML = chart;
            try {
                mermaid.contentLoaded();
            }
            catch (error) {
                console.error("Mermaid diagram render error:", error);
            }
        }
    }, [chart]);
    const memoizedClassName = useMemo(() => clsx("mermaid", className), [className]);
    useEffect(() => {
        setMounted(true);
    }, []);
    useLayoutEffect(() => {
        if (mounted && ref.current) {
            requestAnimationFrame(() => {
                renderMermaid();
            });
        }
    }, [mounted, renderMermaid]);
    if (!mounted) {
        return null;
    }
    return <div className={memoizedClassName} ref={ref}/>;
};
const MermaidMemo = React.memo(Mermaid);
export default MermaidMemo;
