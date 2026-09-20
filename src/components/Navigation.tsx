
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { portfolioContent, type Language } from '@/data/portfolio';

type NavigationProps = {
  language: Language;
  onChangeLanguage: (language: Language) => void;
};

const Navigation = ({ language, onChangeLanguage }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = portfolioContent[language].nav;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 16);
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('keydown', handleEscape);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'border-b border-border/80 bg-background/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8" aria-label="Main navigation">
        <button
          type="button"
          onClick={() => scrollToSection('#hero')}
          className="flex items-center gap-3 rounded-full border border-border/60 bg-background/80 px-3 py-2 text-sm font-semibold tracking-[0.2em] text-foreground shadow-sm transition-transform duration-200 hover:-translate-y-0.5"
          aria-label="Go to home"
        >
          BV
        </button>

        <div className="hidden items-center gap-6 md:flex">
          <div className="rounded-full border border-border/80 bg-background/75 px-3 py-2 shadow-[0_20px_40px_-28px_rgba(15,23,42,0.7)] backdrop-blur-sm">
            <ul className="flex items-center gap-6 text-sm text-muted-foreground">
              {navItems.map((item) => (
                <li key={item.href}>
                  <button
                    type="button"
                    onClick={() => scrollToSection(item.href)}
                    className="transition-colors duration-200 hover:text-foreground"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center gap-2 rounded-full border border-border/80 bg-background/75 p-1.5 shadow-[0_20px_40px_-28px_rgba(15,23,42,0.7)] backdrop-blur-sm">
            <button
              type="button"
              onClick={() => onChangeLanguage('en')}
              className={`rounded-full px-2.5 py-1 text-xs font-medium transition-colors ${
                language === 'en' ? 'bg-foreground text-background' : 'text-muted-foreground hover:text-foreground'
              }`}
              aria-label="Switch to English"
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => onChangeLanguage('es')}
              className={`rounded-full px-2.5 py-1 text-xs font-medium transition-colors ${
                language === 'es' ? 'bg-foreground text-background' : 'text-muted-foreground hover:text-foreground'
              }`}
              aria-label="Cambiar a español"
            >
              ES
            </button>
            <ThemeToggle />
          </div>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={() => onChangeLanguage(language === 'en' ? 'es' : 'en')}
            className="rounded-full border border-border bg-background/80 px-2 py-1 text-[10px] font-semibold uppercase text-muted-foreground"
            aria-label="Toggle language"
          >
            {language === 'en' ? 'ES' : 'EN'}
          </button>
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="rounded-full border border-border bg-background/80 p-2 text-foreground"
            aria-label="Open mobile menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      <div
        className={`overflow-hidden border-t border-border/60 bg-background/95 transition-all duration-300 md:hidden ${
          isMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-4 text-sm text-muted-foreground">
          {navItems.map((item) => (
            <li key={item.href}>
              <button
                type="button"
                onClick={() => scrollToSection(item.href)}
                className="w-full rounded-xl px-3 py-2 text-left transition-colors hover:bg-muted hover:text-foreground"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navigation;
