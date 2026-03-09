/**
 * Layout Principal de la Aplicación
 * 
 * Este componente define la estructura base de todas las páginas del sitio web del estudio jurídico.
 * Configura las fuentes tipográficas, metadatos SEO y estructura HTML común (navbar, contenido, footer).
 */

import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

// Configuración de la fuente Inter para textos generales
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

// Configuración de la fuente Playfair Display para encabezados y elementos elegantes
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

// Metadatos SEO predeterminados para toda la aplicación
export const metadata = {
  title: 'Estudio Jurídico | Abogados Especialistas',
  description: 'Firma de abogados con más de 20 años de experiencia. Expertos en derecho corporativo, civil, penal y laboral.',
  keywords: 'abogados, estudio jurídico, derecho corporativo, derecho civil, derecho penal, asesoría legal',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen flex flex-col">
        {/* Barra de navegación superior */}
        <Navbar />
        
        {/* Contenedor principal para el contenido de cada página */}
        <main className="flex-grow">
          {children}
        </main>
        
        {/* Pie de página con información de contacto y enlaces */}
        <Footer />
      </body>
    </html>
  )
}
