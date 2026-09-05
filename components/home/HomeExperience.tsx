import Image from "next/image";
import Link from "next/link";
import { caseStudies, services, supportWhatsappUrl, whatsappUrl } from "@/lib/site-content";
import SystemsCampaign from "./SystemsCampaign";
import "./home-experience.css";

const brands = [
  { name: "Sana Life", src: "/portfolio/sana-life/logo.webp", slug: "sana-life" },
  { name: "Distribuidora Divether", src: "/brands/distribuidora-divether.png", slug: "divether" },
  { name: "FertiKhor", src: "/brands/fertikhor.png", slug: "fertikhor" },
  { name: "Studio Smart Papelería", src: "/brands/studio-smart.png", slug: "studio-smart" },
  { name: "Super Envases Entek", src: "/brands/super-envases-entek.png", slug: "entek" },
  { name: "Freezely", src: "/brands/freezely.png", slug: "freezely" },
  { name: "MovilSource", src: "/brands/movilsource.png", slug: "movilsource" },
  { name: "Sercomin", src: "/brands/sercomin.png", slug: "sercomin" },
  { name: "MarShop", src: "/brands/marshop.png", slug: "marshop" },
  { name: "LibreMente", src: "/brands/libremente.png", slug: "libremente" },
  { name: "CellGo", src: "/brands/cellgo.png", slug: "cellgo" },
];

function SolutionVisual({ kind }: { kind: string }) {
  if (kind === "software") {
    return (
      <div className="solution-preview solution-preview--software" aria-hidden="true">
        <div className="solution-preview__top"><span><i /> Centro de control</span><b>En línea</b></div>
        <div className="solution-preview__software-body">
          <div className="solution-preview__sidebar"><i /><i /><i /><i /></div>
          <div className="solution-preview__dashboard">
            <div><span>Ventas</span><strong>$48,320</strong></div>
            <div><span>Órdenes</span><strong>126</strong></div>
            <div className="solution-preview__chart"><i /><i /><i /><i /><i /><i /></div>
          </div>
        </div>
        <small>Administración, equipo y reportes en un solo lugar</small>
      </div>
    );
  }

  if (kind === "gps") {
    return (
      <div className="solution-preview solution-preview--gps" aria-hidden="true">
        <div className="solution-preview__top"><span><i /> Mapa operativo</span><b>GPS activo</b></div>
        <div className="solution-preview__map">
          <span className="solution-preview__route" />
          <i className="pin pin--one">1</i><i className="pin pin--two">2</i><i className="pin pin--three">3</i>
          <div><strong>4 equipos</strong><small>ubicación en vivo</small></div>
        </div>
        <small>Rutas, personal, paradas y última señal</small>
      </div>
    );
  }

  if (kind === "apps") {
    return (
      <div className="solution-preview solution-preview--apps" aria-hidden="true">
        <div className="solution-preview__top"><span><i /> Una misma operación</span><b>Sincronizada</b></div>
        <div className="solution-preview__devices">
          <div className="device device--desktop"><span /><i /><i /><i /></div>
          <div className="device device--tablet"><span /><i /><i /></div>
          <div className="device device--phone"><span /><i /><i /></div>
        </div>
        <small>Web, Windows, macOS, iOS, Android y Watch</small>
      </div>
    );
  }

  if (kind === "ventas") {
    return (
      <div className="solution-preview solution-preview--ventas" aria-hidden="true">
        <div className="solution-preview__top"><span><i /> Ventas e inventario</span><b>Caja abierta</b></div>
        <div className="solution-preview__commerce">
          <div><span>Venta del día</span><strong>$12,450</strong><small>↑ 18%</small></div>
          <div><span>Existencias</span><strong>2,538</strong><small>24 alertas</small></div>
          <ul><li><i /> Pedido #1048 <b>Pagado</b></li><li><i /> Pedido #1047 <b>Preparando</b></li></ul>
        </div>
        <small>Compra, vende, cobra y conoce tu utilidad</small>
      </div>
    );
  }

  if (kind === "web") {
    return (
      <div className="solution-preview solution-preview--web" aria-hidden="true">
        <div className="solution-preview__browser"><i /><i /><i /><span>tuempresa.com</span></div>
        <div className="solution-preview__store">
          <div><small>Tu catálogo en línea</small><strong>Una web que explica y vende.</strong><b>Ver productos →</b></div>
          <ul><li /><li /><li /></ul>
        </div>
        <small>Presenta tu negocio, recibe contactos y vende</small>
      </div>
    );
  }

  return (
    <div className="solution-preview solution-preview--infra" aria-hidden="true">
      <div className="solution-preview__top"><span><i /> Infraestructura</span><b>Disponible</b></div>
      <div className="solution-preview__network">
        <span className="network-line network-line--one" /><span className="network-line network-line--two" /><span className="network-line network-line--three" />
        <div className="network-node network-node--cloud">Nube</div>
        <div className="network-node network-node--api">API</div>
        <div className="network-node network-node--data">Datos</div>
        <div className="network-node network-node--server">Servidor</div>
      </div>
      <small>API, base de datos, nube y servidor local conectados</small>
    </div>
  );
}

const softwareShowcase = [
  {
    title: "Ventas a plazos, cobros e inventario",
    text: "Clientas, productos, abonos, vencimientos, caja y utilidad en una sola aplicación.",
    image: "/portfolio/marshop/productos-demo.png",
    alt: "Catálogo visual de MarShop con productos, precios, costos, utilidad y existencias",
    href: "/proyectos/marshop",
    className: "inventory",
  },
  {
    title: "CRM y seguimiento comercial",
    text: "Prospectos, clientes, oportunidades, actividades y avance de ventas.",
    image: "/portfolio/demos/crm-profesional-demo.svg",
    alt: "Tablero profesional demostrativo de CRM y seguimiento de oportunidades",
    href: "/servicios#software",
    className: "crm",
  },
  {
    title: "Caja, finanzas y rentabilidad",
    text: "Ingresos, egresos, cuentas, cobranza, cortes y reportes para decidir.",
    image: "/portfolio/demos/finanzas-profesional-demo.svg",
    alt: "Sistema demostrativo de caja, movimientos y finanzas",
    href: "/proyectos/movilsource",
    className: "finance",
  },
  {
    title: "GPS, rutas y personal en vivo",
    text: "Ubicación, última señal, trayectos, paradas, evidencias y alertas.",
    image: "/portfolio/sana-life/mapa-en-vivo-demo.svg",
    alt: "Plataforma demostrativa de GPS con repartidores, rutas y entregas en vivo",
    href: "/proyectos/sana-life",
    className: "gps",
  },
];

const morePrograms = [
  { title: "Cotizador inteligente", detail: "Comparación de piezas, utilidad y precio instalado", image: "/portfolio/movilsource/cotizador-demo.webp", alt: "Cotizador inteligente desarrollado para MovilSource", className: "desktop" },
  { title: "Reportes y rentabilidad", detail: "Ventas, costos, margen, cobranza y desempeño", image: "/portfolio/movilsource/reportes-demo.webp", alt: "Panel de reportes y rentabilidad de MovilSource", className: "desktop" },
  { title: "Expediente de servicio", detail: "Cliente, equipo, diagnóstico, evidencias e historial", image: "/portfolio/movilsource/servicio-demo.webp", alt: "Expediente digital de servicio en MovilSource", className: "desktop" },
  { title: "Evidencia en campo", detail: "Ubicación, fotografía, notas y sincronización móvil", image: "/portfolio/geojornada/evidencia-movil-demo.webp", alt: "Aplicación móvil de evidencia en campo", className: "mobile" },
  { title: "Inventario veterinario", detail: "Productos, lotes, existencias y alertas de almacén", image: "/portfolio/sana-life/productos-veterinarios-demo.svg", alt: "Inventario demostrativo de productos veterinarios", className: "desktop" },
  { title: "Venta y cobro móvil", detail: "Catálogo, carrito, pago y confirmación de entrega", image: "/portfolio/sana-life/venta-movil-demo.svg", alt: "Aplicación demostrativa para venta y cobro móvil", className: "mobile" },
  { title: "Comercio de refacciones", detail: "Catálogo público, ofertas, compatibilidad y compra en línea", image: "/portfolio/cellgo/tienda-inicio.png", alt: "Tienda en línea de refacciones desarrollada para CellGo", className: "desktop" },
  { title: "Catálogo por compatibilidad", detail: "Búsqueda por modelo, categoría, disponibilidad y calidad", image: "/portfolio/cellgo/catalogo.png", alt: "Catálogo de refacciones y compatibilidades de CellGo", className: "desktop" },
  { title: "Administración del taller", detail: "Ventas, inventario, reparaciones, clientes y reportes", image: "/portfolio/cellgo/panel-administrativo.png", alt: "Panel administrativo desarrollado para CellGo", className: "desktop" },
];

export default function HomeExperience() {
  return (
    <>
      <section className="home-proof" aria-label="Enfoque de INNDESO">
        <div className="home-proof__inner">
          <p>Ideas complejas, convertidas en software fácil de usar.</p>
          <div className="home-proof__items">
            <span><i>01</i> Diseño claro</span>
            <span><i>02</i> Tecnología conectada</span>
            <span><i>03</i> Acompañamiento real</span>
          </div>
        </div>
      </section>

      <section className="home-brands reveal-up" aria-labelledby="marcas-title">
        <div className="home-brands__heading">
          <div>
            <span className="site-kicker">Experiencia comprobable</span>
            <h2 id="marcas-title">Marcas para las que hemos construido.</h2>
          </div>
          <p>Una selección de negocios y proyectos donde la tecnología se convirtió en una herramienta de trabajo real.</p>
        </div>
        <div className="home-brands__marquee" aria-label="Marcas y proyectos reales">
          <div className="home-brands__track">
            {[...brands, ...brands].map((brand, index) => (
              <div className={`home-brand home-brand--${brand.slug}`} key={`${brand.name}-${index}`} title={brand.name} aria-hidden={index >= brands.length}>
                <Image src={brand.src} alt={index < brands.length ? `Logotipo de ${brand.name}` : ""} width={230} height={100} />
                <span>{brand.name}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="home-brands__identity" id="identidad-producto">
          <div className="home-brands__identity-copy">
            <span className="site-kicker">Identidad para tu software</span>
            <h3>Creamos el nombre y la identidad de tu sistema.</h3>
            <p>Si el producto se presentará ante clientes o colaboradores, podemos desarrollar su nombre, logotipo, estilo visual e interfaz junto con la programación.</p>
            <Link href="/servicios">Quiero desarrollar mi sistema <span aria-hidden="true">→</span></Link>
          </div>
          <div className="home-brands__identity-list">
            {[
              ["01", "Nombre y posicionamiento", "Una propuesta fácil de recordar y explicar."],
              ["02", "Logotipo y sistema visual", "Color, tipografía y elementos de marca."],
              ["03", "Diseño de la interfaz", "La misma identidad dentro del producto."],
              ["04", "Material para lanzamiento", "Presentación, imágenes y piezas comerciales."],
            ].map(([number, title, detail]) => (
              <div className="home-brand-service" key={number}>
                <i>{number}</i><span><strong>{title}</strong><small>{detail}</small></span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SystemsCampaign />

      <section className="home-solutions reveal-up" id="soluciones">
        <div className="site-section-heading">
          <div>
            <span className="site-kicker">Lo que construimos</span>
            <h2>Centraliza tu negocio.<br />Conecta toda la operación.</h2>
          </div>
          <p>
            Vende, administra, da seguimiento y decide con la misma información. Construimos el programa central que conecta web, apps, GPS, datos e infraestructura.
          </p>
        </div>

        <div className="home-solutions__grid">
          {services.map((service) => (
            <Link key={service.id} href={`/servicios#${service.id}`} className={`home-solution home-solution--${service.accent}`}>
              <span className="home-solution__number">{service.number}</span>
              <SolutionVisual kind={service.id} />
              <div>
                <h3>{service.title}</h3>
                <p>{service.short}</p>
                <ul>{service.capabilities.slice(0, 2).map((capability) => <li key={capability}>{capability}</li>)}</ul>
              </div>
              <span className="home-solution__arrow" aria-hidden="true">↗</span>
            </Link>
          ))}
        </div>
        <div className="home-solutions__promise">
          <div><span>Una sola arquitectura</span><strong>Panel administrativo + app + datos + infraestructura</strong></div>
          <Link href="/servicios">Ver el ecosistema completo <span aria-hidden="true">→</span></Link>
        </div>
      </section>

      <section className="home-software reveal-up" aria-labelledby="software-popular">
        <div className="site-section-heading">
          <div>
            <span className="site-kicker">Soluciones que más resuelven</span>
            <h2 id="software-popular">Programas que muestran su valor al verlos.</h2>
          </div>
          <p>Vistas completas, claras y profesionales para imaginar cómo se verían las áreas clave de tu empresa dentro de un solo sistema.</p>
        </div>
        <div className="home-software__grid">
          {softwareShowcase.map((item) => (
            <Link className={`home-software-card home-software-card--${item.className}`} href={item.href} key={item.title}>
              <div className="home-software-card__copy">
                <span>Software empresarial</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
              <div className="home-software-card__media">
                <Image src={item.image} alt={item.alt} fill sizes="(max-width: 760px) 94vw, 48vw" />
              </div>
              <i aria-hidden="true">↗</i>
            </Link>
          ))}
        </div>
        <p className="home-software__note">Las pantallas muestran soluciones desarrolladas y demostraciones con datos ficticios. El alcance final se adapta a cada operación.</p>
      </section>

      <section className="home-more-programs reveal-up" aria-labelledby="mas-programas">
        <div className="home-retail-feature">
          <div className="home-retail-feature__copy">
            <span className="site-kicker">Software para comercio</span>
            <h2>Tu tienda, sus ventas y cada cobro bajo control.</h2>
            <p>
              MarShop muestra cómo convertimos la operación diaria de una boutique o comercio en una aplicación clara: catálogo visual, existencias, expedientes de clientas, ventas a plazos, recordatorios de cobro, caja, gastos y utilidad real.
            </p>
            <ul>
              <li>Productos con fotografía, costo, precio y ganancia</li>
              <li>Planes de abonos, saldos y pagos vencidos</li>
              <li>Agenda de cobros y resumen financiero</li>
            </ul>
            <div className="home-retail-feature__actions">
              <Link href="/proyectos/marshop">Conocer MarShop <span aria-hidden="true">→</span></Link>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" data-track-cta="true" data-cta-name="retail_software_quote" data-cta-location="home_marshop">
                Cotizar un programa similar
              </a>
            </div>
          </div>
          <Link href="/proyectos/marshop" className="home-retail-feature__visual" aria-label="Abrir el caso de estudio de MarShop">
            <div className="home-retail-feature__window">
              <div><i /><i /><i /><span>MarShop · Productos</span></div>
              <figure>
                <Image src="/portfolio/marshop/productos-demo.png" alt="Sistema MarShop para controlar productos, ventas a plazos y cobranza" fill sizes="(max-width: 900px) 94vw, 58vw" />
              </figure>
            </div>
            <span className="home-retail-feature__badge"><i /> Aplicación real para macOS</span>
          </Link>
        </div>

        <div className="site-section-heading">
          <div><span className="site-kicker">Más trabajo desarrollado</span><h2 id="mas-programas">Flujos reales. Software listo para trabajar.</h2></div>
          <p>Cotización, reportes, expedientes, evidencia, inventario y venta móvil: pantallas distintas conectadas por una misma operación.</p>
        </div>
        <div className="home-more-programs__grid">
          {morePrograms.map((program) => (
            <article className={`home-program home-program--${program.className}`} key={program.title}>
              <div className="home-program__media"><Image src={program.image} alt={program.alt} fill sizes="(max-width: 700px) 94vw, (max-width: 1050px) 48vw, 32vw" /></div>
              <div className="home-program__copy"><span>Parte de una operación conectada</span><h3>{program.title}</h3><p>{program.detail}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section className="home-live reveal-up">
        <div className="home-live__copy">
          <span className="site-kicker site-kicker--light">Especialidad</span>
          <h2>Controla tu operación en campo mientras sucede.</h2>
          <p>
            Ubicación en vivo, rutas, evidencias y alertas conectadas con tu panel administrativo. Para repartos, visitas, técnicos, supervisores y cualquier equipo que trabaje fuera de oficina.
          </p>
          <ul>
            <li><span>●</span> Última señal, velocidad y batería</li>
            <li><span>●</span> Rutas, paradas y avance operativo</li>
            <li><span>●</span> Evidencias, incidencias e historial</li>
          </ul>
          <Link href="/servicios#gps">Explorar soluciones con GPS <span aria-hidden="true">→</span></Link>
        </div>
        <div className="home-live__visual">
          <div className="home-live__window">
            <div className="home-live__window-top"><i /><i /><i /><span>Mapa operativo</span></div>
            <div className="home-live__image">
              <Image src="/portfolio/geojornada/mapa-operativo-demo.webp" alt="Software con mapa y GPS en tiempo real" fill sizes="(min-width: 900px) 56vw, 96vw" />
            </div>
          </div>
          <div className="home-live__tag"><i /> Señal recibida ahora</div>
        </div>
      </section>

      <section className="home-platforms reveal-up">
        <div className="home-platforms__lead">
          <span className="site-kicker site-kicker--light">Todo conectado</span>
          <h2>Un programa central para todo tu negocio.</h2>
          <p>Tu equipo trabaja desde el dispositivo que necesita; la información llega al mismo lugar, se mantiene actualizada y queda lista para decidir.</p>
          <div className="home-platforms__callout"><i /><span><small>Una sola operación</small><strong>App + web + escritorio + servidor</strong></span></div>
        </div>
        <div className="home-platforms__list">
          {[
            ["01", "Web", "Paneles y plataformas"],
            ["02", "Windows", "Software de escritorio"],
            ["03", "macOS", "Aplicaciones nativas"],
            ["04", "iOS + Android", "Apps móviles"],
            ["05", "Apple Watch", "Experiencias conectadas"],
            ["06", "Linux + Cloud", "Servidores e infraestructura"],
          ].map(([number, title, detail]) => (
            <div key={title} className="home-platform">
              <span>{number}</span>
              <strong>{title}</strong>
              <small>{detail}</small>
            </div>
          ))}
        </div>
      </section>

      <section className="home-cases reveal-up" id="casos">
        <div className="site-section-heading">
          <div>
            <span className="site-kicker">Casos documentados</span>
            <h2>Sistemas completos.<br />Resultados que se entienden.</h2>
          </div>
          <div className="home-cases__intro">
            <p>
              No presentamos conceptos aislados. Abre cada caso para conocer el producto, las plataformas conectadas y la operación que resuelve.
            </p>
            <div><strong>{String(caseStudies.length).padStart(2, "0")}</strong><span>productos<br />para explorar</span><i aria-hidden="true" /></div>
          </div>
        </div>

        <div className="home-cases__grid">
          {caseStudies.map((project, index) => (
            <Link key={project.slug} href={`/proyectos/${project.slug}`} className={`home-case home-case--${project.theme}`}>
              <div className="home-case__meta">
                <div><b>{String(index + 1).padStart(2, "0")}</b><span>{project.category}</span></div>
                <i aria-hidden="true">↗</i>
              </div>
              <div className={`home-case__media ${project.slug === "libremente" ? "home-case__media--mobile" : ""}`}>
                <Image src={project.cover} alt={project.coverAlt} fill sizes="(min-width: 1100px) 45vw, (min-width: 700px) 48vw, 94vw" />
                <span className="home-case__preview">Vista del producto</span>
              </div>
              <div className="home-case__copy">
                <span>{project.descriptor}</span>
                <h3>{project.name}</h3>
                <p>{project.headline}</p>
                <div className="home-case__footer">
                  <ul aria-label={`Plataformas de ${project.name}`}>
                    {project.platforms.slice(0, 3).map((platform) => <li key={platform}>{platform}</li>)}
                  </ul>
                  <strong>Explorar caso <span aria-hidden="true">→</span></strong>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="home-cases__more">
          <span>GPS · logística · ecommerce · educación · operación empresarial</span>
          <Link href="/proyectos">Abrir portafolio completo <span aria-hidden="true">→</span></Link>
        </div>
      </section>

      <section className="home-price reveal-up">
        <div className="home-price__eyebrow">Una forma fácil de empezar</div>
        <div className="home-price__main">
          <div>
            <h2>Tu página profesional<br />desde <span>$2,500 MXN.</span></h2>
            <p>Un punto de entrada claro para negocios que necesitan verse bien, aparecer en línea y recibir contactos. Para tiendas y software, cotizamos el alcance real.</p>
          </div>
          <div className="home-price__actions">
            <Link href="/precios">Ver planes y alcance <span aria-hidden="true">→</span></Link>
            <small>Pagos por etapas · 30 días de garantía técnica</small>
          </div>
        </div>
      </section>

      <section className="home-faq reveal-up" aria-labelledby="preguntas-frecuentes">
        <div className="home-faq__heading">
          <div>
            <span className="site-kicker site-kicker--light">Antes de comenzar</span>
            <h2 id="preguntas-frecuentes">Preguntas que sí nos hacen los clientes.</h2>
          </div>
          <p>Precios, tiempos, pagos, propiedad y soporte explicados de forma directa para que sepas qué esperar desde el primer contacto.</p>
        </div>

        <div className="home-faq__layout">
          <aside className="home-faq__support">
            <span className="home-faq__support-icon" aria-hidden="true">?</span>
            <small>Respuesta directa</small>
            <h3>¿Tienes una duda sobre tu proyecto o necesitas soporte?</h3>
            <p>Escríbenos por WhatsApp. Revisamos tu caso y te indicamos el siguiente paso sin enviarte por formularios interminables.</p>
            <a href={supportWhatsappUrl} target="_blank" rel="noopener noreferrer" data-track-cta="true" data-cta-name="faq_support" data-cta-location="home_faq">
              Contactar a soporte <span aria-hidden="true">↗</span>
            </a>
            <div><i /> Atención directa en español</div>
          </aside>

          <div className="home-faq__questions">
            <details open>
              <summary><span>01</span><strong>¿Cuánto cuesta una página web?</strong><i aria-hidden="true" /></summary>
              <div className="home-faq__answer">
                <p>Tenemos tres puntos de entrada. El precio final se confirma cuando conocemos contenido, funciones e integraciones.</p>
                <div className="home-faq__prices">
                  <div><span>Página Inicio</span><strong>$2,500 MXN</strong><small>Una página · hasta 5 bloques · WhatsApp o formulario · SEO esencial · 1 ronda de ajustes</small></div>
                  <div><span>Web Profesional</span><strong>$7,500 MXN</strong><small>Hasta 5 páginas · diseño de marca · textos asistidos · analítica · SEO local · 2 rondas</small></div>
                  <div><span>Tienda en línea</span><strong>$15,000 MXN</strong><small>Catálogo inicial · carrito · pagos · pedidos · envío básico · capacitación</small></div>
                </div>
                <Link href="/precios">Ver precios, alcance y condiciones <span aria-hidden="true">→</span></Link>
              </div>
            </details>

            <details>
              <summary><span>02</span><strong>¿Qué incluye la página de $2,500?</strong><i aria-hidden="true" /></summary>
              <div className="home-faq__answer"><p>Incluye una página adaptable a celular y computadora, hasta cinco bloques de contenido, botón de WhatsApp o formulario, configuración técnica esencial para buscadores y una ronda de ajustes. Dominio, hosting, fotografías, textos extensos o funciones especiales se cotizan aparte.</p><Link href="/servicios/paginas-web">Conocer el servicio de páginas web →</Link></div>
            </details>

            <details>
              <summary><span>03</span><strong>¿Cuánto cuesta desarrollar un sistema o una app?</strong><i aria-hidden="true" /></summary>
              <div className="home-faq__answer"><p>Depende del flujo, los usuarios, plataformas e integraciones. Primero definimos una etapa útil y medible; después presentamos funciones, calendario, entregables y precio. Aplicaciones, GPS, inventarios y servidores se pueden dividir por módulos para controlar la inversión.</p><a href={whatsappUrl} target="_blank" rel="noopener noreferrer">Solicitar una estimación inicial →</a></div>
            </details>

            <details>
              <summary><span>04</span><strong>¿Cuánto tiempo tarda un proyecto?</strong><i aria-hidden="true" /></summary>
              <div className="home-faq__answer"><p>Una página sencilla suele tomar entre 1 y 2 semanas; un sitio profesional entre 2 y 4; una tienda inicial entre 3 y 6. El software a la medida se entrega por etapas funcionales. El calendario comienza cuando contamos con la información y accesos necesarios.</p></div>
            </details>

            <details>
              <summary><span>05</span><strong>¿Puedo pagar por etapas?</strong><i aria-hidden="true" /></summary>
              <div className="home-faq__answer"><p>Sí. Utilizamos 50/50 para trabajos simples y esquemas 40/30/30 o pagos por hitos para proyectos mayores. Cada pago queda relacionado con un avance o entregable definido en la propuesta.</p></div>
            </details>

            <details>
              <summary><span>06</span><strong>¿El sistema, dominio y accesos quedan a mi nombre?</strong><i aria-hidden="true" /></summary>
              <div className="home-faq__answer"><p>Entregamos los accesos y activos establecidos en la propuesta. Dominio, hosting, repositorios, cuentas de publicación y licencias de terceros se identifican desde el inicio para que sepas qué es tuyo y qué corresponde a un proveedor externo.</p></div>
            </details>

            <details>
              <summary><span>07</span><strong>¿Qué soporte ofrecen después de entregar?</strong><i aria-hidden="true" /></summary>
              <div className="home-faq__answer"><p>Incluimos 30 días de garantía técnica para corregir defectos relacionados con el alcance aprobado. Después puedes contratar mantenimiento, monitoreo o nuevas etapas sin obligación de permanencia.</p><a href={supportWhatsappUrl} target="_blank" rel="noopener noreferrer">Contactar a soporte por WhatsApp →</a></div>
            </details>

            <details>
              <summary><span>08</span><strong>¿Pueden mejorar o conectar un sistema que ya existe?</strong><i aria-hidden="true" /></summary>
              <div className="home-faq__answer"><p>Sí. Primero revisamos tecnología, código disponible, base de datos, accesos y riesgos. Podemos rediseñar pantallas, crear módulos, conectar APIs, migrar información o construir una nueva etapa sin reemplazar lo que todavía funciona.</p></div>
            </details>

            <details>
              <summary><span>09</span><strong>¿Trabajan fuera de Guadalajara?</strong><i aria-hidden="true" /></summary>
              <div className="home-faq__answer"><p>Sí. Podemos trabajar de forma remota con empresas en México. Cuando el proyecto requiere red local, equipos, configuración de servidor Linux o instalación en sitio, definimos esa visita dentro del alcance.</p></div>
            </details>
          </div>
        </div>
      </section>

      <section className="home-final-cta reveal-up">
        <span className="site-kicker site-kicker--light">Hagámoslo posible</span>
        <h2>¿Qué parte de tu negocio debería funcionar mejor?</h2>
        <p>Cuéntanos el problema. Nosotros te ayudamos a convertirlo en una solución clara, útil y lista para crecer.</p>
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" data-track-cta="true" data-cta-name="home_final_cta" data-cta-location="home_final">
          Hablar de mi proyecto <span aria-hidden="true">↗</span>
        </a>
      </section>
    </>
  );
}
