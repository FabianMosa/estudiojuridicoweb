/**
 * Configuración de Next.js
 * 
 * Opciones de configuración para el framework Next.js.
 * Define patrones de imágenes remotas permitidas para optimización.
 */

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Permite cargar imágenes de cualquier dominio (útil para desarrollo)
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
}

module.exports = nextConfig
