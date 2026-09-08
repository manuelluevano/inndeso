export type Service = {
  id: string;
  number: string;
  title: string;
  short: string;
  description: string;
  capabilities: string[];
  accent: "blue" | "green" | "orange" | "violet";
};

export type CaseStudy = {
  slug: string;
  name: string;
  descriptor: string;
  category: string;
  headline: string;
  summary: string;
  cover: string;
  coverAlt: string;
  theme: "navy" | "green" | "orange";
  platforms: string[];
  capabilities: string[];
  gallery: Array<{ src: string; alt: string; label: string }>;
  disclosure: string;
};

export const services: Service[] = [
  {
    id: "software",
    number: "01",
    title: "Control operativo centralizado",
    short: "Toda tu operación, clara y conectada en un solo programa.",
    description: "Reunimos procesos administrativos, operativos y comerciales en una plataforma construida alrededor de la forma real en que trabaja tu empresa.",
    capabilities: ["Paneles administrativos", "Roles y permisos", "Procesos y automatizaciones", "Reportes y documentos"],
    accent: "blue",
  },
  {
    id: "gps",
    number: "02",
    title: "Rutas y equipos en tiempo real",
    short: "Sigue la operación en campo mientras está sucediendo.",
    description: "Conectamos ubicación, rutas, personal, vehículos, evidencias y alertas en un mapa operativo en tiempo real.",
    capabilities: ["Mapas en vivo", "Rutas y paradas", "Última señal y batería", "Evidencias geolocalizadas"],
    accent: "green",
  },
  {
    id: "apps",
    number: "03",
    title: "Apps para cada dispositivo",
    short: "Tu equipo trabaja donde lo necesita, con los mismos datos.",
    description: "Creamos aplicaciones para iPhone, Android, Windows y Mac para que cada persona trabaje desde el dispositivo que ya utiliza.",
    capabilities: ["iPhone y Android", "Windows y Mac", "Apple Watch", "Trabajo incluso sin conexión"],
    accent: "violet",
  },
  {
    id: "ventas",
    number: "04",
    title: "Ventas, inventario y finanzas",
    short: "Vende, cobra y decide con información siempre actualizada.",
    description: "Integramos catálogo, existencias, compras, cotizaciones, ventas, cobranza, caja, proveedores y rentabilidad.",
    capabilities: ["Punto de venta", "Inventario y variantes", "Cobranza y caja", "Métricas y rentabilidad"],
    accent: "orange",
  },
  {
    id: "web",
    number: "05",
    title: "Sitios y comercio que convierten",
    short: "Una presencia digital que explica, genera confianza y vende.",
    description: "Construimos páginas, catálogos y tiendas rápidas, adaptables y preparadas para búsqueda, campañas y ventas.",
    capabilities: ["Landing pages", "Sitios corporativos", "Tiendas y pagos", "SEO técnico"],
    accent: "blue",
  },
  {
    id: "infraestructura",
    number: "06",
    title: "Servidores y respaldo para tu negocio",
    short: "Tu información segura y disponible cuando tu equipo la necesita.",
    description: "Preparamos la parte que mantiene tu sistema disponible, protegido y conectado, ya sea en internet o en un servidor dentro de tu negocio.",
    capabilities: ["Información centralizada", "Respaldo y seguridad", "Acceso desde internet", "Servidor en tu negocio"],
    accent: "green",
  },
];

export const caseStudies: CaseStudy[] = [
  {
    slug: "geojornada",
    name: "GeoJornada",
    descriptor: "Control de personal en campo",
    category: "GPS + operación en vivo",
    headline: "Ubicación, jornadas y evidencia en una sola operación.",
    summary: "Un ecosistema web y móvil para saber quién está en campo, consultar su última señal y convertir cada jornada en información verificable.",
    cover: "/portfolio/geojornada/mapa-operativo-demo.webp",
    coverAlt: "Panel GeoJornada con mapa operativo y trabajador en tiempo real",
    theme: "navy",
    platforms: ["Panel web", "App móvil", "Mapa en vivo", "Personal en campo"],
    capabilities: ["Mapa operativo en vivo", "Jornadas y recorridos", "Evidencias de campo", "Historial y alertas", "App del trabajador"],
    gallery: [
      { src: "/portfolio/geojornada/mapa-operativo-demo.webp", alt: "Mapa operativo GeoJornada", label: "Centro de control" },
      { src: "/portfolio/geojornada/jornada-movil-demo.webp", alt: "Aplicación móvil con jornada activa", label: "Jornada móvil" },
      { src: "/portfolio/geojornada/evidencia-movil-demo.webp", alt: "Registro móvil de evidencia", label: "Evidencia" },
      { src: "/portfolio/geojornada/historial-movil-demo.webp", alt: "Historial móvil de jornadas", label: "Historial" },
    ],
    disclosure: "Pantallas demostrativas con marca y datos ficticios, preparadas a partir de un sistema funcional.",
  },
  {
    slug: "sana-life",
    name: "Sana Life",
    descriptor: "Distribución veterinaria conectada",
    category: "Logística + reparto",
    headline: "De la planeación de rutas a la entrega y el cobro.",
    summary: "Plataforma para coordinar repartidores, rutas, productos veterinarios, ventas, inventario por unidad, cobranza y operación en vivo.",
    cover: "/portfolio/sana-life/mapa-en-vivo-demo.svg",
    coverAlt: "Panel demostrativo de Sana Life con repartidores y rutas en vivo",
    theme: "green",
    platforms: ["Panel web", "App móvil", "Rutas", "Reparto en vivo"],
    capabilities: ["Planeación de rutas", "Repartidores en vivo", "Inventario por unidad", "Venta y cobro móvil", "Métricas y corte de caja"],
    gallery: [
      { src: "/portfolio/sana-life/mapa-en-vivo-demo.svg", alt: "Mapa demostrativo de repartidores en vivo de Sana Life", label: "Operación en vivo" },
      { src: "/portfolio/sana-life/productos-veterinarios-demo.svg", alt: "Inventario demostrativo de productos veterinarios", label: "Productos e inventario" },
      { src: "/portfolio/sana-life/venta-movil-demo.svg", alt: "Aplicación móvil demostrativa para venta de productos veterinarios", label: "Venta móvil" },
      { src: "/portfolio/sana-life/logo.webp", alt: "Logotipo autorizado de Sana Life", label: "Marca autorizada" },
    ],
    disclosure: "Marca autorizada. Vistas demostrativas recreadas a partir del alcance funcional, con identidades, importes, productos y ubicaciones ficticios.",
  },
  {
    slug: "movilsource",
    name: "MovilSource",
    descriptor: "Operación integral para talleres",
    category: "Administración + ventas",
    headline: "Del equipo recibido a la entrega, el cobro y la rentabilidad.",
    summary: "Un sistema de escritorio que reúne taller, cotizaciones, inventario, clientes, caja, compras, garantías, alertas y reportes.",
    cover: "/portfolio/movilsource/taller-demo.webp",
    coverAlt: "Tablero demostrativo del taller MovilSource",
    theme: "orange",
    platforms: ["Aplicación para Mac", "Taller", "Inventario", "Reportes"],
    capabilities: ["Recepción y taller", "Cotizador inteligente", "Inventario y accesorios", "Caja y finanzas", "Reportes y alertas"],
    gallery: [
      { src: "/portfolio/movilsource/taller-demo.webp", alt: "Tablero del taller", label: "Taller" },
      { src: "/portfolio/movilsource/cotizador-demo.webp", alt: "Cotizador de reparaciones", label: "Cotizador" },
      { src: "/portfolio/movilsource/servicio-demo.webp", alt: "Expediente de servicio", label: "Servicio" },
      { src: "/portfolio/movilsource/accesorios-demo.webp", alt: "Inventario de accesorios", label: "Inventario" },
      { src: "/portfolio/movilsource/reportes-demo.webp", alt: "Reportes del taller", label: "Reportes" },
    ],
    disclosure: "Variantes de demostración con datos ficticios; no representan métricas comerciales reales.",
  },
  {
    slug: "marshop",
    name: "MarShop",
    descriptor: "Ventas a plazos para comercio minorista",
    category: "macOS + administración comercial",
    headline: "Clientas, productos, abonos y finanzas en una experiencia hecha para vender.",
    summary: "Una aplicación nativa para macOS que organiza catálogo, existencias, clientas, ventas a plazos, agenda de cobros, caja, gastos y utilidad desde un solo lugar.",
    cover: "/portfolio/marshop/productos-demo.png",
    coverAlt: "Catálogo demostrativo de MarShop con productos, fotografías, precios, utilidad y existencias",
    theme: "orange",
    platforms: ["Aplicación para Mac", "Ventas", "Abonos", "Inventario", "Reportes"],
    capabilities: ["Catálogo visual e inventario", "Expedientes de clientas", "Ventas y planes de abonos", "Agenda de cobros", "Caja, gastos y utilidad", "Tickets y reportes PDF"],
    gallery: [
      { src: "/portfolio/marshop/acceso-demo.png", alt: "Pantalla de acceso segura de MarShop", label: "Acceso local" },
      { src: "/portfolio/marshop/inicio-demo.png", alt: "Tablero de MarShop con caja, ventas y cobros prioritarios", label: "Resumen del negocio" },
      { src: "/portfolio/marshop/productos-demo.png", alt: "Catálogo visual demostrativo de MarShop con ocho productos", label: "Productos e inventario" },
      { src: "/portfolio/marshop/ventas-demo.png", alt: "Seguimiento demostrativo de ventas, saldos y planes de pago en MarShop", label: "Ventas a plazos" },
      { src: "/portfolio/marshop/cobros-demo.png", alt: "Agenda demostrativa de cobros de MarShop", label: "Calendario de cobros" },
    ],
    disclosure: "Capturas de una aplicación funcional. Las identidades y datos comerciales visibles fueron sustituidos por información demostrativa para proteger la privacidad.",
  },
  {
    slug: "cellgo",
    name: "CellGo",
    descriptor: "Comercio y operación para refacciones",
    category: "Ecommerce + inventario",
    headline: "Del catálogo público al control interno del taller.",
    summary: "Una plataforma web que conecta tienda, compatibilidad de refacciones, ofertas, ventas, inventario, reparaciones, clientes y reportes en una misma operación.",
    cover: "/portfolio/cellgo/panel-administrativo.png",
    coverAlt: "Panel administrativo de CellGo con ventas, inventario, reparaciones y clientes",
    theme: "green",
    platforms: ["Tienda en línea", "Panel del negocio", "Inventario", "Taller", "Reportes"],
    capabilities: ["Catálogo y ofertas", "Compatibilidad de refacciones", "Ventas e inventario", "Reparaciones y cotizaciones", "Clientes y reportes"],
    gallery: [
      { src: "/portfolio/cellgo/panel-administrativo.png", alt: "Panel administrativo de CellGo", label: "Centro de operación" },
      { src: "/portfolio/cellgo/tienda-inicio.png", alt: "Página principal de la tienda CellGo", label: "Tienda en línea" },
      { src: "/portfolio/cellgo/catalogo.png", alt: "Catálogo de refacciones de CellGo", label: "Catálogo y filtros" },
      { src: "/portfolio/cellgo/ofertas.png", alt: "Ofertas activas en la tienda CellGo", label: "Ofertas" },
      { src: "/portfolio/cellgo/producto.png", alt: "Detalle de producto en CellGo", label: "Ficha de producto" },
      { src: "/portfolio/cellgo/categorias.png", alt: "Categorías de refacciones en CellGo", label: "Categorías" },
    ],
    disclosure: "Pantallas del proyecto con datos, precios, existencias y nombres demostrativos; no representan resultados comerciales reales.",
  },
  {
    slug: "sercomin",
    name: "Sercomin",
    descriptor: "Sitio y catálogo para soluciones industriales",
    category: "Sitio web + catálogo industrial",
    headline: "Servicios y productos industriales explicados con claridad.",
    summary: "Un sitio web que organiza servicios técnicos, fabricación, productos y canales de contacto para que cada visitante encuentre rápido la solución que necesita.",
    cover: "/portfolio/sercomin/servicios-industriales.webp",
    coverAlt: "Página de servicios industriales de Sercomin",
    theme: "orange",
    platforms: ["Sitio web", "Catálogo", "Servicios", "Contacto"],
    capabilities: ["Presentación de servicios", "Catálogo por categorías", "Fichas de producto", "Contacto comercial", "Diseño adaptable"],
    gallery: [
      { src: "/portfolio/sercomin/servicios-industriales.webp", alt: "Página principal de servicios industriales de Sercomin", label: "Servicios industriales" },
      { src: "/portfolio/sercomin/catalogo-industrial.webp", alt: "Catálogo web de productos industriales de Sercomin", label: "Catálogo de productos" },
      { src: "/portfolio/sercomin/contacto-industrial.webp", alt: "Página de contacto comercial de Sercomin", label: "Contacto y atención" },
    ],
    disclosure: "Capturas del sitio web desarrollado para presentar la oferta comercial de Sercomin. La información corresponde a su publicación visible.",
  },
  {
    slug: "fertikhor",
    name: "FertiKhor",
    descriptor: "Presencia digital para nutrición vegetal",
    category: "Sitio corporativo + contacto comercial",
    headline: "Una marca especializada presentada de forma simple y confiable.",
    summary: "Un sitio corporativo que explica la empresa, su enfoque en nutrición vegetal y sus canales de atención mediante una experiencia limpia, ordenada y fácil de consultar.",
    cover: "/portfolio/FERTIKHOR/fertikhor-1.webp",
    coverAlt: "Sitio corporativo de FertiKhor con información de la empresa",
    theme: "green",
    platforms: ["Sitio web", "Empresa", "Productos", "Contacto"],
    capabilities: ["Presentación de la empresa", "Propuesta de valor", "Información de productos", "Contacto directo", "Diseño adaptable"],
    gallery: [
      { src: "/portfolio/FERTIKHOR/fertikhor-1.webp", alt: "Presentación corporativa de FertiKhor", label: "Quiénes somos" },
      { src: "/portfolio/FERTIKHOR/fertikhor-2.webp", alt: "Página de contacto de FertiKhor", label: "Contacto directo" },
      { src: "/portfolio/FERTIKHOR/fertikhor-3.webp", alt: "Contenido de productos de FertiKhor", label: "Oferta comercial" },
      { src: "/portfolio/FERTIKHOR/fertikhor-4.webp", alt: "Información de FertiKhor", label: "Información clara" },
      { src: "/portfolio/FERTIKHOR/fertikhor-5.webp", alt: "Vista adicional del sitio de FertiKhor", label: "Experiencia web" },
    ],
    disclosure: "Capturas del sitio corporativo. Los datos de contacto visibles pertenecen a la presentación pública del proyecto.",
  },
  {
    slug: "libremente",
    name: "LibreMente",
    descriptor: "Aprendizaje y comprensión lectora",
    category: "Educación + app móvil",
    headline: "Aprender a leer mejor, un ejercicio a la vez.",
    summary: "Una aplicación educativa con una experiencia de avance por niveles para fortalecer lectura, comprensión, vocabulario, gramática y ortografía mediante prácticas breves, metas y seguimiento personal.",
    cover: "/portfolio/libremente/libremente-plataforma-premium.png",
    coverAlt: "Plataforma web y aplicación móvil LibreMente para lectura, comprensión y progreso de aprendizaje",
    theme: "green",
    platforms: ["Plataforma web", "App móvil", "Aprendizaje", "Progreso", "Lectura accesible"],
    capabilities: ["Ruta de aprendizaje", "Biblioteca y lectura", "Comprensión lectora", "Gramática y ortografía", "Vocabulario", "Metas, niveles y rachas"],
    gallery: [
      { src: "/portfolio/libremente/libremente-plataforma-premium.png", alt: "Plataforma web y app móvil LibreMente con biblioteca, actividades y progreso", label: "Plataforma de aprendizaje" },
      { src: "/portfolio/libremente/inicio-anonimo.png", alt: "Inicio de LibreMente con ruta de aprendizaje por unidades", label: "Ruta diaria" },
      { src: "/portfolio/libremente/biblioteca.png", alt: "Biblioteca de LibreMente con libros y avance de lectura", label: "Biblioteca personal" },
      { src: "/portfolio/libremente/progreso.png", alt: "Panel móvil de progreso, puntos, racha y habilidades", label: "Progreso y hábitos" },
      { src: "/portfolio/libremente/perfil-anonimo.png", alt: "Perfil de lectura con opciones de accesibilidad", label: "Experiencia personalizada" },
      { src: "/portfolio/libremente/acceso-anonimo.png", alt: "Acceso a la aplicación educativa LibreMente", label: "Acceso a la plataforma" },
    ],
    disclosure: "Capturas de una aplicación funcional. La identidad visible fue sustituida por datos ficticios para proteger información personal.",
  },
  {
    slug: "planifica40",
    name: "Planifica40",
    descriptor: "Cálculo avanzado y planeación de pensiones",
    category: "Finanzas + aplicación Windows",
    headline: "Del estado de cuenta a escenarios claros para tomar decisiones.",
    summary: "Una aplicación de escritorio que extrae información de estados de cuenta, organiza semanas y salarios, compara escenarios de pensión y genera reportes profesionales para cada cliente.",
    cover: "/portfolio/planifica40/extraccion-anonima.png",
    coverAlt: "Aplicación Planifica40 con extracción de datos y escenarios de pensión anonimizados",
    theme: "navy",
    platforms: ["Windows", "Cálculos de pensión", "Reportes para clientes", "Excel"],
    capabilities: ["Extracción de estados de cuenta", "Cálculo de semanas y salarios", "Comparación de escenarios", "Proyecciones personalizadas", "Reportes PDF para clientes", "Exportación a Excel"],
    gallery: [
      { src: "/portfolio/planifica40/acceso-demo.png", alt: "Pantalla de acceso de Planifica40 con usuario demostrativo", label: "Acceso seguro" },
      { src: "/portfolio/planifica40/extraccion-anonima.png", alt: "Extracción de datos y proyecciones en Planifica40 con identidad anónima", label: "Extracción y cálculo" },
      { src: "/portfolio/planifica40/escenarios-anonimos.png", alt: "Comparación de cuatro escenarios de pensión en Planifica40 con datos anónimos", label: "Escenarios comparativos" },
    ],
    disclosure: "Capturas de una aplicación funcional desarrollada para un cliente. Las identidades, claves y archivos visibles fueron sustituidos por datos demostrativos para proteger información personal.",
  },
];

export const pricePlans = [
  {
    name: "Página Inicio",
    price: "$2,500",
    suffix: "MXN desde",
    description: "Para salir a internet con una presencia clara y profesional.",
    items: ["Una página", "Hasta 5 bloques", "Diseño adaptable", "WhatsApp y formulario", "SEO técnico esencial", "1 ronda de ajustes"],
    note: "Dominio, hosting y contenido avanzado se cotizan aparte.",
  },
  {
    name: "Web Profesional",
    price: "$7,500",
    suffix: "MXN desde",
    description: "Para presentar servicios, generar confianza y captar prospectos.",
    items: ["Hasta 5 páginas", "Diseño adaptado a tu marca", "Textos comerciales asistidos", "Analítica base", "SEO técnico y local", "2 rondas de ajustes"],
    note: "Ideal para negocios y servicios profesionales.",
    featured: true,
  },
  {
    name: "Tienda en línea",
    price: "$15,000",
    suffix: "MXN desde",
    description: "Para vender productos con una operación digital completa.",
    items: ["Catálogo inicial", "Carrito y checkout", "Pasarela de pago", "Panel de pedidos", "Envío básico", "Capacitación"],
    note: "Integraciones y carga masiva se cotizan según alcance.",
  },
];

export const contactEmail = "contacto@inndeso.com.mx";

export const whatsappUrl =
  "https://wa.me/523312050703?text=Hola%20INNDESO%2C%20quiero%20cotizar%20un%20proyecto";

export const supportWhatsappUrl =
  "https://wa.me/523312050703?text=Hola%20INNDESO%2C%20necesito%20ayuda%20o%20soporte%20con%20un%20proyecto";
