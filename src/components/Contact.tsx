
import { FormEvent, useEffect, useRef, useState } from 'react';
import { Github, Linkedin, Mail, MapPin, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { portfolioContent, type Language } from '@/data/portfolio';

type ContactProps = {
  language: Language;
};

const Contact = ({ language }: ContactProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const sectionRef = useRef<HTMLElement | null>(null);
  const { toast } = useToast();
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

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    toast({
      title: language === 'en' ? 'Message sent' : 'Mensaje enviado',
      description: language === 'en' ? 'Thank you for reaching out. I will reply soon.' : 'Gracias por contactarme. Te responderé pronto.',
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const contactChannels = [
    { icon: Mail, label: 'Email', value: content.contact.email, href: `mailto:${content.contact.email}` },
    { icon: Linkedin, label: 'LinkedIn', value: content.contact.linkedin, href: 'https://www.linkedin.com/in/bayron-villanea-a95277174/' },
    { icon: MapPin, label: language === 'en' ? 'Location' : 'Ubicación', value: 'Costa Rica', href: '#' },
  ];

  return (
    <section id="contact" ref={sectionRef} className="relative py-20 sm:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(168,85,247,0.08),transparent_35%)]" aria-hidden="true" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <header className="mx-auto max-w-3xl text-center">
            <p className="section-kicker">{content.contact.eyebrow}</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              {content.contact.title}
            </h2>
            <p className="mt-4 text-base text-muted-foreground sm:text-lg">{content.contact.intro}</p>
          </header>

          <div className="mt-10 flex flex-wrap justify-center gap-2">
            {content.contact.interests.map((interest) => (
              <span key={interest} className="rounded-full border border-border bg-background/70 px-3 py-2 text-sm text-foreground">
                {interest}
              </span>
            ))}
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="space-y-5">
              {contactChannels.map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noreferrer' : undefined}
                  className="glass-card flex items-center gap-4 rounded-[1.5rem] p-4 transition-transform duration-200 hover:-translate-y-0.5"
                >
                  <div className="rounded-2xl bg-gradient-to-br from-sky-500/10 to-violet-500/10 p-3 text-foreground ring-1 ring-border/80">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{label}</p>
                    <p className="font-medium text-foreground">{value}</p>
                  </div>
                </a>
              ))}

              <div className="glass-card rounded-[1.5rem] p-5">
                <p className="text-sm font-medium text-muted-foreground">{language === 'en' ? 'Social' : 'Redes sociales'}</p>
                <div className="mt-4 flex gap-3">
                  <a href="https://github.com/Bayronvillanea" target="_blank" rel="noreferrer" className="rounded-full border border-border bg-background/80 p-3 text-foreground transition-colors hover:bg-muted">
                    <Github className="h-4 w-4" />
                  </a>
                  <a href="https://www.linkedin.com/in/bayron-villanea-a95277174/" target="_blank" rel="noreferrer" className="rounded-full border border-border bg-background/80 p-3 text-foreground transition-colors hover:bg-muted">
                    <Linkedin className="h-4 w-4" />
                  </a>
                  <a href={`mailto:${content.contact.email}`} className="rounded-full border border-border bg-background/80 p-3 text-foreground transition-colors hover:bg-muted">
                    <Mail className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="glass-card rounded-[2rem] p-6 sm:p-8">
              <h3 className="text-2xl font-semibold text-foreground">{language === 'en' ? 'Send a message' : 'Envíame un mensaje'}</h3>

              <div className="mt-6 space-y-5">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-foreground">
                    {language === 'en' ? 'Name' : 'Nombre'}
                  </label>
                  <input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder={language === 'en' ? 'Your name' : 'Tu nombre'}
                    className="w-full rounded-xl border border-border bg-muted/40 px-4 py-3 text-foreground outline-none transition focus:border-foreground"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="name@example.com"
                    className="w-full rounded-xl border border-border bg-muted/40 px-4 py-3 text-foreground outline-none transition focus:border-foreground"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-foreground">
                    {language === 'en' ? 'Message' : 'Mensaje'}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder={language === 'en' ? 'Tell me about your project...' : 'Cuéntame sobre tu proyecto...'}
                    className="w-full resize-none rounded-xl border border-border bg-muted/40 px-4 py-3 text-foreground outline-none transition focus:border-foreground"
                  />
                </div>

                <button type="submit" className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-slate-950 to-slate-700 px-6 py-3.5 text-sm font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5 dark:from-white dark:to-slate-200 dark:text-slate-900">
                  <Send className="h-4 w-4" />
                  {language === 'en' ? 'Send message' : 'Enviar mensaje'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
