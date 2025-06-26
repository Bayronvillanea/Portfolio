
import { useEffect, useState, useRef } from "react";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "American Roofing Solutions",
      description: "Desarrollo full-stack del sitio web corporativo que resultó en un incremento del 40% en leads. Implementación con React y Tailwind CSS para una experiencia de usuario optimizada.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop",
      technologies: ["React", "Tailwind CSS", "Node.js", "JavaScript"],
      liveUrl: "https://americanroofingsolutionsnj.com/",
      githubUrl: "#",
      year: "2023"
    },
    {
      title: "Tienda Vargas Training Platform",
      description: "Plataforma interna de entrenamiento y soluciones de gaming. Desarrollo full-stack utilizando diversas tecnologías para crear una experiencia de aprendizaje interactiva.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop",
      technologies: ["C#", "Unity", "MySQL", "Game Development"],
      liveUrl: "https://americanroofingsolutionsnj.com/",
    githubUrl: "#",
      year: "2022"
    },
    {
       title: "Agencia de Marketing",
      description: "Creación de un sitio web para una empresa de marketing digital para mejorar su visibilidad en internet.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
      technologies: ["React", "Tailwind"],
      liveUrl: "https://agencymarketing-seven.vercel.app/",
      githubUrl: "https://github.com/Bayronvillanea/agencymarketing",
    year: "2024"
    },
    {
      title: "Clínica Dental",
    description: "Desarrollo de un sitio web para una clínica dental, mejorando su visibilidad en línea y presentando los servicios que ofrece a sus pacientes.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      technologies: ["React", "Tailwind"],
    liveUrl: "https://dentista-beta.vercel.app/",
    githubUrl: "https://github.com/Bayronvillanea/dentista",
    year: "2024"
    },
    {
      title: "Website Personal",
      description: "Sitio web personal con animaciones fluidas, diseño responsive y optimización para conversión utilizando tecnologías modernas.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      liveUrl: "#",
      githubUrl: "#",
      year: "2024"
    },
    {
      title: "Control de Gastos",
    description: "Este proyecto de Control de Gastos está desarrollado con React. Permite llevar un control de los gastos mensuales y muestra el porcentaje de gasto en una barra de progreso.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
       technologies: ["React"],
    liveUrl: "https://control-gastos-ten.vercel.app/",
    githubUrl: "https://github.com/Bayronvillanea/control-gastos",
    year: "2024"
    }
  ];

  return (
    <section 
      id="projects" 
      ref={sectionRef} 
      className="py-12 sm:py-16 lg:py-20 bg-muted/30"
      aria-labelledby="projects-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <header className="text-center mb-12 sm:mb-16">
            <h2 
              id="projects-heading"
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6"
            >
              Experiencia Profesional
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-2">
              Proyectos destacados que demuestran mi experiencia en desarrollo web y soluciones técnicas
            </p>
          </header>

          <div 
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8"
            role="list"
            aria-label="Lista de proyectos profesionales"
          >
            {projects.map((project, index) => (
              <article 
                key={project.title}
                role="listitem"
                className={`bg-background rounded-xl overflow-hidden shadow-sm border border-border hover:shadow-xl transition-all duration-500 hover:scale-105 group focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2 ${
                  isVisible ? 'animate-fade-in' : ''
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={`Captura de pantalla del proyecto ${project.title}`}
                    className="w-full h-40 sm:h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-primary text-primary-foreground px-2 py-1 rounded text-xs font-medium">
                    <time dateTime={project.year}>{project.year}</time>
                  </div>
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex gap-3 sm:gap-4">
                      <a 
                        href={project.liveUrl}
                        className="bg-background p-2 rounded-full text-primary hover:scale-110 transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-primary"
                        aria-label={`Ver proyecto ${project.title} en vivo`}
                      >
                        <ExternalLink size={18} className="sm:w-5 sm:h-5" aria-hidden="true" />
                      </a>
                      <a 
                        href={project.githubUrl}
                        className="bg-background p-2 rounded-full text-primary hover:scale-110 transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-primary"
                        aria-label={`Ver código fuente de ${project.title} en GitHub`}
                      >
                        <Github size={18} className="sm:w-5 sm:h-5" aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2 sm:mb-3 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div 
                    className="flex flex-wrap gap-1 sm:gap-2"
                    role="list"
                    aria-label={`Tecnologías utilizadas en ${project.title}`}
                  >
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech}
                        role="listitem"
                        className="bg-primary/10 text-primary px-2 py-1 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-12">
            <a 
              href="https://github.com/Bayronvillanea"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-primary-foreground px-6 sm:px-8 py-3 rounded-lg hover:bg-primary/90 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center gap-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              aria-label="Ver más proyectos en mi perfil de GitHub"
            >
              <Github size={18} className="sm:w-5 sm:h-5" aria-hidden="true" />
              Ver más proyectos en GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
