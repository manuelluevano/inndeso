
import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";



const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://inndeso.com.mx";
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
const GOOGLE_ADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;
const GOOGLE_SITE_VERIFICATION = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "INNDESO | Desarrollo de software a la medida",
    template: "%s | INNDESO",
  },
  description:
    "Empresa de desarrollo de software en México: páginas web, tiendas en línea, apps móviles, APIs e integraciones, cloud y DevOps. Entregas ágiles, calidad y seguridad.",
  keywords: [
    "desarrollo de software",
    "aplicaciones web",
    "apps móviles",
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
      "Desarrollamos productos digitales: web, móvil y APIs con enfoque en negocio, rendimiento y seguridad.",
    images: [
      {
        url: "/INNDESO.jpg",
        width: 1200,
        height: 630,
        alt: "INNDESO - Desarrollo de software",
      },
    ],
    locale: "es_MX",
  },
  twitter: {
    card: "summary_large_image",
    site: "@inndeso",
    title: "INNDESO | Desarrollo de software",
    description:
      "Aplicaciones web y móviles, APIs e integraciones. Equipo senior y entregas ágiles.",
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

export default function RootLayout({ children }: { children: React.ReactNode }) {



  return (
    <html lang="es">
      <head>
        {GTM_ID && (
          <script
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
              sameAs: [
                'https://www.facebook.com/profile.php?id=61578554534142'
              ],
              contactPoint: [{
                '@type': 'ContactPoint',
                telephone: '+52-33-1205-0703',
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
              potentialAction: {
                '@type': 'SearchAction',
                target: `${SITE_URL}/?q={search_term_string}`,
                'query-input': 'required name=search_term_string'
              }
            })
          }}
        />
      </head>
      <body className="min-h-screen bg-gradient-to-b from-white via-neutral-50 to-white text-neutral-900 antialiased">
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
          {children}
        </div>

        {/* FOOTER */}
        <Footer/>
      </body>
    </html>
  );
}
