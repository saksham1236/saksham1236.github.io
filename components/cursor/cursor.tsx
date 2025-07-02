'use client'

import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';
import styles from "./cursor.module.css";

export default function Cursor() {
    function useMouseAndHover() {
        const [mousePosition, setMousePosition] = useState<{ x: number | null, y: number | null }>({ x: null, y: null });
        const [isHover, setHover] = useState(false);
        const [customprop, setCustomProps] = useState<{ top: number | null, left: number | null, width: number, height: number, rounded: string }>({
            top: null, left: null, height: 32, width: 32, rounded: "100%"
        });

        useEffect(() => {
            function mouseMove(event: MouseEvent) {
                const { clientX, clientY } = event;
                setMousePosition({ x: clientX + window.scrollX, y: clientY + window.scrollY });
            }
            function mouseOver(event: MouseEvent) {
                const el = event.target as HTMLElement;
                if (el.closest('a, button, input, [data-cursor-hover], .card-grp')) {
                    setHover(true);
                    const rect = el.getBoundingClientRect();
                    const style = window.getComputedStyle(el);
                    if (el.matches('a, button, input, [data-cursor-hover], .card-grp')) {
                        setCustomProps({
                            top: rect.top + window.scrollY,
                            left: rect.left + window.scrollX,
                            width: rect.width,
                            height: rect.height,
                            rounded: style.borderRadius || "0px"
                        });
                    }
                }
            }
            function mouseOut(event: MouseEvent) {
                const el = event.target as HTMLElement;
                if (el.closest('a, button, input, [data-cursor-hover], .card-grp')) {
                    setHover(false);
                }
            }
            window.addEventListener('mousemove', mouseMove);
            window.addEventListener('mouseover', mouseOver);
            window.addEventListener('mouseout', mouseOut);
            return () => {
                window.removeEventListener('mousemove', mouseMove);
                window.removeEventListener('mouseover', mouseOver);
                window.removeEventListener('mouseout', mouseOut);
            };
        }, [mousePosition]);

        return { mousePosition, isHover, customprop };
    }
    const { mousePosition, isHover, customprop } = useMouseAndHover();
    const { x, y } = mousePosition;
    const cursorStyles = cn(
        "transition-transform transition-gpu custom-cursor z-[40] border-4 border-sky-300 dark:border-white bg-white/50",
        isHover ? `transition-transform transition-gpu duration-150` : "`transition-transform transition-gpu rounded-[200px] h-4 w-4"
    );
    const offset = 12;
    const cursorInlineStyles = isHover
        ? {
            top: customprop.top !== null ? customprop.top - offset / 2 : undefined,
            left: customprop.left !== null ? customprop.left - offset / 2 : undefined,
            width: customprop.width + offset,
            height: customprop.height + offset,
            borderRadius: `calc(${customprop.rounded} + ${offset / 2}px)`,
            transition: "all 0.3s ease"
        }
        : {};

    return (
        <>
            <style jsx>{`
                .custom-cursor {
                    position: absolute;
                    top: ${y !== null ? `${y - 8}px` : '0'};
                    left: ${x !== null ? `${x - 8}px` : '0'};
                    pointer-events: none;
                }
            `}</style>
            <div className={cursorStyles} style={cursorInlineStyles} />
        </>
    );
}