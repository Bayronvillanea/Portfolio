
import { useState, useEffect } from "react";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import CV from "../pdf/cvespanol.pdf"
const Hero = () => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [greetingVisible, setGreetingVisible] = useState(false);

  const texts = [
    "Frontend Developer",
    "Software Engineer", 
    "React Specialist",
    "Full Stack Developer"
  ];
   const descargarPDF = (archivo) => {
    const link = document.createElement('a');
    link.href = archivo;
    link.download = 'cv.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  useEffect(() => {
    // Animate greeting after component mounts
    const timer = setTimeout(() => setGreetingVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (charIndex < texts[currentIndex].length) {
          setCurrentText(prev => prev + texts[currentIndex][charIndex]);
          setCharIndex(prev => prev + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (charIndex > 0) {
          setCurrentText(prev => prev.slice(0, -1));
          setCharIndex(prev => prev - 1);
        } else {
          setIsDeleting(false);
          setCurrentIndex(prev => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [charIndex, currentIndex, isDeleting, texts]);

  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 sm:px-6 lg:px-8"
      aria-labelledby="hero-heading"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" aria-hidden="true"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-10 -right-8 sm:-top-20 sm:-right-16 lg:-top-40 lg:-right-32 w-32 h-32 sm:w-60 sm:h-60 lg:w-80 lg:h-80 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-10 -left-8 sm:-bottom-20 sm:-left-16 lg:-bottom-40 lg:-left-32 w-32 h-32 sm:w-60 sm:h-60 lg:w-80 lg:h-80 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10 w-full">
        <div className="space-y-6 sm:space-y-8 lg:space-y-12">
          <header className={`transition-all duration-1000 ease-out ${greetingVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 
              id="hero-heading"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight"
            >
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent inline-block animate-fade-in-up">
                Bayron Villanea
              </span>
            </h1>
          </header>
          
          <div 
            className="h-8 sm:h-10 md:h-12 lg:h-14 flex items-center justify-center"
            role="status"
            aria-live="polite"
            aria-label="Especialización profesional"
          >
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-muted-foreground">
              {currentText}
              <span className="animate-pulse" aria-hidden="true">|</span>
            </p>
          </div>

          <div className={`transition-all duration-1000 delay-300 ${greetingVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed px-4">
              Ingeniero de Software especializado en desarrollo frontend con React y tecnologías modernas. 
              Apasionado por crear soluciones innovadoras que fusionen la excelencia técnica con experiencias de usuario excepcionales.
            </p>
          </div>

          <nav 
            className={`transition-all duration-1000 delay-500 ${greetingVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            aria-label="Acciones principales"
          >
            <div className="flex flex-col items-center justify-center gap-4 sm:gap-6 px-4 max-w-sm mx-auto">
              <button 
                onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full bg-primary text-primary-foreground px-8 py-4 rounded-xl hover:bg-primary/90 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl text-base font-medium focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                aria-label="Navegar a la sección de proyectos"
              >
                Ver mi trabajo
              </button>
              <button 
                className="w-full border border-border bg-background/50 backdrop-blur-sm px-8 py-4 rounded-xl hover:bg-muted/50 transition-all duration-300 hover:scale-105 text-base font-medium focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                aria-label="Descargar curriculum vitae en PDF"
                onClick={() => descargarPDF(CV)}
              >
                Descargar CV
              </button>
            </div>
          </nav>

          <nav 
            className={`transition-all duration-1000 delay-700 ${greetingVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            aria-label="Enlaces de redes sociales"
          >
            <div className="flex items-center justify-center gap-6 sm:gap-8 pt-4">
              <a 
                href="https://github.com/Bayronvillanea" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 transform p-3 rounded-lg hover:bg-muted/20 focus:outline-none focus:ring-2 focus:ring-primary"
                aria-label="Ver perfil de GitHub de Bayron Villanea"
              >
                <Github size={24} aria-hidden="true" />
              </a>
              <a 
                href="https://www.linkedin.com/in/bayron-villanea-a95277174/" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 transform p-3 rounded-lg hover:bg-muted/20 focus:outline-none focus:ring-2 focus:ring-primary"
                aria-label="Ver perfil de LinkedIn de Bayron Villanea"
              >
                <Linkedin size={24} aria-hidden="true" />
              </a>
              <a 
                href="mailto:bayron@ejemplo.com" 
                className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 transform p-3 rounded-lg hover:bg-muted/20 focus:outline-none focus:ring-2 focus:ring-primary"
                aria-label="Enviar correo electrónico a Bayron Villanea"
              >
                <Mail size={24} aria-hidden="true" />
              </a>
            </div>
          </nav>
        </div>

        <div className="absolute bottom-8 left-0 right-0 flex justify-center">
  <button 
    onClick={scrollToAbout}
    className="animate-bounce text-primary hover:text-primary/80 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary rounded-full p-2"
    aria-label="Desplazarse a la sección Sobre mí"
  >
    <ChevronDown size={32} aria-hidden="true" />
  </button>
</div>

      </div>
    </section>
  );
};

export default Hero;
