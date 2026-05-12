/**
 * Pruebas Básicas: Footer.test.jsx
 *
 * Verificación de renderizado y enlaces interactivos del pie de página global.
 * Cubre tanto los elementos estáticos (copyright, branding) como los enlaces
 * funcionales agregados al integrar `info_ubicacion`: dirección clickeable que
 * apunta a la sección de ubicación en `/contacto#ubicacion`, teléfono `tel:`
 * y email `mailto:`.
 */

import { render, screen } from "@testing-library/react";
import Footer from "@/components/layout/Footer";
import { info_ubicacion } from "@/data/content";

/**
 * Constante con la URL esperada del enlace "Ver ubicación" que el Footer
 * inyecta sobre la dirección. Centralizada para que el test se mantenga
 * sincronizado con el componente al cambiar la ruta interna.
 *
 * @constant {string}
 */
const ruta_ubicacion_esperada = "/contacto#ubicacion";

describe("Pie de Página Estático (Footer)", () => {
  it("renderiza la información corporativa estática", () => {
    render(<Footer />);

    // El nombre del estudio aparece junto al logo
    expect(screen.getByText("Estudio Jurídico")).toBeInTheDocument();

    // El email y el teléfono se renderizan desde info_ubicacion (single source
    // of truth). Verificamos solo que el texto está presente; los hrefs
    // específicos se prueban más abajo.
    expect(
      screen.getByText("contacto@estudiojuridico.com"),
    ).toBeInTheDocument();
    expect(screen.getByText(info_ubicacion.telefono)).toBeInTheDocument();
  });

  it("renderiza los enlaces rápidos de navegación", () => {
    render(<Footer />);

    expect(screen.getByText("Nosotros")).toBeInTheDocument();
    expect(screen.getByText("Equipo")).toBeInTheDocument();
    expect(screen.getByText("Blog")).toBeInTheDocument();
  });

  it("convierte el teléfono en un enlace tel: con el número saneado", () => {
    render(<Footer />);

    const enlace_telefono = screen.getByRole("link", {
      name: new RegExp(`Llamar al estudio:`, "i"),
    });

    expect(enlace_telefono).toBeInTheDocument();
    expect(enlace_telefono).toHaveAttribute(
      "href",
      `tel:${info_ubicacion.telefono_url}`,
    );
    // El texto visible debe coincidir con el formato legible centralizado
    expect(enlace_telefono).toHaveTextContent(info_ubicacion.telefono);
  });

  it("convierte el email en un enlace mailto:", () => {
    render(<Footer />);

    const enlace_email = screen.getByRole("link", {
      name: /contacto@estudiojuridico\.com/i,
    });

    expect(enlace_email).toHaveAttribute(
      "href",
      "mailto:contacto@estudiojuridico.com",
    );
  });

  it("la dirección es un enlace que apunta a la sección de ubicación", () => {
    render(<Footer />);

    const enlace_direccion = screen.getByRole("link", {
      name: /Ver ubicación del estudio/i,
    });

    expect(enlace_direccion).toBeInTheDocument();
    expect(enlace_direccion).toHaveAttribute("href", ruta_ubicacion_esperada);
    // Debe mostrar al menos la ciudad y país desde info_ubicacion
    expect(enlace_direccion).toHaveTextContent(info_ubicacion.direccion_ciudad);
    expect(enlace_direccion).toHaveTextContent(info_ubicacion.direccion_pais);
  });

  it("exhibe el mensaje de copyright con el año actual", () => {
    const anio_actual = new Date().getFullYear();
    render(<Footer />);

    expect(
      screen.getByText(new RegExp(`© ${anio_actual}`)),
    ).toBeInTheDocument();
    expect(screen.getByText("Bernardo Morales")).toBeInTheDocument();
  });
});
