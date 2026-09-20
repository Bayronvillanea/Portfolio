
import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Github } from 'lucide-react';
import { portfolioContent, type Language } from '@/data/portfolio';

type ProjectsProps = {
  language: Language;
};

const Projects = ({ language }: ProjectsProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);
  const content = portfolioContent[language];

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="relative py-20 sm:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.06),transparent_35%)]" aria-hidden="true" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <header className="mx-auto max-w-3xl text-center">
            <p className="section-kicker">{language === 'en' ? 'Work' : 'Trabajo'}</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              {content.projects.title}
            </h2>
          </header>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {content.projects.items.map((project) => (
              <article
                key={project.title}
                className="group overflow-hidden rounded-[2rem] border border-border/80 bg-background/75 shadow-[0_24px_60px_-40px_rgba(15,23,42,0.6)] transition-all duration-300 hover:-translate-y-1.5 hover:border-border"
              >
                <div className="h-52 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.2),transparent_45%),linear-gradient(135deg,_rgba(15,23,42,0.9),_rgba(30,41,59,0.8))] p-6">
                  <div className="flex h-full items-start justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-slate-300">{project.year}</p>
                      <h3 className="mt-3 text-2xl font-semibold text-white">{project.title}</h3>
                    </div>
                    <span className="rounded-full border border-white/20 bg-white/5 px-2 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-slate-200">
                      {project.subtitle}
                    </span>
                  </div>
                </div>

                <div className="space-y-5 p-6">
                  <p className="text-sm leading-7 text-muted-foreground">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="rounded-full border border-border bg-muted/60 px-2.5 py-1 text-xs font-medium text-foreground">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    {project.liveUrl !== '#' ? (
                      <a href={project.liveUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-muted-foreground">
                        {language === 'en' ? 'Live demo' : 'Demo en vivo'}
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
                    ) : (
                      <span className="text-sm font-semibold text-muted-foreground">{language === 'en' ? 'Private project' : 'Proyecto privado'}</span>
                    )}

                    {project.githubUrl !== '#' ? (
                      <a href={project.githubUrl} target="_blank" rel="noreferrer" aria-label={project.title} className="rounded-full border border-border bg-background p-2 text-foreground transition-colors hover:bg-muted">
                        <Github className="h-4 w-4" />
                      </a>
                    ) : null}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
