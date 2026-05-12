/**
 * Pruebas Medias: ContactoForm.test.jsx
 *
 * Cobertura de la vista `app/contacto/page.js`: campos del formulario,
 * estado de carga al enviar y montaje de la sección `UbicacionMapa`.
 * `UbicacionMapa` se mockea para que estas pruebas se mantengan acotadas al
 * formulario (la sección de mapa tiene su propio archivo de tests). El placeholder
 * del campo Teléfono proviene de `info_ubicacion` y se verifica explícitamente.
 */

import { render, screen, fireEvent, waitFor } from "@testing-library/react";

// Mock del bloque de ubicación: el contrato del test del formulario no debe
// depender de los detalles internos de UbicacionMapa.
jest.mock("@/components/sections/UbicacionMapa", () => {
  const MockUbicacionMapa = () => (
    <section data-testid="ubicacion-mapa-mock">UbicacionMapa Mock</section>
  );
  MockUbicacionMapa.displayName = "MockUbicacionMapa";
  return MockUbicacionMapa;
});

import Contacto from "@/app/contacto/page";
import { info_ubicacion } from "@/data/content";

beforeEach(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () =>
        Promise.resolve({
          success: true,
          message: "¡Gracias por contactarnos!",
        }),
    }),
  );
});

describe("Formulario de Contacto (Medium Priority)", () => {
  it("renderiza todos los campos requeridos del formulario", () => {
    render(<Contacto />);

    expect(screen.getByLabelText(/Nombre Completo \*/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email \*/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Teléfono \*/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Asunto \*/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Mensaje \*/i)).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: /Enviar Mensaje/i }),
    ).toBeInTheDocument();
  });

  it("usa el teléfono centralizado de info_ubicacion como placeholder", () => {
    render(<Contacto />);

    const input_telefono = screen.getByLabelText(/Teléfono \*/i);
    expect(input_telefono).toHaveAttribute(
      "placeholder",
      info_ubicacion.telefono,
    );
  });

  it("monta la sección UbicacionMapa al final de la página", () => {
    render(<Contacto />);

    expect(screen.getByTestId("ubicacion-mapa-mock")).toBeInTheDocument();
  });

  it("permite al usuario escribir en los campos de texto", () => {
    render(<Contacto />);

    const input_nombre = screen.getByLabelText(/Nombre Completo \*/i);
    fireEvent.change(input_nombre, { target: { value: "Juan Pérez" } });

    expect(input_nombre.value).toBe("Juan Pérez");
  });

  it("muestra estado de carga durante el proceso de envío", async () => {
    render(<Contacto />);

    const input_nombre = screen.getByLabelText(/Nombre Completo \*/i);
    const input_email = screen.getByLabelText(/Email \*/i);
    const input_telefono = screen.getByLabelText(/Teléfono \*/i);
    const select_asunto = screen.getByLabelText(/Asunto \*/i);
    const input_mensaje = screen.getByLabelText(/Mensaje \*/i);
    const boton_envio = screen.getByRole("button", {
      name: /Enviar Mensaje/i,
    });

    fireEvent.change(input_nombre, { target: { value: "Carlos" } });
    fireEvent.change(input_email, { target: { value: "carlos@test.com" } });
    fireEvent.change(input_telefono, { target: { value: "123456789" } });
    fireEvent.change(select_asunto, { target: { value: "corporativo" } });
    fireEvent.change(input_mensaje, {
      target: { value: "Consulta legal sobre un caso corporativo" },
    });

    fireEvent.click(boton_envio);

    await waitFor(() => {
      expect(
        screen.getByRole("button", { name: /Enviando.../i }),
      ).toBeInTheDocument();
    });
    expect(boton_envio).toBeDisabled();
  });
});
