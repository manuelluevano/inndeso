import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { caseStudies, services, whatsappUrl } from "@/lib/site-content";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import "./proyectos.css";

export const metadata: Metadata = {
  title: "Proyectos de software y apps desarrollados",
  description: "Conoce sistemas, aplicaciones, plataformas y soluciones de software desarrolladas por INNDESO para operaciones reales.",
  alternates: { canonical: "/proyectos/" },
  openGraph: {
    type: "website", url: "/proyectos/",
    title: "Proyectos de software y apps desarrollados | INNDESO",
    description: "Sistemas y aplicaciones desarrollados para resolver necesidades reales de empresas.",
    images: ["/visuals/oficina-software-inndeso.png"],
  },
};

export default function ProyectosPage() {
  const [featuredProject, ...projects] = caseStudies;

  return (
    <main className="projects-index">
      <BreadcrumbSchema items={[{ name: "INNDESO", path: "/" }, { name: "Proyectos", path: "/proyectos/" }]} />
      <section className="projects-hero">
        <div className="projects-hero__orb projects-hero__orb--one" aria-hidden="true" />
        <div className="projects-hero__orb projects-hero__orb--two" aria-hidden="true" />

        <div className="projects-hero__inner">
          <div className="projects-hero__copy">
            <p className="projects-kicker"><i aria-hidden="true" /> Portafolio de producto</p>
            <h1>Proyectos de software para operaciones reales.</h1>
            <p className="projects-hero__lead">
              Una selección de plataformas completas para dirigir equipos, seguir rutas, vender, aprender,
              controlar inventarios y conectar operaciones en tiempo real.
            </p>
            <div className="projects-hero__actions">
              <a className="projects-button projects-button--primary" href="#casos">
                Explorar los sistemas <span aria-hidden="true">↓</span>
              </a>
              <Link className="projects-button projects-button--ghost" href="/servicios">
                Ver capacidades <span aria-hidden="true">→</span>
              </Link>
            </div>
            <div className="projects-hero__proof" aria-label="Resumen del portafolio">
              <div><strong>{String(caseStudies.length).padStart(2, "0")}</strong><span>productos documentados</span></div>
              <div><strong>Web + apps</strong><span>un mismo ecosistema</span></div>
              <div><strong>En vivo</strong><span>datos, rutas y operación</span></div>
            </div>
          </div>

          <div className="projects-hero__stage" aria-label="Vista previa de sistemas desarrollados">
            <div className="projects-hero__stage-label"><i aria-hidden="true" /> Sistemas en operación</div>
            <div className="projects-hero__screen projects-hero__screen--main">
              <Image src={caseStudies[1].cover} alt={caseStudies[1].coverAlt} fill priority sizes="(max-width: 900px) 92vw, 48vw" />
            </div>
            <div className="projects-hero__screen projects-hero__screen--side">
              <Image src={caseStudies[3].cover} alt={caseStudies[3].coverAlt} fill priority sizes="(max-width: 900px) 45vw, 22vw" />
            </div>
            <div className="projects-hero__phone">
              <Image src="/portfolio/libremente/inicio-anonimo.png" alt="Aplicación móvil educativa LibreMente" fill priority sizes="(max-width: 900px) 25vw, 10vw" />
            </div>
            <span className="projects-hero__live"><i aria-hidden="true" /> GPS y datos conectados</span>
          </div>
        </div>
      </section>

      <section className="projects-showcase reveal-up" id="casos" aria-labelledby="casos-title">
        <div className="projects-section-heading">
          <div>
            <p className="projects-kicker projects-kicker--blue">Casos seleccionados</p>
            <h2 id="casos-title">{caseStudies.length} productos.<br />Mucho más que pantallas.</h2>
          </div>
          <p>
            Cada caso abre el sistema completo: el problema que resuelve, las plataformas conectadas,
            sus funciones principales y una galería de la experiencia real.
          </p>
        </div>

        <article className={`projects-feature projects-feature--${featuredProject.theme}`}>
          <div className="projects-feature__visual">
            <Image src={featuredProject.cover} alt={featuredProject.coverAlt} fill sizes="(max-width: 900px) 100vw, 62vw" />
            <span className="projects-feature__number">01</span>
            <span className="projects-feature__status"><i aria-hidden="true" /> Caso destacado</span>
          </div>
          <div className="projects-feature__content">
            <div>
              <span className="projects-feature__category">{featuredProject.category}</span>
              <p>{featuredProject.descriptor}</p>
            </div>
            <h3>{featuredProject.name}</h3>
            <p className="projects-feature__headline">{featuredProject.headline}</p>
            <ul className="projects-feature__capabilities">
              {featuredProject.capabilities.slice(0, 4).map((capability) => <li key={capability}>{capability}</li>)}
            </ul>
            <Link className="projects-feature__link" href={`/proyectos/${featuredProject.slug}`}>
              Entrar al caso completo <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </article>

        <div className="projects-editorial-grid">
          {projects.map((project, index) => (
            <article className={`projects-card projects-card--${project.theme}`} key={project.slug}>
              <div className="projects-card__topline">
                <span>0{index + 2}</span>
                <span>{project.category}</span>
              </div>
              <div className="projects-card__visual">
                <Image src={project.cover} alt={project.coverAlt} fill sizes="(max-width: 760px) 100vw, 48vw" />
              </div>
              <div className="projects-card__content">
                <span>{project.descriptor}</span>
                <h3>{project.name}</h3>
                <p>{project.headline}</p>
                <div className="projects-card__footer">
                  <ul aria-label={`Plataformas de ${project.name}`}>
                    {project.platforms.slice(0, 3).map((platform) => <li key={platform}>{platform}</li>)}
                  </ul>
                  <Link href={`/proyectos/${project.slug}`} aria-label={`Explorar proyecto ${project.name}`}>Ver caso <span aria-hidden="true">↗</span></Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="projects-proof reveal-up" aria-labelledby="proof-title">
        <div className="projects-proof__heading">
          <p className="projects-kicker"><i aria-hidden="true" /> Capacidades demostradas</p>
          <h2 id="proof-title">Distintas industrias.<br /><span>La misma profundidad.</span></h2>
          <p>Los proyectos cambian de industria, pero comparten la misma base: información útil, procesos claros y tecnología que sí llega al trabajo diario.</p>
        </div>
        <div className="projects-proof__grid">
          {services.map((service) => (
            <article key={service.id}>
              <span>{service.number}</span>
              <h3>{service.title}</h3>
              <p>{service.short}</p>
              <Link href={`/servicios#${service.id}`}>Conocer solución <i aria-hidden="true">→</i></Link>
            </article>
          ))}
        </div>
      </section>

      <section className="projects-contact reveal-up">
        <div>
          <p className="projects-kicker projects-kicker--blue">El siguiente puede ser el tuyo</p>
          <h2>Tu operación no tiene que parecerse a ninguna otra.</h2>
        </div>
        <div>
          <p>Cuéntanos qué necesitas controlar. Diseñamos una primera etapa clara y la cotizamos por alcance.</p>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">Platicar sobre mi sistema <span aria-hidden="true">↗</span></a>
        </div>
      </section>
    </main>
  );
}
