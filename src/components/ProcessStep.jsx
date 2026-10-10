'use client';

import { motion } from 'framer-motion';

export default function ProcessStep({ number, icon, title, description, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: delay }}
      className="relative p-8 rounded-2xl bg-brand-card border border-white/10 backdrop-blur-sm hover:border-brand-cyan/50 transition-all duration-300 group"
    >
      {/* Número grande de fondo */}
      <div className="absolute top-4 right-4 text-6xl font-extrabold text-white/5 group-hover:text-brand-cyan/10 transition">
        {number}
      </div>

      <div className="relative z-10">
        <div className="text-4xl mb-4">{icon}</div>
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-brand-muted leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}