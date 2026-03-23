/**
 * Pruebas Básicas: Footer.test.jsx
 * 
 * Verificación de renderizado de componentes globales estáticos de tipo visual e 
 * informativo de baja prioridad interactiva.
 */

import { render, screen } from '@testing-library/react'
import Footer from '@/components/layout/Footer'

describe('Pie de Página Estático (Footer)', () => {
  it('renderiza la información corporativa estática', () => {
    render(<Footer />)
    
    // Verificamos que se renderice el nombre del estudio
    expect(screen.getByText('Estudio Jurídico')).toBeInTheDocument()
    
    // Verificamos elementos de contacto
    expect(screen.getByText('contacto@estudiojuridico.com')).toBeInTheDocument()
    expect(screen.getByText('+56954555444')).toBeInTheDocument()
  })

  it('renderiza los enlaces rápidos', () => {
    render(<Footer />)
    
    // Verificar que los links importantes estén presentes
    expect(screen.getByText('Nosotros')).toBeInTheDocument()
    expect(screen.getByText('Equipo')).toBeInTheDocument()
    expect(screen.getByText('Blog')).toBeInTheDocument()
  })

  it('exhibe el mensaje de copyright que incluye el año actual', () => {
    // Espiamos el año actual
    const currentYear = new Date().getFullYear()
    
    render(<Footer />)
    
    // Usamos una expresión regular para buscar el texto exacto con el año,
    // o simplemente verificamos que document contenga la cadena unida al año
    const copyrightText = screen.getByText(new RegExp(`Dev Bernardo Morales © ${currentYear}`))
    expect(copyrightText).toBeInTheDocument()
  })
})
