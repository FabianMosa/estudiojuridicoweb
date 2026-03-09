/**
 * Página de Contacto
 * 
 * Formulario de contacto completo con información de la oficina.
 * Incluye campos para nombre, email, teléfono, asunto y mensaje.
 * Muestra información de contacto (dirección, teléfono, email, horario)
 * y mapa de ubicación integrado de Google Maps.
 */

'use client'

import { useState } from 'react'

export default function Contacto() {
  // Estado para almacenar los valores del formulario
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    asunto: '',
    mensaje: '',
  })

  // Estado para controlar el envío del formulario
  const [isSubmitting, setIsSubmitting] = useState(false)
  // Estado para mostrar mensaje de confirmación
  const [submitMessage, setSubmitMessage] = useState('')

  // Manejador de cambios en los inputs
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  // Manejador del envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulación de envío del formulario (aquí iría la lógica real de envío)
    setTimeout(() => {
      setSubmitMessage('¡Gracias por contactarnos! Le responderemos en breve.')
      setIsSubmitting(false)
      setFormData({
        nombre: '',
        email: '',
        telefono: '',
        asunto: '',
        mensaje: '',
      })
      
      setTimeout(() => {
        setSubmitMessage('')
      }, 5000)
    }, 1000)
  }

  return (
    <div className="bg-white">
      {/* Sección hero con título */}
      <section className="relative bg-navy-900 text-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Contáctenos
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Estamos listos para ayudarle. Obtenga una consulta gratuita hoy mismo.
            </p>
          </div>
        </div>
      </section>

      {/* Sección principal: información de contacto y formulario */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Columna izquierda: Información de contacto */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-serif font-bold text-navy-900 mb-6">
                Información de Contacto
              </h2>

              {/* Lista de métodos de contacto */}
              <div className="space-y-6">
                {/* Dirección física */}
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-navy-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-navy-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy-900 mb-1">Dirección</h3>
                    <p className="text-gray-600">
                      Av. Principal 123<br />
                      Col. Centro<br />
                      Ciudad de México, 06000
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-navy-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-navy-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy-900 mb-1">Teléfono</h3>
                    <p className="text-gray-600">+52 55 1234 5678</p>
                    <p className="text-gray-600">+52 55 8765 4321</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-navy-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-navy-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy-900 mb-1">Email</h3>
                    <p className="text-gray-600">contacto@estudiojuridico.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-navy-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-navy-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy-900 mb-1">Horario</h3>
                    <p className="text-gray-600">
                      Lunes - Viernes: 9:00 - 19:00<br />
                      Sábado: 10:00 - 14:00
                    </p>
                  </div>
                </div>
              </div>

              {/* Aviso de urgencias 24/7 */}
              <div className="mt-8 bg-gold-50 border-l-4 border-gold-500 p-4 rounded">
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-gold-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Urgencias 24/7</p>
                    <p className="text-sm text-gray-700 mt-1">
                      Para emergencias legales fuera de horario, llame al +52 55 9999 0000
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Columna derecha: Formulario de contacto */}
            <div className="lg:col-span-2">
              <div className="bg-gray-50 p-8 rounded-lg">
                <h2 className="text-2xl font-serif font-bold text-navy-900 mb-6">
                  Envíenos un Mensaje
                </h2>

                {/* Mensaje de confirmación de envío */}
                {submitMessage && (
                  <div className="mb-6 bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded">
                    {submitMessage}
                  </div>
                )}

                {/* Formulario con campos de entrada */}
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Campo: Nombre completo */}
                  <div>
                    <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-2">
                      Nombre Completo *
                    </label>
                    <input
                      type="text"
                      id="nombre"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-navy-500 focus:border-navy-500 transition-colors"
                      placeholder="Juan Pérez"
                    />
                  </div>

                  {/* Campos: Email y Teléfono (en grid de 2 columnas) */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-navy-500 focus:border-navy-500 transition-colors"
                        placeholder="juan@ejemplo.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-2">
                        Teléfono *
                      </label>
                      <input
                        type="tel"
                        id="telefono"
                        name="telefono"
                        value={formData.telefono}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-navy-500 focus:border-navy-500 transition-colors"
                        placeholder="+52 55 1234 5678"
                      />
                    </div>
                  </div>

                  {/* Campo: Asunto (selector) */}
                  <div>
                    <label htmlFor="asunto" className="block text-sm font-medium text-gray-700 mb-2">
                      Asunto *
                    </label>
                    <select
                      id="asunto"
                      name="asunto"
                      value={formData.asunto}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-navy-500 focus:border-navy-500 transition-colors"
                    >
                      <option value="">Seleccione un área</option>
                      <option value="corporativo">Derecho Corporativo</option>
                      <option value="civil">Derecho Civil</option>
                      <option value="penal">Derecho Penal</option>
                      <option value="laboral">Derecho Laboral</option>
                      <option value="fiscal">Derecho Fiscal</option>
                      <option value="propiedad">Propiedad Intelectual</option>
                      <option value="otro">Otro</option>
                    </select>
                  </div>

                  {/* Campo: Mensaje (área de texto) */}
                  <div>
                    <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-2">
                      Mensaje *
                    </label>
                    <textarea
                      id="mensaje"
                      name="mensaje"
                      value={formData.mensaje}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-navy-500 focus:border-navy-500 transition-colors resize-none"
                      placeholder="Describa brevemente su situación legal..."
                    />
                  </div>

                  {/* Botón de envío */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
                  </button>

                  {/* Nota sobre privacidad */}
                  <p className="text-sm text-gray-600 text-center">
                    Al enviar este formulario, acepta nuestra política de privacidad y 
                    el tratamiento confidencial de su información.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mapa de ubicación de Google Maps */}
      <section className="h-96 bg-gray-200">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.6956098274787!2d-99.16615908509477!3d19.432607986886183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f92f6c5b7c5d%3A0x4b1e5f0c3b5b5b0!2sCiudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses-419!2smx!4v1234567890"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Ubicación del Estudio Jurídico"
        />
      </section>
    </div>
  )
}
