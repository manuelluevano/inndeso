import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { contactEmail } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Aviso de privacidad",
  description: "Información sobre el uso de datos y medición del sitio web de INNDESO.",
  alternates: { canonical: "/privacidad/" },
  robots: { index: true, follow: true },
};

const sections = [
  {
    title: "Información que podemos recibir",
    text: "Cuando nos contactas voluntariamente por correo o WhatsApp podemos recibir tu nombre, datos de contacto y la información que compartas sobre tu proyecto. No solicitamos contraseñas, datos bancarios ni documentos sensibles desde este sitio.",
  },
  {
    title: "Medición del sitio",
    text: "Podemos utilizar herramientas de analítica para conocer páginas visitadas, dispositivo, país aproximado, tiempo de consulta y acciones como abrir WhatsApp. Esta información se usa de forma agregada para mejorar el contenido y entender qué servicios resultan útiles.",
  },
  {
    title: "Uso de la información",
    text: "Utilizamos la información para responder solicitudes, preparar propuestas, dar seguimiento a proyectos, ofrecer soporte y mejorar la experiencia del sitio. No vendemos bases de datos personales.",
  },
  {
    title: "Servicios externos",
    text: "Los enlaces a WhatsApp, Instagram, Facebook y otros servicios abren plataformas con sus propias políticas. La medición puede ser procesada por proveedores tecnológicos de acuerdo con su configuración y términos vigentes.",
  },
  {
    title: "Tus solicitudes",
    text: `Puedes escribir a ${contactEmail} para solicitar acceso, corrección o eliminación de la información que nos hayas proporcionado, sujeto a las obligaciones aplicables y a la identificación razonable de la solicitud.`,
  },
  {
    title: "Actualizaciones",
    text: "Este aviso puede actualizarse cuando cambien las herramientas o la forma de operar el sitio. La versión publicada en esta página será la vigente.",
  },
];

export default function PrivacidadPage() {
  return (
    <main className="page-shell">
      <PageHero
        breadcrumbs={[{ name: "INNDESO", path: "/" }, { name: "Aviso de privacidad", path: "/privacidad/" }]}
        eyebrow="Información clara"
        title="Aviso de privacidad del sitio web."
        description="Explicamos qué información podemos recibir, cómo usamos la medición del sitio y cómo puedes contactarnos para ejercer una solicitud relacionada con tus datos."
      />
      <section className="page-section">
        <div className="service-list">
          {sections.map((section, index) => (
            <article className="service-row" key={section.title}>
              <span className="service-row__number">{String(index + 1).padStart(2, "0")}</span>
              <h2>{section.title}</h2>
              <div><p>{section.text}</p></div>
            </article>
          ))}
        </div>
      </section>
      <section className="page-section">
        <div className="page-cta">
          <div><h2>¿Tienes una solicitud sobre tus datos?</h2><p>Escríbenos desde el correo relacionado con tu solicitud para poder identificarla y responderte.</p></div>
          <a className="page-button page-button--light" href={`mailto:${contactEmail}?subject=Solicitud%20de%20privacidad`}>Contactar por correo <span aria-hidden="true">→</span></a>
        </div>
      </section>
    </main>
  );
}
