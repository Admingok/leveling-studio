'use client';

import { motion } from 'framer-motion';

export default function TestimonialCard({ name, role, text, rating = 5, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: delay }}
      className="bg-brand-card border border-white/10 rounded-2xl p-8 backdrop-blur-sm"
    >
      {/* Estrellas */}
      <div className="flex gap-1 mb-4">
        {[...Array(rating)].map((_, i) => (
          <span key={i} className="text-yellow-400 text-xl">★</span>
        ))}
      </div>

      <p className="text-brand-muted leading-relaxed mb-6 italic">"{text}"</p>

      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-cyan to-brand-purple flex items-center justify-center font-bold text-black">
          {name.charAt(0)}
        </div>
        <div>
          <h4 className="font-bold">{name}</h4>
          <p className="text-sm text-brand-muted">{role}</p>
        </div>
      </div>
    </motion.div>
  );
}