import Link from 'next/link'
import { practiceAreas } from '@/data/content'

export const metadata = {
  title: 'Áreas de Práctica | Estudio Jurídico',
  description: 'Servicios legales especializados en derecho corporativo, civil, penal, laboral, fiscal y más.',
}

const icons = {
  briefcase: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
  scale: 'M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3',
  shield: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
  users: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
  calculator: 'M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z',
  lightbulb: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
}

export default function AreasPractica() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-navy-900 text-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Áreas de Práctica
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Soluciones legales integrales en múltiples especialidades del derecho
            </p>
          </div>
        </div>
      </section>

      {/* Practice Areas Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {practiceAreas.map((area) => (
              <Link
                key={area.slug}
                href={`/areas-practica/${area.slug}`}
                className="group bg-white border-2 border-gray-200 hover:border-navy-600 rounded-lg p-8 transition-all duration-300"
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-16 h-16 bg-navy-100 rounded-lg flex items-center justify-center text-navy-600 group-hover:bg-navy-600 group-hover:text-white transition-colors duration-300">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={icons[area.icon]} />
                    </svg>
                  </div>
                  <div className="ml-6 flex-1">
                    <h3 className="text-2xl font-serif font-bold text-navy-900 mb-3 group-hover:text-navy-600 transition-colors">
                      {area.title}
                    </h3>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      {area.description}
                    </p>
                    <div className="flex items-center text-navy-600 group-hover:text-gold-500 font-medium transition-colors">
                      <span>Ver detalles</span>
                      <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-serif font-bold text-navy-900 mb-4">
              ¿No Encuentra lo que Busca?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Contáctenos para conocer cómo podemos ayudarle con su situación legal específica.
            </p>
            <Link href="/contacto" className="btn-primary">
              Consulta Gratuita
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
