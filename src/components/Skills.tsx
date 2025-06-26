
import { useEffect, useState, useRef } from "react";
import { Code, Database, Wrench, Gamepad2, Globe, Layers } from "lucide-react";

const Skills = () => {
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

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Code className="w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true" />,
      skills: ["React", "TypeScript", "JavaScript (ES6+)", "Tailwind CSS", "HTML5", "CSS3"]
    },
    {
      title: "Backend & Database",
      icon: <Database className="w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true" />,
      skills: ["Node.js", "MySQL", "C#", "RESTful APIs", "Database Design"]
    },
    {
      title: "Tools & Technologies",
      icon: <Wrench className="w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true" />,
      skills: ["Git & GitHub", "Software Architecture", "Web Development", "DOM Manipulation", "Responsive Design"]
    },
    {
      title: "Game Development",
      icon: <Gamepad2 className="w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true" />,
      skills: ["Unity", "C# Scripting", "Game Logic", "2D/3D Development"]
    },
    {
      title: "Web Technologies",
      icon: <Globe className="w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true" />,
      skills: ["Full Stack Development", "Frontend Optimization", "UI/UX Design", "Performance Optimization"]
    },
    {
      title: "Software Engineering",
      icon: <Layers className="w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true" />,
      skills: ["Clean Code", "Design Patterns", "Problem Solving", "Team Leadership", "Project Management"]
    }
  ];

  return (
    <section 
      id="skills" 
      ref={sectionRef} 
      className="py-12 sm:py-16 lg:py-20 bg-muted/30"
      aria-labelledby="skills-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <header className="text-center mb-12 sm:mb-16">
            <h2 
              id="skills-heading"
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6"
            >
              Habilidades Técnicas
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-2">
              Tecnologías y herramientas que domino para crear soluciones de alta calidad
            </p>
          </header>

          <div 
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8"
            role="list"
            aria-label="Categorías de habilidades técnicas"
          >
            {skillCategories.map((category, categoryIndex) => (
              <article 
                key={category.title}
                role="listitem"
                className={`bg-background/80 backdrop-blur-sm p-6 sm:p-8 rounded-xl sm:rounded-2xl border border-border/50 transition-all duration-500 hover:scale-105 focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2 ${
                  isVisible ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${categoryIndex * 150}ms` }}
                tabIndex={0}
              >
                <header className="flex items-center gap-3 mb-4 sm:mb-6">
                  <div className="bg-primary/10 w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center text-primary">
                    {category.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground">
                    {category.title}
                  </h3>
                </header>
                
                <div 
                  className="grid grid-cols-1 gap-2 sm:gap-3"
                  role="list"
                  aria-label={`Habilidades en ${category.title}`}
                >
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skill}
                      role="listitem"
                      className={`bg-muted/50 px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-xs sm:text-sm font-medium text-foreground transition-all duration-300 hover:bg-muted/70 ${
                        isVisible ? 'animate-scale-in' : 'scale-95 opacity-0'
                      }`}
                      style={{ 
                        animationDelay: `${(categoryIndex * 150) + (skillIndex * 50)}ms`
                      }}
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
