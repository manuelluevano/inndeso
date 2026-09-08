import type { Metadata } from "next";
import { Suspense } from "react";

import HomeHero from "@/components/home/HomeHero";
import HomeExperience from "@/components/home/HomeExperience";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: { absolute: "Desarrollo de software a la medida en Guadalajara | INNDESO" },
  description:
    "Desarrollamos software a la medida, aplicaciones móviles, sistemas administrativos, GPS y plataformas web para empresas en Guadalajara y México.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    title: "Desarrollo de software a la medida en Guadalajara | INNDESO",
    description: "Creamos sistemas, aplicaciones y plataformas digitales para empresas que necesitan optimizar sus operaciones.",
    images: ["/visuals/oficina-software-inndeso.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Desarrollo de software a la medida en Guadalajara | INNDESO",
    description: "Sistemas, aplicaciones, GPS y plataformas web para operar mejor.",
    images: ["/visuals/oficina-software-inndeso.png"],
  },
};

const SITE_URL = "https://inndeso.com.mx";

const HOMEPAGE_WEBPAGE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Desarrollo de software a la medida en Guadalajara | INNDESO",
  url: SITE_URL,
  description:
    "Software a la medida, aplicaciones móviles, sistemas administrativos, GPS y plataformas web para empresas en Guadalajara y México.",
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
      <script
        id="homepage-webpage-schema"
        type="application/ld+json"
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
