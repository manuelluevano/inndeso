"use client";

import { Suspense } from "react";
import Script from "next/script";

import Inicio from "@/components/inicio/Inicio";
import Inicio2 from "@/components/inicio/Inicio2";
import Inicio3 from "@/components/inicio/Inicio3";
import Inicio4 from "@/components/inicio/Inicio4";
import Inicio5 from "@/components/inicio/Inicio5";
import Inicio6 from "@/components/inicio/Inicio6";
import Inicio7 from "@/components/inicio/Inicio7";
import Inicio8 from "@/components/inicio/Inicio8";

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
          <div className="reveal-up"><Inicio /></div>
          <div className="reveal-up reveal-delay-1"><Inicio2 /></div>
          <div className="reveal-up reveal-delay-2"><Inicio3 /></div>
          <div className="reveal-up reveal-delay-1"><Inicio4 /></div>
          <div className="reveal-up reveal-delay-2"><Inicio6 /></div>
          <div className="reveal-up reveal-delay-3"><Inicio7 /></div>
          <div className="reveal-up reveal-delay-1"><Inicio5 /></div>
          <div className="reveal-up reveal-delay-2"><Inicio8 /></div>
        </main>
      </Suspense>
    </>
  );
}
