
import { useEffect, useState } from 'react';
import { ArrowRight, ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import { portfolioContent, type Language } from '@/data/portfolio';

type HeroProps = {
  language: Language;
  onChangeLanguage: (language: Language) => void;
};

const Hero = ({ language, onChangeLanguage }: HeroProps) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const roleOptions = [
    'Frontend Developer',
    'Software Engineer',
    'React & TypeScript Specialist',
    'Full Stack Developer',
  ];

  const content = portfolioContent[language];

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const currentRole = roleOptions[currentIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (charIndex < currentRole.length) {
          setCurrentText(currentRole.slice(0, charIndex + 1));
          setCharIndex((prev) => prev + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 1400);
        }
      } else if (charIndex > 0) {
        setCurrentText(currentRole.slice(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      } else {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % roleOptions.length);
      }
    }, isDeleting ? 45 : 95);

    return () => clearTimeout(timeout);
  }, [charIndex, currentIndex, isDeleting, language]);

  const scrollToSection = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="hero" className="relative isolate flex min-h-screen items-center overflow-hidden px-4 pb-16 pt-28 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.14),transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.12),transparent_35%)]" aria-hidden="true" />

      <div className="relative mx-auto w-full max-w-6xl">
        <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="mx-auto max-w-3xl text-center lg:mx-0 lg:text-left">
            <div className={`transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <div className="mb-6 flex justify-center lg:justify-start">
                <button
                  type="button"
                  onClick={() => onChangeLanguage(language === 'en' ? 'es' : 'en')}
                  className="rounded-full border border-border bg-background/70 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground shadow-sm transition-colors hover:text-foreground"
                >
                  {language === 'en' ? 'ES' : 'EN'}
                </button>
              </div>

              <p className="mb-4 text-sm font-medium uppercase tracking-[0.28em] text-muted-foreground sm:text-base">
                {content.hero.location}
              </p>

              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-7xl">
                {content.hero.name}
              </h1>

              <div className="mt-6 flex min-h-[3rem] items-center justify-center lg:justify-start">
                <p className="text-xl font-medium text-foreground sm:text-2xl lg:text-4xl">
                  {currentText}
                  <span className="ml-1 inline-block animate-pulse text-primary">|</span>
                </p>
              </div>

              <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg lg:max-w-xl">
                {content.hero.description}
              </p>
              <p className="mt-3 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg lg:max-w-xl">
                {content.hero.summary}
              </p>
            </div>

            <div className={`mt-10 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <button
                type="button"
                onClick={() => scrollToSection('#projects')}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-foreground px-6 py-3.5 text-sm font-semibold text-background transition-transform duration-200 hover:-translate-y-0.5"
              >
                {content.hero.primaryAction}
                <ArrowRight className="h-4 w-4" />
              </button>

              <button
                type="button"
                onClick={() => scrollToSection('#contact')}
                className="inline-flex items-center justify-center rounded-xl border border-border bg-background/70 px-6 py-3.5 text-sm font-semibold text-foreground transition-transform duration-200 hover:-translate-y-0.5"
              >
                {content.hero.secondaryAction}
              </button>
            </div>

            <div className="mt-10 flex items-center justify-center gap-5 text-muted-foreground lg:justify-start">
              <a href="https://github.com/Bayronvillanea" target="_blank" rel="noreferrer" aria-label="GitHub" className="rounded-full border border-border bg-background/60 p-2.5 transition-colors hover:text-foreground">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/in/bayron-villanea-a95277174/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="rounded-full border border-border bg-background/60 p-2.5 transition-colors hover:text-foreground">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="mailto:bayronvillanea.info@gmail.com" aria-label="Email" className="rounded-full border border-border bg-background/60 p-2.5 transition-colors hover:text-foreground">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className={`relative ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'} transition-all duration-700`}>
            <div className="glass-card relative overflow-hidden rounded-[2rem] p-6 sm:p-8">
              <div className="absolute inset-x-8 top-0 h-32 rounded-b-full bg-gradient-to-b from-blue-500/15 to-transparent blur-2xl" aria-hidden="true" />
              <div className="relative space-y-6">
                <div className="flex items-center justify-between">
                  <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-600 dark:text-emerald-400">
                    {language === 'en' ? 'Available for work' : 'Disponible para trabajo'}
                  </span>
                  <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">BV</span>
                </div>

                <div className="rounded-2xl border border-border bg-muted/50 p-5">
                  <p className="text-sm text-muted-foreground">{language === 'en' ? 'Focus' : 'Enfoque'}</p>
                  <p className="mt-2 text-2xl font-semibold text-foreground">React · TypeScript</p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-border bg-background p-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{language === 'en' ? 'Experience' : 'Experiencia'}</p>
                    <p className="mt-2 text-2xl font-semibold text-foreground">2+ yrs</p>
                  </div>
                  <div className="rounded-2xl border border-border bg-background p-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{language === 'en' ? 'Stack' : 'Stack'}</p>
                    <p className="mt-2 text-2xl font-semibold text-foreground">Full</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {['React', 'Tailwind', 'SQL', 'Git', 'Node', 'API'].map((skill) => (
                    <span key={skill} className="rounded-full border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <button
            type="button"
            onClick={() => scrollToSection('#about')}
            className="animate-bounce rounded-full border border-border bg-background/70 p-3 text-muted-foreground transition-colors hover:text-foreground"
            aria-label="Scroll to about section"
          >
            <ChevronDown className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
