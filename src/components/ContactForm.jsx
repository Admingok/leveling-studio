'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactForm() {
  const [status, setStatus] = useState('');
  
  // ️ REEMPLAZA ESTO CON TU URL REAL DE FORMSPREE
  const FORMSPREE_URL = 'https://formspree.io/f/mjygyewn';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    
    const formData = new FormData(e.target);
    
    try {
      const response = await fetch(FORMSPREE_URL, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setStatus('success');
        e.target.reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto space-y-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium mb-2">Nombre</label>
          <input
            type="text"
            name="name"
            required
            className="w-full bg-brand-card border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-cyan transition"
            placeholder="Tu nombre"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Email</label>
          <input
            type="email"
            name="email"
            required
            className="w-full bg-brand-card border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-cyan transition"
            placeholder="tu@email.com"
          />
        </div>
      </div>

            <div>
        <label className="block text-sm font-medium mb-2">Servicio de interés</label>
        <select
          name="service"
          className="w-full bg-brand-card border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-cyan transition text-white appearance-none cursor-pointer"
        >
          <option value="desarrollo" className="bg-[#18181b]">Desarrollo Web</option>
          <option value="marketing" className="bg-[#18181b]">Marketing Estratégico</option>
          <option value="publicidad" className="bg-[#18181b]">Publicidad Digital</option>
          <option value="todos" className="bg-[#18181b]">Todos los servicios</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">Mensaje</label>
        <textarea
          name="message"
          rows="5"
          required
          className="w-full bg-brand-card border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-cyan transition resize-none"
          placeholder="Cuéntanos sobre tu proyecto..."
        />
      </div>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full bg-gradient-to-r from-brand-cyan to-brand-purple text-black font-bold py-4 rounded-xl hover:scale-[1.02] transition disabled:opacity-50"
      >
        {status === 'sending' ? 'Enviando...' : 'Enviar Mensaje'}
      </button>

      {status === 'success' && (
        <p className="text-green-400 text-center">¡Mensaje enviado! Te contactaremos pronto.</p>
      )}
      {status === 'error' && (
        <p className="text-red-400 text-center">Hubo un error. Intenta de nuevo.</p>
      )}
    </motion.form>
  );
}