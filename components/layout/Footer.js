/**
 * Componente Footer (Pie de Página)
 * 
 * Pie de página del sitio web con información corporativa, enlaces rápidos,
 * áreas de práctica y datos de contacto. Se muestra en todas las páginas.
 * Incluye copyright dinámico y enlaces a políticas legales.
 */

import Link from 'next/link'

export default function Footer() {
  // Obtiene el año actual dinámicamente
  const currentYear = new Date().getFullYear()

  // Enlaces a las principales áreas de práctica
  const practiceAreas = [
    { name: 'Derecho Corporativo', href: '/areas-practica/derecho-corporativo' },
    { name: 'Derecho Civil', href: '/areas-practica/derecho-civil' },
    { name: 'Derecho Penal', href: '/areas-practica/derecho-penal' },
    { name: 'Derecho Laboral', href: '/areas-practica/derecho-laboral' },
  ]

  // Enlaces de navegación rápida
  const quickLinks = [
    { name: 'Nosotros', href: '/nosotros' },
    { name: 'Equipo', href: '/equipo' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contacto', href: '/contacto' },
  ]

  return (
    <footer className="bg-navy-900 text-gray-300">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Columna 1: Sobre el estudio */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-navy-600 rounded flex items-center justify-center">
                <span className="text-gold-500 text-2xl font-serif font-bold">L</span>
              </div>
              <span className="text-xl font-serif font-bold text-white">
                Estudio Jurídico
              </span>
            </div>
            <p className="text-sm leading-relaxed">
              Más de 20 años de experiencia brindando soluciones legales integrales.
              Comprometidos con la excelencia y la satisfacción de nuestros clientes.
            </p>
          </div>

          {/* Columna 2: Enlaces rápidos */}
          <div>
            <h3 className="text-white font-serif font-bold text-lg mb-4">
              Enlaces Rápidos
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-gold-500 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3: Información de contacto */}
          <div>
            <h3 className="text-white font-serif font-bold text-lg mb-4">
              Contacto
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 mr-2 mt-0.5 text-gold-500 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>Av. Principal 123, Ciudad de México</span>
              </li>
              <li className="flex items-center">
                <svg
                  className="w-5 h-5 mr-2 text-gold-500 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span>+52 55 1234 5678</span>
              </li>
              <li className="flex items-center">
                <svg
                  className="w-5 h-5 mr-2 text-gold-500 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span>contacto@estudiojuridico.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Barra inferior con copyright y enlaces legales */}
        <div className="border-t border-navy-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            {/* Copyright dinámico */}
            <p>© {currentYear} Estudio Jurídico. Todos los derechos reservados.</p>
            {/* Enlaces a políticas legales */}
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacidad" className="hover:text-gold-500 transition-colors duration-200">
                Política de Privacidad
              </Link>
              <Link href="/terminos" className="hover:text-gold-500 transition-colors duration-200">
                Términos y Condiciones
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
