// components/PorQueInndesoList.tsx
export default function PorQueInndesoList() {
  const features = [
    { t: "Sin sorpresas", d: "Precios y tiempos claros desde el día uno." },
    { t: "Acompañamiento real", d: "Lanzamiento guiado y 30 días de soporte incluido." },
    { t: "Todo es tuyo", d: "Código, diseños y documentación como entregables completos." },
    { t: "Equipo senior", d: "Hablamos simple y resolvemos rápido. Sin vueltas." },
    { t: "Medimos para mejorar", d: "Métricas antes y después en cada entrega." },
    { t: "Trabajo por sprints", d: "Hitos semanales con avances visibles." },
  ];

  return (
    <section id="por-que" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      <div className="grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-4xl font-extrabold mb-4">¿Por qué INNDESO?</h2>
          <p className="text-slate-600 max-w-lg">
            Elegimos la ruta más corta hacia resultados: entregas frecuentes, comunicación clara
            y decisiones basadas en datos.
          </p>
        </div>

        <ul className="grid sm:grid-cols-2 gap-5">
          {features.map(f => (
            <li key={f.t} className="flex items-start gap-3">
              <span className="mt-1 inline-grid h-6 w-6 place-items-center rounded-full bg-emerald-100 text-emerald-600">
                {/* check icon */}
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
                  <path d="M5 12l4 4L19 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              <div>
                <p className="font-semibold">{f.t}</p>
                <p className="text-slate-600">{f.d}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
