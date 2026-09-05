import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import { whatsappUrl } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Páginas web profesionales",
  description: "Páginas web rápidas, claras y optimizadas para presentar tu empresa, generar confianza y convertir visitas en contactos.",
  alternates: { canonical: "/servicios/paginas-web" },
};

const included = ["Estructura y mensajes comerciales", "Diseño adaptable a celular", "WhatsApp y formulario", "SEO técnico esencial", "Medición de contactos", "Publicación y capacitación"];

export default function PaginasWebPage() {
  return (
    <main className="page-shell">
      <PageHero eyebrow="Sitios que convierten" title="Tu empresa debe verse tan profesional como trabaja." description="Diseñamos páginas rápidas, claras y preparadas para que una visita entienda qué haces, confíe y sepa cómo contactarte." action={{ label: "Cotizar mi página", href: whatsappUrl, external: true }} />
      <section className="page-section">
        <div className="service-landing__visual"><Image src="/portfolio/FERTIKHOR/fertikhor-1.png" alt="Ejemplo de sitio web empresarial desarrollado por INNDESO" width={1800} height={1050} priority /></div>
      </section>
      <section className="page-section">
        <div className="page-section__intro">
          <div><p className="page-eyebrow">Incluido desde el inicio</p><h2>Una presencia digital útil, no sólo bonita.</h2></div>
          <p>El contenido, la navegación y las llamadas a la acción se construyen alrededor de la decisión que quieres provocar en tu cliente.</p>
        </div>
        <div className="assurance-grid">{included.map((item) => <article className="assurance-card" key={item}><h3>{item}</h3><p>Definido y revisado dentro del alcance para que la entrega sea clara y medible.</p></article>)}</div>
      </section>
      <section className="page-section"><div className="page-cta"><div><h2>Opciones desde $2,500 MXN.</h2><p>Consulta los planes o cuéntanos si necesitas catálogo, reservas, pagos, integración con CRM o contenido avanzado.</p></div><a className="page-button page-button--light" href="/precios">Ver precios <span aria-hidden="true">→</span></a></div></section>
    </main>
  );
}
