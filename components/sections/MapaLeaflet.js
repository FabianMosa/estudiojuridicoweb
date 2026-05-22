/**
 * Componente MapaLeaflet (Client Component)
 *
 * Mapa interactivo renderizado con Leaflet + react-leaflet usando tiles
 * de OpenStreetMap. Reemplaza al iframe de Google Maps embed para garantizar
 * privacidad (sin cookies de tracking de Google) y un mapa 100% open source.
 *
 * IMPORTANTE:
 *   - Este archivo es un **Client Component** ('use client') porque Leaflet
 *     accede a `window` en import time y NO es compatible con SSR.
 *   - Debe ser consumido únicamente vía `dynamic(() => import('./MapaLeaflet'),
 *     { ssr: false })` desde un Server Component o Client Component padre.
 *   - Consume los datos centralizados de `data/content.js → info_ubicacion`.
 *
 * Características:
 *   - TileLayer OpenStreetMap con la atribución obligatoria del proyecto OSM.
 *   - Marker en las coordenadas del estudio con Popup informativo.
 *   - Fix del bug clásico del icono por defecto roto con bundlers Webpack/Turbopack.
 *   - Wheel zoom desactivado por defecto para mejor UX en scroll de páginas largas.
 *
 * Seguridad:
 *   - Snyk reporta CVE-2025-69993 / SNYK-JS-LEAFLET-16427276 para Leaflet
 *     <= 1.9.4 cuando una app pasa strings no confiables a `bindPopup()`.
 *   - Este componente NO usa `bindPopup()` con HTML string. Renderiza `<Popup>`
 *     con nodos React y textos escapados automáticamente por React.
 *   - No reemplazar este patrón por `bindPopup(user_input)` ni por strings HTML
 *     sin sanitización. Si en el futuro el popup recibe contenido editable por
 *     usuarios, sanitizarlo primero o construir nodos DOM con `textContent`.
 *
 * @returns {JSX.Element} Mapa Leaflet ocupando el 100% del contenedor padre.
 */

'use client'

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

import marker_icon_2x from 'leaflet/dist/images/marker-icon-2x.png'
import marker_icon from 'leaflet/dist/images/marker-icon.png'
import marker_shadow from 'leaflet/dist/images/marker-shadow.png'

import { info_ubicacion } from '@/data/content'

/**
 * Resuelve la URL final de una imagen importada por el bundler.
 * Next.js retorna un objeto `StaticImageData` con `.src`; otros bundlers
 * retornan directamente un string. Esta función normaliza ambos casos.
 *
 * @param {string | { src: string }} maybe_static_image - Resultado del import.
 * @returns {string} URL utilizable por Leaflet para construir el Icon.
 */
const resolver_url_imagen = (maybe_static_image) => {
  return typeof maybe_static_image === 'string'
    ? maybe_static_image
    : maybe_static_image.src
}

// Fix del bug conocido: el icono por defecto de Leaflet apunta a rutas
// absolutas que rompen con Webpack/Turbopack. Reemplazamos las URLs por
// las que el bundler resuelve a partir de los assets de leaflet/dist/images.
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: resolver_url_imagen(marker_icon_2x),
  iconUrl: resolver_url_imagen(marker_icon),
  shadowUrl: resolver_url_imagen(marker_shadow),
})

export default function MapaLeaflet() {
  const { coordenadas, nombre_lugar, direccion_completa, referencia } =
    info_ubicacion
  const posicion = [coordenadas.lat, coordenadas.lng]

  return (
    <MapContainer
      center={posicion}
      zoom={17}
      scrollWheelZoom={false}
      className="absolute inset-0 w-full h-full"
      aria-label={`Mapa interactivo de la ubicación de ${nombre_lugar} en ${info_ubicacion.direccion_ciudad}`}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={posicion}>
        {/* Patrón seguro frente a CVE-2025-69993: React escapa estos textos y
            no se entrega HTML string no confiable a Leaflet/bindPopup. */}
        <Popup>
          <div className="text-sm">
            <strong className="block text-navy-900 mb-1">
              {nombre_lugar}
            </strong>
            <span className="block text-gray-700">{direccion_completa}</span>
            {referencia && (
              <span className="block text-gray-500 mt-1 italic">
                {referencia}
              </span>
            )}
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  )
}
