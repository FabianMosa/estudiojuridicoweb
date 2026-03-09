/**
 * Página de Blog
 * 
 * Muestra todos los artículos del blog en un grid de tarjetas.
 * Cada artículo incluye imagen, categoría, fecha, título, extracto y autor.
 * Incluye también un formulario de suscripción al newsletter.
 */

import Link from 'next/link'
import { blogPosts } from '@/data/content'
import { formatDate } from '@/lib/utils'

// Metadatos SEO específicos de esta página
export const metadata = {
  title: 'Blog | Estudio Jurídico',
  description: 'Artículos y análisis legal de nuestros expertos.',
}

export default function Blog() {
  return (
    <div className="bg-white">
      {/* Sección hero con título */}
      <section className="relative bg-navy-900 text-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Blog Legal
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Análisis, noticias y opiniones de nuestros expertos
            </p>
          </div>
        </div>
      </section>

      {/* Grid de artículos del blog */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                    <span className="bg-navy-100 text-navy-600 px-3 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                    <time dateTime={post.date}>{formatDate(post.date)}</time>
                  </div>
                  <h2 className="text-xl font-serif font-bold text-navy-900 mb-3 hover:text-navy-600 transition-colors">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">{post.author}</span>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-navy-600 hover:text-gold-500 font-medium text-sm flex items-center transition-colors"
                    >
                      Leer más
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* CTA de suscripción al newsletter */}
          <div className="mt-16 bg-navy-900 text-white p-12 rounded-lg text-center">
            <h2 className="text-3xl font-serif font-bold mb-4">
              Suscríbase a Nuestro Newsletter
            </h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Reciba las últimas actualizaciones legales, análisis y noticias directamente en su correo.
            </p>
            <form className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Su correo electrónico"
                className="flex-1 px-4 py-3 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-gold-500"
                required
              />
              <button type="submit" className="btn-primary whitespace-nowrap">
                Suscribirse
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
