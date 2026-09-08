"use client";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { dlPush, trackEvent } from "@/lib/gtm";

export default function RouteChangeTracker() {
  const pathname = usePathname();
  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      dlPush({ event: "page_view", page_path: pathname, page_title: document.title });
      return;
    }

    trackEvent("page_view", { page_path: pathname, page_title: document.title });

    if (pathname.startsWith("/proyectos/")) {
      trackEvent("view_project", { project_slug: pathname.split("/").filter(Boolean).at(-1), page_path: pathname });
    }

    if (pathname.startsWith("/servicios/")) {
      trackEvent("view_service", { service_slug: pathname.split("/").filter(Boolean).at(-1), page_path: pathname });
    }
  }, [pathname]);

  return null;
}
