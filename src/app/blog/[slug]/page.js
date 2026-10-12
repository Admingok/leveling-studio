import Link from 'next/link';
import { notFound } from 'next/navigation';
import FadeIn from '@/components/FadeIn';
import { posts, getPostBySlug } from '@/data/posts';

// 1) Pre-renderiza una página estática por cada slug en el build
export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

// 2) SEO único por artículo (params es ASYNC en Next 16 → await)
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: 'Artículo no encontrado | Leveling Studio' };
  return {
    title: `${post.title} | Leveling Studio`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
    },
  };
}

function formatDate(iso) {
  return new Intl.DateTimeFormat('es-MX', { day: 'numeric', month: 'long', year: 'numeric' }).format(new Date(iso));
}

// Renderiza un bloque de contenido según su tipo (patrón CMS headless)
function Block({ block }) {
  if (block.type === 'h2') {
    return <h2 className="text-2xl md:text-3xl font-extrabold mt-12 mb-4">{block.text}</h2>;
  }
  if (block.type === 'ul') {
    return (
      <ul className="space-y-3 my-6">
        {block.items.map((item, i) => (
          <li key={i} className="flex items-start gap-3 text-brand-muted leading-relaxed">
            <span className="text-brand-cyan mt-1 shrink-0">▸</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    );
  }
  // type === 'p'
  return <p className="text-brand-muted leading-relaxed text-lg my-5">{block.text}</p>;
}

export default async function PostPage({ params }) {
  const { slug } = await params; // ⚠️ async en Next 16
  const post = getPostBySlug(slug);

  if (!post) notFound();

  // Artículo siguiente para retención (carrusel infinito)
  const idx = posts.findIndex((p) => p.slug === slug);
  const nextPost = posts[(idx + 1) % posts.length];

  return (
    <article className="pt-28 pb-24 px-[5%] md:px-[10%]">
      {/* BREADCRUMB */}
      <FadeIn>
        <div className="max-w-3xl mx-auto mb-10 text-sm text-brand-muted">
          <Link href="/" className="hover:text-white transition">Inicio</Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className="hover:text-white transition">Blog</Link>
          <span className="mx-2">/</span>
          <span className="text-white truncate">{post.title}</span>
        </div>
      </FadeIn>

      {/* HEADER DEL ARTÍCULO */}
      <FadeIn delay={0.1}>
        <header className="max-w-3xl mx-auto mb-12">
          <span className="inline-block text-xs font-bold uppercase tracking-wide text-brand-cyan border border-brand-cyan/30 rounded-full px-3 py-1 mb-5">
            {post.category}
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-5">{post.title}</h1>
          <p className="text-xl text-brand-muted mb-6">{post.excerpt}</p>
          <div className="flex items-center gap-3 text-sm text-brand-muted">
            <span>{formatDate(post.date)}</span>
            <span>•</span>
            <span>{post.readTime} de lectura</span>
          </div>
        </header>
      </FadeIn>

      {/* COVER */}
      <FadeIn delay={0.2}>
        <div className={`max-w-4xl mx-auto aspect-video rounded-3xl bg-gradient-to-br ${post.coverGradient} mb-16`} />
      </FadeIn>

      {/* CONTENIDO (bloques) */}
      <div className="max-w-3xl mx-auto">
        {post.content.map((block, i) => (
          <FadeIn key={i} delay={Math.min(i * 0.05, 0.3)}>
            <Block block={block} />
          </FadeIn>
        ))}
      </div>

      {/* CTA + SIGUIENTE ARTÍCULO */}
      <FadeIn delay={0.2}>
        <div className="max-w-4xl mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-brand-cyan/10 to-brand-purple/10 border border-brand-cyan/30 rounded-2xl p-8">
            <h3 className="text-xl font-bold mb-3">¿Listo para aplicar esto en tu negocio?</h3>
            <p className="text-brand-muted text-sm mb-6">
              Agenda un diagnóstico gratuito y diseñamos la estrategia exacta para tu caso.
            </p>
            <Link href="/#contacto" className="inline-block bg-gradient-to-r from-brand-cyan to-brand-purple text-black font-bold px-6 py-3 rounded-full hover:scale-105 transition text-sm">
              Agendar diagnóstico
            </Link>
          </div>

          <Link href={`/blog/${nextPost.slug}`} className="block group">
            <div className="bg-brand-card border border-white/10 rounded-2xl p-8 h-full hover:border-brand-cyan/50 transition">
              <p className="text-xs uppercase tracking-wide text-brand-muted mb-2">Siguiente lectura</p>
              <h3 className="text-lg font-bold mb-2 group-hover:text-brand-cyan transition leading-snug">{nextPost.title}</h3>
              <span className="inline-block mt-3 text-sm font-semibold text-brand-cyan">Leer →</span>
            </div>
          </Link>
        </div>
      </FadeIn>
    </article>
  );
}