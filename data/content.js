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
  {
    slug: 'derecho-fiscal',
    title: 'Derecho Fiscal',
    description: 'Planificación fiscal, controversias tributarias y asesoría en cumplimiento.',
    icon: 'calculator',
    fullDescription: 'Ayudamos a empresas y personas físicas a cumplir con sus obligaciones fiscales de manera eficiente y a resolver controversias con las autoridades tributarias.',
    services: [
      'Planificación y optimización fiscal',
      'Defensa en auditorías',
      'Litigio fiscal',
      'Precios de transferencia',
      'Impuestos internacionales',
      'Compliance fiscal',
    ],
  },
  {
    slug: 'propiedad-intelectual',
    title: 'Propiedad Intelectual',
    description: 'Protección de marcas, patentes, derechos de autor y secretos industriales.',
    icon: 'lightbulb',
    fullDescription: 'Protegemos sus activos intangibles más valiosos. Nuestro equipo especializado garantiza la defensa efectiva de su propiedad intelectual.',
    services: [
      'Registro de marcas y patentes',
      'Derechos de autor',
      'Licencias y transferencia de tecnología',
      'Litigio en PI',
      'Competencia desleal',
      'Nombres de dominio',
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
  },
  {
    slug: 'proteccion-datos-personales',
    title: 'Protección de Datos Personales en el Ámbito Laboral',
    excerpt: 'Guía práctica para empresas sobre el manejo de información de empleados.',
    date: '2026-02-05',
    author: 'Lic. Ana García',
    category: 'Derecho Laboral',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop',
  },
  {
    slug: 'reforma-penal-2026',
    title: 'Reforma al Código Penal: Lo que Debes Saber',
    excerpt: 'Las modificaciones más relevantes al sistema penal acusatorio.',
    date: '2026-01-28',
    author: 'Lic. Carlos Rodríguez',
    category: 'Derecho Penal',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=600&fit=crop',
  },
]
