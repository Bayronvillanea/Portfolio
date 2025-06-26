
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: "Inicio", href: "#hero" },
    { name: "Sobre mí", href: "#about" },
    { name: "Habilidades", href: "#skills" },
    { name: "Proyectos", href: "#projects" },
    { name: "Contacto", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  // Close menu when pressing Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isMenuOpen]);

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-background/80 backdrop-blur-md border-b border-border/50 shadow-lg shadow-background/10' 
          : 'bg-transparent'
      }`}
      role="navigation"
      aria-label="Navegación principal"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          <div 
            className="text-lg sm:text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 cursor-default focus:outline-none focus:ring-2 focus:ring-primary rounded"
            tabIndex={0}
            role="banner"
            aria-label="Bayron Villanea - Logotipo"
          >
            BV
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <ul className="flex items-center space-x-6 lg:space-x-8" role="menubar">
              {navItems.map((item, index) => (
                <li key={item.name} role="none">
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className={`text-muted-foreground hover:text-primary transition-all duration-300 relative group hover:scale-105 text-sm lg:text-base focus:outline-none focus:ring-2 focus:ring-primary rounded px-2 py-1 ${
                      isScrolled ? 'animate-fade-in' : ''
                    }`}
                    style={{ animationDelay: `${index * 100}ms` }}
                    role="menuitem"
                    aria-label={`Navegar a ${item.name}`}
                  >
                    {item.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-full" aria-hidden="true"></span>
                  </button>
                </li>
              ))}
            </ul>
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button and Theme Toggle */}
          <div className="md:hidden flex items-center gap-2 sm:gap-3">
            <ThemeToggle />
            <button
              className="text-primary hover:scale-110 transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-primary rounded p-1"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMenuOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
            >
              <div className="relative w-5 h-5 sm:w-6 sm:h-6">
                <Menu 
                  className={`absolute inset-0 transition-all duration-300 ${
                    isMenuOpen ? 'opacity-0 rotate-90 scale-0' : 'opacity-100 rotate-0 scale-100'
                  }`} 
                  size={20}
                  aria-hidden="true"
                />
                <X 
                  className={`absolute inset-0 transition-all duration-300 ${
                    isMenuOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-0'
                  }`} 
                  size={20}
                  aria-hidden="true"
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          id="mobile-menu"
          className={`md:hidden transition-all duration-500 overflow-hidden ${
            isMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
          }`}
          aria-hidden={!isMenuOpen}
        >
          <div className="bg-background/95 backdrop-blur-md border-t border-border/50 rounded-b-xl sm:rounded-b-2xl shadow-xl">
            <ul className="px-4 pt-3 pb-4 sm:pt-4 sm:pb-6 space-y-1 sm:space-y-2" role="menu">
              {navItems.map((item, index) => (
                <li key={item.name} role="none">
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className={`block w-full text-left px-3 sm:px-4 py-2 sm:py-3 text-muted-foreground hover:text-primary hover:bg-muted/50 rounded-lg transition-all duration-300 hover:scale-105 hover:translate-x-1 sm:hover:translate-x-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-primary ${
                      isMenuOpen ? 'animate-fade-in' : ''
                    }`}
                    style={{ animationDelay: `${index * 100}ms` }}
                    role="menuitem"
                    aria-label={`Navegar a ${item.name}`}
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
