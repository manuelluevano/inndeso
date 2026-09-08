"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/gtm";

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
          trackEvent("scroll_depth", {
            depth_percent: threshold,
            page_path: window.location.pathname,
          });
        }
      });
    };

    const onClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (!target) return;

      const anchor = target.closest<HTMLAnchorElement>("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href") || "";
      const common = {
        link_text: anchor.textContent?.trim().replace(/\s+/g, " ").slice(0, 100) || "sin_texto",
        link_url: href.slice(0, 300),
        page_path: window.location.pathname,
      };

      if (href.includes("wa.me/")) {
        trackEvent("generate_lead", { ...common, contact_method: "whatsapp" });
      } else if (href.startsWith("mailto:")) {
        trackEvent("generate_lead", { ...common, contact_method: "email" });
      } else if (href.startsWith("tel:")) {
        trackEvent("generate_lead", { ...common, contact_method: "phone" });
      }

      if (anchor.dataset.trackCta === "true") {
        trackEvent("cta_click", {
          ...common,
          cta_name: anchor.dataset.ctaName || "unknown_cta",
          cta_location: anchor.dataset.ctaLocation || "unknown_location",
        });
      }
    };

    const engagedTimer = window.setTimeout(() => {
      trackEvent("engaged_visit", { engagement_seconds: 30, page_path: window.location.pathname });
    }, 30000);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("click", onClick);

    return () => {
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("click", onClick);
      window.clearTimeout(engagedTimer);
    };
  }, []);

  return null;
}
