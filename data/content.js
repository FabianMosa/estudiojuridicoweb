/**
 * Archivo de Contenido Centralizado
 * 
 * Contiene todos los datos estáticos del sitio web del estudio jurídico.
 * Incluye áreas de práctica, miembros del equipo, testimonios y publicaciones del blog.
 * Centralizar el contenido aquí facilita el mantenimiento y actualización.
 */

/**
 * ÁREAS DE PRÁCTICA LEGAL
 * Lista de todas las especialidades legales que ofrece el estudio
 */
export const practiceAreas = [
  {
    slug: 'derecho-corporativo',
    title: 'Derecho Corporativo',
    description: 'Asesoría integral en constitución de sociedades, fusiones, adquisiciones y gobierno corporativo.',
    icon: 'briefcase',
    fullDescription: 'Brindamos asesoría legal especializada en todos los aspectos del derecho corporativo. Nuestro equipo tiene amplia experiencia en transacciones complejas, restructuraciones empresariales y cumplimiento normativo.',
    services: [
      'Constitución y reorganización de sociedades',
      'Fusiones y adquisiciones (M&A)',
      'Gobierno corporativo y cumplimiento',
      'Contratos comerciales',
      'Due diligence legal',
      'Joint ventures y alianzas estratégicas',
    ],
  },
  {
    slug: 'derecho-civil',
    title: 'Derecho Civil',
    description: 'Representación en litigios civiles, contratos, bienes raíces y derecho de familia.',
    icon: 'scale',
    fullDescription: 'Ofrecemos representación legal experta en todas las áreas del derecho civil. Nuestro enfoque personalizado garantiza la protección de sus derechos e intereses.',
    services: [
      'Derecho de familia y sucesiones',
      'Contratos civiles y obligaciones',
      'Derecho inmobiliario',
      'Responsabilidad civil',
      'Litigio civil',
      'Arbitraje y mediación',
    ],
  },
  {
    slug: 'derecho-penal',
    title: 'Derecho Penal',
    description: 'Defensa penal estratégica y representación en todas las etapas del proceso.',
    icon: 'shield',
    fullDescription: 'Contamos con un equipo de litigantes experimentados en derecho penal. Defendemos vigorosamente los derechos de nuestros clientes en todas las instancias judiciales.',
    services: [
      'Defensa penal en todas las instancias',
      'Delitos económicos y financieros',
      'Delitos contra la propiedad',
      'Amparo penal',
      'Asesoría en investigaciones',
      'Negociación de acuerdos',
    ],
  },
  {
    slug: 'derecho-laboral',
    title: 'Derecho Laboral',
    description: 'Asesoría en relaciones laborales, despidos, negociaciones colectivas y litigios.',
    icon: 'users',
    fullDescription: 'Proporcionamos asesoría estratégica tanto a empleadores como a trabajadores en todos los aspectos del derecho laboral, buscando soluciones prácticas y efectivas.',
    services: [
      'Contratos de trabajo',
      'Terminación de relaciones laborales',
      'Litigio laboral',
      'Seguridad social',
      'Acoso laboral y discriminación',
      'Negociaciones colectivas',
    ],
  },

]

/**
 * MIEMBROS DEL EQUIPO LEGAL
 * Información detallada de cada abogado del estudio
 */
export const teamMembers = [
  {
    slug: 'juan-martinez',
    name: 'Dr. Juan Martínez',
    position: 'Socio Fundador - Derecho Corporativo',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    bio: 'Más de 25 años de experiencia en derecho corporativo. Especialista en fusiones y adquisiciones.',
    education: [
      'Licenciatura en Derecho - UNAM',
      'Maestría en Derecho Corporativo - Harvard Law School',
      'Doctorado en Derecho Mercantil - Universidad Complutense de Madrid',
    ],
    publications: [
      'Fusiones y Adquisiciones| Bernardo Morales (2020)',
      'Gobierno Corporativo| Juan Pérez (2018)',
    ],
    email: 'jmartinez@estudiojuridico.com',
  },
  {
    slug: 'maria-lopez',
    name: 'Lic. María López',
    position: 'Socia - Derecho Civil',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
    bio: 'Especialista en litigios civiles y derecho de familia con enfoque en mediación.',
    education: [
      'Licenciatura en Derecho - ITAM',
      'Especialidad en Derecho de Familia - Universidad Panamericana',
      'Certificación en Mediación - Harvard Negotiation Institute',
    ],
    publications: [
      'Mediación Familiar: Una Alternativa Efectiva (2021)',
    ],
    email: 'mlopez@estudiojuridico.com',
  },
  {
    slug: 'carlos-rodriguez',
    name: 'Lic. Carlos Rodríguez',
    position: 'Socio - Derecho Penal',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
    bio: 'Ex fiscal federal con amplia experiencia en litigios penales complejos.',
    education: [
      'Licenciatura en Derecho - Universidad Iberoamericana',
      'Maestría en Ciencias Penales - UNAM',
    ],
    publications: [
      'El Nuevo Sistema Penal Acusatorio (2019)',
      'Estrategias de Defensa Penal (2017)',
    ],
    email: 'crodriguez@estudiojuridico.com',
  },
  {
    slug: 'ana-garcia',
    name: 'Lic. Ana García',
    position: 'Asociada Senior - Derecho Laboral',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
    bio: 'Especialista en relaciones laborales individuales y colectivas.',
    education: [
      'Licenciatura en Derecho - Universidad Anáhuac',
      'Maestría en Derecho Laboral - Universidad de Barcelona',
    ],
    publications: [],
    email: 'agarcia@estudiojuridico.com',
  },
]

/**
 * TESTIMONIOS DE CLIENTES
 * Opiniones y valoraciones de clientes satisfechos
 */
export const testimonials = [
  {
    name: 'Roberto Sánchez',
    company: 'CEO, TechCorp Chile',
    content: 'El equipo del Estudio Jurídico nos guió exitosamente en una adquisición compleja. Su profesionalismo y conocimiento fueron fundamentales.',
    rating: 5,
  }
]

/**
 * INFORMACIÓN DE UBICACIÓN DEL ESTUDIO JURÍDICO
 *
 * Fuente única de verdad para la ubicación física, teléfono y email del
 * estudio. La consumen el Footer, la página de Contacto, el componente
 * `UbicacionMapa` y el CTA. Cualquier cambio (dirección, número, coordenadas)
 * se hace SOLO aquí.
 *
 * ⚠️ COHERENCIA DIRECCIÓN ↔ COORDENADAS:
 * `direccion_calle` y `coordenadas` deben actualizarse JUNTAS. Si cambias
 * la dirección, recalcula las coordenadas en https://www.openstreetmap.org/
 * o https://maps.google.com/ y pégalas aquí; de lo contrario el pin del
 * mapa apuntará a un lugar distinto al texto mostrado al usuario.
 *
 * TODO (datos del estudio real): reemplazar `direccion_calle`,
 * `coordenadas.lat`, `coordenadas.lng`, `telefono` y `telefono_url` por
 * los valores definitivos. Los actuales son aproximaciones sobre
 * Av. Brasil, Antofagasta, válidas como demo.
 *
 * @property {string} nombre_lugar - Nombre comercial mostrado en el marcador
 * @property {string} direccion_calle - Calle y número del estudio
 * @property {string} direccion_ciudad - Ciudad
 * @property {string} direccion_region - Región o estado
 * @property {string} direccion_pais - País
 * @property {string} direccion_completa - Dirección formateada en una sola línea
 * @property {string} referencia - Punto de referencia visual cercano al estudio
 * @property {{lat:number,lng:number}} coordenadas - Latitud/longitud que debe
 *   coincidir con `direccion_calle` + `direccion_ciudad`.
 * @property {string} telefono - Teléfono visible (con espacios) — formato display
 * @property {string} telefono_url - Mismo teléfono sin espacios para `tel:`
 * @property {string} email - Correo electrónico de contacto
 * @property {Array<{dia: string, horario: string}>} horarios - Días y horarios de atención
 */
export const info_ubicacion = {
  nombre_lugar: 'Estudio Jurídico',
  direccion_calle: 'Av. Brasil 1234, Oficina 802',
  direccion_ciudad: 'Antofagasta',
  direccion_region: 'Región de Antofagasta',
  direccion_pais: 'Chile',
  direccion_completa:
    'Av. Brasil 1234, Oficina 802, Antofagasta, Región de Antofagasta, Chile',
  referencia: 'Edificio Centro Empresarial, a una cuadra de Plaza Colón',
  // Aproximación sobre Av. Brasil ~1234, Antofagasta (centro comercial,
  // cerca de Plaza Colón). Refinar al pin exacto del edificio cuando esté
  // confirmado. Verificado contra OpenStreetMap (Av. Brasil corre paralela
  // al borde costero entre lat ~-23.640 y ~-23.660).
  coordenadas: {
    lat: -23.6512,
    lng: -70.3989,
  },
  telefono: '+56 9 5455 5444',
  telefono_url: '+56954555444',
  email: 'contacto@estudiojuridico.com',
  horarios: [
    { dia: 'Lunes a Viernes', horario: '9:00 - 19:00' },
    { dia: 'Sábado', horario: '10:00 - 14:00' },
    { dia: 'Domingo', horario: 'Cerrado' },
  ],
}

/**
 * PUBLICACIONES DEL BLOG
 * Artículos legales y análisis de los expertos del estudio
 */
export const blogPosts = [
  {
    slug: 'nueva-ley-competencia-2026',
    title: 'Nueva Ley de Competencia Económica 2026',
    excerpt: 'Análisis de las reformas más importantes y su impacto en las empresas mexicanas.',
    date: '2026-02-10',
    author: 'Dr. Juan Martínez',
    category: 'Derecho Corporativo',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop',
    content: 'La nueva Ley de Competencia Económica introduce cambios significativos en el panorama regulatorio mexicano. Entre las reformas más destacadas se encuentran el fortalecimiento de las facultades de la Comisión Federal de Competencia Económica (Cofece), la implementación de nuevos procedimientos sancionadores y la modernización de los criterios para evaluar concentraciones.\n\nUno de los aspectos más relevantes es la incorporación de un régimen de clemencia mejorado, que incentiva a los participantes en prácticas monopólicas a denunciar sus acuerdos a cambio de reducciones sustanciales en las sanciones.\n\nLas empresas deben prepararse para un entorno de mayor escrutinio regulatorio. Recomendamos realizar auditorías internas de cumplimiento en materia de competencia y revisar los contratos de distribución y suministro para asegurar conformidad con la nueva normativa.',
  },
  {
    slug: 'proteccion-datos-personales',
    title: 'Protección de Datos Personales en el Ámbito Laboral',
    excerpt: 'Guía práctica para empresas sobre el manejo de información de empleados.',
    date: '2026-02-05',
    author: 'Lic. Ana García',
    category: 'Derecho Laboral',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop',
    content: 'La protección de datos personales en el ámbito laboral representa uno de los desafíos más importantes para las empresas modernas. Con la creciente digitalización de los procesos de recursos humanos, es fundamental establecer políticas claras para el tratamiento de la información de los empleados.\n\nPrincipios clave que toda empresa debe implementar:\n\n1. Consentimiento informado: Los empleados deben conocer y autorizar el uso de sus datos personales.\n2. Proporcionalidad: Solo recabar la información estrictamente necesaria para la relación laboral.\n3. Seguridad: Implementar medidas técnicas y organizativas para proteger la información.\n\nLa Ley Federal de Protección de Datos Personales en Posesión de los Particulares establece obligaciones específicas para los empleadores, incluyendo la elaboración de un aviso de privacidad y la designación de un responsable de datos.',
  },
  {
    slug: 'reforma-penal-2026',
    title: 'Reforma al Código Penal: Lo que Debes Saber',
    excerpt: 'Las modificaciones más relevantes al sistema penal acusatorio.',
    date: '2026-01-28',
    author: 'Lic. Carlos Rodríguez',
    category: 'Derecho Penal',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=600&fit=crop',
    content: 'La reciente reforma al Código Penal Federal introduce modificaciones sustanciales al sistema de justicia penal en México. Los cambios buscan agilizar los procesos judiciales, fortalecer los derechos de las víctimas y modernizar los tipos penales existentes.\n\nEntre las modificaciones más destacadas se encuentran:\n\n• La incorporación de nuevos tipos penales relacionados con delitos informáticos y cibernéticos.\n• El endurecimiento de las penas para delitos cometidos contra menores de edad.\n• La simplificación de los procedimientos para la obtención de pruebas digitales.\n• La creación de mecanismos alternativos de solución de controversias más eficientes.\n\nEs fundamental que los profesionales del derecho se mantengan actualizados sobre estas modificaciones para brindar una defensa técnica adecuada y aprovechar las nuevas herramientas procesales que la reforma ofrece.',
  },
]
