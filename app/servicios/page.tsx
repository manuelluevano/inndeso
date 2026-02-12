import type { Metadata } from "next";
import Inicio2 from "@/components/inicio/Inicio2";
import Inicio8 from "@/components/inicio/Inicio8";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Diseñamos, desarrollamos y optimizamos soluciones digitales para generar resultados reales en ventas y operación.",
  alternates: { canonical: "/servicios" },
};

const WHATSAPP_URL =
  "https://wa.me/523312050703?text=Hola%20INNDESO%2C%20quiero%20cotizar%20un%20servicio%20de%20desarrollo";

export default function ServiciosPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Servicios INNDESO",
    description:
      "Diseñamos, desarrollamos y optimizamos soluciones digitales para generar resultados reales en ventas y operación.",
  };

  return (
    <main className="bg-white" id="servicios">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="reveal-up bg-white px-4 pb-16 pt-10 sm:px-6 lg:px-8 lg:pb-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 rounded-3xl border border-slate-200 bg-gradient-to-r from-white to-slate-50 p-7 shadow-sm lg:grid-cols-[1.3fr,1fr] lg:p-10">
          <div>
            <p className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-700">
              Servicios estratégicos
            </p>
            <h1 className="mt-4 text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl">
              Construimos soluciones digitales para vender más y operar mejor
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
              Combinamos diseño, desarrollo y automatización para transformar tus ideas en plataformas reales,
              medibles y escalables.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-track-cta="true"
                data-cta-name="servicios_solicitar_propuesta_hero"
                data-cta-location="servicios_hero"
                className="inline-flex h-11 items-center justify-center rounded-full bg-blue-600 px-6 text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                Solicitar propuesta
              </a>
              <a
                href="/proyectos"
                data-track-cta="true"
                data-cta-name="servicios_ver_casos_reales_hero"
                data-cta-location="servicios_hero"
                className="inline-flex h-11 items-center justify-center rounded-full border border-slate-300 px-6 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                Ver casos reales
              </a>
            </div>
          </div>
          <div className="grid gap-3 text-sm text-slate-700 sm:grid-cols-2 lg:grid-cols-1">
            {[
              "Páginas y plataformas web orientadas a conversión.",
              "Sistemas internos para automatizar procesos.",
              "Integraciones y flujos para reducir trabajo manual.",
              "Acompañamiento post-entrega para evolución continua.",
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="reveal-up reveal-delay-1"><Inicio2 /></div>

      <section className="reveal-up reveal-delay-2 bg-white px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-5xl rounded-3xl border border-blue-100 bg-blue-50/50 p-7 text-center shadow-sm sm:p-10">
          <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">¿Listo para iniciar tu proyecto?</h2>
          <p className="mt-3 text-slate-600">
            Te ayudamos a definir alcance, tiempos y presupuesto con una propuesta clara desde el primer contacto.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-track-cta="true"
            data-cta-name="servicios_hablar_asesor_cta"
            data-cta-location="servicios_cta"
            className="mt-7 inline-flex h-11 items-center justify-center rounded-full bg-blue-600 px-8 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            Hablar con un asesor
          </a>
        </div>
      </section>

      <div className="reveal-up reveal-delay-3"><Inicio8 /></div>
    </main>
  );
}
