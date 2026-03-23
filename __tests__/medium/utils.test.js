/**
 * Pruebas Medias: utils.test.js
 * 
 * Pruebas unitarias para las funciones provistas en lib/utils.js.
 * Comprueban el correcto comportamiento de la fusión de clases CSS y 
 * el formateo de las fechas.
 */

import { cn, formatDate } from '@/lib/utils'

describe('Utilidades Globales (Utils)', () => {
  describe('Función cn()', () => {
    it('combina múltiples nombres de clase de forma segura', () => {
      const result = cn('btn', 'btn-primary', 'bg-blue-500')
      expect(result).toBe('btn btn-primary bg-blue-500')
    })
    
    it('elimina condicionales y clases nulas inteligentemente', () => {
      const active = false
      const result = cn('btn', active && 'active', null, undefined)
      expect(result).toBe('btn')
    })

    it('combina clases tailwind predeterminando la clase más reciente en caso de conflicto interno (tailwind-merge)', () => {
      const result = cn('px-4 py-2 bg-red-500', 'bg-blue-500')
      // twMerge resuelve que bg-blue-500 sobrescribe a bg-red-500
      expect(result).toBe('px-4 py-2 bg-blue-500')
    })
  })

  describe('Función formatDate()', () => {
    it('formatea correctamente fechas ISO en un formato español legible', () => {
      const dateString = '2024-03-15T00:00:00.000Z'
      const formatted = formatDate(dateString)
      // Node.js locale might vary, but in pure spanish it should format something similar a "14 de marzo de 2024" o "15 de marzo"
      // Utilizamos un simple chequeo de inclusividad debido al timezone, en jsdom asume UTC
      expect(formatted).toMatch(/14 de marzo de 2024|15 de marzo de 2024/)
    })
  })
})
