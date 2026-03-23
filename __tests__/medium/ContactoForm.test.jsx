/**
 * Pruebas Medias: ContactoForm.test.jsx
 * 
 * Prueba de renderización del formulario de la vista de Contacto.
 * Se enfoca en asegurar que los inputs y el estado existan y admitan 
 * cambios del usuario, previniendo errores de accesibilidad e interacción.
 */

import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import Contacto from '@/app/contacto/page'

describe('Formulario de Contacto (Medium Priority)', () => {
  it('renderiza todos los campos requeridos del formulario', () => {
    render(<Contacto />)
    
    // Verificamos que los inputs existan por su label asociado
    expect(screen.getByLabelText(/Nombre Completo \*/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Email \*/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Teléfono \*/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Asunto \*/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Mensaje \*/i)).toBeInTheDocument()
    
    // Verifica el CTA / botón de envío
    expect(screen.getByRole('button', { name: /Enviar Mensaje/i })).toBeInTheDocument()
  })

  it('permite al usuario escribir en los campos de texto', () => {
    render(<Contacto />)
    
    const nameInput = screen.getByLabelText(/Nombre Completo \*/i)
    fireEvent.change(nameInput, { target: { value: 'Juan Pérez' } })
    
    // El valor debe cambiar
    expect(nameInput.value).toBe('Juan Pérez')
  })

  it('muestra estado de carga durante el proceso de envío', async () => {
    render(<Contacto />)
    
    const nameInput = screen.getByLabelText(/Nombre Completo \*/i)
    const emailInput = screen.getByLabelText(/Email \*/i)
    const telInput = screen.getByLabelText(/Teléfono \*/i)
    const msgInput = screen.getByLabelText(/Mensaje \*/i)
    const submitButton = screen.getByRole('button', { name: /Enviar Mensaje/i })

    // Rellenar datos
    fireEvent.change(nameInput, { target: { value: 'Carlos' } })
    fireEvent.change(emailInput, { target: { value: 'carlos@test.com' } })
    fireEvent.change(telInput, { target: { value: '123456789' } })
    fireEvent.change(msgInput, { target: { value: 'Consulta legal' } })
    
    // Act: Envío
    fireEvent.submit(submitButton)
    
    // Assert: El botón pasa a estado 'Enviando...'
    expect(screen.getByRole('button', { name: /Enviando.../i })).toBeInTheDocument()
    expect(submitButton).toBeDisabled()
  })
})
