"use client";

import { ReactNode } from "react";

interface PulsingIconBadgeProps {
  color: string;
  className?: string;
  children: ReactNode;
  delay?: number;
}

/** Icon badge with a subtle continuous pulse (scale + glow), independent of hover. */
export function PulsingIconBadge({ color, className, children, delay = 0 }: PulsingIconBadgeProps) {
  return (
    <div
      className={`pulsing-badge ${className ?? ""}`}
      style={{
        flexShrink: 0,
        borderRadius: "14px",
        backgroundColor: color,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        animationDelay: `${delay}s`,
        ["--pulse-color" as string]: color,
      }}
    >
      {children}
      <style jsx>{`
        .pulsing-badge {
          animation: badge-pulse 2.6s ease-in-out infinite;
        }
        @keyframes badge-pulse {
          0%,
          100% {
            transform: scale(1);
            box-shadow: 0 0 0 0 color-mix(in srgb, var(--pulse-color) 45%, transparent);
          }
          50% {
            transform: scale(1.06);
            box-shadow: 0 0 0 6px color-mix(in srgb, var(--pulse-color) 0%, transparent);
          }
        }
      `}</style>
    </div>
  );
}
