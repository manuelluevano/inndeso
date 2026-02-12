import Image from "next/image";
import "./inicio8.css";

import image from "./img.jpg";

export default function Inicio8() {
  return (
    <section className="inicio8-section" aria-label="Contacto personalizado">
      <div className="inicio8-shell">
        <div className="inicio8-copy">
          <p className="inicio8-text">
            Observaciones y necesidades específicas pueden ser analizadas para crear una solución totalmente
            personalizada.
          </p>

          <a
            href="https://wa.me/523312050703"
            target="_blank"
            rel="noopener noreferrer"
            className="inicio8-cta"
            data-track-cta="true"
            data-cta-name="inicio8_contactar_ahora"
            data-cta-location="inicio8"
          >
            Contactar ahora
          </a>
        </div>

        <div className="inicio8-photo-wrap" aria-hidden="true">
          <Image src={image} alt="Equipo trabajando" className="inicio8-photo" priority />
        </div>
      </div>
    </section>
  );
}
