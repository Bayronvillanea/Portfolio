export type Language = 'en' | 'es';

export type NavItem = {
  label: string;
  href: string;
};

export type Service = {
  title: string;
  description: string;
};

export type SkillCategory = {
  title: string;
  skills: string[];
};

export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  location: string;
  points: string[];
};

export type ProjectItem = {
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  year: string;
};

export const portfolioContent = {
  en: {
    nav: [
      { label: 'Home', href: '#hero' },
      { label: 'About', href: '#about' },
      { label: 'Skills', href: '#skills' },
      { label: 'Projects', href: '#projects' },
      { label: 'Contact', href: '#contact' },
    ],
    hero: {
      name: 'Bayron Villanea',
      title: 'Software Developer | Frontend Developer | React & TypeScript',
      description:
        'I build modern, responsive, and business-focused web applications using React, JavaScript, TypeScript, Tailwind CSS, SQL, and Git.',
      summary:
        'I focus on writing clean, maintainable code and developing software solutions that solve real-world problems.',
      location: 'Based in Costa Rica · Open to Remote Opportunities',
      primaryAction: 'View My Projects',
      secondaryAction: 'Contact Me',
      cvAction: 'Download CV',
      availability: 'Open to Remote Opportunities',
    },
    about: {
      eyebrow: 'About me',
      title: 'Software Developer focused on building real-world solutions.',
      paragraphs: [
        'I am a Software Developer with hands-on experience building websites and web applications for real-world projects.',
        'My strongest areas are frontend development, React, JavaScript, TypeScript, responsive web development, and database-driven applications.',
        'I enjoy transforming requirements into functional and maintainable software while continuously improving my knowledge of backend development, software architecture, cloud computing, and mobile development.',
        'I am currently pursuing a Baccalaureate in Software Engineering and strengthening my skills through hands-on projects, technical courses, and continuous learning.',
      ],
      badges: ['Computer Science student', 'React specialist', 'Full-stack developer'],
    },
    services: [
      {
        title: 'Frontend Development',
        description:
          'I build responsive and interactive web interfaces using React, JavaScript, TypeScript, HTML5, CSS3, and Tailwind CSS.',
      },
      {
        title: 'Web Application Development',
        description:
          'I develop modern web applications focused on functionality, maintainability, responsiveness, and real-world business requirements.',
      },
      {
        title: 'Database & API Integration',
        description:
          'I work with SQL and MySQL and integrate applications with APIs and backend services to manage and process application data.',
      },
      {
        title: 'Mobile Development',
        description:
          'I develop cross-platform mobile applications using React Native and JavaScript/TypeScript technologies.',
      },
    ] as Service[],
    skills: {
      title: 'Technical Skills',
      categories: [
        {
          title: 'Frontend',
          skills: ['React', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'jQuery', 'Responsive Web Design'],
        },
        {
          title: 'Backend & Database',
          skills: ['Node.js', 'REST APIs', 'SQL', 'MySQL', 'Database Fundamentals'],
        },
        {
          title: 'Mobile',
          skills: ['React Native'],
        },
        {
          title: 'Software Engineering',
          skills: ['Object-Oriented Programming', 'SOLID Principles', 'Clean Code', 'Software Architecture', 'Problem Solving', 'Agile / Scrum'],
        },
        {
          title: 'Tools',
          skills: ['Git', 'GitHub', 'VS Code'],
        },
        {
          title: 'Additional',
          skills: ['C#', 'Unity', 'AWS'],
        },
      ] as SkillCategory[],
    },
    experience: {
      title: 'Experience',
      items: [
        {
          role: 'Web Developer',
          company: 'American Roofing Solutions',
          period: 'December 2023 – Present',
          location: 'Remote',
          points: [
            'Develop and maintain responsive web experiences using React and Tailwind CSS.',
            'Build reusable and maintainable frontend components.',
            'Improve website structure, responsiveness, and usability across different devices.',
            'Translate business requirements into practical web solutions.',
            'Contribute to digital experiences focused on lead generation and business growth.',
          ],
        },
        {
          role: 'IT / Software Intern',
          company: 'Tienda Vargas',
          period: 'March 2022 – April 2022',
          location: 'On-site',
          points: [
            'Supported the implementation of a Moodle-based training platform.',
            'Assisted with technical configuration and digital learning resources.',
            'Contributed to improving the onboarding experience for users.',
            'Provided technical support and troubleshooting.',
          ],
        },
      ] as ExperienceItem[],
    },
    projects: {
      title: 'Featured Projects',
      items: [
        {
          title: 'Expense Control',
          subtitle: 'Personal Finance Web Application',
          description:
            'A web application created to help users organize and track their expenses while applying programming logic, data structures, and real-world data management concepts.',
          technologies: ['JavaScript', 'Web Development', 'Data Management'],
          liveUrl: 'https://control-gastos-ten.vercel.app/',
          githubUrl: 'https://github.com/Bayronvillanea/control-gastos',
          year: '2024',
        },
        {
          title: 'Studio Salon 501',
          subtitle: 'Business Website',
          description:
            'A modern responsive website developed for a beauty salon business, focused on professional presentation, responsive design, service communication, and customer conversion.',
          technologies: ['React', 'Tailwind CSS', 'Responsive Web Development'],
          liveUrl: 'https://studiounas.vercel.app/',
          githubUrl: '#',
          year: '2024',
        },
        {
          title: 'Portfolio Website',
          subtitle: 'Personal Developer Portfolio',
          description:
            'A professional portfolio designed to showcase my experience, technical skills, projects, and software development journey.',
          technologies: ['React', 'TypeScript', 'Tailwind CSS'],
          liveUrl: '#',
          githubUrl: 'https://github.com/Bayronvillanea',
          year: '2026',
        },
      ] as ProjectItem[],
    },
    learning: {
      title: 'Currently Learning',
      items: [
        'TypeScript',
        'Node.js',
        'Backend Development',
        'Software Architecture',
        'Cloud Computing',
        'AWS',
        'React Native',
        'C#',
        'SQL & Database Design',
        'Testing',
        'Clean Architecture',
      ],
    },
    approach: {
      title: 'Development Approach',
      items: [
        {
          title: 'Clean Code',
          description: 'I focus on writing readable, organized, and maintainable code.',
        },
        {
          title: 'Problem Solving',
          description: 'I analyze requirements and break problems into practical and understandable solutions.',
        },
        {
          title: 'Continuous Learning',
          description: 'I continuously improve my technical skills through projects, documentation, courses, and hands-on practice.',
        },
        {
          title: 'Engineering Mindset',
          description: 'I focus on building software that is maintainable, scalable, and aligned with real-world requirements.',
        },
      ],
    },
    contact: {
      eyebrow: 'Let\'s connect',
      title: 'Open to software development opportunities.',
      intro: 'I am currently interested in opportunities related to:',
      interests: ['Frontend Development', 'React Development', 'Software Development', 'Web Development', 'Junior Software Engineering', 'Remote Software Development'],
      email: 'bayronvillanea.info@gmail.com',
      linkedin: 'linkedin.com/in/bayronvillanea/',
      github: 'github.com/Bayronvillanea',
      footer: 'Software Developer · Frontend Developer',
    },
  },
  es: {
    nav: [
      { label: 'Inicio', href: '#hero' },
      { label: 'Sobre mí', href: '#about' },
      { label: 'Habilidades', href: '#skills' },
      { label: 'Proyectos', href: '#projects' },
      { label: 'Contacto', href: '#contact' },
    ],
    hero: {
      name: 'Bayron Villanea',
      title: 'Desarrollador de Software | Frontend Developer | React & TypeScript',
      description:
        'Creo aplicaciones web modernas, responsivas y orientadas a negocios con React, JavaScript, TypeScript, Tailwind CSS, SQL y Git.',
      summary:
        'Me enfoco en escribir código limpio y mantenible y crear soluciones de software que resuelven problemas reales.',
      location: 'Residencia en Costa Rica · Disponible para oportunidades remotas',
      primaryAction: 'Ver mis proyectos',
      secondaryAction: 'Contáctame',
      cvAction: 'Descargar CV',
      availability: 'Disponible para oportunidades remotas',
    },
    about: {
      eyebrow: 'Sobre mí',
      title: 'Desarrollador de software enfocado en crear soluciones del mundo real.',
      paragraphs: [
        'Soy un desarrollador de software con experiencia práctica construyendo sitios web y aplicaciones web para proyectos reales.',
        'Mis áreas más fuertes son el desarrollo frontend, React, JavaScript, TypeScript, desarrollo web responsive y aplicaciones impulsadas por bases de datos.',
        'Me gusta transformar requisitos en software funcional y mantenible mientras mejoro continuamente mi conocimiento en desarrollo backend, arquitectura de software, computación en la nube y desarrollo móvil.',
        'Actualmente estoy cursando una Bachillerato  en ingeniería de software y fortaleciendo mis habilidades mediante proyectos prácticos, cursos técnicos y aprendizaje continuo.',
      ],
      badges: ['Estudiante de computación', 'Especialista en React', 'Desarrollador full-stack'],
    },
    services: [
      {
        title: 'Desarrollo Frontend',
        description:
          'Diseño interfaces responsivas e interactivas con React, JavaScript, TypeScript, HTML5, CSS3 y Tailwind CSS.',
      },
      {
        title: 'Desarrollo de Aplicaciones Web',
        description:
          'Creo aplicaciones modernas centradas en funcionalidad, mantenibilidad, capacidad de respuesta y requisitos reales del negocio.',
      },
      {
        title: 'Integración de Bases de Datos y APIs',
        description:
          'Trabajo con SQL y MySQL e integro aplicaciones con APIs y servicios backend para gestionar y procesar datos.',
      },
      {
        title: 'Desarrollo Móvil',
        description:
          'Desarrollo aplicaciones multiplataforma con React Native y JavaScript/TypeScript.',
      },
    ] as Service[],
    skills: {
      title: 'Habilidades Técnicas',
      categories: [
        {
          title: 'Frontend',
          skills: ['React', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'jQuery', 'Diseño web responsivo'],
        },
        {
          title: 'Backend y Bases de Datos',
          skills: ['Node.js', 'REST APIs', 'SQL', 'MySQL', 'Fundamentos de bases de datos'],
        },
        {
          title: 'Móvil',
          skills: ['React Native'],
        },
        {
          title: 'Ingeniería de Software',
          skills: ['Programación orientada a objetos', 'Principios SOLID', 'Clean Code', 'Arquitectura de software', 'Resolución de problemas', 'Agile / Scrum'],
        },
        {
          title: 'Herramientas',
          skills: ['Git', 'GitHub', 'VS Code'],
        },
        {
          title: 'Adicional',
          skills: ['C#', 'Unity', 'AWS'],
        },
      ] as SkillCategory[],
    },
    experience: {
      title: 'Experiencia',
      items: [
        {
          role: 'Desarrollador Web',
          company: 'American Roofing Solutions',
          period: 'Diciembre 2023 – Presente',
          location: 'Remoto',
          points: [
            'Desarrollo y mantenimiento de experiencias web responsivas con React y Tailwind CSS.',
            'Creo componentes frontend reutilizables y mantenibles.',
            'Mejoro la estructura del sitio, la capacidad de respuesta y la usabilidad en distintos dispositivos.',
            'Traduco requisitos de negocio en soluciones web prácticas.',
            'Contribuyo a experiencias digitales enfocadas en la generación de leads y el crecimiento de negocio.',
          ],
        },
        {
          role: 'Pasante de TI / Software',
          company: 'Tienda Vargas',
          period: 'Marzo 2022 – Abril 2022',
          location: 'Presencial',
          points: [
            'Apoyé la implementación de una plataforma de entrenamiento basada en Moodle.',
            'Colaboré con la configuración técnica y recursos de aprendizaje digital.',
            'Contribuí a mejorar la experiencia de incorporación de usuarios.',
            'Brindé soporte técnico y resolución de problemas.',
          ],
        },
      ] as ExperienceItem[],
    },
    projects: {
      title: 'Proyectos Destacados',
      items: [
        {
          title: 'Expense Control',
          subtitle: 'Aplicación web de finanzas personales',
          description:
            'Una aplicación web creada para ayudar a los usuarios a organizar y controlar sus gastos aplicando lógica de programación, estructuras de datos y conceptos reales de gestión de datos.',
          technologies: ['JavaScript', 'Desarrollo web', 'Gestión de datos'],
          liveUrl: 'https://control-gastos-ten.vercel.app/',
          githubUrl: 'https://github.com/Bayronvillanea/control-gastos',
          year: '2024',
        },
        {
          title: 'Studio Salon 501',
          subtitle: 'Sitio web empresarial',
          description:
            'Un sitio web moderno y responsivo desarrollado para un salón de belleza, enfocado en la presentación profesional, el diseño adaptable, la comunicación de servicios y la conversión de clientes.',
          technologies: ['React', 'Tailwind CSS', 'Desarrollo responsivo'],
          liveUrl: 'https://salon-501.vercel.app/',
          githubUrl: '#',
          year: '2024',
        },
        {
          title: 'Portfolio Website',
          subtitle: 'Portafolio personal de desarrollador',
          description:
            'Un portafolio profesional diseñado para mostrar mi experiencia, habilidades técnicas, proyectos y trayectoria en desarrollo de software.',
          technologies: ['React', 'TypeScript', 'Tailwind CSS'],
          liveUrl: '#',
          githubUrl: 'https://github.com/Bayronvillanea',
          year: '2026',
        },
      ] as ProjectItem[],
    },
    learning: {
      title: 'Actualmente Aprendiendo',
      items: [
        'TypeScript',
        'Node.js',
        'Desarrollo Backend',
        'Arquitectura de Software',
        'Computación en la Nube',
        'AWS',
        'React Native',
        'C#',
        'SQL y Diseño de Bases de Datos',
        'Testing',
        'Clean Architecture',
      ],
    },
    approach: {
      title: 'Enfoque de Desarrollo',
      items: [
        {
          title: 'Clean Code',
          description: 'Me enfoco en escribir código legible, organizado y mantenible.',
        },
        {
          title: 'Resolución de problemas',
          description: 'Analizo requisitos y descompongo los problemas en soluciones prácticas y comprensibles.',
        },
        {
          title: 'Aprendizaje continuo',
          description: 'Mejoro mis habilidades técnicas constantemente mediante proyectos, documentación, cursos y práctica.',
        },
        {
          title: 'Mentalidad de ingeniería',
          description: 'Me centro en construir software mantenible, escalable y alineado con requisitos reales.',
        },
      ],
    },
    contact: {
      eyebrow: 'Conectemos',
      title: 'Abierto a oportunidades de desarrollo de software.',
      intro: 'Actualmente estoy interesado en oportunidades relacionadas con:',
      interests: ['Desarrollo Frontend', 'Desarrollo React', 'Desarrollo de Software', 'Desarrollo Web', 'Ingeniería de Software Junior', 'Desarrollo de Software Remoto'],
      email: 'bayronvillanea.info@gmail.com',
      linkedin: 'linkedin.com/in/bayronvillanea/',
      github: 'github.com/Bayronvillanea',
      footer: 'Desarrollador de software · Frontend Developer',
    },
  },
} as const;

export const getLanguageLabel = (language: Language) => (language === 'en' ? 'EN' : 'ES');
