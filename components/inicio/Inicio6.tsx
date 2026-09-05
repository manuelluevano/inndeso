"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import "./inicio6.css";

import appImage from "./app.png";

const FAQS = [
  {
    q: "¿Cómo es el proceso de desarrollo?",
    a: "Analizamos los requerimientos, definimos objetivos, diseñamos la solución y desarrollamos el proyecto con entregas claras y seguimiento constante.",
  },
  {
    q: "¿Desarrollan proyectos personalizados?",
    a: "Sí. Todos nuestros proyectos se desarrollan a la medida, según las necesidades y objetivos del cliente.",
  },
  {
    q: "¿Ofrecen soporte después de la entrega?",
    a: "Sí, brindamos soporte técnico y acompañamiento posterior a la entrega para asegurar el correcto funcionamiento del sistema.",
  },
];

export default function Inicio6() {
  const imageRef = useRef<HTMLDivElement | null>(null);
  const [imageVisible, setImageVisible] = useState(false);

  useEffect(() => {
    const node = imageRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setImageVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.62, rootMargin: "0px 0px -6% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="inicio6-section" aria-label="Preguntas sobre el proceso de desarrollo">
      <div className="inicio6-shell">
        <div className="inicio6-content">
          <div className="inicio6-faqs">
            {FAQS.map((item) => (
              <article key={item.q} className="inicio6-card">
                <h3 className="inicio6-question">{item.q}</h3>
                <p className="inicio6-answer">{item.a}</p>
              </article>
            ))}

            <div className="inicio6-actions">
              <a
                href="https://wa.me/523312050703"
                target="_blank"
                rel="noopener noreferrer"
                className="inicio6-cta"
                data-track-cta="true"
                data-cta-name="inicio6_mas_informacion"
                data-cta-location="inicio6"
              >
                Más Información
              </a>
            </div>
          </div>

          <div
            ref={imageRef}
            className={`inicio6-image-wrap ${imageVisible ? "inicio6-image-wrap--visible" : ""}`}
            aria-hidden="true"
          >
            <Image src={appImage} alt="Aplicación móvil" className="inicio6-image" priority />
          </div>
        </div>
      </div>
    </section>
  );
}
