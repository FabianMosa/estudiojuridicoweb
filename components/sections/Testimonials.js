/**
 * Componente de Testimonios
 * 
 * Muestra testimonios de clientes satisfechos con el servicio del estudio.
 * Cada testimonio incluye calificación por estrellas, comentario y datos del cliente.
 * Los datos se obtienen del archivo de contenido centralizado.
 */

import { testimonials } from '@/data/content'

export default function Testimonials() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy-900 mb-4">
            Lo Que Dicen Nuestros Clientes
          </h2>
          <p className="text-lg text-gray-600">
            La confianza de nuestros clientes es nuestro mayor logro
          </p>
        </div>

        {/* Grid de tarjetas de testimonios */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              {/* Estrellas de calificación */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-gold-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Texto del testimonio */}
              <p className="text-gray-700 italic mb-6 leading-relaxed">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              {/* Información del autor del testimonio */}
              <div className="border-t border-gray-200 pt-4">
                <p className="font-semibold text-navy-900">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
