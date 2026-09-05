import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import { whatsappUrl } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Tiendas en línea",
  description: "Comercio electrónico con catálogo, pagos, pedidos, inventario, logística y automatizaciones conectado a tu operación.",
  alternates: { canonical: "/servicios/tienda-en-linea" },
};

const capabilities = [
  ["Catálogo que vende", "Productos, variantes, filtros, búsqueda y contenidos que ayudan a elegir."],
  ["Pago conectado", "Checkout, pasarela y confirmaciones según las necesidades de tu negocio."],
  ["Operación centralizada", "Pedidos, existencias, clientes, estados y reportes desde un mismo panel."],
  ["Automatización", "Alertas, correos, WhatsApp e integraciones para reducir seguimiento manual."],
];

export default function TiendaEnLineaPage() {
  return (
    <main className="page-shell">
      <PageHero eyebrow="Comercio electrónico" title="Una tienda no termina en el botón de comprar." description="Conectamos catálogo, pago, pedido, inventario y seguimiento para que vender en línea también sea una operación ordenada." action={{ label: "Cotizar mi tienda", href: whatsappUrl, external: true }} />
      <section className="page-section"><div className="service-landing__visual"><Image src="/portfolio/ECCOMERCE-SERCOMIN/ecommerce-sercomin-1.jpeg" alt="Ejemplo de comercio electrónico desarrollado por INNDESO" width={1800} height={1050} priority /></div></section>
      <section className="page-section">
        <div className="page-section__intro"><div><p className="page-eyebrow">Venta conectada</p><h2>Del producto al seguimiento del pedido.</h2></div><p>Empezamos con lo necesario para vender y dejamos una base preparada para crecer con logística, facturación, CRM o sistemas internos.</p></div>
        <div className="assurance-grid">{capabilities.map(([title, description]) => <article className="assurance-card" key={title}><h3>{title}</h3><p>{description}</p></article>)}</div>
      </section>
      <section className="page-section"><div className="page-cta"><div><h2>Tiendas desde $15,000 MXN.</h2><p>La carga de productos, reglas comerciales, integraciones y logística se definen en la propuesta para darte un precio real.</p></div><a className="page-button page-button--light" href="/precios">Revisar alcance <span aria-hidden="true">→</span></a></div></section>
    </main>
  );
}
