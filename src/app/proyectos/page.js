import Link from 'next/link';
import FadeIn from '@/components/FadeIn';
import { projects } from '@/data/projects';

export const metadata = {
  title: 'Proyectos y Casos de Estudio | Leveling Studio',
  description: 'Resultados reales de negocios que crecieron con desarrollo web, marketing y publicidad digital.',
};

export default function ProyectosPage() {
  return (
    <div className="pt-28 pb-24 px-[5%] md:px-[10%]">
      <FadeIn>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Link href="/" className="text-brand-cyan text-sm hover:underline mb-4 inline-block">
            ← Volver al inicio
          </Link>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-5">
            Casos de <span className="gradient-text">estudio</span>
          </h1>
          <p className="text-lg text-brand-muted">
            No mostramos capturas bonitas: mostramos <strong className="text-white">números y procesos</strong>.
            Cada proyecto incluye el problema, la solución y el resultado medible.
          </p>
        </div>
      </FadeIn>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((p, i) => (
          <FadeIn key={p.slug} delay={i * 0.12}>
            <Link href={`/proyectos/${p.slug}`} className="block group">
              <article className="bg-brand-card border border-white/10 rounded-2xl overflow-hidden h-full flex flex-col transition-all duration-300 group-hover:border-brand-cyan/50 group-hover:-translate-y-2">
                {/* Cover con gradiente (placeholder de imagen/video) */}
                <div className={`h-48 bg-gradient-to-br ${p.coverGradient} relative flex items-end p-5`}>
                  <span className="absolute top-4 right-4 text-xs font-bold uppercase tracking-wide bg-black/30 backdrop-blur-sm text-white px-3 py-1 rounded-full">
                    {p.category}
                  </span>
                  <h3 className="text-xl font-extrabold text-black drop-shadow-sm">{p.client}</h3>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <p className="text-brand-muted text-sm mb-4 flex-1">{p.tagline}</p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {p.services.slice(0, 3).map((s) => (
                      <span key={s} className="text-xs text-brand-cyan border border-brand-cyan/30 rounded-full px-2.5 py-1">
                        {s}
                      </span>
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
    </div>
  );
}