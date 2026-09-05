"use client";

import { Suspense } from "react";
import Script from "next/script";

import HomeHero from "@/components/home/HomeHero";
import HomeExperience from "@/components/home/HomeExperience";

export const dynamic = "force-static";

const SITE_URL = "https://inndeso.com.mx";

const HOMEPAGE_WEBPAGE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "INNDESO | Desarrollo de software y páginas web a la medida",
  url: SITE_URL,
  description:
    "Desarrollo de páginas web, tiendas en línea, apps móviles y sistemas internos en México. Equipo senior que entrega rápido y con calidad.",
  publisher: {
    "@type": "Organization",
    name: "INNDESO",
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/icono.png`,
    },
  },
  inLanguage: "es-MX",
};

export default function Home() {
  return (
    <>
      <Script
        id="homepage-webpage-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(HOMEPAGE_WEBPAGE_JSON_LD) }}
      />

      <Suspense fallback={<div>Cargando...</div>}>
        <main id="inicio" className="relative">
          <HomeHero />
          <HomeExperience />
        </main>
      </Suspense>
    </>
  );
}
