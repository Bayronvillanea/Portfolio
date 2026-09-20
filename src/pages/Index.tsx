
import { useEffect, useState } from 'react';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Navigation from '@/components/Navigation';
import { portfolioContent, type Language } from '@/data/portfolio';

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div
      className={`min-h-screen bg-background text-foreground transition-opacity duration-700 ${
        isLoaded ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <Navigation language={language} onChangeLanguage={setLanguage} />
      <main>
        <Hero language={language} onChangeLanguage={setLanguage} />
        <About language={language} />
        <Skills language={language} />
        <Projects language={language} />
        <Contact language={language} />
      </main>
      <footer className="border-t border-border bg-background/90">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-8 text-sm text-muted-foreground sm:flex-row sm:px-6 lg:px-8">
          <p>{portfolioContent[language].contact.footer}</p>
          <p>© 2026 Bayron Villanea</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
