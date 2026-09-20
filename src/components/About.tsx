
import { useEffect, useRef, useState } from 'react';
import { Code, Database, Laptop, Smartphone, Sparkles, Target } from 'lucide-react';
import { portfolioContent, type Language } from '@/data/portfolio';

type AboutProps = {
  language: Language;
};

const About = ({ language }: AboutProps) => {
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

  const featureIcons = [Code, Database, Laptop, Smartphone, Sparkles, Target];

  return (
    <section id="about" ref={sectionRef} className="relative py-20 sm:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.08),transparent_35%)]" aria-hidden="true" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <header className="mx-auto max-w-3xl text-center">
            <p className="section-kicker">{content.about.eyebrow}</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              {content.about.title}
            </h2>
          </header>

          <div className="mt-14 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="glass-card rounded-[2rem] p-6 sm:p-8">
              <div className="space-y-5 text-base leading-8 text-muted-foreground">
                {content.about.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}

                <div className="flex flex-wrap gap-3 pt-3">
                  {content.about.badges.map((badge) => (
                    <span key={badge} className="rounded-full border border-border bg-muted/60 px-4 py-2 text-sm font-medium text-foreground">
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="glass-card rounded-[2rem] p-6 sm:p-8">
              <h3 className="text-2xl font-semibold text-foreground">{language === 'en' ? 'What I bring' : 'Lo que aporto'}</h3>
              <ul className="mt-6 space-y-4">
                {[
                  language === 'en' ? 'Business-aware frontend development' : 'Desarrollo frontend orientado a negocio',
                  language === 'en' ? 'Clean, maintainable code with clear structure' : 'Código limpio y mantenible con estructura clara',
                  language === 'en' ? 'Strong focus on usability and performance' : 'Fuerte enfoque en usabilidad y rendimiento',
                  language === 'en' ? 'Continuous learning and technical growth' : 'Aprendizaje continuo y crecimiento técnico',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-muted-foreground">
                    <span className="mt-2 h-2.5 w-2.5 rounded-full bg-gradient-to-r from-sky-500 to-violet-500" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {content.services.map((service, index) => {
              const Icon = featureIcons[index % featureIcons.length];
              return (
                <article
                  key={service.title}
                  className="group rounded-[1.75rem] border border-border/80 bg-background/75 p-6 shadow-[0_24px_60px_-40px_rgba(15,23,42,0.55)] transition-all duration-300 hover:-translate-y-1.5 hover:border-border"
                >
                  <div className="mb-5 inline-flex rounded-2xl bg-gradient-to-br from-sky-500/10 to-violet-500/10 p-3 text-foreground ring-1 ring-border/80">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{service.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">{service.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
