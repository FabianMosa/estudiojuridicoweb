import Link from 'next/link'

export const metadata = {
  title: 'Nosotros | Estudio Jurídico',
  description: 'Conoce nuestra historia, misión y valores que nos han convertido en una firma de abogados de referencia.',
}

export default function Nosotros() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-navy-900 text-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Sobre Nosotros
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Más de dos décadas de excelencia legal al servicio de nuestros clientes
            </p>
          </div>
        </div>
      </section>

      {/* Historia */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-serif font-bold text-navy-900 mb-6">
                Nuestra Historia
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Fundado en 2004, nuestro estudio jurídico nació con la visión de crear 
                  una firma que combinara excelencia técnica con un trato humano y cercano. 
                  Lo que comenzó como un pequeño despacho de tres abogados ha crecido hasta 
                  convertirse en una de las firmas más respetadas del país.
                </p>
                <p>
                  A lo largo de estos años, hemos representado con éxito a cientos de clientes, 
                  desde personas físicas hasta grandes corporaciones multinacionales. Nuestra 
                  reputación se ha construido caso por caso, basada en resultados tangibles 
                  y relaciones de confianza duraderas.
                </p>
                <p>
                  Hoy contamos con un equipo multidisciplinario de abogados especializados 
                  que trabajan de manera integrada para ofrecer soluciones legales integrales 
                  y estratégicas.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop"
                alt="Oficina del estudio jurídico"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Misión y Visión */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-navy-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-navy-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-serif font-bold text-navy-900 mb-4">Nuestra Visión</h3>
              <p className="text-gray-700 leading-relaxed">
                Ser la firma de abogados de referencia en México, reconocida por nuestra 
                excelencia profesional, integridad y compromiso con la justicia. Aspiramos 
                a ser el socio legal de confianza que acompaña a nuestros clientes en cada 
                etapa de su desarrollo.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-navy-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-navy-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-2xl font-serif font-bold text-navy-900 mb-4">Nuestra Misión</h3>
              <p className="text-gray-700 leading-relaxed">
                Brindar servicios legales de la más alta calidad, con un enfoque personalizado 
                y estratégico. Nos comprometemos a entender las necesidades únicas de cada cliente 
                y a desarrollar soluciones efectivas que protejan sus intereses y contribuyan 
                a su éxito.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy-900 mb-4">
              Nuestros Valores
            </h2>
            <p className="text-lg text-gray-600">
              Los principios que guían cada una de nuestras acciones
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Integridad',
                description: 'Actuamos con honestidad y transparencia en todas nuestras relaciones.',
                icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
              },
              {
                title: 'Excelencia',
                description: 'Buscamos la perfección en cada detalle de nuestro trabajo.',
                icon: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z'
              },
              {
                title: 'Compromiso',
                description: 'Dedicación absoluta con los objetivos de nuestros clientes.',
                icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
              },
              {
                title: 'Innovación',
                description: 'Adoptamos tecnología y métodos modernos para mejores resultados.',
                icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z'
              },
            ].map((value, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="w-16 h-16 bg-navy-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={value.icon} />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-navy-900 mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-navy-900 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Conozca a Nuestro Equipo
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Profesionales altamente capacitados listos para defender sus intereses
          </p>
            <Link href="/equipo" className="btn-primary">
              Ver Equipo Completo
            </Link>
        </div>
      </section>
    </div>
  )
}
