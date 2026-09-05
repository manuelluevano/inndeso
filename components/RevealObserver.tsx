"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion || !("IntersectionObserver" in window)) {
      document.querySelectorAll<HTMLElement>(".reveal-up").forEach((target) => target.classList.add("reveal-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -8% 0px" },
    );

    const observed = new WeakSet<HTMLElement>();

    const bindTargets = () => {
      const targets = Array.from(document.querySelectorAll<HTMLElement>(".reveal-up"));
      targets.forEach((target) => {
        if (observed.has(target)) return;
        target.classList.remove("reveal-visible");
        observer.observe(target);
        observed.add(target);
      });
    };

    bindTargets();
    const rafId = window.requestAnimationFrame(bindTargets);
    const timeoutId = window.setTimeout(bindTargets, 90);
    const domObserver = new MutationObserver(() => bindTargets());
    domObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.cancelAnimationFrame(rafId);
      window.clearTimeout(timeoutId);
      domObserver.disconnect();
      observer.disconnect();
    };
  }, [pathname]);

  return null;
}
