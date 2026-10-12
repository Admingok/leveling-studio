// Fuente única de verdad para todos los casos de estudio.
// Cada objeto = una página /proyectos/[slug]
//
// 📸 CAMPO "image": cuando tengas la foto, súbela a public/proyectos/ y
// pon aquí la ruta EMPEZANDO CON "/", ej: '/proyectos/raiz-cafe.jpg'
// Mientras esté vacío (''), la tarjeta muestra el gradiente de respaldo.
export const projects = [
  {
    slug: 'campana-lanzamiento',
    title: 'Campaña de Lanzamiento — Café de Especialidad',
    client: 'Raíz Café',
    category: 'Publicidad Digital',
    tagline: 'De 0 a 1,200 pedidos en 6 semanas con Meta Ads + landing de conversión.',
    image: '', // ← pon '/proyectos/raiz-cafe.jpg' cuando subas la foto
    coverGradient: 'from-brand-cyan to-brand-purple',
    summary:
      'Raíz Café abría su primera sucursal física y necesitaba demanda inmediata. Diseñamos una landing de alta conversión y una campaña de Meta Ads segmentada por radio geográfico para llenar la cafetería desde el día 1.',
    challenge:
      'Negocio nuevo sin base de datos, sin reconocimiento de marca y con un presupuesto de pauta limitado. El reto era generar tracción local rápida sin quemar dinero en audiencias frías amplias.',
    solution:
      'Creamos una landing page enfocada en una sola oferta (primer café gratis con registro), configuramos píxel de Meta + eventos de conversión, y lanzamos 3 ángulos creativos distintos con videos cortos grabados en el local. Iteramos semanalmente apagando lo que no convertía y escalando lo ganador.',
    results: [
      { value: '1,200+', label: 'Pedidos en 6 semanas' },
      { value: '4.2x', label: 'ROAS promedio' },
      { value: '$38', label: 'Costo por lead' },
    ],
    services: ['Landing Page', 'Meta Ads', 'Producción de Video', 'Copywriting'],
    videoLabel: 'Video case study — Campaña Raíz Café',
  },
  {
    slug: 'ecommerce-belleza',
    title: 'E-commerce — Skincare Natural',
    client: 'Lumen Skin',
    category: 'Desarrollo Web',
    tagline: 'Tienda online a medida que triplicó la conversión móvil en 90 días.',
    image: '', // ← pon '/proyectos/lumen-skin.jpg' cuando subas la foto
    coverGradient: 'from-brand-purple to-brand-cyan',
    summary:
      'Lumen Skin vendía por Instagram y perdía ventas por la fricción de los DMs. Construimos un e-commerce completo con checkout optimizado para móvil, integrando inventario, pagos y envío.',
    challenge:
      'El 80% de su tráfico venía de móvil, pero su flujo de compra por mensajes era lento y abandonaba carritos. Necesitaban automatizar sin perder el trato cercano de marca.',
    solution:
      'Desarrollamos una tienda con catálogo filtrable, carrito persistente, checkout en 2 pasos y recuperación de carritos abandonados por WhatsApp automático. Rediseñamos fichas de producto con beneficios claros y reseñas.',
    results: [
      { value: '3x', label: 'Conversión móvil' },
      { value: '-45%', label: 'Abandono de carrito' },
      { value: '+62%', label: 'Ticket promedio' },
    ],
    services: ['E-commerce', 'UX/UI', 'Automatización WhatsApp', 'SEO Técnico'],
    videoLabel: 'Video case study — Lumen Skin Store',
  },
  {
    slug: 'estrategia-reels',
    title: 'Estrategia de Reels — Clínica Estética',
    client: 'Derma Belle',
    category: 'Marketing Estratégico',
    tagline: 'De 800 a 24,000 seguidores y agenda llena con contenido educativo.',
    image: '', // ← pon '/proyectos/derma-belle.jpg' cuando subas la foto
    coverGradient: 'from-brand-cyan to-brand-purple',
    summary:
      'Derma Belle tenía autoridad médica pero cero presencia digital. Creamos un sistema de contenido en Reels que educaba, generaba confianza y convertía seguidores en citas pagadas.',
    challenge:
      'El nicho estético está saturado de contenido superficial. Había que diferenciarse con rigor médico sin volverse aburrido, y convertir views en pacientes reales.',
    solution:
      'Diseñamos un embudo de contenido: Reels de gancho (mitos vs realidad), carruseles de valor (cuidados) y stories de conversión (testimonios + CTA a agenda). Grabamos batches mensuales y programamos con consistencia.',
    results: [
      { value: '24K', label: 'Seguidores en 4 meses' },
      { value: '1.8M', label: 'Views orgánicas' },
      { value: '90%', label: 'Agenda ocupada' },
    ],
    services: ['Estrategia de Contenido', 'Grabación de Video', 'Edición', 'Gestión de Redes'],
    videoLabel: 'Video case study — Derma Belle Reels',
  },
];

// Helper: devuelve todos los slugs para generateStaticParams
export function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug);
}