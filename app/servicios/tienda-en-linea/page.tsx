import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import { whatsappUrl } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Desarrollo de tiendas en línea en Guadalajara",
  description: "Creamos tiendas en línea profesionales con catálogo, carrito, pagos y administración para negocios y empresas en Guadalajara y México.",
  alternates: { canonical: "/servicios/tienda-en-linea/" },
  openGraph: {
    type: "website", url: "/servicios/tienda-en-linea/",
    title: "Desarrollo de tiendas en línea en Guadalajara | INNDESO",
    description: "Ecommerce y tiendas en línea desarrolladas de acuerdo con las necesidades de tu negocio.",
    images: ["/visuals/oficina-software-inndeso.png"],
  },
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
      <PageHero breadcrumbs={[{ name: "INNDESO", path: "/" }, { name: "Servicios", path: "/servicios/" }, { name: "Tiendas en línea", path: "/servicios/tienda-en-linea/" }]} eyebrow="Comercio electrónico" title="Tiendas en línea diseñadas para vender y operar mejor." description="Conectamos catálogo, pago, pedido, inventario y seguimiento para que vender en línea también sea una operación ordenada." action={{ label: "Cotizar mi tienda", href: whatsappUrl, external: true }} />
      <section className="page-section"><div className="service-landing__visual"><Image src="/portfolio/ECCOMERCE-SERCOMIN/ecommerce-sercomin-1.jpeg" alt="Ejemplo de comercio electrónico desarrollado por INNDESO" width={1800} height={1050} priority /></div></section>
      <section className="page-section">
        <div className="page-section__intro"><div><p className="page-eyebrow">Venta conectada</p><h2>Del producto al seguimiento del pedido.</h2></div><p>Empezamos con lo necesario para vender y dejamos una base preparada para crecer con logística, facturación, CRM o sistemas internos.</p></div>
        <div className="assurance-grid">{capabilities.map(([title, description]) => <article className="assurance-card" key={title}><h3>{title}</h3><p>{description}</p></article>)}</div>
      </section>
      <section className="page-section"><div className="page-cta"><div><h2>Tiendas desde $15,000 MXN.</h2><p>La carga de productos, reglas comerciales, integraciones y logística se definen en la propuesta para darte un precio real.</p></div><a className="page-button page-button--light" href="/precios">Revisar alcance <span aria-hidden="true">→</span></a></div></section>
    </main>
  );
}
