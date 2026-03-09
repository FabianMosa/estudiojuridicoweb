# Estudio Jurídico - Sitio Web Profesional

Sitio web moderno y profesional para un estudio jurídico, desarrollado con Next.js 15 y Tailwind CSS. **Código completamente comentado** para facilitar el entendimiento y mantenimiento.

## 🚀 Características

- ✅ **Next.js 15** con App Router
- ✅ **Tailwind CSS** con sistema de diseño personalizado
- ✅ **Totalmente Responsivo** - Optimizado para móvil, tablet y desktop
- ✅ **SEO Optimizado** - Metadata por página y URLs amigables
- ✅ **Generación Estática** - Páginas dinámicas con generateStaticParams
- ✅ **Tipografía Premium** - Playfair Display + Inter de Google Fonts
- ✅ **Diseño Profesional** - Paleta de colores navy y gold
- ✅ **Accesibilidad** - Cumple con estándares WCAG 2.1 AA
- ✅ **Código Comentado** - Todos los archivos incluyen comentarios contextuales

## 📋 Páginas Incluidas

- **Inicio** - Hero con estadísticas, áreas de práctica y testimonios
- **Nosotros** - Historia, misión, visión y valores
- **Equipo** - Grid de abogados con perfiles individuales detallados
- **Áreas de Práctica** - 6 especialidades con páginas dedicadas:
  - Derecho Corporativo
  - Derecho Civil
  - Derecho Penal
  - Derecho Laboral
  - Derecho Fiscal
  - Propiedad Intelectual
- **Blog** - Listado de artículos legales
- **Contacto** - Formulario completo con validación y mapa

## 🛠️ Tecnologías

- **Framework:** Next.js 15.1.6
- **UI:** React 19
- **Estilos:** Tailwind CSS 3.4.17
- **Utilidades:** clsx, tailwind-merge
- **Fuentes:** Google Fonts (Playfair Display, Inter)

## 📦 Instalación

```bash
# Clonar el repositorio
git clone <url-del-repositorio>

# Entrar al directorio
cd estudiojuridicoweb

# Instalar dependencias
npm install
```

## 🚀 Desarrollo

```bash
# Iniciar servidor de desarrollo
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000) en el navegador.

## 🏗️ Compilación

```bash
# Crear build de producción
npm run build

# Iniciar servidor de producción
npm start

# Ejecutar linter
npm run lint
```

## 📁 Estructura del Proyecto

```
estudiojuridicoweb/
├── app/                      # Rutas de Next.js (App Router)
│   ├── layout.js            # Layout principal con navegación y footer
│   ├── page.js              # Página de inicio con secciones principales
│   ├── globals.css          # Estilos globales y clases de utilidad
│   ├── areas-practica/      # Listado y detalle de áreas legales
│   │   ├── page.js          # Página principal de áreas
│   │   └── [slug]/page.js   # Página dinámica de cada área
│   ├── equipo/              # Equipo de abogados
│   │   ├── page.js          # Grid de miembros del equipo
│   │   └── [slug]/page.js   # Perfil individual de cada abogado
│   ├── nosotros/            # Información corporativa
│   │   └── page.js          # Historia, misión, visión y valores
│   ├── blog/                # Blog de artículos legales
│   │   └── page.js          # Listado de publicaciones
│   └── contacto/            # Formulario y mapa
│       └── page.js          # Página de contacto con formulario
├── components/              # Componentes React reutilizables
│   ├── layout/             # Componentes de estructura
│   │   ├── Navbar.js       # Barra de navegación responsive
│   │   └── Footer.js       # Pie de página con enlaces e información
│   └── sections/           # Secciones de página
│       ├── Hero.js         # Banner principal con estadísticas
│       ├── PracticeAreas.js # Tarjetas de áreas de práctica
│       ├── Testimonials.js # Testimonios de clientes
│       └── CTA.js          # Llamado a la acción
├── data/                    # Contenido estático centralizado
│   └── content.js          # Datos de áreas, equipo, testimonios y blog
├── lib/                     # Funciones utilitarias
│   └── utils.js            # Helpers (formateo de fechas, clases CSS)
├── public/                  # Archivos estáticos públicos
├── tailwind.config.js      # Configuración personalizada de Tailwind
├── next.config.js          # Configuración de Next.js
├── jsconfig.json           # Alias de importación (@/)
├── .eslintrc.json          # Reglas de linting
└── package.json            # Dependencias y scripts
```

## 📝 Comentarios en el Código

Todos los archivos del proyecto incluyen comentarios explicativos que describen:

- **Propósito del archivo/componente**: Qué hace y por qué existe
- **Parámetros y props**: Qué recibe cada función/componente
- **Lógica compleja**: Explicación de algoritmos o funcionalidad no obvia
- **Secciones de código**: Bloques HTML/JSX con su propósito
- **Configuraciones**: Por qué se configura algo de cierta manera

### Ejemplo de comentarios:

```javascript
/**
 * Componente de Barra de Navegación
 * 
 * Barra de navegación responsive con menú desplegable para dispositivos móviles.
 * Incluye logo, enlaces de navegación y botón de llamada a la acción.
 * Se mantiene fija en la parte superior al hacer scroll (sticky).
 */
```

## 🎨 Sistema de Diseño

### Colores

- **Navy:** Tonos de azul marino (50-950) para confianza y profesionalismo
- **Gold:** Tonos dorados (50-900) para prestigio y calidad

### Tipografía

- **Playfair Display** (Serif) - Títulos y encabezados
- **Inter** (Sans-serif) - Cuerpo y texto

### Componentes Reutilizables

- `btn-primary` - Botón principal con fondo navy
- `btn-secondary` - Botón secundario con borde
- `container-custom` - Contenedor con padding responsivo
- `section-padding` - Espaciado vertical consistente

## 📝 Personalización

### Actualizar Contenido

Edita el archivo `data/content.js` para modificar:
- Áreas de práctica
- Miembros del equipo
- Testimonios
- Artículos del blog

### Cambiar Colores

Modifica `tailwind.config.js` para ajustar la paleta de colores.

### Agregar Nuevas Páginas

Crea archivos en el directorio `app/` siguiendo la estructura de App Router de Next.js.

## 🌐 Despliegue

### Vercel (Recomendado)

1. Conecta tu repositorio con Vercel
2. Configura el proyecto como Next.js
3. Deploy automático

### Otras Plataformas

- Netlify
- AWS Amplify
- Digital Ocean App Platform

## 📊 SEO

El sitio incluye:
- Metadata optimizada por página
- URLs amigables con slugs descriptivos
- Estructura semántica HTML5
- Generación estática para mejor indexación

## 🔧 Próximas Mejoras

- [ ] Integración con CMS headless (Sanity/Contentful)
- [ ] Sistema de envío de formularios (SendGrid/Resend)
- [ ] Blog completo con artículos individuales
- [ ] Sistema de citas online
- [ ] Multiidioma (ES/EN)
- [ ] Analytics (GA4)

## 📄 Licencia

Este proyecto es de código privado para uso del estudio jurídico.

## 👨‍💻 Desarrollo

Desarrollado siguiendo las mejores prácticas de desarrollo web moderno con Next.js 15 y React 19.

### Convenciones de Código

- Todos los componentes incluyen comentarios JSDoc
- Los archivos de configuración están documentados
- El código sigue las reglas de ESLint de Next.js
- Se utilizan nombres descriptivos en español

---

**Nota:** Este es un proyecto profesional completamente funcional. El código está documentado para facilitar su comprensión y mantenimiento futuro. Personaliza el contenido, imágenes y datos de contacto según las necesidades específicas del estudio jurídico.
