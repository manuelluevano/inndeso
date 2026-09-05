"use client";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { dlPush } from "@/lib/gtm";

export default function RouteChangeTracker() {
  const pathname = usePathname();

  useEffect(() => {
    dlPush({ event: "page_view", page_path: pathname });
  }, [pathname]);

  return null;
}
