"use client";

import { useEffect } from "react";
import { dlPush } from "@/lib/gtm";

export default function EngagementTracker() {
  useEffect(() => {
    const thresholds = [50, 75, 90];
    const sent = new Set<number>();

    const onScroll = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      if (max <= 0) {
        return;
      }

      const depth = Math.round((doc.scrollTop / max) * 100);
      thresholds.forEach((threshold) => {
        if (depth >= threshold && !sent.has(threshold)) {
          sent.add(threshold);
          dlPush({
            event: "scroll_depth",
            depth_percent: threshold,
          });
        }
      });
    };

    const onClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (!target) return;

      const anchor = target.closest<HTMLAnchorElement>("a[data-track-cta='true']");
      if (!anchor) return;

      dlPush({
        event: "cta_click",
        cta_name: anchor.dataset.ctaName || "unknown_cta",
        cta_location: anchor.dataset.ctaLocation || "unknown_location",
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("click", onClick);

    return () => {
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("click", onClick);
    };
  }, []);

  return null;
}
