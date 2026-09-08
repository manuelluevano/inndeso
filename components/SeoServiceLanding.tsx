import Image from "next/image";
import Link from "next/link";
import type { SeoServicePage } from "@/lib/seo-services";
import { whatsappUrl } from "@/lib/site-content";
import PageHero from "@/components/PageHero";
import "@/components/seo-service.css";

export default function SeoServiceLanding({ service }: { service: SeoServicePage }) {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: service.title,
      description: service.description,
      provider: { "@type": "Organization", name: "INNDESO", url: "https://inndeso.com.mx" },
      areaServed: [{ "@type": "City", name: "Guadalajara" }, { "@type": "State", name: "Jalisco" }, { "@type": "Country", name: "México" }],
      url: `https://inndeso.com.mx/servicios/${service.slug}/`,
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: service.questions.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
    },
  ];

  return (
    <main className="page-shell seo-service">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <PageHero
        breadcrumbs={[{ name: "INNDESO", path: "/" }, { name: "Servicios", path: "/servicios/" }, { name: service.eyebrow, path: `/servicios/${service.slug}/` }]}
        eyebrow={service.eyebrow}
        title={service.heading}
        description={service.lead}
        action={{ label: "Solicitar cotización", href: whatsappUrl, external: true }}
      />

      <section className="seo-service__visual page-section" aria-label={service.imageLabel}>
        <div className="seo-service__media">
          <Image src={service.image} alt={service.imageAlt} fill priority sizes="(max-width: 800px) 94vw, 1100px" />
          <span><i /> {service.imageLabel}</span>
        </div>
      </section>

      <section className="page-section seo-service__answer">
        <div className="page-section__intro">
          <div><p className="page-eyebrow">Lo importante</p><h2>{service.problemTitle}</h2></div>
          <p>{service.problem}</p>
        </div>
        <div className="seo-service__outcomes">
          {service.outcomes.map((item, index) => (
            <article key={item.title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{item.title}</h3><p>{item.text}</p></article>
          ))}
        </div>
      </section>

      <section className="seo-service__scope">
        <div className="seo-service__scope-inner">
          <div>
            <p className="page-eyebrow">Funciones posibles</p>
            <h2>La primera etapa se adapta a lo que realmente necesitas.</h2>
            <p>No tienes que contratar todo desde el inicio. Elegimos las funciones que generan valor primero y dejamos una base preparada para crecer.</p>
          </div>
          <ul>{service.capabilities.map((item) => <li key={item}><i>✓</i>{item}</li>)}</ul>
        </div>
      </section>

      <section className="page-section seo-service__fit">
        <div>
          <p className="page-eyebrow">¿Para quién funciona?</p>
          <h2>Negocios con una operación que necesita más control.</h2>
        </div>
        <div className="seo-service__tags">{service.idealFor.map((item) => <span key={item}>{item}</span>)}</div>
      </section>

      {service.caseStudy ? (
        <section className="page-section seo-service__case">
          <div><span>Caso relacionado</span><h2>{service.caseStudy.name}</h2><p>{service.caseStudy.text}</p></div>
          <Link className="page-button page-button--light" href={service.caseStudy.href}>Ver proyecto real <span aria-hidden="true">→</span></Link>
        </section>
      ) : null}

      <section className="page-section seo-service__faq">
        <div className="page-section__intro">
          <div><p className="page-eyebrow">Preguntas frecuentes</p><h2>Respuestas antes de cotizar.</h2></div>
          <p>Si tu operación es diferente, cuéntanos cómo trabajas. La propuesta se prepara alrededor de tu negocio.</p>
        </div>
        <div>{service.questions.map((item) => <details key={item.question}><summary>{item.question}<span>+</span></summary><p>{item.answer}</p></details>)}</div>
      </section>

      <section className="page-section"><div className="page-cta"><div><h2>Cuéntanos qué quieres controlar mejor.</h2><p>Te ayudamos a definir una primera etapa con funciones, entregables, calendario y precio claros.</p></div><a className="page-button page-button--light" href={whatsappUrl} target="_blank" rel="noopener noreferrer">Cotizar por WhatsApp <span aria-hidden="true">↗</span></a></div></section>
    </main>
  );
}
