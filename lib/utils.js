/**
 * Utilidades y Funciones Helper
 * 
 * Funciones auxiliares reutilizables en toda la aplicación.
 * Incluye utilidades para manipulación de clases CSS y formateo de fechas.
 */

import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Combina clases CSS de manera inteligente usando clsx y tailwind-merge
 * Permite fusionar clases de Tailwind sin conflictos
 * @param {...string} inputs - Clases CSS a combinar
 * @returns {string} String con las clases combinadas
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

/**
 * Formatea una fecha en formato ISO a formato legible en español
 * @param {string} dateString - Fecha en formato ISO (ej: "2024-03-15")
 * @returns {string} Fecha formateada (ej: "15 de marzo de 2024")
 */
export function formatDate(dateString) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  return new Date(dateString).toLocaleDateString('es-ES', options)
}
