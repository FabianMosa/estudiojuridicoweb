import Link from 'next/link'

export default function CTA() {
  return (
    <section className="section-padding bg-gradient-to-r from-navy-800 to-navy-900 text-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            ¿Necesita Asesoría Legal Profesional?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Nuestro equipo de abogados especialistas está listo para ayudarle. 
            Contáctenos hoy y reciba una consulta gratuita.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/contacto" 
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-gold-500 text-base font-medium rounded-md text-white bg-gold-500 hover:bg-gold-600 hover:border-gold-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold-500 transition-all duration-200"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Agendar Consulta
            </Link>
            <Link 
              href="tel:+525512345678" 
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-base font-medium rounded-md text-white bg-transparent hover:bg-white hover:text-navy-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition-all duration-200"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +52 55 1234 5678
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-gold-500 mb-2">
                <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="font-medium">Respuesta Rápida</p>
              <p className="text-sm text-gray-400 mt-1">En menos de 24 horas</p>
            </div>
            <div>
              <div className="text-gold-500 mb-2">
                <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="font-medium">Consulta Gratuita</p>
              <p className="text-sm text-gray-400 mt-1">Sin compromiso</p>
            </div>
            <div>
              <div className="text-gold-500 mb-2">
                <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <p className="font-medium">Confidencialidad</p>
              <p className="text-sm text-gray-400 mt-1">Garantizada 100%</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
