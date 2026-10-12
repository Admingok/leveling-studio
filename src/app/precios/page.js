import PricingCard from '@/components/PricingCard';
import FadeIn from '@/components/FadeIn';
import Link from 'next/link';

export const metadata = {
  title: 'Precios y Paquetes | Leveling Studio',
  description: 'Paquetes de desarrollo web, marketing y publicidad digital con precios claros para PyMEs en México.',
};

export default function PreciosPage() {
  const packages = [
    {
      name: 'Emprende',
      price: '9,900',
      description: 'Para negocios que arrancan y necesitan presencia digital profesional ya.',
      features: [
        'Landing page de 1 sección (a medida)',
        'Diseño responsive (móvil + desktop)',
        'Optimización SEO básica',
        'Perfil de redes sociales (1 plataforma)',
        '1 video promocional (Reel/TikTok)',
        'Entrega en 7 días hábiles',
      ],
      highlighted: false,
      delay: 0,
    },
    {
      name: 'Impulsa',
      price: '24,900',
      description: 'El favorito de negocios con tracción que quieren escalar ventas en serio.',
      features: [
        'Sitio web multi-página (hasta 5 secciones)',
        'Estrategia de embudo de ventas',
        'Gestión de redes (2 plataformas, 1 mes)',
        'Setup + gestión de Meta/Google Ads (fee)',
        '4 videos de contenido orientados a venta',
        'Integración de WhatsApp + formulario',
        'Entrega en 14 días hábiles',
      ],
      highlighted: true,
      badge: 'Más popular',
      delay: 0.15,
    },
    {
      name: 'Escala',
      price: '49,900',
      description: 'Solución integral para marcas consolidadas que buscan dominar su mercado.',
      features: [
        'E-commerce o web completa a medida',
        'Marketing estratégico full (3 meses)',
        'Publicidad en Meta + TikTok + Google',
        'Producción de video ilimitada* (3 meses)',
        'Mantenimiento y soporte 3 meses',
        'Reportes de ROI mensuales',
        'Entrega prioritaria + acompañamiento 1 a 1',
      ],
      highlighted: false,
      delay: 0.3,
    },
  ];

  const retainers = [
    { name: 'Contenido', price: '6,500', detail: 'Gestión de redes + 8 piezas/mes' },
    { name: 'Performance', price: '9,500', detail: 'Fee de ads + optimización continua' },
    { name: 'Full Growth', price: '15,000', detail: 'Contenido + ads + web + reportes' },
  ];

  return (
    <div className="pt-28 pb-24 px-[5%] md:px-[10%]">
      {/* HEADER DE PÁGINA */}
      <FadeIn>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Link href="/" className="text-brand-cyan text-sm hover:underline mb-4 inline-block">
            ← Volver al inicio
          </Link>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-5">
            Precios <span className="gradient-text">claros, sin sorpresas</span>
          </h1>
          <p className="text-lg text-brand-muted">
            Elige el paquete que se alinee con la etapa de tu negocio. Todos incluyen diseño a medida,
            comunicación directa y entrega puntual. <strong className="text-white">Precios + IVA.</strong>
          </p>
        </div>
      </FadeIn>

      {/* GRID DE PAQUETES */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        {packages.map((pkg, i) => (
          <PricingCard
            key={i}
            name={pkg.name}
            price={pkg.price}
            description={pkg.description}
            features={pkg.features}
            highlighted={pkg.highlighted}
            badge={pkg.badge}
            delay={pkg.delay}
          />
        ))}
      </div>

      {/* NOTA DE PABTA */}
      <FadeIn delay={0.4}>
        <p className="text-center text-brand-muted text-sm mt-10 max-w-2xl mx-auto">
          * Los paquetes de publicidad <strong className="text-white">no incluyen el presupuesto de pauta</strong> (el
          dinero que inviertes en Meta/Google/TikTok). Tu fee por gestión es aparte y se define según el objetivo.
        </p>
      </FadeIn>

      {/* RETAINERS MENSUALES */}
      <section className="max-w-6xl mx-auto mt-24">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-3">
              ¿Ya tienes web? <span className="gradient-text">Mantenla creciendo</span>
            </h2>
            <p className="text-brand-muted">Planes mensuales (retainers) para resultados continuos.</p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {retainers.map((r, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="bg-brand-card border border-white/10 rounded-2xl p-6 hover:border-brand-cyan/40 transition">
                <h3 className="text-xl font-bold mb-1">{r.name}</h3>
                <p className="text-brand-muted text-sm mb-4">{r.detail}</p>
                <div className="text-3xl font-extrabold gradient-text">
                  ${r.price}<span className="text-base text-brand-muted font-normal"> /mes</span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* CTA FINAL */}
      <FadeIn delay={0.3}>
        <div className="text-center mt-20">
          <h3 className="text-2xl md:text-3xl font-extrabold mb-4">
            ¿Necesitas algo <span className="gradient-text">a la medida</span>?
          </h3>
          <p className="text-brand-muted mb-8 max-w-xl mx-auto">
            Cotizamos proyectos especiales, integraciones y campañas de alto volumen sin problema.
          </p>
          <Link
            href="/#contacto"
            className="inline-block bg-gradient-to-r from-brand-cyan to-brand-purple text-black font-bold px-8 py-4 rounded-full hover:scale-105 transition"
          >
            Solicitar cotización
          </Link>
        </div>
      </FadeIn>
    </div>
  );
}