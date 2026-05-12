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
import UbicacionMapa from '@/components/sections/UbicacionMapa'
import { info_ubicacion } from '@/data/content'

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

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (data.success) {
        setSubmitMessage(data.message)
        setFormData({
          nombre: '',
          email: '',
          telefono: '',
          asunto: '',
          mensaje: '',
        })
      } else {
        setSubmitMessage(
          'Error: ' + (data.errors || ['Hubo un problema al enviar el formulario']).join(', ')
        )
      }
    } catch (error) {
      setSubmitMessage('Error de conexión. Intente nuevamente más tarde.')
    } finally {
      setIsSubmitting(false)
    }

    setTimeout(() => {
      setSubmitMessage('')
    }, 5000)
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


            {/* Columna derecha: Formulario de contacto */}
            <div className="lg:col-span-2">
              <div className="bg-gray-50 p-8 rounded-lg">
                <h2 className="text-2xl font-serif font-bold text-navy-900 mb-6">
                  Envíanos un mensaje
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
                        placeholder={info_ubicacion.telefono}
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

      {/* Sección de ubicación con mapa interactivo y accesos rápidos */}
      <UbicacionMapa />
    </div>
  )
}
