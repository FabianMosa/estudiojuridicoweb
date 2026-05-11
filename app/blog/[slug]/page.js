/**
 * Página de Artículo Individual del Blog
 *
 * Muestra el contenido completo de un artículo del blog incluyendo:
 * imagen destacada, categoría, fecha, autor, contenido y enlace para compartir.
 * Genera rutas estáticas para cada artículo.
 */

import { notFound } from 'next/navigation'
import Link from 'next/link'
import { blogPosts } from '@/data/content'
import { formatDate } from '@/lib/utils'

// Genera las rutas estáticas para cada artículo del blog
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

// Genera metadatos dinámicos para SEO según el artículo
export async function generateMetadata({ params }) {
  const post = blogPosts.find((p) => p.slug === params.slug)

  if (!post) {
    return { title: 'Artículo no encontrado' }
  }

  return {
    title: `${post.title} | Blog | Estudio Jurídico`,
    description: post.excerpt,
  }
}

export default function BlogPost({ params }) {
  const post = blogPosts.find((p) => p.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="bg-white">
      {/* Hero con imagen de fondo */}
      <section className="relative bg-navy-900 text-white py-20">
        <div className="container-custom">
          <div className="max-w-4xl">
            <Link
              href="/blog"
              className="inline-flex items-center text-gray-300 hover:text-white mb-6 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Volver al Blog
            </Link>
            <div className="flex items-center gap-4 text-sm text-gray-300 mb-4">
              <span className="bg-gold-500/20 text-gold-400 px-3 py-1 rounded-full text-xs font-medium">
                {post.category}
              </span>
              <time dateTime={post.date}>{formatDate(post.date)}</time>
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              {post.title}
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">{post.excerpt}</p>
            <div className="mt-6 flex items-center text-sm text-gray-400">
              <span>Por {post.author}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contenido del artículo */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            {/* Imagen destacada */}
            <div className="mb-10 rounded-lg overflow-hidden shadow-lg">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>

            {/* Cuerpo del artículo */}
            <article className="prose prose-lg max-w-none">
              {post.content.split('\n\n').map((paragraph, index) => {
                if (paragraph.startsWith('• ')) {
                  return (
                    <ul key={index} className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                      {paragraph.split('\n').map((item, i) => {
                        const text = item.replace(/^[•\s]+/, '')
                        if (!text) return null
                        return <li key={i}>{text}</li>
                      })}
                    </ul>
                  )
                }
                if (paragraph.match(/^\d\.\s/)) {
                  return (
                    <ol key={index} className="list-decimal pl-6 mb-4 text-gray-700 space-y-3">
                      {paragraph.split('\n').map((item, i) => {
                        const match = item.match(/^\d+\.\s+(.*)/)
                        if (!match) return null
                        const [title, ...rest] = match[1].split(': ')
                        return (
                          <li key={i} className="text-gray-700">
                            <strong>{title}</strong>{rest.length ? `: ${rest.join(': ')}` : ''}
                          </li>
                        )
                      })}
                    </ol>
                  )
                }
                if (paragraph.startsWith('#')) {
                  return null
                }
                return (
                  <p key={index} className="text-gray-700 leading-relaxed mb-6">
                    {paragraph}
                  </p>
                )
              })}
            </article>

            {/* Separador */}
            <hr className="my-12 border-gray-200" />

            {/* Navegación y CTA */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <Link
                href="/blog"
                className="inline-flex items-center text-navy-600 hover:text-gold-500 font-medium transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Más artículos del blog
              </Link>
              <Link href="/contacto" className="btn-primary">
                Consulta Gratuita
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
