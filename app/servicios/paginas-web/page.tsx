import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { whatsappUrl } from "@/lib/site-content";
import "@/components/seo-service.css";

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

const websiteTypes = [
  { number: "01", title: "Página de presentación", text: "Para explicar un servicio, mostrar confianza y recibir contactos por WhatsApp o formulario.", features: ["Una página", "Mensaje comercial", "Contacto directo"] },
  { number: "02", title: "Sitio para empresa", text: "Para organizar servicios, proyectos, proceso, preguntas frecuentes y datos de contacto en varias páginas.", features: ["Secciones completas", "SEO por servicio", "Contenido escalable"] },
  { number: "03", title: "Catálogo o tienda en línea", text: "Para presentar productos, recibir pedidos o vender en internet con una experiencia clara desde celular.", features: ["Productos", "Búsqueda y filtros", "Pedidos o pagos"] },
];

const websiteCases = [
  {
    name: "Sercomin",
    type: "Industria y catálogo",
    text: "Servicios, fabricación y productos industriales organizados para facilitar una consulta comercial.",
    image: "/portfolio/sercomin/servicios-industriales.webp",
    alt: "Sitio web de servicios industriales de Sercomin",
    href: "/proyectos/sercomin",
  },
  {
    name: "CellGo",
    type: "Comercio y refacciones",
    text: "Tienda, búsqueda por compatibilidad, ofertas y administración del negocio en una misma plataforma.",
    image: "/portfolio/cellgo/tienda-inicio.png",
    alt: "Tienda en línea de refacciones CellGo",
    href: "/proyectos/cellgo",
  },
  {
    name: "FertiKhor",
    type: "Empresa y productos",
    text: "Una presencia corporativa limpia para explicar la marca, su especialidad y sus canales de atención.",
    image: "/portfolio/FERTIKHOR/fertikhor-1.webp",
    alt: "Sitio corporativo de FertiKhor",
    href: "/proyectos/fertikhor",
  },
];

const questions = [
  { question: "¿Cuánto cuesta una página web?", answer: "Tenemos opciones desde $2,500 MXN para una presencia inicial. Un sitio con varias páginas, catálogo, pagos o funciones especiales se cotiza según el alcance." },
  { question: "¿La página aparecerá en Google?", answer: "La entregamos con estructura, títulos, descripciones, velocidad y bases técnicas para que Google pueda encontrarla. La posición mejora con contenido útil, autoridad y trabajo continuo; nadie puede prometer el primer lugar de forma legítima." },
  { question: "¿Incluye dominio y hospedaje?", answer: "Podemos ayudarte a elegirlos y configurarlos. Los costos de servicios externos se presentan por separado para que siempre sepas qué estás pagando y a nombre de quién queda cada cuenta." },
  { question: "¿Puedo actualizar textos e imágenes después?", answer: "Sí. Según el proyecto podemos incluir un administrador de contenido o realizar los cambios mediante un plan de soporte." },
];

export default function PaginasWebPage() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Diseño y desarrollo de páginas web profesionales",
      description: metadata.description,
      provider: { "@type": "Organization", name: "INNDESO", url: "https://inndeso.com.mx" },
      areaServed: [{ "@type": "City", name: "Guadalajara" }, { "@type": "State", name: "Jalisco" }, { "@type": "Country", name: "México" }],
      url: "https://inndeso.com.mx/servicios/paginas-web/",
      offers: { "@type": "Offer", priceCurrency: "MXN", price: "2500", description: "Opción inicial de página web; el alcance final se confirma por escrito." },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: questions.map((item) => ({ "@type": "Question", name: item.question, acceptedAnswer: { "@type": "Answer", text: item.answer } })),
    },
  ];

  return (
    <main className="page-shell">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <PageHero breadcrumbs={[{ name: "INNDESO", path: "/" }, { name: "Servicios", path: "/servicios/" }, { name: "Páginas web", path: "/servicios/paginas-web/" }]} eyebrow="Sitios que convierten" title="Páginas web profesionales que convierten visitas en clientes." description="Diseñamos páginas rápidas, claras y preparadas para que una visita entienda qué haces, confíe y sepa cómo contactarte." action={{ label: "Cotizar mi página", href: whatsappUrl, external: true }} />
      <section className="page-section web-cases" aria-labelledby="web-cases-title">
        <div className="page-section__intro">
          <div><p className="page-eyebrow">Proyectos web reales</p><h2 id="web-cases-title">Distintos negocios. Una experiencia clara.</h2></div>
          <p>Diseñamos cada sitio alrededor de lo que su cliente necesita encontrar: un servicio, un producto, una respuesta o una forma directa de contacto.</p>
        </div>
        <div className="web-cases__grid">
          {websiteCases.map((item, index) => (
            <article className={`web-case web-case--${index + 1}`} key={item.name}>
              <Link className="web-case__media" href={item.href} aria-label={`Ver caso ${item.name}`}>
                <Image src={item.image} alt={item.alt} fill priority={index === 0} sizes="(max-width: 800px) 92vw, 33vw" />
              </Link>
              <div className="web-case__content">
                <p>{item.type}</p>
                <h2>{item.name}</h2>
                <span>{item.text}</span>
                <Link href={item.href}>Ver proyecto <b aria-hidden="true">↗</b></Link>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="page-section">
        <div className="page-section__intro">
          <div><p className="page-eyebrow">Elige el punto de partida</p><h2>Una página distinta para cada objetivo.</h2></div>
          <p>No necesitas pedir una tecnología específica. Dinos si quieres recibir contactos, presentar tu empresa, mostrar un catálogo o vender; nosotros definimos la estructura adecuada.</p>
        </div>
        <div className="service-list">
          {websiteTypes.map((item) => (
            <article className="service-row" key={item.number}>
              <span className="service-row__number">{item.number}</span>
              <h2>{item.title}</h2>
              <div><p>{item.text}</p><ul>{item.features.map((feature) => <li key={feature}>{feature}</li>)}</ul></div>
            </article>
          ))}
        </div>
      </section>
      <section className="page-section">
        <div className="page-section__intro">
          <div><p className="page-eyebrow">Incluido desde el inicio</p><h2>Una presencia digital útil, no sólo bonita.</h2></div>
          <p>El contenido, la navegación y las llamadas a la acción se construyen alrededor de la decisión que quieres provocar en tu cliente.</p>
        </div>
        <div className="assurance-grid">{included.map((item) => <article className="assurance-card" key={item}><h3>{item}</h3><p>Definido y revisado dentro del alcance para que la entrega sea clara y medible.</p></article>)}</div>
      </section>
      <section className="page-section seo-service__faq">
        <div className="page-section__intro">
          <div><p className="page-eyebrow">Preguntas frecuentes</p><h2>Lo que conviene saber antes de contratar.</h2></div>
          <p>El alcance, calendario, entregables y costos se confirman por escrito antes de iniciar.</p>
        </div>
        <div>{questions.map((item) => <details key={item.question}><summary>{item.question}<span>+</span></summary><p>{item.answer}</p></details>)}</div>
      </section>
      <section className="page-section"><div className="page-cta"><div><h2>Opciones desde $2,500 MXN.</h2><p>Consulta los planes o cuéntanos si necesitas catálogo, reservas, pagos, integración con CRM o contenido avanzado.</p></div><Link className="page-button page-button--light" href="/precios">Ver precios <span aria-hidden="true">→</span></Link></div></section>
    </main>
  );
}
