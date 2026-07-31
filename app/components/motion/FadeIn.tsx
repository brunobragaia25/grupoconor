"use client";

import { motion } from "framer-motion";
import { CSSProperties, ReactNode } from "react";
import { useMotionDisabled } from "./useMotionDisabled";

interface FadeInProps {
  children: ReactNode;
  style?: CSSProperties;
  className?: string;
  delay?: number;
  y?: number;
  once?: boolean;
}

/** Simple fade + slide-up entrance used for cards, sections and general content blocks. */
export function FadeIn({ children, style, className, delay = 0, y = 24, once = true }: FadeInProps) {
  const motionDisabled = useMotionDisabled();

  if (motionDisabled) {
    return (
      <div style={style} className={className}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      style={style}
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount: 0.2 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}
