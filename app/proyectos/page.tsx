import type { Metadata } from "next";
import Inicio4 from "@/components/inicio/Inicio4";
import Inicio5 from "@/components/inicio/Inicio5";

export const metadata: Metadata = {
  title: "Proyectos",
  description:
    "Proyectos desarrollados por INNDESO: soluciones digitales reales para empresas en distintos giros.",
  alternates: { canonical: "/proyectos" },
};

const WHATSAPP_URL =
  "https://wa.me/523312050703?text=Hola%20INNDESO%2C%20quiero%20ver%20casos%20reales%20de%20proyectos";

export default function ProyectosPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Proyectos INNDESO",
    description:
      "Portafolio de proyectos y empresas que confían en nuestras soluciones digitales.",
  };

  return (
    <main className="bg-white" id="proyectos">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="reveal-up bg-white px-4 pb-12 pt-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <h1 className="text-3xl font-semibold text-slate-900 sm:text-4xl">Proyectos reales, resultados medibles</h1>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            Exploramos soluciones que ya están funcionando para empresas como la tuya.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-track-cta="true"
            data-cta-name="proyectos_solicitar_presentacion"
            data-cta-location="proyectos_hero"
            className="mt-6 inline-flex h-11 items-center justify-center rounded-full bg-blue-600 px-8 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            Solicitar presentación
          </a>
        </div>
      </section>
      <div className="reveal-up reveal-delay-1"><Inicio4 /></div>
      <div className="reveal-up reveal-delay-2"><Inicio5 /></div>
    </main>
  );
}
