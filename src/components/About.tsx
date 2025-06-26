
import { useEffect, useState, useRef } from "react";
import { Code, Palette, Rocket, Users, Award, Target } from "lucide-react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: <Code className="w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true" />,
      title: "Desarrollo Frontend",
      description: "Especializado en React, TypeScript y tecnologías web modernas para crear interfaces excepcionales"
    },
    {
      icon: <Palette className="w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true" />,
      title: "Diseño UI/UX",
      description: "Creando interfaces intuitivas con Tailwind CSS y las mejores prácticas de experiencia de usuario"
    },
    {
      icon: <Rocket className="w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true" />,
      title: "Soluciones Full Stack",
      description: "Experiencia completa en Node.js, bases de datos y arquitectura de software escalable"
    },
    {
      icon: <Users className="w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true" />,
      title: "Liderazgo Técnico",
      description: "Desarrollo de equipos y gestión de proyectos de alto impacto con resultados medibles"
    },
    {
      icon: <Award className="w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true" />,
      title: "Innovación Continua",
      description: "Siempre explorando nuevas tecnologías y metodologías para mejorar la calidad del software"
    },
    {
      icon: <Target className="w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true" />,
      title: "Enfoque en Resultados",
      description: "Orientado a entregar soluciones que generen impacto real en los objetivos de negocio"
    }
  ];

  return (
    <section 
      id="about" 
      ref={sectionRef} 
      className="py-12 sm:py-16 lg:py-20 bg-background"
      aria-labelledby="about-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <header className="text-center mb-12 sm:mb-16">
            <h2 
              id="about-heading"
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6"
            >
              Sobre mí
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-2">
              Ingeniero de Software apasionado por crear soluciones digitales innovadoras
            </p>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center mb-12 sm:mb-16">
            <div className={`space-y-4 sm:space-y-6 ${isVisible ? 'animate-slide-in-left' : ''}`}>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-foreground">
                Mi Trayectoria Profesional
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base lg:text-lg">
                Soy Bayron Villanea, un Ingeniero de Software especializado en desarrollo frontend. 
                Mi journey en tecnología combina educación formal con aprendizaje autodidacta constante, 
                siempre buscando fusionar la innovación con soluciones prácticas.
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base lg:text-lg">
                Actualmente me enfoco en avanzar mi experiencia en tecnologías web modernas mientras 
                completo mi carrera en Ingeniería de Software. He liderado proyectos que resultaron 
                en incrementos significativos de leads y desarrollado soluciones full-stack para diversas industrias.
              </p>
              <div 
                className="flex flex-wrap gap-2 sm:gap-3"
                role="list"
                aria-label="Especialidades profesionales"
              >
                <span 
                  className="bg-gradient-to-r from-primary/10 to-secondary/10 text-primary border border-primary/20 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium hover:scale-105 transition-transform duration-300"
                  role="listitem"
                >
                  Estudiante de Ingeniería
                </span>
                <span 
                  className="bg-gradient-to-r from-primary/10 to-secondary/10 text-primary border border-primary/20 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium hover:scale-105 transition-transform duration-300"
                  role="listitem"
                >
                  React Specialist
                </span>
                <span 
                  className="bg-gradient-to-r from-primary/10 to-secondary/10 text-primary border border-primary/20 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium hover:scale-105 transition-transform duration-300"
                  role="listitem"
                >
                  Full Stack Developer
                </span>
              </div>
            </div>

            <aside className={`${isVisible ? 'animate-slide-in-right' : ''}`}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl sm:rounded-3xl blur-2xl sm:blur-3xl" aria-hidden="true"></div>
                <div className="relative bg-muted/30 backdrop-blur-sm p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-border/50">
                  <h4 className="text-lg sm:text-xl font-semibold text-foreground mb-4">Logros Destacados</h4>
                  <ul className="space-y-3 text-muted-foreground text-sm sm:text-base">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" aria-hidden="true"></div>
                      <span>Incrementó leads en 40% con desarrollo web full-stack</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" aria-hidden="true"></div>
                      <span>Desarrolló plataformas de entrenamiento interno</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" aria-hidden="true"></div>
                      <span>Especialista en arquitectura de software moderna</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" aria-hidden="true"></div>
                      <span>Experiencia en liderazgo técnico y gestión de proyectos</span>
                    </li>
                  </ul>
                </div>
              </div>
            </aside>
          </div>

          <div 
            className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6"
            role="list"
            aria-label="Habilidades y especialidades"
          >
            {features.map((feature, index) => (
              <article 
                key={index}
                role="listitem"
                className={`group bg-muted/30 backdrop-blur-sm p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-border/50 transition-all duration-500 hover:scale-105 focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2 ${
                  isVisible ? 'animate-scale-in' : ''
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
                tabIndex={0}
              >
                <div className="bg-primary/10 w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center text-primary mb-3 sm:mb-4 transition-all duration-300">
                  {feature.icon}
                </div>
                <h4 className="text-base sm:text-lg font-semibold text-foreground mb-2 sm:mb-3">
                  {feature.title}
                </h4>
                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
