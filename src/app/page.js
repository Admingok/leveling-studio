import ServiceCard from '@/components/ServiceCard';
import FadeIn from '@/components/FadeIn';
import Counter from '@/components/Counter';
import ProcessStep from '@/components/ProcessStep';
import TestimonialCard from '@/components/TestimonialCard';
import ContactForm from '@/components/ContactForm';
import MatrixRain from '@/components/MatrixRain';
import Link from 'next/link';
import { projects } from '@/data/projects';

export default function Home() {
  const services = [
    {
      icon: '💻',
      title: 'Desarrollo Web',
      description: 'Creamos páginas web rápidas, responsivas y optimizadas para convertir visitantes en clientes. Desde landing pages hasta tiendas online.'
    },
    {
      icon: '📈',
      title: 'Marketing Estratégico',
      description: 'Diseñamos embudos de venta y estrategias de contenido que posicionan tu marca, generan autoridad y atraen leads calificados.'
    },
    {
      icon: '🚀',
      title: 'Publicidad Digital',
      description: 'Campañas en Meta Ads, TikTok Ads y Google Ads. Invertimos tu presupuesto de forma inteligente para maximizar el retorno de inversión (ROI).'
    }
  ];

  // Tomamos los primeros 3 casos de estudio reales como preview en el home
  const featuredProjects = projects.slice(0, 3);

  return (
    <>
      {/* SECCIÓN HERO */}
      <section 
        id="inicio" 
        className="min-h-screen flex items-center justify-center text-center px-[5%] md:px-[10%] relative pt-20 overflow-hidden"
      >
        <MatrixRain color="#00f0ff" density={0.975} speed={35} />
        <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-brand-purple/20 rounded-full blur-[120px] -z-10" />
        <div className="absolute bottom-[10%] right-0 w-[400px] h-[400px] bg-brand-cyan/10 rounded-full blur-[100px] -z-10 animate-pulse" />

        <div className="max-w-4xl relative z-10">
          <FadeIn delay={0.2}>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-5">
              Elevamos tu negocio al <span className="gradient-text">siguiente nivel</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.4}>
            <p className="text-lg md:text-xl text-brand-muted max-w-2xl mx-auto mb-10">
              En Leveling Studio fusionamos desarrollo web de alto impacto, estrategias de marketing y publicidad digital para convertir tu visión en una máquina de ventas.
            </p>
          </FadeIn>
          <FadeIn delay={0.6}>
            <div className="flex gap-5 justify-center flex-wrap">
              <a href="#servicios" className="bg-gradient-to-r from-brand-cyan to-brand-purple text-black px-7 py-3 rounded-full font-semibold hover:scale-105 transition">
                Ver Servicios
              </a>
              <Link href="/proyectos" className="border border-white/10 px-7 py-3 rounded-full font-semibold hover:bg-white/5 transition">
                Ver Proyectos
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* SECCIÓN DE SERVICIOS */}
      <section id="servicios" className="py-24 px-[5%] md:px-[10%]">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
              Nuestras <span className="gradient-text">Soluciones</span>
            </h2>
            <p className="text-xl text-brand-muted">Todo lo que necesitas para dominar tu mercado digital.</p>
          </div>
        </FadeIn>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} icon={service.icon} title={service.title} description={service.description} delay={index * 0.2} />
          ))}
        </div>
      </section>

      {/* SECCIÓN DE ESTADÍSTICAS */}
      <section className="py-20 px-[5%] md:px-[10%] bg-gradient-to-b from-transparent via-brand-purple/5 to-transparent border-y border-white/5">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          <div><Counter end={50} suffix="+" /><p className="text-brand-muted text-center">Proyectos Completados</p></div>
          <div><Counter end={98} suffix="%" /><p className="text-brand-muted text-center">Clientes Satisfechos</p></div>
          <div><Counter end={3} suffix="x" /><p className="text-brand-muted text-center">ROI Promedio</p></div>
          <div><Counter end={24} suffix="/7" /><p className="text-brand-muted text-center">Soporte Activo</p></div>
        </div>
      </section>

      {/* SECCIÓN NUESTRO PROCESO */}
      <section id="proceso" className="py-24 px-[5%] md:px-[10%]">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Nuestro <span className="gradient-text">Proceso</span></h2>
            <p className="text-xl text-brand-muted max-w-2xl mx-auto">Un método probado en 4 pasos para llevar tu negocio al siguiente nivel.</p>
          </div>
        </FadeIn>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ProcessStep number="01" icon="🔍" title="Descubrimiento" description="Analizamos tu negocio, tu mercado y tus objetivos para crear una estrategia a medida." delay={0} />
          <ProcessStep number="02" icon="🎨" title="Diseño y Estrategia" description="Creamos el diseño visual y la estrategia de marketing que conectará con tu audiencia." delay={0.15} />
          <ProcessStep number="03" icon="⚙️" title="Desarrollo" description="Construimos tu sitio web y campañas con las tecnologías más modernas del mercado." delay={0.3} />
          <ProcessStep number="04" icon="🚀" title="Lanzamiento" description="Publicamos, medimos resultados y optimizamos continuamente para maximizar tu ROI." delay={0.45} />
        </div>
      </section>

      {/* SECCIÓN DE PORTAFOLIO — CONECTADA A LOS CASOS REALES */}
      <section id="portafolio" className="py-24 px-[5%] md:px-[10%]">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Nuestro <span className="gradient-text">Trabajo</span></h2>
            <p className="text-xl text-brand-muted">Resultados reales, estrategias comprobadas. Haz clic en cualquier caso para ver el proceso completo.</p>
          </div>
        </FadeIn>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((p, index) => (
            <FadeIn key={p.slug} delay={index * 0.15}>
              <Link href={`/proyectos/${p.slug}`} className="block group h-full">
                <article className="bg-brand-card border border-white/10 rounded-2xl overflow-hidden h-full flex flex-col transition-all duration-300 group-hover:border-brand-cyan/50 group-hover:-translate-y-2">
                  {/* Cover con gradiente + badge de categoría */}
                  <div className={`h-52 bg-gradient-to-br ${p.coverGradient} relative flex items-end p-5`}>
                    <span className="absolute top-4 right-4 text-xs font-bold uppercase tracking-wide bg-black/30 backdrop-blur-sm text-white px-3 py-1 rounded-full">
                      {p.category}
                    </span>
                    <h3 className="text-xl font-extrabold text-black drop-shadow-sm">{p.client}</h3>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <p className="text-brand-muted text-sm mb-4 flex-1">{p.tagline}</p>
                    {/* Mini-resultados como prueba social rápida */}
                    <div className="flex gap-4 mb-5">
                      {p.results.slice(0, 2).map((r, i) => (
                        <div key={i}>
                          <div className="text-lg font-extrabold gradient-text">{r.value}</div>
                          <div className="text-[11px] text-brand-muted leading-tight">{r.label}</div>
                        </div>
                      ))}
                    </div>
                    <span className="text-sm font-semibold text-white group-hover:text-brand-cyan transition inline-flex items-center gap-1">
                      Ver caso completo →
                    </span>
                  </div>
                </article>
              </Link>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3}>
          <div className="text-center mt-12">
            <Link href="/proyectos" className="inline-block border border-white/15 px-7 py-3 rounded-full font-semibold hover:bg-white/5 transition">
              Ver todos los proyectos
            </Link>
          </div>
        </FadeIn>
      </section>

      {/* SECCIÓN TESTIMONIOS */}
      <section className="py-24 px-[5%] md:px-[10%]">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Lo que dicen nuestros <span className="gradient-text">clientes</span></h2>
            <p className="text-xl text-brand-muted">Historias reales de negocios que crecieron con nosotros.</p>
          </div>
        </FadeIn>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <TestimonialCard name="Carlos Mendoza" role="CEO, TechStart" text="Leveling Studio transformó completamente nuestra presencia digital. En 3 meses duplicamos nuestras ventas online." rating={5} delay={0} />
          <TestimonialCard name="Ana Rodríguez" role="Fundadora, Beauty Lab" text="El equipo entendió perfectamente nuestra visión. La página web que crearon es exactamente lo que necesitábamos." rating={5} delay={0.15} />
          <TestimonialCard name="Miguel Torres" role="Director, FoodExpress" text="Las campañas de publicidad que diseñaron nos dieron un ROI de 4x. Inversión que se paga sola." rating={5} delay={0.3} />
        </div>
      </section>

      {/* FOOTER CON FORMULARIO */}
      <footer id="contacto" className="py-24 px-[5%] md:px-[10%] border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-4">¿Listo para hacer <span className="gradient-text">Leveling</span>?</h2>
              <p className="text-xl text-brand-muted max-w-2xl mx-auto">Cuéntanos sobre tu proyecto y te responderemos en menos de 24 horas.</p>
            </div>
          </FadeIn>
          <ContactForm />
          <div className="mt-20 pt-10 border-t border-white/10 text-center">
            <p className="text-brand-muted text-sm">© 2024 Leveling Studio. Todos los derechos reservados.</p>
            <div className="flex justify-center gap-6 mt-4">
              <a href="#" className="text-brand-muted hover:text-white transition">Instagram</a>
              <a href="#" className="text-brand-muted hover:text-white transition">LinkedIn</a>
              <a href="#" className="text-brand-muted hover:text-white transition">TikTok</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}