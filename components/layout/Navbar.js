'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navigation = [
    { name: 'Inicio', href: '/' },
    { name: 'Nosotros', href: '/nosotros' },
    { name: 'Equipo', href: '/equipo' },
    { name: 'Áreas de Práctica', href: '/areas-practica' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contacto', href: '/contacto' },
  ]

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-navy-600 rounded flex items-center justify-center">
              <span className="text-gold-500 text-2xl font-serif font-bold">L</span>
            </div>
            <span className="text-xl font-serif font-bold text-navy-800">
              Estudio Jurídico
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-navy-600 transition-colors duration-200 font-medium"
              >
                {item.name}
              </Link>
            ))}
            <Link href="/contacto" className="btn-primary">
              Consulta Gratuita
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md text-gray-700 hover:text-navy-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-navy-500"
            aria-label="Abrir menú"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden pb-4">
            <div className="flex flex-col space-y-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-navy-600 transition-colors duration-200 font-medium py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/contacto"
                className="btn-primary mt-2"
                onClick={() => setIsOpen(false)}
              >
                Consulta Gratuita
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
