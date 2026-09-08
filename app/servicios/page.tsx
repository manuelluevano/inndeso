import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { caseStudies, services, whatsappUrl } from "@/lib/site-content";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import "./services-page.css";

export const metadata: Metadata = {
  title: "Desarrollo de software y apps en Guadalajara",
  description:
    "Desarrollo de software, sistemas administrativos, aplicaciones móviles, páginas web y soluciones digitales a la medida para empresas.",
  alternates: { canonical: "/servicios/" },
  openGraph: {
    type: "website", url: "/servicios/",
    title: "Desarrollo de software y apps en Guadalajara | INNDESO",
    description: "Soluciones digitales creadas alrededor de las necesidades reales de cada empresa.",
    images: ["/visuals/oficina-software-inndeso.png"],
  },
};

const serviceMedia: Record<
  string,
  { src?: string; alt: string; label: string; kind: "desktop" | "map" | "mobile" | "web" | "network" }
> = {
  software: {
    src: "/portfolio/demos/centro-operativo-demo.svg",
    alt: "Panel empresarial centralizado con ventas, inventario y operación",
    label: "Centro de operaciones",
    kind: "desktop",
  },
  gps: {
    src: "/portfolio/geojornada/mapa-operativo-demo.webp",
    alt: "Mapa operativo con ubicación GPS de personal en tiempo real",
    label: "Ubicación recibida ahora",
    kind: "map",
  },
  apps: {
    alt: "Aplicaciones móviles conectadas a una misma operación",
    label: "iOS + Android",
    kind: "mobile",
  },
  ventas: {
    src: "/portfolio/cellgo/panel-administrativo.png",
    alt: "Panel de ventas, inventario, clientes y reparaciones de CellGo",
    label: "Ventas e inventario",
    kind: "desktop",
  },
  web: {
    src: "/portfolio/cellgo/tienda-inicio.png",
    alt: "Tienda en línea de refacciones desarrollada para CellGo",
    label: "Comercio en línea",
    kind: "web",
  },
  infraestructura: {
    alt: "Conexión segura entre aplicaciones, información y respaldo del negocio",
    label: "Información protegida",
    kind: "network",
  },
};

function ServiceMedia({ serviceId }: { serviceId: string }) {
  const media = serviceMedia[serviceId];

  if (media.kind === "mobile") {
    return (
      <div className="services-card__media services-card__media--mobile" aria-label={media.alt}>
        <div className="services-phone services-phone--back">
          <i />
          <Image
            src="/portfolio/geojornada/evidencia-movil-demo.webp"
            alt="Aplicación GeoJornada para evidencias"
            fill
            sizes="150px"
          />
        </div>
        <div className="services-phone services-phone--front">
          <i />
          <Image
            src="/portfolio/sana-life/venta-movil-demo.svg"
            alt="Aplicación Sana Life para ventas en campo"
            fill
            sizes="170px"
          />
        </div>
        <span className="services-card__status"><i /> {media.label}</span>
      </div>
    );
  }

  if (media.kind === "network") {
    return (
      <div className="services-card__media services-card__media--network" aria-label={media.alt}>
        <div className="services-network">
          <span className="services-network__line services-network__line--one" />
          <span className="services-network__line services-network__line--two" />
          <span className="services-network__line services-network__line--three" />
          <div className="services-network__node services-network__node--app"><i>APP</i><strong>Aplicaciones</strong></div>
          <div className="services-network__node services-network__node--api"><i>RED</i><strong>Conexión central</strong></div>
          <div className="services-network__node services-network__node--data"><i>DB</i><strong>Base de datos</strong></div>
          <div className="services-network__node services-network__node--server"><i>24/7</i><strong>Respaldo</strong></div>
        </div>
        <span className="services-card__status"><i /> {media.label}</span>
      </div>
    );
  }

  return (
    <div className={`services-card__media services-card__media--${media.kind}`}>
      <div className="services-card__window">
        <div className="services-card__window-bar"><i /><i /><i /><span>{media.label}</span></div>
        <div className="services-card__window-screen">
          <Image src={media.src!} alt={media.alt} fill sizes="(max-width: 800px) 92vw, 54vw" />
        </div>
      </div>
      <span className="services-card__status"><i /> {media.label}</span>
    </div>
  );
}

export default function ServiciosPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Soluciones de software INNDESO",
    itemListElement: services.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: { "@type": "Service", name: service.title, description: service.description },
    })),
  };

  return (
    <main className="services-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <BreadcrumbSchema items={[{ name: "INNDESO", path: "/" }, { name: "Servicios", path: "/servicios/" }]} />

      <section className="services-hero">
        <div className="services-hero__grid" aria-hidden="true" />
        <div className="services-hero__inner">
          <div className="services-hero__copy">
            <span className="services-kicker"><i /> Software conectado de principio a fin</span>
            <h1>Desarrollo de software y aplicaciones <span>a la medida.</span></h1>
            <p>
              Unimos ventas, inventario, clientes, personal, rutas, aplicaciones y servidores para que tu equipo trabaje con la misma información.
            </p>
            <div className="services-hero__actions">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">Cuéntanos tu operación <span aria-hidden="true">↗</span></a>
              <Link href="#soluciones">Explorar soluciones <span aria-hidden="true">↓</span></Link>
            </div>
            <div className="services-hero__proof" aria-label="Plataformas de desarrollo">
              <span>Web</span><span>Windows</span><span>macOS</span><span>iOS</span><span>Android</span><span>Linux</span>
            </div>
          </div>

          <div className="services-hero__visual" aria-label="Ecosistema de software empresarial conectado">
            <div className="services-hero__orbit services-hero__orbit--one" />
            <div className="services-hero__orbit services-hero__orbit--two" />
            <div className="services-hero__browser">
              <div className="services-hero__browser-top"><i /><i /><i /><span>INNDESO · Centro de operaciones</span><b><i /> En línea</b></div>
              <div className="services-hero__screen">
                <Image src="/portfolio/demos/centro-operativo-demo.svg" alt="Panel centralizado de operación empresarial" fill priority sizes="(min-width: 1000px) 55vw, 94vw" />
              </div>
            </div>
            <div className="services-hero__phone"><i /><div><Image src="/portfolio/sana-life/venta-movil-demo.svg" alt="Aplicación móvil conectada al panel" fill sizes="150px" /></div></div>
            <div className="services-hero__node services-hero__node--web"><i>01</i><span><small>Panel web</small><strong>Administra</strong></span></div>
            <div className="services-hero__node services-hero__node--gps"><i>02</i><span><small>GPS en vivo</small><strong>Supervisa</strong></span></div>
            <div className="services-hero__node services-hero__node--server"><i>03</i><span><small>Servidor</small><strong>Sincroniza</strong></span></div>
            <div className="services-hero__signal"><i /> Todos los sistemas conectados</div>
          </div>
        </div>

        <div className="services-hero__footer">
          <span>Una sola operación</span>
          <p>La información entra una vez y se aprovecha en toda la operación.</p>
          <div><i /> Panel <b>→</b><i /> App <b>→</b><i /> Información <b>→</b><i /> Respaldo</div>
        </div>
      </section>

      <section className="services-solutions" id="soluciones" aria-labelledby="servicios-lista">
        <div className="services-section-heading">
          <div><span className="services-kicker services-kicker--dark">Capacidades</span><h2 id="servicios-lista">Seis soluciones.<br />Una operación conectada.</h2></div>
          <p>No vendemos módulos aislados. Diseñamos cada parte para resolver un problema real y compartir la información que necesita el resto del negocio.</p>
        </div>

        <div className="services-bento">
          {services.map((service) => (
            <article className={`services-card services-card--${service.id}`} id={service.id} key={service.id}>
              <div className="services-card__heading">
                <span>{service.number}</span>
                <div><small>{service.short}</small><h2>{service.title}</h2></div>
              </div>
              <ServiceMedia serviceId={service.id} />
              <div className="services-card__copy">
                <p>{service.description}</p>
                <ul>{service.capabilities.map((capability) => <li key={capability}>{capability}</li>)}</ul>
              </div>
              <a className="services-card__link" href={whatsappUrl} target="_blank" rel="noopener noreferrer">Consultar esta solución <span aria-hidden="true">↗</span></a>
            </article>
          ))}
        </div>
      </section>

      <section className="services-architecture">
        <div className="services-architecture__copy">
          <span className="services-kicker">El valor está en la conexión</span>
          <h2>Tu equipo trabaja unido, esté donde esté.</h2>
          <p>Tu cliente puede comprar desde la web, el trabajador actualizar desde su app y administración consultar el resultado en el panel. Una sola operación, sin reconstruir información entre herramientas.</p>
          <Link href="/proceso">Así construimos cada etapa <span aria-hidden="true">→</span></Link>
        </div>
        <div className="services-architecture__flow" aria-label="Flujo de una operación conectada">
          <div><span>01</span><i>WEB</i><strong>Cliente</strong><small>Compra o solicita</small></div>
          <b>→</b>
          <div><span>02</span><i>APP</i><strong>Equipo</strong><small>Atiende y actualiza</small></div>
          <b>→</b>
          <div><span>03</span><i>TODO</i><strong>Sistema</strong><small>Ordena la información</small></div>
          <b>→</b>
          <div><span>04</span><i>DATA</i><strong>Dirección</strong><small>Mide y decide</small></div>
        </div>
      </section>

      <section className="services-work" aria-labelledby="servicios-trabajo-real">
        <div className="services-section-heading">
          <div><span className="services-kicker services-kicker--dark">Trabajo comprobable</span><h2 id="servicios-trabajo-real">Mira estas capacidades funcionando.</h2></div>
          <p>Abre cada proyecto para recorrer paneles, aplicaciones, mapas, inventarios y flujos desarrollados para operaciones reales.</p>
        </div>
        <div className="services-work__grid">
          {caseStudies.map((project) => (
            <Link href={`/proyectos/${project.slug}`} key={project.slug}>
              <div><Image src={project.cover} alt={project.coverAlt} fill sizes="(max-width:700px) 94vw, 25vw" /></div>
              <span>{project.category}</span><h3>{project.name}</h3><p>{project.headline}</p><i aria-hidden="true">↗</i>
            </Link>
          ))}
        </div>
      </section>

      <section className="services-final">
        <span className="services-kicker">Software pensado para tu operación</span>
        <h2>¿Qué debería funcionar mejor en tu empresa?</h2>
        <p>Explícanos el proceso. Te ayudamos a convertirlo en una primera etapa clara, medible y posible.</p>
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">Cotizar una solución <span aria-hidden="true">↗</span></a>
      </section>
    </main>
  );
}
