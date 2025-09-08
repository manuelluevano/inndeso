
import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";


const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

export const metadata: Metadata = {
  title: "INNDESO",
  description: "Inovacion y desarrollo de software.",
  icons: {
    icon: "/inndeso/icono.png", // ruta desde /public
  },
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
      </head>
      <body className="min-h-screen bg-neutral-50 text-neutral-900">
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
        {children}

      </body>
    </html>
  );
}