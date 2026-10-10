'use client';

import { motion } from 'framer-motion';

export default function ServiceCard({ icon, title, description, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: delay }}
      whileHover={{ y: -10, borderColor: '#00f0ff' }}
      className="bg-brand-card border border-white/10 rounded-2xl p-8 backdrop-blur-sm transition-all duration-300"
    >
      <div className="text-4xl mb-5">{icon}</div>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-brand-muted leading-relaxed">{description}</p>
    </motion.div>
  );
}