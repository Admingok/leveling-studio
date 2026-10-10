import './globals.css';
import Navbar from '@/components/Navbar';
import WhatsAppButton from '@/components/WhatsAppButton';

export const metadata = {
  title: 'Leveling Studio | Desarrollo, Marketing y Publicidad',
  description: 'Elevamos tu negocio al siguiente nivel con desarrollo web, marketing estratégico y publicidad digital.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <Navbar />
        <main>{children}</main>
        <WhatsAppButton />
      </body>
    </html>
  );
}