
import { useEffect, useRef, useState } from 'react';
import { Code2, Database, Layers3, Smartphone, Sparkles, Wrench } from 'lucide-react';
import { portfolioContent, type Language } from '@/data/portfolio';

type SkillsProps = {
  language: Language;
};

const Skills = ({ language }: SkillsProps) => {
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
      { threshold: 0.25 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const icons = [Code2, Database, Smartphone, Layers3, Wrench, Sparkles];

  return (
    <section id="skills" ref={sectionRef} className="relative py-20 sm:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(168,85,247,0.08),transparent_35%)]" aria-hidden="true" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <header className="mx-auto max-w-3xl text-center">
            <p className="section-kicker">{language === 'en' ? 'Capabilities' : 'Capacidades'}</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              {content.skills.title}
            </h2>
          </header>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {content.skills.categories.map((category, index) => {
              const Icon = icons[index % icons.length];
              return (
                <article
                  key={category.title}
                  className="group rounded-[1.75rem] border border-border/80 bg-background/75 p-6 shadow-[0_24px_60px_-40px_rgba(15,23,42,0.55)] transition-all duration-300 hover:-translate-y-1.5 hover:border-border"
                >
                  <div className="mb-5 flex items-center gap-3">
                    <div className="rounded-2xl bg-gradient-to-br from-sky-500/10 to-violet-500/10 p-3 text-foreground ring-1 ring-border/80">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
                  </div>

                  <ul className="space-y-2">
                    {category.skills.map((skill) => (
                      <li key={skill} className="rounded-xl bg-muted/60 px-3 py-2 text-sm text-muted-foreground ring-1 ring-border/60">
                        {skill}
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
