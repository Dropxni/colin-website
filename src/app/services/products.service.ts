import { Injectable } from '@angular/core';

export interface Instructor {
  id: string;
  name: string;
  title: string;
  degree: string;
  specialization: string[];
  experience: string;
  institution?: string;
}

export interface Program {
  id: string;
  title: string;
  type: 'Taller' | 'Curso' | 'Conferencia';
  description: string;
  image: string;
  objective: string;
  duration: string;
  hours: number;
  modality: 'Presencial' | 'En línea' | 'Bimodal';
  price: number;
  currency: string;
  capacity: number;
  location: string;
  address?: string;
  startDate?: Date;
  endDate?: Date;
  schedule?: string;
  requirements?: string[];
  content: string[];
  instructors: Instructor[];
  benefits: string[];
  certificationInfo: string;
  contactInfo: {
    phone: string[];
    email: string[];
  };
  // Nuevos campos para inscripción
  registrationLink?: string;
  registrationStatus: 'active' | 'coming-soon' | 'contact-required';
  registrationDeadline?: Date;
  isActive: boolean;
  featured: boolean;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
}

@Injectable({
  providedIn: 'root'
})
export class ProgramsService {

  private programs: Program[] = [
    {
      id: '1',
      title: 'Liderazgo Transformacional en la Escuela: Inspirar, motivar y guiar el cambio educativo',
      type: 'Taller',
      description: 'Fortalece las capacidades de liderazgo para actuar como agentes de cambio en instituciones educativas.',
      objective: 'Fortalecer las capacidades de liderazgo de los participantes para que actúen como agentes de cambio en sus instituciones educativas, mediante la aplicación de estrategias que les permitan inspirar, fomentar y liderar una mejora continua de la educación de calidad.',
      duration: '4 días',
      hours: 20,
      modality: 'Presencial',
      price: 2000,
      image: 'https://emeritus.org/wp-content/uploads/2020/12/Technology.jpg.webp',
      currency: 'MXN',
      capacity: 50,
      startDate: new Date('2025-07-01'),
      endDate: new Date('2025-07-04'),
      schedule: '8:00 am - 1:00 pm',
      location: 'Hacienda las Flores, Santa Rosa',
      registrationLink: 'https://docs.google.com/forms/d/e/1FAIpQLSfpcz0Wubzy_Op2yPV3pEYqLbhuJNVaj3wBi3ZspdlNkNyiPw/viewform?usp=sharing&ouid=113035340378492545503',
      registrationStatus: 'active',
      registrationDeadline: new Date('2025-06-25'),
      content: [
        'Introducción al liderazgo transformacional',
        'Estilos de liderazgo',
        'Cambio organizacional',
        'Desarrollo del talento',
        'Comunicación efectiva y motivación del equipo docente',
        'Barreras comunes en la comunicación docente',
        'Tipos de comunicación y habilidades de comunicación asertiva',
        'Estrategias para inspirar y motivar a comunidades escolares',
        'Diseño de estrategias para el cambio educativo',
        'Modelos y enfoques para el cambio educativo'
      ],
      instructors: [
        {
          id: '1',
          name: 'Dra. Zenaida Pérez Gutiérrez',
          title: 'Doctora',
          degree: 'Doctorado',
          specialization: ['Derechos de las mujeres', 'Liderazgo'],
          experience: 'Defensora de los derechos de las mujeres'
        },
        {
          id: '2',
          name: 'Dra. Cristina Peralta Franco',
          title: 'Doctora en Educación',
          degree: 'Doctorado en Educación',
          specialization: ['Educación', 'Liderazgo educativo'],
          experience: 'Especialista en educación'
        },
        {
          id: '3',
          name: 'Narcedalia Ramírez Pineda',
          title: 'Política oaxaqueña',
          degree: 'Licenciatura',
          specialization: ['Política', 'Liderazgo público'],
          experience: 'Política oaxaqueña y exdiputada'
        }
      ],
      benefits: ['Constancia con valor curricular', 'Material didáctico', 'Certificación oficial'],
      certificationInfo: 'Se otorgará constancia con valor curricular',
      contactInfo: {
        phone: ['951 356 1800'],
        email: ['liderazgo.transformacional@gmail.com']
      },
      isActive: true,
      featured: true,
      tags: ['liderazgo', 'educación', 'transformacional', 'presencial'],
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: '2',
      title: 'Diseño de Estrategias Educativas Inclusivas y Digitales',
      image: 'https://www.educaciontrespuntocero.com/wp-content/uploads/2020/09/educacion-inclusiva-1024x576.jpg',
      type: 'Curso',
      description: 'Programa bimodal enfocado en inclusión y tecnología educativa dirigido a profesionales de la educación.',
      objective: 'Formar profesionales capaces de diseñar estrategias educativas inclusivas utilizando herramientas digitales.',
      duration: '40 horas',
      hours: 40,
      modality: 'Bimodal',
      price: 2860,
      currency: 'MXN',
      capacity: 25,
      location: 'Centro Cultural y de Convenciones de Oaxaca',
      address: 'Av. México 175, Parque Las Canteras, Santa Lucía del Camino, Oaxaca',
      registrationLink: 'https://forms.gle/FMWJsRgyQfZV4qto6',
      registrationStatus: 'active',
      requirements: [
        'Formación previa en áreas educativas o psicopedagógicas',
        'Conocimientos básicos sobre inclusión y TIC',
        'Acceso a dispositivos tecnológicos e internet',
        'Disponibilidad para sesiones presenciales y virtuales'
      ],
      content: [
        'Fundamentos de la educación inclusiva y normativa vigente',
        'Diseño Universal para el Aprendizaje (DUA) y estrategias inclusivas',
        'Herramientas digitales accesibles y entornos virtuales inclusivos',
        'Elaboración de estrategias didácticas inclusivas y digitales'
      ],
      instructors: [
        {
          id: '4',
          name: 'Dra. Paola Edith Ortiz Ramírez',
          title: 'Doctora en Educación',
          degree: 'Doctorado en Educación con línea en Inclusión Educativa',
          specialization: ['Inclusión Educativa', 'TIC', 'DUA', 'Formación docente'],
          experience: 'Formación docente, inclusión, TIC en la educación, DUA',
          institution: 'BUAP y Red de Apoyo a la Educación Inclusiva'
        },
        {
          id: '5',
          name: 'Mtra. María Teresa Moreno García',
          title: 'Maestra en Educación Especial e Inclusión Educativa',
          degree: 'Maestría en Educación Especial e Inclusión Educativa',
          specialization: ['Educación Especial', 'Inclusión Educativa', 'UDL', 'Diseño accesible'],
          experience: 'Capacitadora SEN (Secretaría de Educación Nacional), especialista en UDL y diseño accesible',
          institution: 'Secretaría de Educación Nacional'
        },
        {
          id: '6',
          name: 'Mtro. Juan Pablo Juárez Olmos',
          title: 'Maestro en Tecnología Educativa',
          degree: 'Maestría en Tecnología Educativa',
          specialization: ['Tecnología Educativa', 'Formación bimodal', 'Inclusión'],
          experience: 'Consultor de instituciones educativas en formación bimodal e inclusión',
          institution: 'Consultor independiente'
        }
      ],
      benefits: ['Avalado por SEP e ICAT', 'Validez oficial', 'Material digital', '20 horas presenciales + 20 horas virtuales'],
      certificationInfo: 'Avalado por SEP (Secretaría de Educación Pública) e ICAT (Institutos de Capacitación para el Trabajo)',
      contactInfo: {
        phone: ['9518562361', '9548954230'],
        email: ['Anahi_Guzman@gmail.com', 'Wendy_Gutierrez@gmail.com']
      },
      isActive: true,
      featured: true,
      tags: ['inclusión', 'digital', 'bimodal', 'sep', 'icat', 'dua'],
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: '3',
      title: 'Inteligencia Emocional Aplicada a la Educación: Herramientas para Docentes del Siglo XXI',
      image: 'https://www.educaciontrespuntocero.com/wp-content/uploads/2020/09/inteligencia-emocional-1024x576.jpg',
      type: 'Curso',
      description: 'Curso en línea para desarrollar competencias emocionales en docentes ante los desafíos del siglo XXI.',
      objective: 'Fortalecer las competencias emocionales de los docentes mediante el conocimiento y la aplicación de estrategias de inteligencia emocional que favorezcan el bienestar y el desarrollo integral en el entorno educativo.',
      duration: '40 horas',
      hours: 40,
      modality: 'En línea',
      price: 1200,
      currency: 'MXN',
      capacity: 40,
      location: 'Plataforma virtual',
      registrationLink: 'https://docs.google.com/forms/d/e/1FAIpQLScZPX33wDeEFV3CHoV4WW2cwD7fW40byQnNU4hdezkPZOizJA/viewform?usp=header',
      registrationStatus: 'active',
      content: [
        'Fundamentos de la Inteligencia Emocional',
        'Definición y origen del concepto',
        'Modelos teóricos (Goleman, Mayer y Salovey)',
        'Importancia en el ámbito educativo',
        'Estrategias de Inteligencia Emocional para el Aula',
        'Autorregulación emocional',
        'Empatía y comunicación asertiva',
        'Resolución de conflictos escolares',
        'Diseño de propuestas pedagógicas emocionalmente inteligentes',
        'Integración curricular',
        'Diseño de actividades y materiales',
        'Evaluación de competencias emocionales'
      ],
      instructors: [
        {
          id: '7',
          name: 'Dra. Laura González Ramírez',
          title: 'Especialista en Psicología Educativa',
          degree: 'Doctorado en Psicología Educativa',
          specialization: ['Psicología Educativa', 'Educación Socioemocional'],
          experience: 'Especialista en Psicología Educativa y Educación Socioemocional',
          institution: 'UNAM'
        },
        {
          id: '8',
          name: 'Mtro. Carlos Pérez Díaz',
          title: 'Formador docente y consultor',
          degree: 'Maestría en Desarrollo Emocional',
          specialization: ['Formación docente', 'Desarrollo emocional', 'Consultoría'],
          experience: 'Formador docente y consultor en desarrollo emocional',
          institution: 'UNSIS'
        },
        {
          id: '9',
          name: 'Dra. Mariana Torres Juárez',
          title: 'Investigadora en competencias docentes',
          degree: 'Doctorado en Competencias Docentes',
          specialization: ['Competencias docentes', 'Bienestar emocional', 'Investigación'],
          experience: 'Investigadora en competencias docentes y bienestar emocional',
          institution: 'UAM'
        }
      ],
      benefits: ['Materiales digitales', 'Evaluaciones', 'Constancia digital', 'Asesoría docente', 'Pago en parcialidades'],
      certificationInfo: 'Constancia digital con valor curricular',
      contactInfo: {
        phone: ['951 567 5643'],
        email: ['Cursosenlineaunsis.@gmail.com']
      },
      isActive: true,
      featured: false,
      tags: ['inteligencia emocional', 'online', 'docentes', 'siglo xxi'],
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: '4',
      title: 'Innovar para Educar: Implementación Creativa de las TIC\'s en la Educación',
      image: 'https://www.educaciontrespuntocero.com/wp-content/uploads/2020/09/innovacion-educativa-1024x576.jpg',
      type: 'Conferencia',
      description: 'Conferencia sobre el papel transformador de las TIC en la educación con estrategias prácticas.',
      objective: 'Analizar el papel transformador de las TIC en la educación y proponer estrategias prácticas para su implementación pedagógica efectiva.',
      duration: '2 horas',
      hours: 2,
      modality: 'Presencial',
      price: 750,
      currency: 'MXN',
      capacity: 380,
      location: 'Hotel Fortín Plaza Oaxaca',
      registrationLink: 'https://docs.google.com/forms/d/e/1FAIpQLSe2ZjuePutAC8k5Y4PACgOD-u9rMywj55020s7KeS3CJw9D4w/viewform?usp=sharing&ouid=114093236692946863066',
      registrationStatus: 'active',
      content: [
        'Introducción y contextualización',
        'Marco conceptual',
        'Enfoques teóricos',
        'Beneficios pedagógicos',
        'Retos y riesgos',
        'Estrategias prácticas'
      ],
      instructors: [
        {
          id: '10',
          name: 'Dra. Carmen Enedina Rodríguez Armenta',
          title: 'Doctora',
          degree: 'Doctorado',
          specialization: ['TIC', 'Educación', 'Innovación pedagógica'],
          experience: 'Especialista en implementación de TIC en educación'
        }
      ],
      benefits: ['Certificado de participación', 'Material de apoyo', 'Networking'],
      certificationInfo: 'Certificado de participación',
      contactInfo: {
        phone: ['555 808 71 08'],
        email: ['conferenciastics@gmail.com']
      },
      isActive: true,
      featured: false,
      tags: ['tic', 'innovación', 'conferencia', 'tecnología'],
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: '5',
      title: 'Autocontrol Emocional',
      image: 'https://www.educaciontrespuntocero.com/wp-content/uploads/2020/09/autocontrol-emocional-1024x576.jpg',
      type: 'Taller',
      description: 'Taller presencial para fortalecer habilidades de autorregulación emocional en docentes de nivel medio superior.',
      objective: 'Fortalecer en los docentes de nivel medio superior las habilidades de autocontrol emocional, mediante estrategias de autorregulación personal y profesional, con el fin de promover su bienestar integral y contribuir a un entorno educativo más efectivo.',
      duration: '20 horas',
      hours: 20,
      modality: 'Presencial',
      price: 3000,
      currency: 'MXN',
      capacity: 30,
      location: 'Hotel Los Olivos',
      address: 'Francisco I Madero 1254, Colonia Santamaría del Marquesado, Exmarquesado, 68030 Oaxaca de Juárez, Oax.',
      schedule: '3 sesiones presenciales de 6 hrs + 2 hrs trabajo en casa',
      registrationLink: 'https://docs.google.com/forms/d/e/1FAIpQLSdXGZAPRGVuYcM7dLAhLYt3drl0wWlV95ag-PBqAeOzinEn6w/viewform?usp=header',
      registrationStatus: 'active',
      content: [
        'Fundamentos de autocontrol emocional',
        'Estrategias para la regulación emocional',
        'Resolución de conflictos y toma de decisiones'
      ],
      instructors: [
        {
          id: '11',
          name: 'Psic. Raquel Meyer González',
          title: 'Psicóloga',
          degree: 'Licenciatura en Psicología',
          specialization: ['Psicología', 'Autocontrol emocional', 'Regulación emocional'],
          experience: 'Especialista en regulación emocional'
        },
        {
          id: '12',
          name: 'Psic. Bryan Kerth Gómez Vásquez',
          title: 'Psicólogo',
          degree: 'Licenciatura en Psicología',
          specialization: ['Psicología', 'Autocontrol emocional'],
          experience: 'Especialista en autocontrol emocional'
        },
        {
          id: '13',
          name: 'Psic. Francisco de Jesús Velásquez Alvarado',
          title: 'Psicólogo',
          degree: 'Licenciatura en Psicología',
          specialization: ['Psicología', 'Toma de decisiones'],
          experience: 'Especialista en toma de decisiones y resolución de conflictos'
        }
      ],
      benefits: ['Certificado de participación', 'Material didáctico', 'Seguimiento personalizado', 'Metodología teórico-práctica'],
      certificationInfo: 'Certificado de participación con valor curricular',
      contactInfo: {
        phone: ['555-1234'],
        email: ['autocontrol@gmail.com']
      },
      isActive: true,
      featured: false,
      tags: ['autocontrol', 'emocional', 'taller', 'presencial', 'medio superior'],
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: '6',
      title: 'Competencias Socioemocionales para Docentes',
      image: 'https://www.educaciontrespuntocero.com/wp-content/uploads/2020/09/competencias-socioemocionales-1024x576.jpg',
      type: 'Curso',
      description: 'Curso teórico-práctico bimodal para fortalecer competencias socioemocionales de docentes.',
      objective: 'Fortalecer las competencias socioemocionales de los docentes a través de un curso teórico-práctico que favorezca su bienestar profesional y personal.',
      duration: '20 horas',
      hours: 20,
      modality: 'Bimodal',
      price: 4000, // $500 inscripción + $2000 inicio + $1500 mitad
      currency: 'MXN',
      capacity: 50,
      location: 'Hotel Misión de Los Ángeles',
      schedule: '11 horas virtuales + 9 horas presenciales',
      registrationLink: 'https://docs.google.com/forms/d/e/1FAIpQLSda43BYZLtPg3Y7GbyerPJbUyhcWY56wNMQrzdGMZ39nVpV3w/viewform?usp=dialog',
      registrationStatus: 'active',
      content: [
        'Introducción a las competencias socioemocionales',
        'Gestión emocional y autocuidado',
        'Comunicación, empatía y resolución de conflictos'
      ],
      instructors: [
        {
          id: '14',
          name: 'Dra. Nilza Castañeda',
          title: 'Doctora en Administración Educativa',
          degree: 'Doctorado en Administración Educativa, Maestría en Educación Especial, Licenciatura en Psicología Educativa',
          specialization: ['Inclusión social', 'Personas con discapacidad', 'Salud a través de la risa', 'Yoga de risas'],
          experience: 'Promotora de inclusión social de personas con discapacidad y de la salud a través de la risa. Fundadora de yoga de risas sonora, Academia de arte y vida independiente, Escuela de Lecto-escritura e instituto de desarrollo personal Hermosillo',
          institution: 'Instituto Pedagógico'
        }
      ],
      benefits: ['Certificado de participación', '11 horas virtuales + 9 horas presenciales', 'Metodología teórico-práctica', 'Pago en parcialidades'],
      certificationInfo: 'Certificado de participación con valor curricular',
      contactInfo: {
        phone: ['555-1234', '+52 55 1234 5678'],
        email: ['formaciondocente@institutopedagogico.org']
      },
      isActive: true,
      featured: false,
      tags: ['competencias socioemocionales', 'bimodal', 'autocuidado', 'comunicación'],
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: '7',
      title: 'TIC y Educación: Uso Efectivo de Herramientas Digitales en el Aprendizaje',
      image: 'https://www.educaciontrespuntocero.com/wp-content/uploads/2020/09/herramientas-digitales-1024x576.jpg',
      type: 'Conferencia',
      description: 'Conferencia virtual sobre estrategias para el uso efectivo de herramientas digitales en entornos educativos.',
      objective: 'Analizar estrategias para el uso efectivo de herramientas digitales en entornos educativos, fomentando la innovación pedagógica mediante las TIC.',
      duration: '2 horas',
      hours: 2,
      modality: 'En línea',
      price: 250,
      currency: 'MXN',
      capacity: 100,
      location: 'KAIROS CAMPUS 1 OAXACA (modalidad virtual)',
      // No tiene formulario específico, requiere contacto
      registrationStatus: 'contact-required',
      requirements: [
        'Acceso a computadora, laptop o dispositivo móvil con conexión estable a internet',
        'Conocimientos básicos en el uso de navegadores web y plataformas digitales',
        'Presentar copia de acta de nacimiento',
        'Comprobante vigente de pertenencia a la comunidad universitaria (como estudiante o docente)'
      ],
      content: [
        'Identificación de herramientas digitales útiles para la práctica docente',
        'Estrategias pedagógicas para integrar las TIC',
        'Promoción del uso crítico y creativo de herramientas tecnológicas',
        'Demostración de herramientas como Kahoot, Padlet y Jamboard',
        'Espacios de reflexión y diálogo sobre el uso de las TIC en la educación'
      ],
      instructors: [
        {
          id: '15',
          name: 'Dra. Mariana López Ramírez',
          title: 'Doctora en Ciencias de la Educación',
          degree: 'Doctorado en Ciencias de la Educación',
          specialization: ['Innovación educativa', 'Uso pedagógico de tecnologías digitales'],
          experience: 'Especialista en innovación educativa y uso pedagógico de tecnologías digitales. Cuenta con más de 10 años de experiencia como formadora de docentes y consultora en proyectos de integración tecnológica en instituciones educativas',
          institution: 'KAIROS CAMPUS 1 OAXACA'
        }
      ],
      benefits: ['Certificado de participación', 'Demostración práctica de herramientas', 'Material digital'],
      certificationInfo: 'Certificado de participación',
      contactInfo: {
        phone: ['555-0000'],
        email: ['info@kairoscampus.edu.mx']
      },
      isActive: true,
      featured: false,
      tags: ['tic', 'herramientas digitales', 'online', 'kahoot', 'padlet', 'jamboard'],
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: '8',
      title: 'Salud Mental',
      image: 'https://www.educaciontrespuntocero.com/wp-content/uploads/2020/09/salud-mental-1024x576.jpg',
      type: 'Conferencia',
      description: 'Conferencia presencial sobre promoción de la conciencia y apoyo a la salud mental en la comunidad educativa.',
      objective: 'Promover la conciencia y el apoyo a la salud mental en la comunidad, destacando la importancia de la prevención, el diagnóstico temprano y el tratamiento efectivo de los trastornos mentales, para mejorar la calidad de vida y el bienestar de las personas.',
      duration: '2 horas',
      hours: 2,
      modality: 'Presencial',
      price: 950,
      currency: 'MXN',
      capacity: 100,
      location: 'Hotel Fortín Plaza',
      // No tiene formulario específico, requiere contacto
      registrationStatus: 'contact-required',
      requirements: [
        'Certificado de estar o haber cursado alguno de los niveles educativos solicitados (nivel superior, medio superior, maestrías o posgrado)'
      ],
      content: [
        'Introducción a la salud mental',
        'Trastornos del estado de ánimo: síntomas, diagnóstico y tratamiento',
        'Factores de riesgo: genética, ambiente, estilo de vida',
        'Prevención y promoción de la salud mental'
      ],
      instructors: [
        {
          id: '16',
          name: 'Dr. Kevin Ronaldo Velásquez Jacinto',
          title: 'Médico Cirujano',
          degree: 'Licenciatura en Médico Cirujano',
          specialization: ['Medicina General', 'Salud Mental', 'Medicina Ocupacional'],
          experience: 'Médico titulado en 2022. Internado en Hospital ISSSTE Tehuantepec Oaxaca, servicio social en Santa Cruz Tepetotutla perteneciente a San Felipe Uzila. Médico de obra en Construcciones y trituraciones S.A. de C.V. / ICA FLUO Salina Cruz, médico de obra en ICA Constructora Cancún. Empleo actual: Médico de la empresa Bachoco en Oaxaca de Juárez',
          institution: 'Universidad Autónoma Benito Juárez de Oaxaca (UABJO)'
        }
      ],
      benefits: ['Constancia de participación', 'Material informativo', 'Enfoque preventivo'],
      certificationInfo: 'Se otorga constancia de participación',
      contactInfo: {
        phone: ['555-0000'],
        email: ['saludmental@colin.edu.mx']
      },
      isActive: true,
      featured: false,
      tags: ['salud mental', 'prevención', 'trastornos', 'bienestar', 'medicina'],
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ];

  constructor() {}

  obtenerProgramas(): Program[] {
    return this.programs;
  }

  obtenerProgramaPorId(id: string): Program | undefined {
    return this.programs.find(p => p.id === id);
  }

  obtenerDestacados(): Program[] {
    return this.programs.filter(p => p.featured);
  }

  obtenerActivos(): Program[] {
    return this.programs.filter(p => p.isActive);
  }

  obtenerPorTipo(tipo: 'Taller' | 'Curso' | 'Conferencia'): Program[] {
    return this.programs.filter(p => p.type === tipo && p.isActive);
  }

  obtenerPorModalidad(modalidad: 'Presencial' | 'En línea' | 'Bimodal'): Program[] {
    return this.programs.filter(p => p.modality === modalidad && p.isActive);
  }

  buscarProgramas(termino: string): Program[] {
    const terminoLower = termino.toLowerCase();
    return this.programs.filter(p => 
      p.isActive && (
        p.title.toLowerCase().includes(terminoLower) ||
        p.description.toLowerCase().includes(terminoLower) ||
        p.tags.some(tag => tag.toLowerCase().includes(terminoLower)) ||
        p.instructors.some(instructor => instructor.name.toLowerCase().includes(terminoLower))
      )
    );
  }

  obtenerPorRangoPrecio(min: number, max: number): Program[] {
    return this.programs.filter(p => p.isActive && p.price >= min && p.price <= max);
  }
}