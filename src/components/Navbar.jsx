'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 w-full z-50 flex justify-between items-center px-[5%] md:px-[10%] py-5 bg-brand-dark/80 backdrop-blur-md border-b border-white/10">
        {/* Logo */}
        <div className="text-2xl font-extrabold">
          Leveling <span className="font-light text-brand-muted">Studio</span>
        </div>

        {/* Menú de Escritorio (Oculto en móviles) */}
        <nav className="hidden md:block">
          <ul className="flex gap-8 items-center">
            <li><Link href="#inicio" className="text-brand-muted hover:text-white transition">Inicio</Link></li>
            <li><Link href="#servicios" className="text-brand-muted hover:text-white transition">Servicios</Link></li>
<li><Link href="#proceso" className="text-brand-muted hover:text-white transition">Proceso</Link></li>
<li><Link href="#portafolio" className="text-brand-muted hover:text-white transition">Portafolio</Link></li>   
            <li>
              <Link href="#contacto" className="bg-gradient-to-r from-brand-cyan to-brand-purple text-black px-7 py-3 rounded-full font-semibold hover:scale-105 transition">
                Contactar
              </Link>
            </li>
          </ul>
        </nav>

        {/* Botón Hamburguesa (Solo visible en móviles) */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white z-50 relative">
          {isOpen ? (
            // Ícono de X (Cerrar)
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            // Ícono de Hamburguesa (Abrir)
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </header>

      {/* Menú Móvil Deslizante */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 z-40 bg-brand-dark/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 md:hidden"
          >
            <Link href="#inicio" onClick={() => setIsOpen(false)} className="text-3xl font-bold text-white hover:text-brand-cyan transition">Inicio</Link>
            <Link href="#servicios" onClick={() => setIsOpen(false)} className="text-3xl font-bold text-white hover:text-brand-cyan transition">Servicios</Link>
            <Link href="#portafolio" onClick={() => setIsOpen(false)} className="text-3xl font-bold text-white hover:text-brand-cyan transition">Portafolio</Link>
            <Link href="#contacto" onClick={() => setIsOpen(false)} className="bg-gradient-to-r from-brand-cyan to-brand-purple text-black px-8 py-4 rounded-full font-bold text-xl mt-4">
              Contactar
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}