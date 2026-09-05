import Image from "next/image";
import "./inicio7.css";

import proceso1 from "./proceso1.png";
import proceso2 from "./proceso2.png";
import proceso3 from "./proceso3.png";
import proceso4 from "./proceso4.png";

const STEPS = [
  {
    icon: proceso1,
    title: "Análisis",
    desc: "Entendemos tus necesidades y objetivos de negocio.",
  },
  {
    icon: proceso2,
    title: "Diseño",
    desc: "Definimos la arquitectura y experiencia de usuario.",
  },
  {
    icon: proceso3,
    title: "Desarrollo",
    desc: "Programamos la solución con buenas prácticas.",
  },
  {
    icon: proceso4,
    title: "Entrega y Soporte",
    desc: "Implementación, pruebas y acompañamiento continuo.",
  },
];

export default function Inicio7() {
  return (
    <section className="inicio7-section" aria-label="Nuestro proceso de trabajo">
      <div className="inicio7-shell">
        <div className="inicio7-overlay" aria-hidden="true" />

        <h2 className="inicio7-title">Nuestro proceso de trabajo</h2>

        <div className="inicio7-grid">
          {STEPS.map((step) => (
            <article key={step.title} className="inicio7-item">
              <Image src={step.icon} alt={step.title} width={74} height={74} className="inicio7-icon" />
              <h3 className="inicio7-item-title">{step.title}</h3>
              <p className="inicio7-item-desc">{step.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
