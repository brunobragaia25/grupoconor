"use client";

import { useEffect, useState } from "react";

/**
 * Lets the entrance animations be bypassed via `?nomotion=1` in the URL.
 * Needed for tools (e.g. Figma capture) that screenshot the page without
 * scrolling, which would otherwise freeze whileInView content at opacity 0.
 *
 * Reads window.location directly (instead of next/navigation's
 * useSearchParams) so callers don't force every page that uses them into
 * requiring a Suspense boundary during static prerendering.
 *
 * Always renders `false` on the first pass (matching SSR, which has no
 * `window`) and only flips to true after mount, via effect — reading
 * window.location synchronously during render would make the client's
 * first render diverge from the server's and trigger a hydration mismatch.
 */
export function useMotionDisabled(): boolean {
  const [motionDisabled, setMotionDisabled] = useState(false);

  useEffect(() => {
    setMotionDisabled(new URLSearchParams(window.location.search).get("nomotion") === "1");
  }, []);

  return motionDisabled;
}
