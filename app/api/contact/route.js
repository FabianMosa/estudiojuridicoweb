/**
 * API Route para el Formulario de Contacto
 *
 * Recibe los datos del formulario de contacto, los valida,
 * y los procesa (en producción integraría con un servicio de email o CRM).
 *
 * @route POST /api/contact
 */

export async function POST(request) {
  try {
    const body = await request.json()

    const { nombre, email, telefono, asunto, mensaje } = body

    // Validación básica del lado del servidor
    const errors = []
    if (!nombre || nombre.trim().length < 2) {
      errors.push('El nombre debe tener al menos 2 caracteres')
    }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.push('Email inválido')
    }
    if (!telefono || telefono.trim().length < 8) {
      errors.push('Teléfono inválido')
    }
    if (!mensaje || mensaje.trim().length < 10) {
      errors.push('El mensaje debe tener al menos 10 caracteres')
    }

    if (errors.length > 0) {
      return Response.json(
        { success: false, errors },
        { status: 400 }
      )
    }

    // En producción: enviar email, guardar en CRM, etc.
    // Por ahora registramos que la consulta llegó correctamente.
    console.log('[Contacto] Nueva consulta recibida:', {
      nombre: nombre.trim(),
      email: email.trim(),
      telefono: telefono.trim(),
      asunto,
      mensaje: mensaje.trim(),
      recibido: new Date().toISOString(),
    })

    return Response.json({
      success: true,
      message: '¡Gracias por contactarnos! Le responderemos en breve.',
    })
  } catch (error) {
    console.error('[Contacto] Error al procesar consulta:', error)
    return Response.json(
      { success: false, errors: ['Error interno del servidor'] },
      { status: 500 }
    )
  }
}
