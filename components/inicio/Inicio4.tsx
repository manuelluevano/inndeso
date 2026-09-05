import "./inicio4.css";
import ProjectMonitorCarousel from "./ProjectMonitorCarousel";

import monitor from "./pc.png";
import projectOne from "./proyectos/1.png";
import projectTwo from "./proyectos/2.png";
import projectThree from "./proyectos/3.png";
import projectFour from "./proyectos/4.png";
import projectFive from "./proyectos/5.png";
import projectSix from "./proyectos/6.png";
import projectSeven from "./proyectos/7.png";

const MONITORS = [
  { id: 1, src: projectOne },
  { id: 2, src: projectTwo },
  { id: 3, src: projectThree },
  { id: 4, src: projectFour },
  { id: 5, src: projectFive },
  { id: 6, src: projectSix },
  { id: 7, src: projectSeven },
];

export default function Inicio4() {
  return (
    <section className="inicio4-section" aria-label="Proyectos desarrollados">
      <div className="inicio4-wrap">
        <h2 className="inicio4-title">Proyectos Desarrollados</h2>

        <p className="inicio4-text">
          Algunos de los proyectos y sistemas desarrollados por Inndeso, enfocados en administración, control,
          automatización y experiencia de usuario.
        </p>

        <div className="inicio4-carousel">
          <ProjectMonitorCarousel
            monitorFrame={monitor}
            items={MONITORS.map((item) => ({
              src: item.src,
              alt: `Vista del proyecto ${item.id}`,
            }))}
          />
        </div>

        <a
          href="https://wa.me/523312050703"
          target="_blank"
          rel="noopener noreferrer"
          className="inicio4-cta"
          data-track-cta="true"
          data-cta-name="inicio4_cotizar_proyecto"
          data-cta-location="inicio4"
        >
          Cotizar proyecto
        </a>
      </div>
    </section>
  );
}
