import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { whatsappUrl } from "@/lib/site-content";
import "./process-page.css";

export const metadata: Metadata = {
  title: "Cómo desarrollamos tu software",
  description: "Un proceso claro para diagnosticar, diseñar, desarrollar, probar, lanzar y acompañar software a la medida.",
  alternates: { canonical: "/proceso" },
};

const phases = [
  {
    number: "01",
    label: "Comprender",
    title: "Diagnóstico del negocio",
    description: "Antes de proponer pantallas, entendemos quién hace qué, dónde se pierde tiempo, qué datos existen y cuál sería una mejora útil.",
    deliverables: ["Mapa del proceso", "Usuarios y permisos", "Problemas prioritarios"],
    approval: "Confirmamos que entendimos la operación.",
    accent: "blue",
  },
  {
    number: "02",
    label: "Decidir",
    title: "Alcance y ruta del proyecto",
    description: "Separamos lo indispensable de lo que puede esperar. Presentamos módulos, tiempos, inversión, dependencias y una primera versión alcanzable.",
    deliverables: ["Funciones por etapa", "Calendario", "Propuesta y forma de pago"],
    approval: "Tú eliges qué se construye primero.",
    accent: "orange",
  },
  {
    number: "03",
    label: "Visualizar",
    title: "Flujos y diseño de interfaz",
    description: "Convertimos el alcance en recorridos y pantallas para validar la experiencia antes de invertir en la programación completa.",
    deliverables: ["Prototipo navegable", "Diseño adaptable", "Revisión de escenarios"],
    approval: "Apruebas cómo funcionará y cómo se verá.",
    accent: "violet",
  },
  {
    number: "04",
    label: "Construir",
    title: "Desarrollo por entregas",
    description: "Programamos en bloques funcionales. Puedes revisar avances reales, no solo porcentajes o reportes técnicos difíciles de comprobar.",
    deliverables: ["Módulos utilizables", "Backend e integraciones", "Revisiones periódicas"],
    approval: "Cada entrega se demuestra y se valida.",
    accent: "green",
  },
  {
    number: "05",
    label: "Comprobar",
    title: "Pruebas y preparación",
    description: "Revisamos permisos, datos, dispositivos, casos límite y tareas críticas. Después preparamos el entorno, la información y al equipo.",
    deliverables: ["Pruebas funcionales", "Correcciones", "Capacitación"],
    approval: "Confirmamos que el sistema está listo para operar.",
    accent: "blue",
  },
  {
    number: "06",
    label: "Evolucionar",
    title: "Lanzamiento y soporte",
    description: "Publicamos, monitoreamos la estabilidad y acompañamos el arranque. Las mejoras futuras parten de uso real y resultados observables.",
    deliverables: ["Puesta en operación", "Garantía técnica", "Plan de evolución"],
    approval: "Tu proyecto continúa con una base que puede crecer.",
    accent: "orange",
  },
] as const;

const productViews = [
  {
    image: "/portfolio/demos/centro-operativo-demo.svg",
    alt: "Panel administrativo de una operación centralizada",
    label: "Panel administrativo",
    detail: "Dirección y equipo trabajan con la misma información.",
  },
  {
    image: "/portfolio/geojornada/mapa-operativo-demo.webp",
    alt: "Mapa operativo con seguimiento GPS",
    label: "Operación en vivo",
    detail: "Ubicación, rutas, alertas y evidencias en contexto.",
  },
  {
    image: "/portfolio/libremente/inicio-anonimo.png",
    alt: "Aplicación móvil LibreMente",
    label: "Aplicación móvil",
    detail: "Una experiencia sencilla para quien trabaja o aprende.",
  },
] as const;

export default function ProcesoPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Cómo desarrollamos software a la medida",
    description: "Proceso de INNDESO para convertir una necesidad de negocio en software funcional.",
    step: phases.map((phase) => ({
      "@type": "HowToStep",
      position: Number(phase.number),
      name: phase.title,
      text: phase.description,
    })),
  };

  return (
    <main className="process-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="process-hero">
        <div className="process-hero__grid" aria-hidden="true" />
        <div className="process-hero__inner">
          <div className="process-hero__copy">
            <span className="process-kicker"><i /> Cómo trabajamos</span>
            <h1>De una idea confusa a un sistema que <span>tu equipo sí usa.</span></h1>
            <p>Primero entendemos la operación. Después diseñamos, construimos y demostramos cada avance hasta convertirlo en una herramienta lista para trabajar.</p>
            <div className="process-hero__actions">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">Platicar mi proyecto <span aria-hidden="true">↗</span></a>
              <Link href="#etapas">Conocer el proceso <span aria-hidden="true">↓</span></Link>
            </div>
            <div className="process-hero__assurances">
              <span><i>✓</i> Alcance visible</span>
              <span><i>✓</i> Entregas funcionales</span>
              <span><i>✓</i> Decisiones documentadas</span>
            </div>
          </div>

          <div className="process-hero__visual" aria-label="Seguimiento de un proyecto de software por etapas">
            <div className="process-hero__halo" />
            <div className="process-project">
              <div className="process-project__bar">
                <span><i /><i /><i /></span>
                <strong>INNDESO · Proyecto en desarrollo</strong>
                <small><i /> Avance compartido</small>
              </div>
              <div className="process-project__body">
                <aside>
                  <span className="is-active">Resumen</span>
                  <span>Alcance</span>
                  <span>Diseño</span>
                  <span>Entregas</span>
                  <span>Pruebas</span>
                </aside>
                <div className="process-project__screen">
                  <div className="process-project__heading">
                    <span>ENTREGA ACTUAL</span>
                    <strong>Centro de operaciones</strong>
                    <small>Versión funcional · revisión con cliente</small>
                  </div>
                  <div className="process-project__image">
                    <Image src="/portfolio/demos/centro-operativo-demo.svg" alt="Sistema administrativo funcional durante una entrega" fill priority sizes="(min-width: 1000px) 48vw, 94vw" />
                  </div>
                </div>
              </div>
            </div>

            <div className="process-review">
              <span>Revisión de etapa</span>
              <div><i className="is-done">✓</i><p><strong>Diagnóstico</strong><small>Aprobado</small></p></div>
              <div><i className="is-done">✓</i><p><strong>Prototipo</strong><small>Validado</small></p></div>
              <div><i className="is-live">03</i><p><strong>Versión funcional</strong><small>Lista para revisar</small></p></div>
            </div>

            <div className="process-delivery"><i>✓</i><span><small>Entrega disponible</small><strong>Puedes probarla hoy</strong></span></div>
          </div>
        </div>

        <div className="process-hero__route" aria-label="Resumen de las seis etapas">
          {phases.map((phase) => <span key={phase.number}><i>{phase.number}</i>{phase.label}</span>)}
        </div>
      </section>

      <section className="process-phases reveal-up" id="etapas" aria-labelledby="process-title">
        <div className="process-heading">
          <div><span className="process-kicker process-kicker--dark">Una decisión a la vez</span><h2 id="process-title">Seis etapas.<br />Siempre sabes qué sigue.</h2></div>
          <p>En todo momento sabes qué estamos resolviendo, qué recibes y qué necesitamos validar contigo para continuar.</p>
        </div>

        <div className="process-phases__grid">
          {phases.map((phase) => (
            <article className={`process-phase process-phase--${phase.accent}`} key={phase.number}>
              <header><span>{phase.number}</span><small>{phase.label}</small></header>
              <h3>{phase.title}</h3>
              <p>{phase.description}</p>
              <div className="process-phase__deliverables">
                <small>LO QUE RECIBES</small>
                <ul>{phase.deliverables.map((item) => <li key={item}><i />{item}</li>)}</ul>
              </div>
              <footer><i>✓</i><span><small>Punto de control</small><strong>{phase.approval}</strong></span></footer>
            </article>
          ))}
        </div>
      </section>

      <section className="process-clarity reveal-up">
        <div className="process-clarity__copy">
          <span className="process-kicker">Antes de programar</span>
          <h2>Primero definimos qué vamos a resolver.</h2>
          <p>No necesitas llegar con un documento técnico. Necesitamos conocer el problema, a las personas involucradas y el resultado que esperas mejorar.</p>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">Solicitar diagnóstico <span aria-hidden="true">↗</span></a>
        </div>

        <div className="process-clarity__board">
          <div className="process-clarity__board-head"><span>Definición inicial</span><small>Todo queda por escrito</small></div>
          <div className="process-clarity__row"><i>01</i><span><strong>Problema</strong><small>Qué sucede hoy y por qué importa</small></span><b>Definido</b></div>
          <div className="process-clarity__row"><i>02</i><span><strong>Usuarios</strong><small>Quién usa, aprueba y consulta</small></span><b>Definido</b></div>
          <div className="process-clarity__row"><i>03</i><span><strong>Primera versión</strong><small>Qué necesita funcionar primero</small></span><b>Priorizado</b></div>
          <div className="process-clarity__row"><i>04</i><span><strong>Inversión y calendario</strong><small>Cuánto, cuándo y por etapas</small></span><b>Visible</b></div>
          <div className="process-clarity__result"><i>✓</i><span><small>Resultado</small><strong>Una propuesta que sí puedes evaluar</strong></span></div>
        </div>
      </section>

      <section className="process-proof reveal-up" aria-labelledby="process-proof-title">
        <div className="process-heading">
          <div><span className="process-kicker process-kicker--dark">Del diseño a la operación</span><h2 id="process-proof-title">No mostramos promesas.<br />Mostramos avances.</h2></div>
          <p>Según el proyecto, la entrega puede ser un panel, una app, un mapa en vivo, un servidor o todo conectado.</p>
        </div>
        <div className="process-proof__grid">
          {productViews.map((view, index) => (
            <article className={index === 2 ? "process-proof__card process-proof__card--mobile" : "process-proof__card"} key={view.label}>
              <div><Image src={view.image} alt={view.alt} fill sizes="(max-width: 760px) 92vw, 32vw" /></div>
              <span>ENTREGA {String(index + 1).padStart(2, "0")}</span>
              <h3>{view.label}</h3>
              <p>{view.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="process-control">
        <div className="process-control__intro">
          <span className="process-kicker">Durante todo el proyecto</span>
          <h2>Control para ti. Responsabilidad para nosotros.</h2>
        </div>
        <div className="process-control__items">
          <article><i>01</i><h3>Avances demostrables</h3><p>Revisas funciones que ya puedes recorrer y probar.</p></article>
          <article><i>02</i><h3>Pagos por etapas</h3><p>La inversión acompaña el avance acordado del proyecto.</p></article>
          <article><i>03</i><h3>Cambios con contexto</h3><p>Explicamos el impacto antes de modificar alcance o calendario.</p></article>
          <article><i>04</i><h3>Propiedad clara</h3><p>Los entregables y condiciones se establecen desde la propuesta.</p></article>
        </div>
      </section>

      <section className="process-final">
        <span className="process-kicker"><i /> El primer paso es entender</span>
        <h2>Cuéntanos qué quieres mejorar.</h2>
        <p>Te ayudamos a convertirlo en una primera etapa concreta, útil y posible.</p>
        <div>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">Agendar diagnóstico <span aria-hidden="true">↗</span></a>
          <Link href="/proyectos">Ver proyectos reales <span aria-hidden="true">→</span></Link>
        </div>
      </section>
    </main>
  );
}
