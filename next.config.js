/**
 * Configuración de Next.js
 * 
 * Opciones de configuración para el framework Next.js.
 * Define patrones de imágenes remotas permitidas para optimización.
 */

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Dominios específicos permitidos para optimización de imágenes
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
}

module.exports = nextConfig
