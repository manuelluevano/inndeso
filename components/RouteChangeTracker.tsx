"use client";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { dlPush } from "@/lib/gtm";

export default function RouteChangeTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = pathname + (searchParams?.toString() ? `?${searchParams}` : "");
    dlPush({ event: "page_view", page_path: url });
  }, [pathname, searchParams]);

  return null;
}