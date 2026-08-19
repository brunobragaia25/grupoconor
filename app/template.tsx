"use client";

import { motion } from "framer-motion";
import { useMotionDisabled } from "./components/motion/useMotionDisabled";

/** Wraps every route so navigating fades/slides the new page in, instead of a hard cut. */
export default function Template({ children }: { children: React.ReactNode }) {
  const motionDisabled = useMotionDisabled();

  if (motionDisabled) {
    return <>{children}</>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
