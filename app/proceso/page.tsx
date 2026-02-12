import type { Metadata } from "next";
import Inicio7 from "@/components/inicio/Inicio7";

export const metadata: Metadata = {
  title: "Proceso",
  description:
    "Nuestro proceso de trabajo profesional: análisis, diseño, desarrollo y entrega con acompañamiento continuo.",
  alternates: { canonical: "/proceso" },
};

const WHATSAPP_URL =
  "https://wa.me/523312050703?text=Hola%20INNDESO%2C%20quiero%20iniciar%20mi%20proyecto%20con%20su%20proceso";

export default function ProcesoPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Proceso de trabajo INNDESO",
    description:
      "Proceso de trabajo profesional con análisis, diseño, desarrollo y entrega con acompañamiento continuo.",
  };

  return (
    <main className="bg-white" id="proceso">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="reveal-up bg-white px-4 pb-12 pt-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <h1 className="text-3xl font-semibold text-slate-900 sm:text-4xl">Proceso claro, entregas concretas</h1>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            Cada etapa tiene objetivos, responsables y entregables definidos para que tomes decisiones con visibilidad total.
          </p>
        </div>
      </section>

      <div className="reveal-up reveal-delay-1"><Inicio7 /></div>

      <section className="reveal-up reveal-delay-2 bg-white px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { t: "Alcance", d: "Definimos qué se construye y cómo se mide el éxito." },
            { t: "Ritmo", d: "Entregas parciales frecuentes para validar rápido." },
            { t: "Calidad", d: "Pruebas y revisión técnica en cada iteración." },
            { t: "Soporte", d: "Acompañamiento post-entrega para estabilidad y mejora." },
          ].map((item) => (
            <article key={item.t} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
              <h2 className="text-base font-semibold text-slate-900">{item.t}</h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.d}</p>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-10 max-w-4xl rounded-3xl border border-blue-100 bg-blue-50/60 p-7 text-center shadow-sm">
          <h3 className="text-xl font-semibold text-slate-900 sm:text-2xl">¿Quieres aplicar este proceso a tu proyecto?</h3>
          <p className="mt-3 text-slate-600">Te guiamos paso a paso para lanzar con menos riesgo y mayor velocidad.</p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-track-cta="true"
            data-cta-name="proceso_iniciar_proceso"
            data-cta-location="proceso_cta"
            className="mt-6 inline-flex h-11 items-center justify-center rounded-full bg-blue-600 px-8 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            Iniciar proceso
          </a>
        </div>
      </section>
    </main>
  );
}
