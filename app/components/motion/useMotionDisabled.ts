"use client";

/**
 * Lets the entrance animations be bypassed via `?nomotion=1` in the URL.
 * Needed for tools (e.g. Figma capture) that screenshot the page without
 * scrolling, which would otherwise freeze whileInView content at opacity 0.
 *
 * Reads window.location directly (instead of next/navigation's
 * useSearchParams) so callers don't force every page that uses them into
 * requiring a Suspense boundary during static prerendering.
 */
export function useMotionDisabled(): boolean {
  if (typeof window === "undefined") return false;
  return new URLSearchParams(window.location.search).get("nomotion") === "1";
}
