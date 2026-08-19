"use client";

import { useEffect, useRef, useState } from "react";

interface AnimatedCounterProps {
  value: string;
  className?: string;
  style?: React.CSSProperties;
}

/** Animates the numeric portion of a string like "+80 mil" or "+350" from 0 up to its value when scrolled into view. Non-numeric strings (e.g. "Nota 10") render as-is. */
export function AnimatedCounter({ value, className, style }: AnimatedCounterProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const match = value.match(/^([^\d]*)([\d.,]+)(.*)$/);
  const [display, setDisplay] = useState(match ? `${match[1]}0${match[3]}` : value);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!match || !ref.current) return;

    const [, prefix, numberStr, suffix] = match;
    const target = parseInt(numberStr.replace(/[.,]/g, ""), 10);
    if (Number.isNaN(target)) return;

    const el = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 1500;
          const start = performance.now();

          const tick = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(eased * target);
            const formatted =
              numberStr.includes(".") || numberStr.includes(",")
                ? current.toLocaleString("pt-BR")
                : String(current);
            setDisplay(`${prefix}${formatted}${suffix}`);
            if (progress < 1) {
              requestAnimationFrame(tick);
            } else {
              setDisplay(value);
            }
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return (
    <p ref={ref} className={className} style={style}>
      {display}
    </p>
  );
}
