"use client";

import { motion } from "framer-motion";
import { CSSProperties, ElementType } from "react";

type Segment = string | { text: string; color?: string; weight?: number };

interface AnimatedTitleProps {
  /** Plain string, or an array of segments (use segment.color to highlight part of the title). */
  children: string | Segment[];
  as?: ElementType;
  style?: CSSProperties;
  className?: string;
  once?: boolean;
}

/**
 * Reveals a title word by word as it scrolls into view.
 * Pass a plain string for uniform text, or an array of segments
 * (e.g. [{ text: "Rastrear " }, { text: "seu veículo.", color: "#52a4ff" }])
 * to keep per-word colored highlights while still animating each word in.
 */
export function AnimatedTitle({
  children,
  as: Tag = "p",
  style,
  className,
  once = true,
}: AnimatedTitleProps) {
  const segments: Segment[] = typeof children === "string" ? [children] : children;

  // Flatten segments into individual words, each carrying its segment's color/weight.
  const words: { text: string; color?: string; weight?: number; spaceAfter: boolean }[] = [];
  segments.forEach((seg, segIdx) => {
    const isObj = typeof seg !== "string";
    const text = isObj ? seg.text : seg;
    const color = isObj ? seg.color : undefined;
    const weight = isObj ? seg.weight : undefined;
    const parts = text.split(" ").filter((w) => w.length > 0);
    parts.forEach((w, i) => {
      const isLastOfSegment = i === parts.length - 1;
      const isLastSegment = segIdx === segments.length - 1;
      words.push({
        text: w,
        color,
        weight,
        spaceAfter: !(isLastOfSegment && isLastSegment),
      });
    });
  });

  const MotionTag = motion(Tag as ElementType) as typeof motion.p;

  return (
    <MotionTag
      style={style}
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.4 }}
    >
      {words.map((word, i) => (
        <span
          key={i}
          style={{ display: "inline-block", overflow: "hidden", verticalAlign: "top" }}
        >
          <motion.span
            style={{
              display: "inline-block",
              color: word.color,
              fontWeight: word.weight,
            }}
            variants={{
              hidden: { y: "110%", opacity: 0 },
              visible: {
                y: "0%",
                opacity: 1,
                transition: {
                  duration: 0.55,
                  ease: [0.22, 1, 0.36, 1],
                  delay: i * 0.045,
                },
              },
            }}
          >
            {word.text}
            {word.spaceAfter ? " " : ""}
          </motion.span>
        </span>
      ))}
    </MotionTag>
  );
}
