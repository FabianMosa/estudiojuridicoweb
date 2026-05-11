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
    expect(screen.getByText('+56999999999')).toBeInTheDocument()
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
    
    // Verificamos que el copyright incluya el año actual y el desarrollador
    expect(screen.getByText(new RegExp(`© ${currentYear}`))).toBeInTheDocument()
    expect(screen.getByText('Bernardo Morales')).toBeInTheDocument()
  })
})
