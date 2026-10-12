import Link from 'next/link';
import Image from 'next/image'; // ⬅️ NUEVO
import { notFound } from 'next/navigation';
import FadeIn from '@/components/FadeIn';
import { projects, getProjectBySlug } from '@/data/projects';

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) {
    return { title: 'Proyecto no encontrado | Leveling Studio' };
  }
  return {
    title: `${project.title} | Leveling Studio`,
    description: project.summary,
    openGraph: {
      title: project.title,
      description: project.tagline,
      type: 'article',
    },
  };
}

export default async function ProyectoPage({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <article className="pt-28 pb-24 px-[5%] md:px-[10%]">
      {/* BREADCRUMB */}
      <FadeIn>
        <div className="max-w-4xl mx-auto mb-10 text-sm text-brand-muted">
          <Link href="/" className="hover:text-white transition">Inicio</Link>
          <span className="mx-2">/</span>
          <Link href="/proyectos" className="hover:text-white transition">Proyectos</Link>
          <span className="mx-2">/</span>
          <span className="text-white">{project.client}</span>
        </div>
      </FadeIn>

      {/* HERO DEL CASO */}
      <FadeIn delay={0.1}>
        <header className="max-w-4xl mx-auto mb-16">
          <span className="inline-block text-xs font-bold uppercase tracking-wide text-brand-cyan border border-brand-cyan/30 rounded-full px-3 py-1 mb-5">
            {project.category}
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-5">
            {project.title}
          </h1>
          <p className="text-xl text-brand-muted">{project.tagline}</p>
        </header>
      </FadeIn>

      {/* COVER / VIDEO — imagen real con fallback gradiente */}
      <FadeIn delay={0.2}>
        <div className={`max-w-5xl mx-auto aspect-video rounded-3xl bg-gradient-to-br ${project.coverGradient} mb-20 flex items-center justify-center relative overflow-hidden`}>
          {project.image ? (
            <>
              <Image
                src={project.image}
                alt={`Portada del caso de estudio: ${project.client}`}
                fill
                priority // ⬅️ carga inmediata (es el elemento más grande visible)
                sizes="(min-width: 1024px) 1024px, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/30" />
            </>
          ) : (
            <div className="relative text-center px-6">
              <p className="text-black font-bold text-lg mb-2">🎬 {project.videoLabel}</p>
              <p className="text-black/70 text-sm">
                Aquí insertarás tu video o imagen real del caso de estudio
              </p>
            </div>
          )}
        </div>
      </FadeIn>

      {/* RESULTADOS CLAVE */}
      <FadeIn delay={0.3}>
        <section className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {project.results.map((r, i) => (
            <div key={i} className="bg-brand-card border border-white/10 rounded-2xl p-8 text-center">
              <div className="text-4xl md:text-5xl font-extrabold gradient-text mb-2">{r.value}</div>
              <p className="text-brand-muted text-sm">{r.label}</p>
            </div>
          ))}
        </section>
      </FadeIn>

      {/* NARRATIVA */}
      <div className="max-w-3xl mx-auto space-y-14">
        <FadeIn>
          <section>
            <h2 className="text-2xl font-extrabold mb-4 flex items-center gap-3">
              <span className="text-brand-cyan">01</span> El contexto
            </h2>
            <p className="text-brand-muted leading-relaxed text-lg">{project.summary}</p>
          </section>
        </FadeIn>

        <FadeIn delay={0.1}>
          <section>
            <h2 className="text-2xl font-extrabold mb-4 flex items-center gap-3">
              <span className="text-brand-cyan">02</span> El reto
            </h2>
            <p className="text-brand-muted leading-relaxed text-lg">{project.challenge}</p>
          </section>
        </FadeIn>

        <FadeIn delay={0.2}>
          <section>
            <h2 className="text-2xl font-extrabold mb-4 flex items-center gap-3">
              <span className="text-brand-cyan">03</span> La solución
            </h2>
            <p className="text-brand-muted leading-relaxed text-lg">{project.solution}</p>
          </section>
        </FadeIn>

        <FadeIn delay={0.3}>
          <section>
            <h2 className="text-2xl font-extrabold mb-5">Servicios entregados</h2>
            <div className="flex flex-wrap gap-3">
              {project.services.map((s) => (
                <span key={s} className="text-sm text-brand-cyan border border-brand-cyan/30 rounded-full px-4 py-2">
                  {s}
                </span>
              ))}
            </div>
          </section>
        </FadeIn>
      </div>

      {/* CTA + SIGUIENTE PROYECTO */}
      <FadeIn delay={0.2}>
        <div className="max-w-4xl mx-auto mt-24 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-brand-cyan/10 to-brand-purple/10 border border-brand-cyan/30 rounded-2xl p-8">
            <h3 className="text-xl font-bold mb-3">¿Tu negocio puede ser el próximo caso?</h3>
            <p className="text-brand-muted text-sm mb-6">
              Cuéntanos tu reto y diseñamos una estrategia a la medida, con números claros.
            </p>
            <Link
              href="/#contacto"
              className="inline-block bg-gradient-to-r from-brand-cyan to-brand-purple text-black font-bold px-6 py-3 rounded-full hover:scale-105 transition text-sm"
            >
              Agendar diagnóstico gratis
            </Link>
          </div>

          <Link href={`/proyectos/${nextProject.slug}`} className="block group">
            <div className="bg-brand-card border border-white/10 rounded-2xl p-8 h-full hover:border-brand-cyan/50 transition">
              <p className="text-xs uppercase tracking-wide text-brand-muted mb-2">Siguiente caso</p>
              <h3 className="text-xl font-bold mb-2 group-hover:text-brand-cyan transition">{nextProject.client}</h3>
              <p className="text-brand-muted text-sm">{nextProject.tagline}</p>
              <span className="inline-block mt-4 text-sm font-semibold text-brand-cyan">Ver →</span>
            </div>
          </Link>
        </div>
      </FadeIn>
    </article>
  );
}