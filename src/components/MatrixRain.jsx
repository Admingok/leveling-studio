'use client';

import { useEffect, useRef } from 'react';

export default function MatrixRain({ color = '#00f0ff', density = 0.975, speed = 30 }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    
    // Ajustar tamaño del canvas al tamaño de la ventana
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Caracteres: Katakana japonés + números + letras (como la Matrix real)
    const chars = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン0123456789ABCDEF';
    const charArray = chars.split('');
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    
    // Array que guarda la posición Y de cada columna
    const drops = Array(columns).fill(1);

    // Función de dibujo
    const draw = () => {
      // Fondo negro semi-transparente (crea el efecto de "estela")
      ctx.fillStyle = 'rgba(9, 9, 11, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Color del texto
      ctx.fillStyle = color;
      ctx.font = `${fontSize}px monospace`;

      // Dibujar cada columna
      for (let i = 0; i < drops.length; i++) {
        // Caracter aleatorio
        const text = charArray[Math.floor(Math.random() * charArray.length)];
        
        // Posición X e Y
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        // Dibujar el carácter
        ctx.fillText(text, x, y);

        // Reiniciar la gota al llegar al fondo (con probabilidad para efecto aleatorio)
        if (y > canvas.height && Math.random() > density) {
          drops[i] = 0;
        }
        
        // Mover la gota hacia abajo
        drops[i]++;
      }
    };

    // Loop de animación
    const interval = setInterval(draw, speed);

    // Limpieza al desmontar el componente
    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [color, density, speed]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 opacity-20 pointer-events-none"
      aria-hidden="true"
    />
  );
}