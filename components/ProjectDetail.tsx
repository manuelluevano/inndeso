import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { caseStudies, whatsappUrl } from "@/lib/site-content";

const stories: Record<string, { challenge: string; solution: string; value: string }> = {
  geojornada: {
    challenge: "Supervisar personal fuera de oficina suele depender de llamadas, mensajes y fotografías aisladas. Eso vuelve difícil distinguir una jornada activa de información atrasada.",
    solution: "El sistema conecta el panel administrativo con la aplicación del trabajador: registra jornadas, recibe ubicación, muestra última señal y batería, conserva recorridos y organiza evidencias dentro del mismo expediente.",
    value: "La operación obtiene una vista común para seguimiento, incidencias y comprobación de trabajo sin reconstruir el día desde conversaciones dispersas.",
  },
  "sana-life": {
    challenge: "Coordinar rutas de reparto, clientes, producto disponible, ventas y cobranza desde herramientas separadas reduce la visibilidad y multiplica capturas manuales.",
    solution: "Sana Life integra planeación de recorridos, mapa operativo, app del repartidor, inventario por unidad, venta en campo, evidencia, corte de caja, métricas y reportes.",
    value: "Administración y personal de campo trabajan sobre la misma operación, desde la ruta asignada hasta la entrega y el registro del cobro.",
  },
  movilsource: {
    challenge: "Un taller necesita seguir equipos, clientes, diagnósticos, refacciones, cobros y garantías sin perder contexto entre mostrador y área técnica.",
    solution: "La aplicación concentra recepción, taller, cotizador, inventario, accesorios, compras, caja, garantías, reportes y documentos para el cliente.",
    value: "Cada servicio conserva trazabilidad operativa y financiera desde que el equipo entra hasta que se entrega.",
  },
  marshop: {
    challenge: "Administrar ventas a plazos desde libretas o conversaciones separadas vuelve difícil saber qué producto sigue disponible, cuánto debe cada clienta y qué cobros requieren atención.",
    solution: "MarShop reúne el catálogo con fotografías, costos, precios y existencias; conserva el expediente de cada clienta; calcula planes de abonos; organiza vencimientos y muestra caja, gastos y utilidad en una aplicación nativa para Mac.",
    value: "La propietaria puede atender ventas, consultar saldos y decidir qué reponer sin reconstruir la operación entre notas, mensajes y hojas de cálculo.",
  },
  cellgo: {
    challenge: "Vender refacciones y atender un taller exige que catálogo, compatibilidad, disponibilidad, ventas y reparaciones compartan la misma información.",
    solution: "CellGo conecta una tienda pública para buscar y comprar piezas con un panel interno para administrar inventario, clientes, cotizaciones, ventas, compras y equipos en reparación.",
    value: "El cliente encuentra la pieza correcta con mayor claridad y el equipo conserva el control de la operación desde una sola plataforma.",
  },
  libremente: {
    challenge: "Mejorar la lectura exige constancia, pero las prácticas tradicionales suelen sentirse aisladas y no muestran con claridad cuánto está avanzando cada persona.",
    solution: "LibreMente transforma el aprendizaje en una ruta móvil por niveles: reúne biblioteca, sesiones de lectura, comprensión, vocabulario, gramática, ortografía, metas diarias, puntos, rachas y seguimiento de habilidades.",
    value: "La persona sabe qué practicar cada día, ve su progreso y construye un hábito lector mediante sesiones breves, claras y motivadoras.",
  },
  planifica40: {
    challenge: "El análisis de pensiones reúne documentos extensos, semanas cotizadas, salarios históricos, reglas y escenarios que resultan difíciles de comparar de forma manual para cada cliente.",
    solution: "Planifica40 recibe el estado de cuenta, extrae y organiza la información relevante, permite ajustar múltiples escenarios de proyección y concentra los cálculos dentro de una aplicación de escritorio para Windows.",
    value: "El asesor reduce captura repetitiva, compara alternativas con una base consistente y entrega al cliente un reporte PDF claro, además de conservar la información exportable en Excel.",
  },
};

export default function ProjectDetail({ slug }: { slug: string }) {
  const project = caseStudies.find((item) => item.slug === slug);
  if (!project) return null;
  const story = stories[project.slug];
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.name,
    description: project.summary,
    creator: { "@type": "Organization", name: "INNDESO" },
  };

  return (
    <main className={`page-shell page-shell--${project.slug}`}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageHero eyebrow={project.category} title={project.headline} description={project.summary} action={{ label: "Ver todos los proyectos", href: "/proyectos" }} />

      <section className="page-section reveal-up">
        <div className="case-detail__hero-media"><Image src={project.cover} alt={project.coverAlt} width={1800} height={1050} priority /></div>
        <div className="case-detail__facts">
          <div className="case-fact"><span>Proyecto</span><strong>{project.name}</strong></div>
          <div className="case-fact"><span>Enfoque</span><strong>{project.descriptor}</strong></div>
          <div className="case-fact"><span>Plataformas</span><strong>{project.platforms.join(" · ")}</strong></div>
          <div className="case-fact"><span>Alcance</span><strong>{project.capabilities.length} capacidades clave</strong></div>
        </div>
      </section>

      <section className="page-section reveal-up">
        <div className="case-detail__story">
          <div><p className="page-eyebrow">El sistema</p><h2>Lo que resolvimos y cómo funciona.</h2></div>
          <div>
            <p><strong>El reto.</strong> {story.challenge}</p>
            <p><strong>La solución.</strong> {story.solution}</p>
            <p><strong>El valor.</strong> {story.value}</p>
            <ul>{project.capabilities.map((capability) => <li key={capability}>{capability}</li>)}</ul>
          </div>
        </div>
      </section>

      <section className="page-section reveal-up" aria-labelledby={`galeria-${slug}`}>
        <div className="page-section__intro">
          <div><p className="page-eyebrow">Vista del producto</p><h2 id={`galeria-${slug}`}>Pantallas que explican el flujo</h2></div>
          <p>{project.disclosure}</p>
        </div>
        <div className={`case-gallery${project.slug === "libremente" ? " case-gallery--portrait" : ""}`}>
          {project.gallery.map((item) => (
            <figure key={item.src}>
              <div className="case-gallery__media">
                <Image src={item.src} alt={item.alt} width={1600} height={1000} />
              </div>
              <figcaption>{item.label}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="page-section reveal-up">
        <div className="page-cta">
          <div><h2>¿Quieres una solución con esta capacidad?</h2><p>Diseñamos la combinación de funciones, plataformas e infraestructura que necesita la operación real de tu empresa.</p></div>
          <a className="page-button page-button--light" href={whatsappUrl} target="_blank" rel="noopener noreferrer">Hablar de mi sistema <span aria-hidden="true">↗</span></a>
        </div>
      </section>

      <div className="page-section case-detail__back"><Link className="page-button page-button--outline" href="/proyectos">← Regresar a proyectos</Link></div>
    </main>
  );
}
