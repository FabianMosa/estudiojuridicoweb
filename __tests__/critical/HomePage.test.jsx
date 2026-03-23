/**
 * Pruebas Críticas: HomePage.test.jsx
 * 
 * Este archivo contiene las pruebas de nivel crítico para la página principal (Landing Page).
 * El objetivo es asegurar que los elementos vitales para la conversión y la información
 * esencial del negocio no presenten errores de renderizado.
 */

import { render, screen } from '@testing-library/react'
import Page from '@/app/page'

// Mock de componentes hijos complejos para aislar la prueba
jest.mock('@/components/sections/Hero', () => {
  return function MockHero() {
    return <div data-testid="hero-section">Hero Section</div>
  }
})

jest.mock('@/components/sections/PracticeAreas', () => {
  return function MockPracticeAreas() {
    return <div data-testid="practice-areas">Practice Areas</div>
  }
})

jest.mock('@/components/sections/Testimonials', () => {
  return function MockTestimonials() {
    return <div data-testid="testimonials">Testimonials</div>
  }
})

jest.mock('@/components/sections/CTA', () => {
  return function MockCTA() {
    return <div data-testid="cta-section">CTA Section</div>
  }
})

describe('Página Principal Crítica (Home Page)', () => {
  it('renderiza todos los componentes de la estructura principal sin colapsar', () => {
    // Act: Evocamos la página
    render(<Page />)
    
    // Assert: Verificamos que los componentes vitales estén presentes
    expect(screen.getByTestId('hero-section')).toBeInTheDocument()
    expect(screen.getByTestId('practice-areas')).toBeInTheDocument()
    expect(screen.getByTestId('testimonials')).toBeInTheDocument()
    expect(screen.getByTestId('cta-section')).toBeInTheDocument()
  })

  it('renderiza la sección estática central "¿Por Qué Elegirnos?" y métricas vitales', () => {
    render(<Page />)
    
    // Verificamos titulares críticos del contenido local
    expect(screen.getByText('¿Por Qué Elegirnos?')).toBeInTheDocument()
    
    // Verificamos que una viñeta crítica o métrica esté presente
    expect(screen.getByText('Experiencia Comprobada')).toBeInTheDocument()
    expect(screen.getByText('95%')).toBeInTheDocument()
    expect(screen.getByText('Casos Exitosos')).toBeInTheDocument()
  })
})
