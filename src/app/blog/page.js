import Link from 'next/link';
import FadeIn from '@/components/FadeIn';
import { getSortedPosts } from '@/data/posts';

export const metadata = {
  title: 'Blog | Leveling Studio',
  description: 'Guías prácticas de desarrollo web, marketing y publicidad digital para PyMEs en México.',
};

// Formatea la fecha ISO a algo legible en español (ej: "15 de marzo de 2026")
function formatDate(iso) {
  return new Intl.DateTimeFormat('es-MX', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(iso));
}

export default function BlogPage() {
  const posts = getSortedPosts();

  return (
    <div className="pt-28 pb-24 px-[5%] md:px-[10%]">
      <FadeIn>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Link href="/" className="text-brand-cyan text-sm hover:underline mb-4 inline-block">
            ← Volver al inicio
          </Link>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-5">
            Ideas que <span className="gradient-text">hacen crecer</span>
          </h1>
          <p className="text-lg text-brand-muted">
            Guías honestas sobre desarrollo web, marketing y ventas digitales.
            Sin humo, con números y pasos que puedes aplicar hoy.
          </p>
        </div>
      </FadeIn>

      <div className="max-w-4xl mx-auto space-y-6">
        {posts.map((post, i) => (
          <FadeIn key={post.slug} delay={i * 0.1}>
            <Link href={`/blog/${post.slug}`} className="block group">
              <article className="bg-brand-card border border-white/10 rounded-2xl overflow-hidden flex flex-col md:flex-row transition-all duration-300 group-hover:border-brand-cyan/50 group-hover:-translate-y-1">
                {/* Cover estrecho con gradiente */}
                <div className={`md:w-56 shrink-0 bg-gradient-to-br ${post.coverGradient} min-h-[160px] md:min-h-full`} />
                <div className="p-6 md:p-8 flex-1 flex flex-col">
                  <div className="flex items-center gap-3 text-xs text-brand-muted mb-3">
                    <span className="text-brand-cyan font-bold uppercase tracking-wide">{post.category}</span>
                    <span>•</span>
                    <span>{formatDate(post.date)}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="text-2xl font-extrabold mb-2 group-hover:text-brand-cyan transition leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-brand-muted text-sm mb-4 flex-1">{post.excerpt}</p>
                  <span className="text-sm font-semibold text-white group-hover:text-brand-cyan transition inline-flex items-center gap-1">
                    Leer artículo →
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