// Fuente única de verdad para el blog.
// Cada objeto = una página /blog/[slug]
// El contenido se modela como BLOQUES estructurados (patrón CMS headless).
export const posts = [
  {
    slug: 'cuanto-cuesta-pagina-web-mexico-2026',
    title: '¿Cuánto cuesta una página web en México en 2026? (Guía honesta)',
    excerpt: 'El precio real de una web profesional en México, qué incluye cada rango y por qué lo barato sale carísimo.',
    date: '2026-03-15',
    readTime: '8 min',
    category: 'Desarrollo Web',
    coverGradient: 'from-brand-cyan to-brand-purple',
    content: [
      { type: 'p', text: 'Si estás buscando una página web para tu negocio, seguro te has topado con cotizaciones de $2,000 pesos y de $80,000 pesos. ¿Cuál es la diferencia real? En esta guía te desglosamos los precios del mercado mexicano 2026 sin rodeos, para que sepas exactamente qué estás comprando y no te lleves sorpresas.' },
      { type: 'h2', text: 'Los 3 rangos de precio que existen en México' },
      { type: 'p', text: 'El mercado se divide en tres grandes grupos según quién hace el trabajo y con qué profundidad estratégica.' },
      { type: 'ul', items: [
        'Básico ($3,000 – $9,000 MXN): plantillas prediseñadas, sin estrategia, entregado por freelancers junior o "paqueteros". Sirve si solo necesitas "existir" en internet, pero no convierte visitantes en clientes.',
        'Profesional ($10,000 – $30,000 MXN): diseño a medida, optimización de conversión, SEO técnico y estrategia de embudo. Aquí es donde una PyME seria debe invertir.',
        'Corporativo / E-commerce ($30,000 – $120,000+ MXN): tiendas online completas, integraciones de pago e inventario, performance marketing. Para marcas con volumen de ventas ya establecido.',
      ]},
      { type: 'h2', text: '¿Por qué lo barato sale carísimo?' },
      { type: 'p', text: 'Una web de $3,000 pesos suele ser una plantilla genérica que carga lento, no está optimizada para móvil y no tiene ninguna estrategia de conversión detrás. El costo real no es el diseño: es el dinero que DEJAS DE GANAR porque los visitantes se van sin comprar. Una web profesional se paga sola en las primeras semanas de ventas que genera.' },
      { type: 'h2', text: 'Qué debe incluir SIEMPRE una web profesional' },
      { type: 'ul', items: [
        'Diseño responsive (que se vea perfecto en celular, donde está el 80% de tu tráfico).',
        'Velocidad de carga optimizada (Google penaliza las webs lentas).',
        'Estructura de SEO técnico (títulos, descripciones, jerarquía de encabezados).',
        'Llamadas a la acción claras (botones de WhatsApp, formularios, CTAs).',
        'Analítica instalada para medir qué funciona y qué no.',
      ]},
      { type: 'p', text: 'En Leveling Studio trabajamos con paquetes claros desde $9,900 MXN, incluyendo estrategia, diseño a medida y optimización de conversión. No vendemos "páginas bonitas": vendemos máquinas de ventas. Revisa nuestros precios o agenda un diagnóstico gratuito.' },
    ],
  },
  {
    slug: 'embudos-de-venta-pymes',
    title: 'Embudos de venta: cómo convertir visitantes fríos en clientes',
    excerpt: 'La estructura paso a paso que usa toda agencia seria para que tu web no sea un folleto muerto.',
    date: '2026-02-28',
    readTime: '6 min',
    category: 'Marketing Estratégico',
    coverGradient: 'from-brand-purple to-brand-cyan',
    content: [
      { type: 'p', text: 'El 97% de las personas que llegan a tu web NO están listas para comprar hoy. Si tu sitio solo dice "contáctanos", pierdes a ese 97% para siempre. El embudo de venta existe precisamente para recuperarlos.' },
      { type: 'h2', text: '¿Qué es un embudo de venta?' },
      { type: 'p', text: 'Es el camino guiado que recorre un desconocido hasta convertirse en cliente. Cada etapa reduce la fricción y aumenta la confianza. Sin embudo, tu web es un folleto; con embudo, es un vendedor 24/7.' },
      { type: 'h2', text: 'Las 4 etapas que todo embudo necesita' },
      { type: 'ul', items: [
        'Atracción: contenido o ads que traen tráfico cualificado (gente con el problema que tú resuelves).',
        'Captura: ofreces algo de valor (guía, descuento, diagnóstico) a cambio de su email o WhatsApp.',
        'Nutrición: secuencia de mensajes/contenido que educa y genera confianza sin vender agresivo.',
        'Conversión: la oferta clara con prueba social y garantía, cuando ya están listos.',
      ]},
      { type: 'h2', text: 'El error #1 de las PyMEs mexicanas' },
      { type: 'p', text: 'Querer vender en el primer contacto. Nadie compra a un desconocido en internet sin antes confiar. El embudo construye esa confianza en capas. Por eso integramos formularios de captura, WhatsApp y secuencias de contenido en cada proyecto que entregamos.' },
    ],
  },
  {
    slug: 'reels-que-venden-formula',
    title: 'Reels que venden: la fórmula de contenido para PyMEs',
    excerpt: 'Deja de publicar por publicar. La estructura de 3 ganchos que convierte vistas en clientes.',
    date: '2026-01-20',
    readTime: '5 min',
    category: 'Contenido y Video',
    coverGradient: 'from-brand-cyan to-brand-purple',
    content: [
      { type: 'p', text: 'Tener 100,000 vistas no sirve de nada si no generan una venta. El contenido que vende no es el más viral: es el más estratégico. Te comparto la fórmula que usamos con nuestros clientes.' },
      { type: 'h2', text: 'La estructura gancho – valor – acción' },
      { type: 'ul', items: [
        'Gancho (0-3 seg): una frase que detiene el scroll. "Deja de perder clientes por esto" funciona mejor que "Hola, bienvenidos".',
        'Valor (3-25 seg): entregas UNA idea útil, no cinco. El algoritmo premia la retención, y la retención viene de la claridad.',
        'Acción (últimos seg): dices exactamente qué hacer: "Escribe QUIERO en los comentarios", "Agenda en el link de la bio".',
      ]},
      { type: 'h2', text: '3 tipos de reel que toda PyME debe alternar' },
      { type: 'ul', items: [
        'Educativo: enseñas algo que resuelve un micro-problema de tu cliente (genera autoridad).',
        'Detrás de cámaras / prueba social: muestras el proceso o testimonios (genera confianza).',
        'Oferta directa: presentas tu producto con urgencia o beneficio claro (convierte).',
      ]},
      { type: 'p', text: 'La consistencia gana: 3-5 reels por semana durante 90 días cambia por completo la percepción de tu marca. En Leveling Studio producimos estos batches mensuales para que no tengas que pensar en contenido, solo en atender las ventas que llegan.' },
    ],
  },
];

export function getPostBySlug(slug) {
  return posts.find((p) => p.slug === slug);
}

// Posts ordenados de más reciente a más antiguo (para el listado)
export function getSortedPosts() {
  return [...posts].sort((a, b) => new Date(b.date) - new Date(a.date));
}