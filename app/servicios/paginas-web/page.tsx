import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import { whatsappUrl } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Diseño y desarrollo de páginas web en Guadalajara",
  description: "Diseñamos y desarrollamos páginas web profesionales, rápidas y adaptadas a dispositivos móviles para empresas en Guadalajara y México.",
  alternates: { canonical: "/servicios/paginas-web/" },
  openGraph: {
    type: "website", url: "/servicios/paginas-web/",
    title: "Diseño y desarrollo de páginas web en Guadalajara | INNDESO",
    description: "Páginas web profesionales para empresas que buscan una presencia digital moderna y confiable.",
    images: ["/visuals/oficina-software-inndeso.png"],
  },
};

const included = ["Estructura y mensajes comerciales", "Diseño adaptable a celular", "WhatsApp y formulario", "SEO técnico esencial", "Medición de contactos", "Publicación y capacitación"];

export default function PaginasWebPage() {
  return (
    <main className="page-shell">
      <PageHero breadcrumbs={[{ name: "INNDESO", path: "/" }, { name: "Servicios", path: "/servicios/" }, { name: "Páginas web", path: "/servicios/paginas-web/" }]} eyebrow="Sitios que convierten" title="Páginas web profesionales que convierten visitas en clientes." description="Diseñamos páginas rápidas, claras y preparadas para que una visita entienda qué haces, confíe y sepa cómo contactarte." action={{ label: "Cotizar mi página", href: whatsappUrl, external: true }} />
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
