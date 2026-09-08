type AnalyticsValue = string | number | boolean | null | undefined;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function dlPush(obj: Record<string, AnalyticsValue>) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(obj);
}

export function trackEvent(name: string, params: Record<string, AnalyticsValue> = {}) {
  dlPush({ event: name, ...params });

  const directGaEnabled = Boolean(process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID);
  const tagManagerEnabled = Boolean(process.env.NEXT_PUBLIC_GTM_ID);
  if (directGaEnabled && !tagManagerEnabled && typeof window !== "undefined" && window.gtag) {
    window.gtag("event", name, params);
  }
}
