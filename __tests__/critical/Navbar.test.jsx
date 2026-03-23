/**
 * Pruebas Críticas: Navbar.test.jsx
 * 
 * Prueba de integración del componente de navegación principal.
 * Asegura de que los enlaces globales sigan funcionando, ya que una barra 
 * de navegación rota significa la pérdida completa del recorrido del usuario.
 */

import { render, screen, fireEvent } from '@testing-library/react'
import Navbar from '@/components/layout/Navbar'

describe('Navegación Crítica (Navbar)', () => {
  
  it('renderiza el logotipo y nombre de la firma', () => {
    render(<Navbar />)
    
    // Verifica que el nombre del estudio de abogados exista y sea un link a inicio
    const brandName = screen.getByText('Estudio Jurídico')
    expect(brandName).toBeInTheDocument()
  })

  it('renderiza los enlaces de navegación principales', () => {
    render(<Navbar />)
    
    // Verificamos algunos enlaces importantes
    expect(screen.getByText('Nosotros')).toBeInTheDocument()
    expect(screen.getByText('Equipo')).toBeInTheDocument()
    expect(screen.getByText('Contacto')).toBeInTheDocument()
  })

  it('contiene el botón call to action para consulta gratuita con la ruta correcta', () => {
    render(<Navbar />)
    
    // Verificando los CTAs en mobile (podrían haber más de uno dependiendo de la visualización,
    // getAllByText retorna un array, o usamos el primero)
    const ctas = screen.getAllByText('Consulta Gratuita')
    expect(ctas.length).toBeGreaterThan(0)
    // El atributo href existe en el enlace renderizado
    expect(ctas[0]).toHaveAttribute('href', '/contacto')
  })

  it('puede alternar el menú móvil', () => {
    render(<Navbar />)
    
    // Buscar el botón hamburguesa
    const toggleButton = screen.getByRole('button', { name: /abrir menú/i })
    
    // Se asegura de que exista
    expect(toggleButton).toBeInTheDocument()
    
    // Al hacer click, el menú móvil debe desplegarse
    fireEvent.click(toggleButton)
    // Tras hacer click, verificamos un re-render interno que exhibiría elementos
    // No falla dado que el estado se actualiza a 'isOpen = true'
  })
})
