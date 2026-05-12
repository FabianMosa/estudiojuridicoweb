'use client'

/**
 * Componente UbicacionMapa (Client Component)
 *
 * Sección reutilizable que muestra la ubicación física del estudio jurídico
 * con tres bloques visuales:
 *   1. Mapa interactivo con Leaflet + OpenStreetMap (sin Google, sin tracking).
 *   2. Tarjeta informativa con dirección, referencia y horarios.
 *   3. Botones de acción para abrir la ruta en Google Maps, Waze o Apple Maps,
 *      además de un botón directo para llamar al estudio.
 *
 * IMPORTANTE: debe ser un Client Component (`'use client'`) porque usa
 * `next/dynamic` con `ssr: false`, combinación que en Next.js 15+ solo está
 * permitida dentro de Client Components. Leaflet accede a `window` en import
 * time y no es compatible con SSR; mientras se hidrata se muestra un
 * placeholder ligero.
 *
 * Datos centralizados en `data/content.js` → `info_ubicacion`.
 *
 * @returns {JSX.Element} Sección con mapa, tarjeta y botones de acción.
 */

import dynamic from 'next/dynamic'
import { info_ubicacion } from '@/data/content'

/**
 * Mapa Leaflet importado dinámicamente sin SSR.
 *
 * Defiere la carga del bundle de Leaflet al cliente y muestra un placeholder
 * accesible (`role="status"`) mientras se hidrata.
 */
const MapaLeaflet = dynamic(() => import('./MapaLeaflet'), {
  ssr: false,
  loading: () => (
    <div
      className="absolute inset-0 grid place-items-center bg-gray-100 text-gray-500 text-sm"
      role="status"
      aria-live="polite"
    >
      <span>Cargando mapa…</span>
    </div>
  ),
})

/**
 * Construye la URL para abrir la navegación paso a paso en Google Maps.
 * Google detecta automáticamente la ubicación del usuario como origen.
 *
 * @param {number} lat - Latitud del destino.
 * @param {number} lng - Longitud del destino.
 * @returns {string} URL externa para abrir Google Maps.
 */
const construir_url_google_directions = (lat, lng) => {
  return `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`
}

/**
 * Construye la URL para abrir la navegación en Waze.
 *
 * @param {number} lat - Latitud del destino.
 * @param {number} lng - Longitud del destino.
 * @returns {string} URL externa para abrir Waze.
 */
const construir_url_waze = (lat, lng) => {
  return `https://www.waze.com/ul?ll=${lat}%2C${lng}&navigate=yes`
}

/**
 * Construye la URL para abrir la navegación en Apple Maps (iOS / macOS).
 *
 * @param {number} lat - Latitud del destino.
 * @param {number} lng - Longitud del destino.
 * @returns {string} URL externa para abrir Apple Maps.
 */
const construir_url_apple_maps = (lat, lng) => {
  return `https://maps.apple.com/?daddr=${lat},${lng}&dirflg=d`
}

export default function UbicacionMapa() {
  const { coordenadas, direccion_completa, telefono, telefono_url } =
    info_ubicacion
  const { lat, lng } = coordenadas

  const url_google_directions = construir_url_google_directions(lat, lng)
  const url_waze = construir_url_waze(lat, lng)
  const url_apple_maps = construir_url_apple_maps(lat, lng)

  return (
    <section
      id="ubicacion"
      aria-labelledby="ubicacion-titulo"
      className="bg-gray-50 section-padding"
    >
      <div className="container-custom">
        {/* Encabezado de la sección */}
        <div className="max-w-3xl mx-auto text-center mb-10 md:mb-12">
          <span className="inline-block text-gold-500 font-semibold uppercase tracking-wider text-sm mb-2">
            Visítenos
          </span>
          <h2
            id="ubicacion-titulo"
            className="text-3xl md:text-4xl font-serif font-bold text-navy-900 mb-4"
          >
            Nuestra Ubicación
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            Lo esperamos en nuestras oficinas. Cuente con atención presencial
            personalizada y un equipo legal listo para asesorarle.
          </p>
        </div>

        {/* Grid: mapa a la izquierda (2/3), tarjeta de info a la derecha (1/3) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Mapa Leaflet + OpenStreetMap (sin Google, sin tracking) */}
          <div className="lg:col-span-2 rounded-lg overflow-hidden shadow-lg border border-gray-200 bg-white">
            <div className="relative w-full aspect-[4/3] md:aspect-[16/9] lg:aspect-auto lg:h-full lg:min-h-[420px]">
              <MapaLeaflet />
            </div>
          </div>

          {/* Tarjeta lateral con dirección, referencia, horarios y acciones */}
          <aside
            className="bg-white rounded-lg shadow-lg border border-gray-200 p-6 md:p-7 flex flex-col"
            aria-label="Información de la ubicación y accesos rápidos"
          >
            {/* Dirección */}
            <div className="flex items-start mb-5">
              <div className="w-11 h-11 bg-navy-100 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                <svg
                  className="w-5 h-5 text-navy-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-navy-900 mb-1">Dirección</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {info_ubicacion.direccion_calle}
                  <br />
                  {info_ubicacion.direccion_ciudad},{' '}
                  {info_ubicacion.direccion_region}
                  <br />
                  {info_ubicacion.direccion_pais}
                </p>
              </div>
            </div>

            {/* Referencia visual cercana */}
            {info_ubicacion.referencia && (
              <div className="flex items-start mb-5">
                <div className="w-11 h-11 bg-gold-100 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-gold-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m12.728 0a9 9 0 11-12.728 12.728 9 9 0 0112.728-12.728z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-navy-900 mb-1">
                    Punto de referencia
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {info_ubicacion.referencia}
                  </p>
                </div>
              </div>
            )}

            {/* Horarios de atención */}
            <div className="flex items-start mb-6">
              <div className="w-11 h-11 bg-navy-100 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                <svg
                  className="w-5 h-5 text-navy-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="w-full">
                <h3 className="font-semibold text-navy-900 mb-1">
                  Horario de atención
                </h3>
                <ul className="text-gray-700 text-sm space-y-1">
                  {info_ubicacion.horarios.map((item) => (
                    <li
                      key={item.dia}
                      className="flex justify-between gap-3 border-b border-gray-100 last:border-0 pb-1 last:pb-0"
                    >
                      <span>{item.dia}</span>
                      <span className="text-gray-900 font-medium">
                        {item.horario}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Botones de acción: Cómo llegar / Waze / Apple Maps */}
            <div className="mt-auto space-y-3">
              <a
                href={url_google_directions}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Cómo llegar al estudio: ${direccion_completa}`}
                className="w-full inline-flex items-center justify-center gap-2 bg-navy-700 hover:bg-navy-800 text-white font-semibold px-4 py-3 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-navy-500 focus:ring-offset-2"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l5.553 2.776A1 1 0 0022 18.882V8.118a1 1 0 00-1.447-.894L15 10m0 7V10m0 0L9 7"
                  />
                </svg>
                Cómo llegar (Google Maps)
              </a>

              <div className="grid grid-cols-2 gap-3">
                <a
                  href={url_waze}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Abrir ruta hacia el estudio en Waze"
                  className="inline-flex items-center justify-center gap-2 bg-white border border-gray-300 hover:border-navy-500 hover:bg-gray-50 text-navy-900 font-medium px-3 py-2.5 rounded-md transition-colors text-sm focus:outline-none focus:ring-2 focus:ring-navy-400"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M20.54 6.63c.9 2.13.71 4.6-.39 6.65-1.5 2.79-4.39 4.36-7.46 4.36-.42 0-.84-.03-1.27-.09a3 3 0 11-5.71-1.42 6.83 6.83 0 01-2.43-2.78 1 1 0 01.61-1.4c.36-.1.74.06.94.38.46.78 1.13 1.43 1.94 1.86.31.17.5.5.46.85-.04.34-.27.62-.6.71a1 1 0 101.27 1.05c.07-.36.34-.64.7-.73.36-.08.74.03.99.31.86.1 1.7.08 2.51-.06 2.35-.41 4.33-1.79 5.3-3.6.85-1.59.99-3.5.39-5.13-.86-2.34-3.21-3.94-5.81-3.99-2.66-.05-5.1 1.46-6.07 3.77-.5 1.2-.56 2.55-.16 3.79.12.36-.02.76-.34.97-.32.21-.74.18-1.04-.07-1.07-.93-1.62-2.36-1.45-3.8.31-2.61 2.16-4.86 4.69-5.71 2.41-.82 5.13-.32 7.04 1.28 1.6 1.34 2.6 3.3 2.78 5.42z" />
                  </svg>
                  Waze
                </a>
                <a
                  href={url_apple_maps}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Abrir ruta hacia el estudio en Apple Maps"
                  className="inline-flex items-center justify-center gap-2 bg-white border border-gray-300 hover:border-navy-500 hover:bg-gray-50 text-navy-900 font-medium px-3 py-2.5 rounded-md transition-colors text-sm focus:outline-none focus:ring-2 focus:ring-navy-400"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                  Apple Maps
                </a>
              </div>

              {/* Botón de llamada directa */}
              <a
                href={`tel:${telefono_url}`}
                aria-label={`Llamar al estudio jurídico al ${telefono}`}
                className="w-full inline-flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-600 text-navy-900 font-semibold px-4 py-3 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-gold-400 focus:ring-offset-2"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                Llamar {telefono}
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
