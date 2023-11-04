import Footer from './Footer';
import { useEffect } from 'react';

export default function Contact() {
  useEffect(() => {
    // Desplaza la página al principio cuando se carga
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b text-white">
      <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-center mt-10">
        Contact Me
      </h2>
      <p className="text-base md:text-lg lg:text-xl mb-6 text-center">
        Feel free to reach out to me via email:
      </p>
      <a
        href="mailto:Bayronvillanea.info@gmail.com"
        className="text-blue-300 font-semibold text-base md:text-xl hover:underline"
      >
        Bayronvillanea.info@gmail.com
      </a>
      <footer className="mt-8">
        <Footer />
      </footer>
    </div>
  );
}
