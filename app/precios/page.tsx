import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { pricePlans, whatsappUrl } from "@/lib/site-content";
import "./pricing-page.css";

export const metadata: Metadata = {
  title: "Precios de páginas web y cotización de software",
  description: "Consulta precios de páginas web y tiendas en línea. Cotizamos aplicaciones, sistemas administrativos, GPS e infraestructura según el alcance.",
  alternates: { canonical: "/precios/" },
  openGraph: {
    type: "website", url: "/precios/",
    title: "Precios de páginas web y software a la medida | INNDESO",
    description: "Planes claros para sitios web y cotizaciones personalizadas para sistemas, apps e infraestructura.",
    images: ["/visuals/oficina-software-inndeso.png"],
  },
};

export default function PreciosPage() {
  return (
    <main className="page-shell">
      <PageHero
        breadcrumbs={[{ name: "INNDESO", path: "/" }, { name: "Precios", path: "/precios/" }]}
        eyebrow="Precios de páginas web"
        title="Precios de páginas web y cotización de software a la medida."
        description="Los precios publicados en esta página corresponden a sitios web y tiendas con un alcance inicial definido. Si necesitas un sistema, una app, GPS, inventario o servidor, preparamos una cotización según tu operación."
        action={{ label: "Cotizar un sistema", href: "#cotizar-sistema" }}
      />

      <section className="page-section" aria-labelledby="planes">
        <div className="pricing-scope">
          <div>
            <span>PRECIOS PUBLICADOS</span>
            <strong>Páginas web y tiendas en línea</strong>
            <small>Paquetes con un punto de partida y entregables definidos.</small>
          </div>
          <i aria-hidden="true">≠</i>
          <div>
            <span>COTIZACIÓN PERSONALIZADA</span>
            <strong>Programas y aplicaciones a la medida</strong>
            <small>El precio cambia según las funciones, las personas que lo usan y el alcance.</small>
          </div>
        </div>

        <div className="page-section__intro">
          <div>
            <p className="page-eyebrow">Sitios y comercio electrónico</p>
            <h2 id="planes">Estos precios son para páginas web</h2>
          </div>
          <p>Elige el punto de partida más cercano a lo que necesitas. Antes de comenzar confirmamos contenido, entregables, calendario y cualquier función adicional.</p>
        </div>

        <div className="price-grid">
          {pricePlans.map((plan) => (
            <article className={`price-card${plan.featured ? " price-card--featured" : ""}`} key={plan.name}>
              {plan.featured ? <span className="price-card__badge">Más elegido</span> : null}
              <h2>{plan.name}</h2>
              <p className="price-card__price">{plan.price} <small>{plan.suffix}</small></p>
              <p className="price-card__description">{plan.description}</p>
              <ul>{plan.items.map((item) => <li key={item}>{item}</li>)}</ul>
              <a className={`page-button ${plan.featured ? "page-button--dark" : "page-button--outline"}`} href={whatsappUrl} target="_blank" rel="noopener noreferrer">Cotizar esta página</a>
              <small>{plan.note}</small>
            </article>
          ))}
        </div>

        <div className="pricing-web-note">
          <i>i</i>
          <p><strong>Importante:</strong> estos importes no corresponden al desarrollo de un programa administrativo o una aplicación móvil a la medida.</p>
          <a href="#cotizar-sistema">Necesito un sistema <span aria-hidden="true">↓</span></a>
        </div>
      </section>

      <section className="pricing-custom" id="cotizar-sistema" aria-labelledby="proyectos-medida">
        <div className="pricing-custom__heading">
          <div>
            <span className="pricing-custom__kicker"><i /> Software a la medida</span>
            <h2 id="proyectos-medida">¿Necesitas algo más que una página?</h2>
            <p>Los sistemas se cotizan de forma personalizada porque cada negocio trabaja de forma distinta. Primero definimos una etapa útil; después te entregamos precio, calendario y alcance por escrito.</p>
          </div>
          <div className="pricing-custom__actions">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">Cotizar un sistema a la medida <span aria-hidden="true">↗</span></a>
            <Link href="/proceso">Conocer el proceso <span aria-hidden="true">→</span></Link>
          </div>
        </div>

        <div className="pricing-custom__types" aria-label="Tipos de sistemas que cotizamos">
          <article><span>01</span><i>▦</i><h3>Administración y CRM</h3><p>Clientes, tareas, documentos, permisos y reportes.</p></article>
          <article><span>02</span><i>◇</i><h3>Aplicaciones móviles</h3><p>Apps para clientes, trabajadores o equipos en campo.</p></article>
          <article><span>03</span><i>⌖</i><h3>GPS y mapas en vivo</h3><p>Personal, vehículos, rutas, alertas y evidencias.</p></article>
          <article><span>04</span><i>▤</i><h3>Ventas e inventario</h3><p>Productos, compras, caja, cobranza y rentabilidad.</p></article>
          <article><span>05</span><i>⌘</i><h3>Servidores y conexión de sistemas</h3><p>Tu información protegida, disponible y conectada con las herramientas que ya usas.</p></article>
          <article><span>06</span><i>↻</i><h3>Tareas automáticas</h3><p>Menos captura repetida y más tiempo para atender el negocio.</p></article>
        </div>

        <div className="pricing-custom__quote">
          <div><span>1</span><p><strong>Nos cuentas tu operación</strong><small>No necesitas preparar un documento técnico.</small></p></div>
          <b aria-hidden="true">→</b>
          <div><span>2</span><p><strong>Definimos la primera etapa</strong><small>Personas, funciones, prioridades y forma de trabajo.</small></p></div>
          <b aria-hidden="true">→</b>
          <div><span>3</span><p><strong>Recibes una propuesta clara</strong><small>Alcance, entregables, calendario, pagos y precio.</small></p></div>
        </div>
      </section>

      <section className="page-section pricing-assurances" aria-labelledby="condiciones-proyecto">
        <div className="page-section__intro">
          <div><p className="page-eyebrow">Condiciones claras</p><h2 id="condiciones-proyecto">Qué puedes esperar al cotizar un sistema</h2></div>
          <p>Dividimos aplicaciones, GPS, inventarios, automatizaciones y servidores en etapas para controlar la inversión y validar resultados antes de seguir creciendo.</p>
        </div>
        <div className="assurance-grid">
          <article className="assurance-card">
            <h3>Pagos por avance</h3>
            <p>50/50 en proyectos simples; 40/30/30 o hitos definidos para implementaciones mayores. La propuesta establece cada entrega.</p>
          </article>
          <article className="assurance-card">
            <h3>Garantía técnica</h3>
            <p>30 días para corregir, sin costo, defectos relacionados con el alcance aprobado. Nuevas funciones o cambios de alcance se cotizan aparte.</p>
          </article>
          <article className="assurance-card">
            <h3>Propiedad y accesos</h3>
            <p>Entregamos los accesos y activos acordados. Hosting, cuentas de terceros y licencias quedan identificados desde la propuesta.</p>
          </article>
          <article className="assurance-card">
            <h3>Soporte posterior</h3>
            <p>Puedes contratar mantenimiento, monitoreo y evolución continua después del periodo de garantía, sin obligación de permanencia.</p>
          </article>
        </div>

        <div className="pricing-final-cta">
          <div><span>¿No sabes qué tipo de sistema necesitas?</span><h2>Explícanos cómo trabajas hoy.</h2><p>Nosotros te ayudamos a convertirlo en módulos, prioridades y una primera cotización.</p></div>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">Hablar sobre mi sistema <span aria-hidden="true">↗</span></a>
        </div>
      </section>
    </main>
  );
}
