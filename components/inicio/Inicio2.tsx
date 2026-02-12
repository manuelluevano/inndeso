import Image from "next/image";
import "./inicio2.css";

import img1 from "./img1.png";
import img2 from "./img2.png";
import img3 from "./img3.png";

const CARDS = [
  {
    title: "Desarrollo Web",
    text: "Creación de páginas web profesionales, responsivas y optimizadas, enfocadas en presencia digital, captación de clientes y posicionamiento de marca.",
    image: img1,
    alt: "Desarrollo Web",
  },
  {
    title: "Aplicaciones y Sistemas",
    text: "Desarrollo de aplicaciones web y sistemas administrativos personalizados para automatizar procesos y mejorar la gestión interna.",
    image: img2,
    alt: "Aplicaciones y Sistemas",
  },
  {
    title: "Soluciones a Medida",
    text: "Analizamos las necesidades de cada proyecto para crear soluciones tecnológicas específicas, adaptadas a los objetivos del negocio.",
    image: img3,
    alt: "Soluciones a Medida",
  },
];

export default function Inicio2() {
  return (
    <section className="inicio2-section" aria-label="Desarrollamos tecnología enfocada en resultados">
      <div className="inicio2-wrap">
        <h2 className="inicio2-title">Desarrollamos tecnología enfocada en resultados</h2>

        <p className="inicio2-text">
          En Inndeso acompañamos a empresas y emprendedores en la creación de soluciones digitales funcionales,
          escalables y seguras.
          <br />
          Nuestro enfoque combina diseño, desarrollo y estrategia para transformar ideas en herramientas
          digitales reales.
        </p>

        <div className="inicio2-grid">
          {CARDS.map((card) => (
            <article key={card.title} className="inicio2-card">
              <Image src={card.image} alt={card.alt} width={86} height={86} className="inicio2-card-image" />
              <h3 className="inicio2-card-title">{card.title}</h3>
              <p className="inicio2-card-text">{card.text}</p>
            </article>
          ))}
        </div>

        <a
          href="https://wa.me/523312050703"
          target="_blank"
          rel="noopener noreferrer"
          className="inicio2-cta"
          data-track-cta="true"
          data-cta-name="inicio2_mas_informacion"
          data-cta-location="inicio2"
        >
          Más Información
        </a>
      </div>
    </section>
  );
}
