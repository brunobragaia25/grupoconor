"use client";

import { CSSProperties, useState } from "react";

interface HoverButtonProps {
  children: string;
  backgroundColor: string;
  color: string;
  style?: CSSProperties;
  onClick?: () => void;
}

export function HoverButton({
  children,
  backgroundColor,
  color,
  style,
  onClick,
}: HoverButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      style={{
        width: "100%",
        padding: "12px 16px",
        backgroundColor: isHovered ? backgroundColor + "CC" : backgroundColor,
        color,
        border: "none",
        borderRadius: "8px",
        fontWeight: 500,
        fontSize: "14px",
        cursor: "pointer",
        fontFamily: "var(--font-roboto)",
        transition: "opacity 0.3s",
        ...style,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
