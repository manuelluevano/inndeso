
import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import SalesAssistant from "@/components/SalesAssistant";
import RevealObserver from "@/components/RevealObserver";
import PageTransition from "@/components/PageTransition";
import EngagementTracker from "@/components/EngagementTracker";
import RouteChangeTracker from "@/components/RouteChangeTracker";
import { contactEmail } from "@/lib/site-content";



const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://inndeso.com.mx";
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
const GOOGLE_ADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;
const GOOGLE_SITE_VERIFICATION = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: "INNDESO",
  authors: [{ name: "INNDESO", url: SITE_URL }],
  creator: "INNDESO",
  publisher: "INNDESO",
  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },
  title: {
    default: "INNDESO | Desarrollo de software a la medida",
    template: "%s | INNDESO",
  },
  description:
    "Desarrollo de software a la medida en México: GPS y mapas en vivo, apps iOS y Android, sistemas para Windows y macOS, plataformas web, ventas, inventario y servidores Linux.",
  keywords: [
    "desarrollo de software",
    "aplicaciones web",
    "apps móviles",
    "GPS en tiempo real",
    "mapas en vivo",
    "software para Windows",
    "aplicaciones macOS",
    "Apple Watch",
    "APIs",
    "integraciones",
    "DevOps",
    "cloud",
    "Next.js",
    "Node.js",
    "React",
    "NestJS",
    "páginas web profesionales",
    "tiendas en línea en México",
    "sistemas a la medida",
    "automatización de procesos empresariales",
    "desarrollo de software Guadalajara",
  ],
  category: "technology",
  alternates: {
    canonical: "/",
    languages: { es: "/" },
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "INNDESO",
    title: "INNDESO | Desarrollo de software a la medida",
    description:
      "Software que mueve operaciones reales: GPS en vivo, apps, sistemas empresariales, plataformas web y servidores.",
    images: [
      {
        url: "/INNDESO.jpg",
        width: 1024,
        height: 1024,
        alt: "INNDESO - Desarrollo de software",
      },
    ],
    locale: "es_MX",
  },
  twitter: {
    card: "summary_large_image",
    title: "INNDESO | Software que mueve operaciones reales",
    description:
      "GPS en vivo, aplicaciones, inventarios, ventas, finanzas, web, integraciones y servidores.",
    images: ["/INNDESO.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: "/icono.png",
    shortcut: "/icono.png",
  },
  verification: GOOGLE_SITE_VERIFICATION
    ? {
        google: GOOGLE_SITE_VERIFICATION,
      }
    : undefined,
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#07101f" },
  ],
  colorScheme: "light",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {



  return (
    <html lang="es">
      <head>
        {GTM_ID && (
          <Script
            id="google-tag-manager"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `(
                function(w,d,s,l,i){
                  w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
                  var f=d.getElementsByTagName(s)[0], j=d.createElement(s), dl=l!='dataLayer'?'&l='+l:'';
                  j.async=true; j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl; f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','${GTM_ID}');`
            }}
          />
        )}
        {(GA_MEASUREMENT_ID || GOOGLE_ADS_ID) && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID ?? GOOGLE_ADS_ID}`}
              strategy="afterInteractive"
            />
            <Script
              id="gtag-init"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  ${GA_MEASUREMENT_ID ? `gtag('config', '${GA_MEASUREMENT_ID}', { anonymize_ip: true });` : ''}
                  ${GOOGLE_ADS_ID ? `gtag('config', '${GOOGLE_ADS_ID}');` : ''}
                `,
              }}
            />
          </>
        )}
        {/* JSON-LD: Organization + WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'INNDESO',
              url: SITE_URL,
              logo: `${SITE_URL}/icono.png`,
              email: contactEmail,
              description: 'Desarrollo de software a la medida, aplicaciones multiplataforma, GPS en vivo, sistemas empresariales e infraestructura para negocios en México.',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Guadalajara',
                addressRegion: 'Jalisco',
                addressCountry: 'MX'
              },
              areaServed: {
                '@type': 'Country',
                name: 'México'
              },
              knowsAbout: [
                'Desarrollo de software a la medida',
                'Aplicaciones web y móviles',
                'GPS y mapas en vivo',
                'Sistemas de inventario y ventas',
                'Servidores Linux e integraciones'
              ],
              sameAs: [
                'https://www.facebook.com/profile.php?id=61578554534142',
                'https://www.instagram.com/inndeso_mx/'
              ],
              contactPoint: [{
                '@type': 'ContactPoint',
                telephone: '+52-33-1205-0703',
                email: contactEmail,
                contactType: 'customer support',
                areaServed: 'MX',
                availableLanguage: ['es']
              }]
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'INNDESO',
              url: SITE_URL,
              inLanguage: 'es-MX',
              description: 'Software a la medida, GPS en vivo, aplicaciones multiplataforma y sistemas empresariales.'
            })
          }}
        />
      </head>
      <body className="min-h-screen bg-[#050c17] text-neutral-900 antialiased">
        <ScrollProgress />
        <RevealObserver />
        <EngagementTracker />
        <RouteChangeTracker />
        {GTM_ID && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
        )}

        {/* LOGO, NAV, REDES */}
        <Header/>

        {/*  PAGE */}
        <div className="relative">
          {/* Decoración sutil */}
          <div className="pointer-events-none absolute inset-x-0 -top-10 -z-10 flex justify-center">
            <div className="h-40 w-[36rem] bg-blue-500/5 blur-3xl rounded-full" />
          </div>
          <PageTransition>{children}</PageTransition>
        </div>

        {/* FOOTER */}
        <Footer/>
        <SalesAssistant />
      </body>
    </html>
  );
}
