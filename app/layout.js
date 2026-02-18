import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata = {
  title: 'Estudio Jurídico | Abogados Especialistas',
  description: 'Firma de abogados con más de 20 años de experiencia. Expertos en derecho corporativo, civil, penal y laboral.',
  keywords: 'abogados, estudio jurídico, derecho corporativo, derecho civil, derecho penal, asesoría legal',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
