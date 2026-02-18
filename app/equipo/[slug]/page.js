import { notFound } from 'next/navigation'
import Link from 'next/link'
import { teamMembers } from '@/data/content'

export async function generateStaticParams() {
  return teamMembers.map((member) => ({
    slug: member.slug,
  }))
}

export async function generateMetadata({ params }) {
  const member = teamMembers.find((m) => m.slug === params.slug)
  
  if (!member) {
    return {
      title: 'Miembro no encontrado',
    }
  }

  return {
    title: `${member.name} | Equipo | Estudio Jurídico`,
    description: member.bio,
  }
}

export default function MemberProfile({ params }) {
  const member = teamMembers.find((m) => m.slug === params.slug)

  if (!member) {
    notFound()
  }

  return (
    <div className="bg-white">
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            {/* Back Button */}
            <Link
              href="/equipo"
              className="inline-flex items-center text-navy-600 hover:text-navy-800 mb-8 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Volver al equipo
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Profile Image */}
              <div className="lg:col-span-1">
                <div className="sticky top-24">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full aspect-square object-cover rounded-lg shadow-lg mb-6"
                  />
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-semibold text-navy-900 mb-4">Contacto</h3>
                    <a
                      href={`mailto:${member.email}`}
                      className="flex items-center text-navy-600 hover:text-gold-500 transition-colors"
                    >
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      {member.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Profile Content */}
              <div className="lg:col-span-2">
                <h1 className="text-4xl font-serif font-bold text-navy-900 mb-2">
                  {member.name}
                </h1>
                <p className="text-xl text-gray-600 mb-8">{member.position}</p>

                {/* Bio */}
                <div className="mb-8">
                  <h2 className="text-2xl font-serif font-bold text-navy-900 mb-4">
                    Biografía
                  </h2>
                  <p className="text-gray-700 leading-relaxed">{member.bio}</p>
                </div>

                {/* Education */}
                <div className="mb-8">
                  <h2 className="text-2xl font-serif font-bold text-navy-900 mb-4">
                    Formación Académica
                  </h2>
                  <ul className="space-y-3">
                    {member.education.map((edu, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="w-5 h-5 text-gold-500 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                        </svg>
                        <span className="text-gray-700">{edu}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Publications */}
                {member.publications.length > 0 && (
                  <div className="mb-8">
                    <h2 className="text-2xl font-serif font-bold text-navy-900 mb-4">
                      Publicaciones
                    </h2>
                    <ul className="space-y-3">
                      {member.publications.map((pub, index) => (
                        <li key={index} className="flex items-start">
                          <svg className="w-5 h-5 text-gold-500 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                          </svg>
                          <span className="text-gray-700">{pub}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* CTA */}
                <div className="bg-navy-900 text-white p-8 rounded-lg mt-8">
                  <h3 className="text-2xl font-serif font-bold mb-4">
                    ¿Necesita Asesoría Legal?
                  </h3>
                  <p className="text-gray-300 mb-6">
                    Contáctenos para una consulta personalizada sobre su caso.
                  </p>
                  <a href="/contacto" className="btn-primary">
                    Agendar Consulta
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
