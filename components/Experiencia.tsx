// Experiencia.tsx
import React from "react";

const icons: Record<string, React.JSX.Element> = {
  target: (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2" />
      <path d="M12 3v3M21 12h-3M12 21v-3M3 12h3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  design: (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
      <path d="M14.5 5.5l4 4L9 19H5v-4l9.5-9.5z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
      <path d="M12 7l5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  web: (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
      <path d="M3 12h18M12 3c2.5 3.2 2.5 14.8 0 18M7 5.5c1.7 2.3 1.7 10.7 0 13M17 5.5c-1.7 2.3-1.7 10.7 0 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  integrate: (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
      <circle cx="6" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
      <circle cx="18" cy="6" r="3" stroke="currentColor" strokeWidth="2"/>
      <circle cx="18" cy="18" r="3" stroke="currentColor" strokeWidth="2"/>
      <path d="M8.5 10.5l7-3M8.5 13.5l7 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
};

const experiencia = [
  {
    title: "Plan y estrategia",
    desc:
      "Entendemos tu negocio, definimos metas claras y un plan de arranque.",
    icon: "target",
  },
  {
    title: "Diseño fácil de usar (UX/UI)",
    desc:
      "Prototipamos pantallas que se entienden a la primera y las validamos contigo antes de construir.",
    icon: "design",
  },
  {
    title: "Sitios y apps web",
    desc:
      "Páginas rápidas, seguras y visibles en Google, que se ven perfectas en cualquier dispositivo.",
    icon: "web",
  },
  {
    title: "Conexiones e integraciones",
    desc:
      "Conectamos tu web con pagos, WhatsApp, ERP/CRM y más para que todo trabaje junto.",
    icon: "integrate",
  },
];

export default function Experiencia() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-14">
      <h2 className="text-4xl font-extrabold mb-8">Servicios</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {experiencia.map((item) => (
          <article
            key={item.title}
            className="rounded-2xl bg-white/80 dark:bg-white/10 p-6 border border-black/5 dark:border-white/10 hover:shadow-lg hover:-translate-y-0.5 transition"
          >
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-sky-100 text-sky-600">
              {icons[item.icon]}
            </div>

            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p className="text-slate-600 dark:text-slate-300 mt-2">
              {item.desc}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
