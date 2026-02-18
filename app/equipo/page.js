import Link from 'next/link'
import { teamMembers } from '@/data/content'

export const metadata = {
  title: 'Equipo | Estudio Jurídico',
  description: 'Conozca a nuestro equipo de abogados especialistas altamente calificados.',
}

export default function Equipo() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-navy-900 text-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Nuestro Equipo
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Profesionales destacados con amplia experiencia y dedicación absoluta
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <Link
                key={member.slug}
                href={`/equipo/${member.slug}`}
                className="group"
              >
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-serif font-bold text-navy-900 mb-2 group-hover:text-navy-600 transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">{member.position}</p>
                    <p className="text-sm text-gray-700 line-clamp-3">{member.bio}</p>
                    <div className="mt-4 flex items-center text-navy-600 group-hover:text-gold-500 font-medium text-sm transition-colors">
                      <span>Ver perfil completo</span>
                      <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

      {/* Join Team CTA */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-serif font-bold text-navy-900 mb-4">
              Únete a Nuestro Equipo
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Si eres un profesional apasionado por el derecho y buscas un entorno 
              desafiante y colaborativo, nos gustaría conocerte.
            </p>
            <a
              href="mailto:rrhh@estudiojuridico.com"
              className="btn-primary"
            >
              Enviar CV
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
