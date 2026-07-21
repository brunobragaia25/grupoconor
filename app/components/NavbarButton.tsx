"use client";

import { CSSProperties, useState } from "react";

interface NavbarButtonProps {
  children: React.ReactNode;
  backgroundColor: string;
  color: string;
  onClick?: () => void;
}

export function NavbarButton({
  children,
  backgroundColor,
  color,
  onClick,
}: NavbarButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      style={{
        display: "flex",
        alignItems: "center",
        gap: "6px",
        padding: "12px 16px",
        backgroundColor: isHovered ? backgroundColor + "CC" : backgroundColor,
        color,
        border: "none",
        borderRadius: "999px",
        fontWeight: 500,
        fontSize: "14px",
        cursor: "pointer",
        fontFamily: "var(--font-roboto)",
        transition: "opacity 0.3s",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
