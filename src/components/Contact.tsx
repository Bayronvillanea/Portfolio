
import { useEffect, useState, useRef } from "react";
import { Mail, Phone, MapPin, Send, Download } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import mysql from "../pdf/mysql.pdf"
import reactpdf from "../pdf/react.pdf"
import nodepdf from "../pdf/node.pdf"
const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const sectionRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mensaje enviado",
      description: "Gracias por contactarme. Te responderé pronto.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "bayronvillanea.info@gmail.com",
      link: "mailto:bayronvillanea.info@gmail.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "LinkedIn",
      value: "Bayron Villanea",
      link: "https://www.linkedin.com/in/bayron-villanea-a95277174/"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Ubicación",
      value: "Costa Rica",
      link: "#"
    }
  ];

  const certifications = [
    {
      title: "JavaScript & Node.js",
      description: "Dominio de conceptos fundamentales incluyendo características ES6+, manipulación del DOM, y desarrollo server-side con Node.js",
      downloadText: "Descargar Certificado",
      file: nodepdf
    },
    {
      title: "MySQL Database",
      description: "Experiencia en diseño de bases de datos relacionales, consultas SQL y técnicas de optimización de bases de datos",
      downloadText: "Descargar Certificado",
         file: mysql
    },
    {
      title: "React Architecture",
      description: "Patrones avanzados incluyendo gestión de estado, composición de componentes y optimización de rendimiento",
      downloadText: "Descargar Certificado",
      file: reactpdf
    }
  ];

  return (
    <section id="contact" ref={sectionRef} className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Contacto & Certificaciones
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              ¿Tienes un proyecto en mente? Conectemos y hagámoslo realidad
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-6">
                  Información de contacto
                </h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Estoy siempre abierto a discutir nuevos proyectos, ideas creativas 
                  o oportunidades para formar parte de equipos innovadores.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={info.title}
                    href={info.link}
                    target={info.link.startsWith('http') ? '_blank' : undefined}
                    rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className={`flex items-center gap-4 p-4 rounded-lg border border-border hover:bg-muted/50 transition-all duration-300 hover:scale-105 group ${
                      isVisible ? 'animate-fade-in' : ''
                    }`}
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <div className="bg-primary/10 p-3 rounded-lg text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">{info.title}</h4>
                      <p className="text-muted-foreground">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-muted/30 p-8 rounded-xl border border-border">
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Envíame un mensaje
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                    placeholder="Tu nombre"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Cuéntame sobre tu proyecto..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  Enviar mensaje
                </button>
              </form>
            </div>
          </div>

          {/* Certifications Section */}
         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  {certifications.map((cert, index) => (
    <div 
      key={cert.title}
      className={`bg-background p-6 rounded-xl border border-border hover:shadow-lg transition-all duration-300 hover:scale-105 ${
        isVisible ? 'animate-fade-in' : ''
      }`}
      style={{ animationDelay: `${index * 200}ms` }}
    >
      <h4 className="text-lg font-semibold text-foreground mb-3">
        {cert.title}
      </h4>
      <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
        {cert.description}
      </p>
      <a 
        href={cert.file}
        download
        className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors duration-200 text-sm font-medium"
      >
        <Download size={16} />
        {cert.downloadText}
      </a>
    </div>
  ))}
</div>

          {/* Footer */}
          <div className="pt-8 border-t border-border text-center">
            <p className="text-muted-foreground">
              © 2024 Bayron Villanea. Frontend Developer & Software Engineer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
