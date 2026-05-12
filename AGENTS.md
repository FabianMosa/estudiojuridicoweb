# AGENTS.md - Historial de Modificaciones del Proyecto

## Fecha: 12 de Mayo de 2026 (tarde · cleanup)

### Modificación: Teléfono único + coherencia mapa↔dirección

**Objetivo:** Unificar todos los números de teléfono del sitio a una sola fuente (`data/content.js → info_ubicacion`) y mejorar la coherencia entre la dirección mostrada y las coordenadas del mapa.

---

#### Teléfonos: fuente única `info_ubicacion`

Antes había tres números distintos hardcodeados; ahora todos consumen `info_ubicacion`:

| Archivo | Antes | Ahora |
| --- | --- | --- |
| `components/layout/Footer.js` | `+56999999999` (display + `tel:`) | `info_ubicacion.telefono` + `tel:${info_ubicacion.telefono_url}` |
| `components/sections/CTA.js` | display `+56954555444` con bug `tel:+525512345678` (México) | `info_ubicacion.telefono` + `tel:${info_ubicacion.telefono_url}` |
| `app/contacto/page.js` (placeholder input) | `+56954555444` literal | `info_ubicacion.telefono` |
| `__tests__/basic/Footer.test.jsx` | esperaba `+56999999999` literal | espera `info_ubicacion.telefono` |
| `data/content.js` | (ya era fuente) | **Única fuente de verdad: `+56 9 5455 5444` / `+56954555444`** |

Se corrigió además un bug serio en `CTA.js`: el botón "Llamar" mostraba `+56954555444` pero el `href` apuntaba a `tel:+525512345678` (un teléfono mexicano), de modo que un clic real marcaba un número incorrecto en otro país.

#### Coherencia mapa ↔ dirección

- `data/content.js → info_ubicacion.coordenadas` pasó de `-23.6500, -70.4000` (apuntaban genéricamente al centro de Antofagasta) a **`-23.6512, -70.3989`** (mejor aproximación al corredor de Av. Brasil 1234, a una cuadra de Plaza Colón).
- Campo `referencia` actualizado a "a una cuadra de Plaza Colón" para que coincida con el desplazamiento.
- JSDoc reforzado con advertencia explícita: `direccion_calle` y `coordenadas` deben actualizarse juntas, de lo contrario el pin del mapa apunta a un lugar distinto al texto mostrado.
- Las coordenadas siguen siendo una aproximación; cuando se confirme el pin exacto del edificio, reemplazar ambas.

#### Restauración de `components/sections/UbicacionMapa.js`

Durante el ciclo de edición el archivo quedó eliminado mientras `app/contacto/page.js` seguía importándolo, lo que reventaba Jest y el dev server. Se restauró íntegro con:

- Directiva `'use client'` (requerida por `next/dynamic({ ssr: false })` en Next.js 15+).
- Consumo de `info_ubicacion` para dirección, referencia, horarios y teléfono.
- Enlaces externos a Google Maps / Waze / Apple Maps con `rel="noopener noreferrer"`.

#### Verificación

- `npx jest`: **5 suites / 16 tests** verdes.
- `npm run dev`: `GET /` → `200`, `GET /contacto` → `200`.
- Búsqueda `+56` en todo el repo (excluyendo `.next`, `node_modules`): único hit en `data/content.js` (fuente única).

---

## Fecha: 12 de Mayo de 2026

### Modificación: Vista de Ubicación del Estudio Jurídico

**Objetivo:** Permitir que los clientes encuentren el estudio jurídico de forma directa, agregando un mapa interactivo, una tarjeta con la dirección/horarios y accesos rápidos a aplicaciones de navegación (Google Maps, Waze, Apple Maps) además de un botón de llamada directa. El acceso a la ubicación también se incorpora al Footer para que esté disponible desde cualquier página.

---

## Archivos Creados y Modificados

### 1. **Datos centralizados de ubicación**

#### `data/content.js`

- ✅ Nuevo export `info_ubicacion` con todos los datos del estudio (snake_case)
- ✅ Campos: `direccion_calle`, `direccion_ciudad`, `direccion_region`, `direccion_pais`, `direccion_completa`, `referencia`, `coordenadas {lat, lng}`, `telefono`, `telefono_url`, `email`, `horarios[]`
- ✅ Comentario JSDoc completo con descripción de cada propiedad
- ✅ Coordenadas de Antofagasta como referencia inicial + `TODO` claros para reemplazar por datos reales

### 2. **Componente reutilizable de ubicación**

#### `components/sections/UbicacionMapa.js` (NUEVO)

- ✅ Sección completa con mapa de Google Maps embebido (iframe, **sin API key**)
- ✅ Tarjeta lateral con dirección, referencia, horarios y botones de acción
- ✅ Botones para abrir la ruta en: **Google Maps**, **Waze**, **Apple Maps**
- ✅ Botón de **llamada directa** (tel:) destacado en dorado
- ✅ Helpers con JSDoc en snake_case: `construir_url_mapa_embed`, `construir_url_google_directions`, `construir_url_waze`, `construir_url_apple_maps`
- ✅ Diseño totalmente **responsivo** (móvil, tablet y desktop) con `grid`, `aspect-ratio` y `gap` adaptativos
- ✅ Atributos de **accesibilidad** (`aria-label`, `aria-labelledby`, `aria-hidden` en iconos, `role` semántico)
- ✅ `loading="lazy"` en el iframe para mejor rendimiento

### 3. **Integración en la página de Contacto**

#### `app/contacto/page.js`

- ✅ Importa `UbicacionMapa` y `info_ubicacion` desde datos centralizados
- ✅ La dirección/teléfono de la columna de contacto ahora consume `info_ubicacion`
- ✅ Nuevo enlace "Ver en el mapa" que ancla a `#ubicacion`
- ✅ Teléfono clickeable con `tel:`
- ✅ Reemplazado el bloque comentado del mapa antiguo por el nuevo componente

### 4. **Acceso rápido en el Footer**

#### `components/layout/Footer.js`

- ✅ Dirección ahora es **clickeable**: abre Google Maps en una pestaña nueva usando las coordenadas centralizadas
- ✅ Teléfono y email convertidos a enlaces `tel:` y `mailto:` respectivamente
- ✅ Función helper `construir_url_google_maps` con JSDoc (snake_case)
- ✅ Texto del teléfono y email se conservan para compatibilidad con `Footer.test.jsx`

### 5. **README.md**

- ✅ Añadida descripción ampliada de la página de Contacto (mapa + acciones)
- ✅ Documentado el nuevo componente `UbicacionMapa.js` en la estructura del proyecto
- ✅ Nueva sección de personalización para `info_ubicacion` con advertencia de los `TODO` a reemplazar

### 6. **`.gitignore`**

- ✅ Eliminada entrada duplicada de `/docs` al final del archivo

---

## Resumen Técnico

- **Sin nuevas dependencias** instaladas (Google Maps embed funciona vía iframe público sin API key).
- **Mantiene compatibilidad** con las pruebas existentes (`Footer.test.jsx`, `ContactoForm.test.jsx`).
- **Datos centralizados** en `info_ubicacion` para un punto único de actualización.
- **Convención snake_case** aplicada en todas las nuevas variables y funciones helper.
- **Comentarios JSDoc** agregados a cada nueva función.
- **Interfaces responsivas** con breakpoints Tailwind (`md:`, `lg:`).

---

## Fecha: 23 de Marzo de 2026

### Modificación: Implementación de Pruebas Automatizadas

**Objetivo:** Configurar el entorno de testing e implementar pruebas críticas, medias y básicas para el rendimiento de la aplicación, todas incluyendo comentarios analíticos.

---

## Archivos Creados y Modificados

### 1. **Entorno de Pruebas**

#### `jest.config.mjs` (NUEVO)

- ✅ Creación y configuración base para Jest en Next.js
- ✅ Soporte para importaciones absolutas a través del alias `@/`

#### `jest.setup.js` (NUEVO)

- ✅ Instalación de métodos adicionales DOM de Jest (`@testing-library/jest-dom`)
- ✅ Mocks globales para componentes de enrutamiento Next (`next/navigation`)

#### `package.json`

- ✅ Implementación de comandos script (`test`, `test:watch`)

---

### 2. **Pruebas Críticas**

#### `__tests__/critical/HomePage.test.jsx` (NUEVO)

- ✅ Comentarios JSDoc agregados
- ✅ Constatación de renderización de capas vitales del Home
- ✅ Verificación de montajes de "Razones para elegirnos" y CTAs

#### `__tests__/critical/Navbar.test.jsx` (NUEVO)

- ✅ Comentarios exploratorios sobre el propósito de las pruebas
- ✅ Comprobación de enlaces críticos e interacciones (Menú móvil)

---

### 3. **Pruebas Medias**

#### `__tests__/medium/ContactoForm.test.jsx` (NUEVO)

- ✅ Comprobación integral de los labels, states e inputs del formulario
- ✅ Validaciones de evento al hacer 'submit' del formulario de contacto

#### `__tests__/medium/utils.test.js` (NUEVO)

- ✅ Pruebas sobre constructores globales `cn` y `formatDate`

---

### 4. **Pruebas Básicas**

#### `__tests__/basic/Footer.test.jsx` (NUEVO)

- ✅ Examen de los sub-bloques puramente estáticos
- ✅ Verificación del funcionamiento paramétrico de la fecha del sistema (`currentYear`)

---

## Fecha: 9 de Marzo de 2026

### Modificación: Documentación Completa del Código

**Objetivo:** Agregar comentarios contextuales a todos los archivos del proyecto para facilitar su comprensión y mantenimiento.

---

## Archivos Modificados y Comentados

### 1. **Archivos de Configuración**

#### `package.json`

- Sin cambios en funcionalidad, solo restructurado para claridad

#### `tailwind.config.js`

- ✅ Agregado encabezado explicativo del archivo
- ✅ Comentarios sobre la configuración de rutas de contenido
- ✅ Documentación de la paleta de colores personalizada (navy y gold)
- ✅ Explicación de las familias tipográficas

#### `next.config.js`

- ✅ Encabezado JSDoc explicando el propósito del archivo
- ✅ Comentarios sobre la configuración de imágenes remotas

#### `jsconfig.json`

- ✅ Comentarios JSON explicando el alias de importación `@/`

#### `.eslintrc.json`

- ✅ Documentación de las reglas de linting personalizadas

#### `.gitignore`

- ✅ Reorganizado y comentado por secciones
- ✅ Agregadas más exclusiones (IDEs, archivos temporales, etc.)
- ✅ Incluidas advertencias sobre archivos sensibles (.env)

---

### 2. **Layout y Estructura Principal**

#### `app/layout.js`

- ✅ Encabezado JSDoc completo
- ✅ Comentarios explicando configuración de fuentes
- ✅ Documentación de metadatos SEO
- ✅ Comentarios sobre la estructura del layout (navbar, main, footer)

#### `app/page.js`

- ✅ Encabezado explicando que es la landing page
- ✅ Comentarios en cada sección principal
- ✅ Documentación de los beneficios mostrados
- ✅ Comentarios sobre elementos visuales (imágenes, estadísticas)

---

### 3. **Componentes de Layout**

#### `components/layout/Navbar.js`

- ✅ Encabezado JSDoc descriptivo
- ✅ Comentarios sobre el estado del menú móvil
- ✅ Documentación de los enlaces de navegación
- ✅ Comentarios sobre menú desktop vs móvil
- ✅ Explicación del botón hamburguesa

#### `components/layout/Footer.js`

- ✅ Encabezado JSDoc completo
- ✅ Comentarios sobre el año dinámico
- ✅ Documentación de arrays de enlaces
- ✅ Comentarios en cada columna del footer
- ✅ Explicación de la barra inferior con copyright

---

### 4. **Componentes de Sección**

#### `components/sections/Hero.js`

- ✅ Encabezado JSDoc descriptivo
- ✅ Comentarios sobre el patrón de fondo decorativo
- ✅ Documentación de contenido textual y CTAs
- ✅ Comentarios sobre las tarjetas de estadísticas
- ✅ Explicación del divisor de onda

#### `components/sections/PracticeAreas.js`

- ✅ Encabezado JSDoc completo
- ✅ Comentarios sobre el mapeo de íconos
- ✅ Documentación del grid de tarjetas
- ✅ Comentarios sobre botones de acción

#### `components/sections/Testimonials.js`

- ✅ Encabezado JSDoc descriptivo
- ✅ Comentarios sobre la estructura del testimonio
- ✅ Documentación de las estrellas de calificación
- ✅ Comentarios sobre la información del autor

#### `components/sections/CTA.js`

- ✅ Encabezado JSDoc completo
- ✅ Comentarios sobre botones de acción
- ✅ Documentación del grid de beneficios
- ✅ Comentarios sobre elementos visuales

---

### 5. **Páginas de Contenido**

#### `app/nosotros/page.js`

- ✅ Encabezado JSDoc descriptivo
- ✅ Comentarios sobre sección hero
- ✅ Documentación de historia del estudio
- ✅ Comentarios sobre misión y visión
- ✅ Explicación de valores corporativos
- ✅ Comentarios sobre CTA

#### `app/equipo/page.js`

- ✅ Encabezado JSDoc completo
- ✅ Comentarios sobre metadatos SEO
- ✅ Documentación del grid de miembros
- ✅ Comentarios sobre sección de reclutamiento

#### `app/equipo/[slug]/page.js`

- ✅ Encabezado JSDoc descriptivo
- ✅ Comentarios sobre generación de rutas estáticas
- ✅ Documentación de metadatos dinámicos
- ✅ Comentarios sobre búsqueda de miembro por slug
- ✅ Explicación de estructura de dos columnas
- ✅ Comentarios sobre secciones (bio, educación, publicaciones)

#### `app/areas-practica/page.js`

- ✅ Encabezado JSDoc completo
- ✅ Comentarios sobre mapeo de íconos
- ✅ Documentación del grid de áreas
- ✅ Comentarios sobre CTA para otros casos

#### `app/areas-practica/[slug]/page.js`

- ✅ Encabezado JSDoc descriptivo
- ✅ Comentarios sobre generación de rutas estáticas
- ✅ Documentación de metadatos dinámicos
- ✅ Comentarios sobre descripción completa
- ✅ Explicación de servicios y beneficios
- ✅ Comentarios sobre CTA final

#### `app/blog/page.js`

- ✅ Encabezado JSDoc completo
- ✅ Comentarios sobre grid de artículos
- ✅ Documentación del formulario de newsletter

#### `app/contacto/page.js`

- ✅ Encabezado JSDoc descriptivo
- ✅ Comentarios sobre estados del formulario
- ✅ Documentación de manejadores de eventos
- ✅ Comentarios sobre columnas (info de contacto vs formulario)
- ✅ Explicación de cada campo del formulario
- ✅ Comentarios sobre mapa integrado

---

### 6. **Utilidades y Datos**

#### `lib/utils.js`

- ✅ Encabezado JSDoc completo
- ✅ Comentarios JSDoc para función `cn()`
- ✅ Documentación JSDoc para función `formatDate()`
- ✅ Explicación de parámetros y valores de retorno

#### `data/content.js`

- ✅ Encabezado JSDoc descriptivo del archivo
- ✅ Comentarios de sección para áreas de práctica
- ✅ Comentarios de sección para miembros del equipo
- ✅ Comentarios de sección para testimonios
- ✅ Comentarios de sección para publicaciones del blog

---

### 7. **Documentación del Proyecto**

#### `README.md`

- ✅ Actualizado con mención de código comentado
- ✅ Agregada sección sobre comentarios en el código
- ✅ Incluido ejemplo de comentarios JSDoc
- ✅ Ampliada estructura del proyecto con descripciones
- ✅ Agregada sección sobre convenciones de código
- ✅ Actualizado nombre del directorio (estudiojuridicoweb)

#### `AGENTS.md` (NUEVO)

- ✅ Creado archivo de historial de modificaciones
- ✅ Documentación completa de todos los cambios
- ✅ Organizado por categorías de archivos

---

## Resumen de Mejoras

### Tipos de Pruebas Implementadas:

1. **Críticas**: Cobertura de la Landing Page principal y flujos de usuario base.
2. **Medias**: Formularios (contacto), helpers interactivos y utilidades (`cn`, `formatDate`).
3. **Básicas**: Validaciones estáticas obligatorias y layouts complementarios (Footer).

### Tipos de Comentarios Agregados:

1. **Encabezados JSDoc**: Todos los archivos principales tienen un encabezado que explica su propósito
2. **Comentarios de Función**: Funciones documentadas con JSDoc incluyendo parámetros y retornos
3. **Comentarios de Sección**: Bloques HTML/JSX identificados con su propósito
4. **Comentarios de Estado**: Variables de estado explicadas
5. **Comentarios de Configuración**: Opciones de configuración justificadas

### Beneficios:

- ✅ **Mantenibilidad**: Código más fácil de entender para desarrolladores futuros
- ✅ **Onboarding**: Nuevos desarrolladores pueden comprender el proyecto rápidamente
- ✅ **Documentación**: Comentarios sirven como documentación inline
- ✅ **Fiabilidad**: La suite de pruebas protege contra regresiones visuales y funcionales
- ✅ **Estándares**: Código profesional con mejores prácticas guiadas por pruebas (`Testing Library`)

### Archivos Totales Modificados: 23

- 6 archivos de configuración
- 2 archivos de layout principal
- 2 archivos de componentes de layout
- 4 archivos de componentes de sección
- 7 archivos de páginas
- 2 archivos de utilidades/datos
- 2 archivos de documentación (README.md y AGENTS.md)

---

## Próximos Pasos Sugeridos

1. Mantener el estándar de comentarios al agregar nuevos archivos
2. Actualizar comentarios cuando se modifique la funcionalidad
3. Considerar agregar JSDoc types para mejor autocompletado en IDEs
4. Documentar cualquier API o integración futura

---

**Última actualización:** 12 de Mayo de 2026 (noche)
**Versión:** 0.3.0
**Desarrollador:** Equipo de Desarrollo Web
