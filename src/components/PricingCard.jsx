'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function PricingCard({
  name,
  price,
  period = 'proyecto',
  description,
  features = [],
  highlighted = false,
  badge = '',
  ctaText = 'Agendar llamada',
  ctaHref = '/#contacto',
  delay = 0,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className={`relative rounded-3xl p-8 backdrop-blur-sm border transition-all duration-300 flex flex-col h-full ${
        highlighted
          ? 'bg-gradient-to-b from-brand-cyan/10 to-brand-purple/10 border-brand-cyan/50 scale-[1.03] shadow-[0_0_40px_rgba(0,240,255,0.15)]'
          : 'bg-brand-card border-white/10 hover:border-white/30'
      }`}
    >
      {badge && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-brand-cyan to-brand-purple text-black text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wide">
          {badge}
        </div>
      )}

      <h3 className="text-2xl font-extrabold mb-2">{name}</h3>
      <p className="text-brand-muted text-sm mb-6 min-h-[40px]">{description}</p>

      <div className="mb-6">
        <span className="text-4xl md:text-5xl font-extrabold gradient-text">${price}</span>
        <span className="text-brand-muted text-sm ml-2">MXN / {period}</span>
        <p className="text-xs text-brand-muted mt-1">+ IVA · Pago único salvo retainer</p>
      </div>

      <ul className="space-y-3 mb-8 flex-1">
        {features.map((feat, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-brand-muted">
            <span className="text-brand-cyan mt-0.5">✓</span>
            <span>{feat}</span>
          </li>
        ))}
      </ul>

      <Link
        href={ctaHref}
        className={`block text-center font-bold py-3 rounded-xl transition ${
          highlighted
            ? 'bg-gradient-to-r from-brand-cyan to-brand-purple text-black hover:scale-[1.02]'
            : 'border border-white/15 hover:bg-white/5'
        }`}
      >
        {ctaText}
      </Link>
    </motion.div>
  );
}