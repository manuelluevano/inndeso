// components/StatsBar.tsx
export default function StatsBar() {
 const stats = [
  { num: "+50",   label: "proyectos entregados", sub: "Webs y apps en producción" },
  { num: "4.9/5", label: "satisfacción promedio", sub: "según encuestas y reseñas" },
  { num: "12",    label: "sectores atendidos",   sub: "retail, salud, educación y más" },
  { num: "2–6 sem", label: "tiempo de lanzamiento", sub: "dependiendo del alcance" },
];


  return (
    <section className="bg-gradient-to-r from-[#0b1b35] via-[#0e2f5a] to-[#0a1a2f] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map(s => (
          <div key={s.label} className="flex items-center gap-3">
            <span className="text-2xl font-extrabold">{s.num}</span>
            <span className="text-white/80">{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
