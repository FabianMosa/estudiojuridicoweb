import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 text-white">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDE2djhIMTZ2LThIMzZ6TTAgMHY2MGg2MFYwSDB6bTE2IDE2aDh2OGgtOHYtOHptMjQgMGg4djhoLTh2LTh6bTE2IDE2aDh2OGgtOHYtOHptLTE2IDE2aDh2OGgtOHYtOHptLTE2IDE2aDh2OGgtOHYtOHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-10"></div>
      
      <div className="container-custom relative">
        <div className="flex flex-col lg:flex-row items-center justify-between py-20 lg:py-32 gap-12">
          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-block mb-4">
              <span className="bg-gold-500/20 text-gold-400 px-4 py-2 rounded-full text-sm font-medium">
                Más de 20 años de experiencia
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 leading-tight">
              Protegiendo sus <span className="text-gold-500">Derechos</span> con Excelencia Legal
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Somos un estudio jurídico de prestigio con un equipo de abogados especialistas 
              comprometidos en brindar soluciones legales integrales y efectivas.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/contacto" className="btn-primary text-lg px-8 py-4">
                Consulta Gratuita
              </Link>
              <Link 
                href="/areas-practica" 
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-base font-medium rounded-md text-white bg-transparent hover:bg-white hover:text-navy-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition-all duration-200"
              >
                Nuestros Servicios
              </Link>
            </div>
          </div>
          
          {/* Stats */}
          <div className="flex-1 w-full lg:w-auto">
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <div className="text-4xl font-serif font-bold text-gold-500 mb-2">20+</div>
                <div className="text-sm text-gray-300">Años de Experiencia</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <div className="text-4xl font-serif font-bold text-gold-500 mb-2">500+</div>
                <div className="text-sm text-gray-300">Casos Exitosos</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <div className="text-4xl font-serif font-bold text-gold-500 mb-2">95%</div>
                <div className="text-sm text-gray-300">Tasa de Éxito</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <div className="text-4xl font-serif font-bold text-gold-500 mb-2">24/7</div>
                <div className="text-sm text-gray-300">Atención Disponible</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-12 md:h-16 text-white" preserveAspectRatio="none" viewBox="0 0 1440 54" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 22L60 18.8C120 15.7 240 9.3 360 7.8C480 6.3 600 9.7 720 13.8C840 18 960 23 1080 23.7C1200 24.3 1320 20.7 1380 18.8L1440 17V54H1380C1320 54 1200 54 1080 54C960 54 840 54 720 54C600 54 480 54 360 54C240 54 120 54 60 54H0V22Z"/>
        </svg>
      </div>
    </section>
  )
}
