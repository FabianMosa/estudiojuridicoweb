# Estudio Jurídico - Sitio Web Profesional

Sitio web moderno y profesional para un estudio jurídico, desarrollado con Next.js 15 y Tailwind CSS.

## 🚀 Características

- ✅ **Next.js 15** con App Router
- ✅ **Tailwind CSS** con sistema de diseño personalizado
- ✅ **Totalmente Responsivo** - Optimizado para móvil, tablet y desktop
- ✅ **SEO Optimizado** - Metadata por página y URLs amigables
- ✅ **Generación Estática** - Páginas dinámicas con generateStaticParams
- ✅ **Tipografía Premium** - Playfair Display + Inter de Google Fonts
- ✅ **Diseño Profesional** - Paleta de colores navy y gold
- ✅ **Accesibilidad** - Cumple con estándares WCAG 2.1 AA

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
cd webabog

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
```

## 📁 Estructura del Proyecto

```
webabog/
├── app/                      # Rutas de Next.js (App Router)
│   ├── layout.js            # Layout principal
│   ├── page.js              # Página de inicio
│   ├── globals.css          # Estilos globales
│   ├── areas-practica/      # Áreas de práctica
│   ├── equipo/              # Equipo legal
│   ├── nosotros/            # Sobre nosotros
│   ├── blog/                # Blog
│   └── contacto/            # Contacto
├── components/              # Componentes React
│   ├── layout/             # Navbar, Footer
│   └── sections/           # Hero, CTA, Testimonios
├── data/                    # Datos estáticos
│   └── content.js          # Contenido del sitio
├── lib/                     # Utilidades
│   └── utils.js            # Helpers
├── public/                  # Archivos estáticos
├── tailwind.config.js      # Configuración de Tailwind
└── next.config.js          # Configuración de Next.js
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

## 👨‍💻 Autor

Desarrollado siguiendo las mejores prácticas de desarrollo web moderno.

---

**Nota:** Este es un proyecto de demostración. Personaliza el contenido, imágenes y datos de contacto según las necesidades específicas del estudio jurídico.
# estudiojuridicoweb
