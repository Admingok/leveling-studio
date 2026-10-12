'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { label: 'Inicio', href: '/#inicio' },
    { label: 'Servicios', href: '/#servicios' },
    { label: 'Proyectos', href: '/proyectos' },
    { label: 'Precios', href: '/precios' },
    { label: 'Proceso', href: '/#proceso' },
    { label: 'Portafolio', href: '/#portafolio' },
  ];

  return (
    <>
      <header className="fixed top-0 w-full z-50 flex justify-between items-center px-[5%] md:px-[10%] py-5 bg-brand-dark/80 backdrop-blur-md border-b border-white/10">
        <Link href="/" className="text-2xl font-extrabold">
          Leveling <span className="font-light text-brand-muted">Studio</span>
        </Link>

        <nav className="hidden md:block">
          <ul className="flex gap-6 items-center">
            {links.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-brand-muted hover:text-white transition text-sm">
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/#contacto"
                className="bg-gradient-to-r from-brand-cyan to-brand-purple text-black px-6 py-2.5 rounded-full font-semibold hover:scale-105 transition text-sm"
              >
                Contactar
              </Link>
            </li>
          </ul>
        </nav>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white z-50 relative" aria-label="Menú">
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 z-40 bg-brand-dark/95 backdrop-blur-xl flex flex-col items-center justify-center gap-6 md:hidden"
          >
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setIsOpen(false)}
                className="text-2xl font-bold text-white hover:text-brand-cyan transition"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/#contacto"
              onClick={() => setIsOpen(false)}
              className="bg-gradient-to-r from-brand-cyan to-brand-purple text-black px-8 py-4 rounded-full font-bold text-lg mt-2"
            >
              Contactar
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}