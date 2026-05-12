/**
 * Pruebas Medias: UbicacionMapa.test.jsx
 *
 * Verifica el comportamiento de la sección reutilizable que presenta la
 * ubicación física del estudio. Se cubre la información derivada de
 * `info_ubicacion`, los accesos rápidos a aplicaciones de navegación
 * (Google Maps, Waze, Apple Maps) y la llamada directa por `tel:`.
 *
 * El componente hijo `MapaLeaflet` se carga vía `next/dynamic` con
 * `ssr: false`; `jest.setup.js` ya provee un stub global para `next/dynamic`,
 * por lo que el bundle de Leaflet no se ejecuta dentro de jsdom.
 */

import { render, screen } from "@testing-library/react";
import UbicacionMapa from "@/components/sections/UbicacionMapa";
import { info_ubicacion } from "@/data/content";

/**
 * Helper que construye la URL esperada para abrir indicaciones en Google Maps
 * usando las coordenadas centralizadas en `info_ubicacion`. Mantener la lógica
 * espejada con el componente garantiza que el test detecte regresiones.
 *
 * @returns {string} URL completa de Google Maps directions.
 */
const construir_url_google_esperada = () => {
  const { lat, lng } = info_ubicacion.coordenadas;
  return `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
};

/**
 * Helper análogo para la URL esperada de Waze.
 *
 * @returns {string} URL completa de Waze para navegación.
 */
const construir_url_waze_esperada = () => {
  const { lat, lng } = info_ubicacion.coordenadas;
  return `https://www.waze.com/ul?ll=${lat}%2C${lng}&navigate=yes`;
};

/**
 * Helper análogo para la URL esperada de Apple Maps.
 *
 * @returns {string} URL completa de Apple Maps con dirección.
 */
const construir_url_apple_maps_esperada = () => {
  const { lat, lng } = info_ubicacion.coordenadas;
  return `https://maps.apple.com/?daddr=${lat},${lng}&dirflg=d`;
};

describe("Sección de Ubicación (UbicacionMapa)", () => {
  it("renderiza el título y descripción introductoria", () => {
    render(<UbicacionMapa />);

    expect(
      screen.getByRole("heading", { name: /Nuestra Ubicación/i, level: 2 }),
    ).toBeInTheDocument();
    expect(screen.getByText(/Visítenos/i)).toBeInTheDocument();
  });

  it("muestra la dirección completa proveniente de info_ubicacion", () => {
    const { container } = render(<UbicacionMapa />);

    // La dirección se renderiza dentro de un único <p> con varios fragmentos
    // de texto separados por <br />, por lo que comprobamos la concatenación
    // total del contenedor (más estable que `getByText` con texto fragmentado).
    expect(container.textContent).toContain(info_ubicacion.direccion_calle);
    expect(container.textContent).toContain(info_ubicacion.direccion_ciudad);
    expect(container.textContent).toContain(info_ubicacion.direccion_region);
    expect(container.textContent).toContain(info_ubicacion.direccion_pais);
  });

  it("muestra el punto de referencia cuando está definido", () => {
    render(<UbicacionMapa />);

    expect(
      screen.getByText(info_ubicacion.referencia),
    ).toBeInTheDocument();
  });

  it("lista todos los horarios de atención centralizados", () => {
    render(<UbicacionMapa />);

    info_ubicacion.horarios.forEach((item) => {
      expect(screen.getByText(item.dia)).toBeInTheDocument();
      expect(screen.getByText(item.horario)).toBeInTheDocument();
    });
  });

  it("expone el botón 'Cómo llegar' con la URL correcta de Google Maps", () => {
    render(<UbicacionMapa />);

    const enlace_google = screen.getByRole("link", {
      name: /Cómo llegar al estudio/i,
    });

    expect(enlace_google).toHaveAttribute(
      "href",
      construir_url_google_esperada(),
    );
    expect(enlace_google).toHaveAttribute("target", "_blank");
    expect(enlace_google).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("expone el acceso rápido a Waze con la URL esperada", () => {
    render(<UbicacionMapa />);

    const enlace_waze = screen.getByRole("link", {
      name: /Abrir ruta hacia el estudio en Waze/i,
    });

    expect(enlace_waze).toHaveAttribute("href", construir_url_waze_esperada());
    expect(enlace_waze).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("expone el acceso rápido a Apple Maps con la URL esperada", () => {
    render(<UbicacionMapa />);

    const enlace_apple = screen.getByRole("link", {
      name: /Abrir ruta hacia el estudio en Apple Maps/i,
    });

    expect(enlace_apple).toHaveAttribute(
      "href",
      construir_url_apple_maps_esperada(),
    );
    expect(enlace_apple).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("ofrece un botón de llamada directa con tel: al teléfono centralizado", () => {
    render(<UbicacionMapa />);

    const enlace_llamar = screen.getByRole("link", {
      name: /Llamar al estudio jurídico/i,
    });

    expect(enlace_llamar).toHaveAttribute(
      "href",
      `tel:${info_ubicacion.telefono_url}`,
    );
    expect(enlace_llamar).toHaveTextContent(info_ubicacion.telefono);
  });

  it("expone la sección con el id 'ubicacion' para anclas internas", () => {
    const { container } = render(<UbicacionMapa />);

    const seccion = container.querySelector("section#ubicacion");
    expect(seccion).not.toBeNull();
  });
});
