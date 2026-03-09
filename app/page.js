/**
 * Página de Inicio (Home)
 * 
 * Esta es la landing page principal del sitio web del estudio jurídico.
 * Incluye las secciones más importantes: héroe, áreas de práctica, razones para elegirnos,
 * testimonios de clientes y llamada a la acción.
 */

import Hero from '@/components/sections/Hero'
import PracticeAreas from '@/components/sections/PracticeAreas'
import Testimonials from '@/components/sections/Testimonials'
import CTA from '@/components/sections/CTA'

export default function Home() {
  return (
    <>
      {/* Sección héroe con mensaje principal y estadísticas */}
      <Hero />
      
      {/* Sección de áreas de práctica legal */}
      <PracticeAreas />
      
      {/* Sección "Por Qué Elegirnos" - Destacando ventajas competitivas */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy-900 mb-6">
                ¿Por Qué Elegirnos?
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Somos más que abogados, somos sus aliados estratégicos. 
                Nuestro compromiso es brindar soluciones legales efectivas 
                con un enfoque personalizado y resultados comprobados.
              </p>
              
              {/* Lista de beneficios con íconos */}
              <div className="space-y-6">
                {/* Beneficio: Experiencia */}
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-navy-100 rounded-lg flex items-center justify-center text-navy-600">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-navy-900 mb-2">Experiencia Comprobada</h3>
                    <p className="text-gray-600">Más de 20 años resolviendo casos complejos con éxito.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-navy-100 rounded-lg flex items-center justify-center text-navy-600">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-navy-900 mb-2">Equipo Multidisciplinario</h3>
                    <p className="text-gray-600">Especialistas en múltiples áreas del derecho trabajando para usted.</p>
                  </div>
                </div>

                {/* Beneficio: Atención Personalizada */}
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-navy-100 rounded-lg flex items-center justify-center text-navy-600">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-navy-900 mb-2">Atención Personalizada</h3>
                    <p className="text-gray-600">Cada caso recibe atención dedicada y estrategias a medida.</p>
                  </div>
                </div>

                {/* Beneficio: Resultados Rápidos */}
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-navy-100 rounded-lg flex items-center justify-center text-navy-600">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-navy-900 mb-2">Resultados Rápidos</h3>
                    <p className="text-gray-600">Procesos eficientes que ahorran tiempo y recursos.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Imagen decorativa con estadística destacada */}
            <div className="relative">
              <div className="aspect-[4/3] bg-gradient-to-br from-navy-100 to-navy-50 rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=600&fit=crop"
                  alt="Equipo legal profesional"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Badge flotante con tasa de éxito */}
              <div className="absolute -bottom-6 -left-6 bg-gold-500 text-white p-6 rounded-lg shadow-xl">
                <div className="text-3xl font-serif font-bold">95%</div>
                <div className="text-sm">Casos Exitosos</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de testimonios de clientes satisfechos */}
      <Testimonials />
      
      {/* Llamada a la acción final para agendar consulta */}
      <CTA />
    </>
  )
}
