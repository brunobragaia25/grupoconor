"use client";

import { useSearchParams } from "next/navigation";

/**
 * Lets the entrance animations be bypassed via `?nomotion=1` in the URL.
 * Needed for tools (e.g. Figma capture) that screenshot the page without
 * scrolling, which would otherwise freeze whileInView content at opacity 0.
 */
export function useMotionDisabled(): boolean {
  const searchParams = useSearchParams();
  return searchParams.get("nomotion") === "1";
}
