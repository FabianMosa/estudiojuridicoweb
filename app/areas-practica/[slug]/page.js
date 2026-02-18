import { notFound } from 'next/navigation'
import Link from 'next/link'
import { practiceAreas } from '@/data/content'

export async function generateStaticParams() {
  return practiceAreas.map((area) => ({
    slug: area.slug,
  }))
}

export async function generateMetadata({ params }) {
  const area = practiceAreas.find((a) => a.slug === params.slug)
  
  if (!area) {
    return {
      title: 'Área no encontrada',
    }
  }

  return {
    title: `${area.title} | Áreas de Práctica | Estudio Jurídico`,
    description: area.fullDescription,
  }
}

export default function PracticeAreaDetail({ params }) {
  const area = practiceAreas.find((a) => a.slug === params.slug)

  if (!area) {
    notFound()
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-navy-900 text-white py-20">
        <div className="container-custom">
          <div className="max-w-4xl">
            <Link
              href="/areas-practica"
              className="inline-flex items-center text-gray-300 hover:text-white mb-6 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Volver a Áreas de Práctica
            </Link>
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              {area.title}
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              {area.description}
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* Description */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif font-bold text-navy-900 mb-6">
                Descripción
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {area.fullDescription}
              </p>
            </div>

            {/* Services */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif font-bold text-navy-900 mb-6">
                Nuestros Servicios
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {area.services.map((service, index) => (
                  <div key={index} className="flex items-start p-4 bg-gray-50 rounded-lg">
                    <svg className="w-6 h-6 text-gold-500 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="bg-navy-900 text-white p-8 md:p-12 rounded-lg">
              <h2 className="text-3xl font-serif font-bold mb-6">
                ¿Por Qué Elegirnos?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gold-500 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Experiencia Comprobada</h3>
                    <p className="text-gray-300 text-sm">
                      Años de experiencia exitosa en casos similares al suyo.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gold-500 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Respuesta Rápida</h3>
                    <p className="text-gray-300 text-sm">
                      Atención inmediata y seguimiento constante de su caso.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gold-500 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Equipo Especializado</h3>
                    <p className="text-gray-300 text-sm">
                      Abogados expertos dedicados exclusivamente a esta área.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gold-500 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Resultados Medibles</h3>
                    <p className="text-gray-300 text-sm">
                      Estrategias orientadas a lograr los mejores resultados.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-12 text-center">
              <h3 className="text-2xl font-serif font-bold text-navy-900 mb-4">
                ¿Necesita Asesoría en {area.title}?
              </h3>
              <p className="text-gray-600 mb-8">
                Contáctenos hoy para una consulta gratuita y sin compromiso.
              </p>
              <Link href="/contacto" className="btn-primary">
                Agendar Consulta Gratuita
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
