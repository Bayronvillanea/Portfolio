import Footer from './Footer';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiLinkedin, FiGithub, FiTwitter } from 'react-icons/fi';

export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const socialLinks = [
    { icon: <FiLinkedin />, url: 'https://linkedin.com/in/tu-perfil', name: 'LinkedIn' },
    { icon: <FiGithub />, url: 'https://github.com/tu-usuario', name: 'GitHub' },
    { icon: <FiTwitter />, url: 'https://twitter.com/tu-usuario', name: 'Twitter' }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex-grow flex flex-col items-center justify-center px-4 py-12"
      >
        <div className="max-w-2xl w-full text-center">
          <h2 className="font-bold text-4xl md:text-5xl lg:text-6xl mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          
          <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
            Whether you have a project in mind, a question, or just want to say hi -<br className="hidden md:inline" />
            I'll do my best to get back to you!
          </p>

          {/* Sección de correo mejorada */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="inline-block mb-8 md:mb-12 w-full max-w-xs sm:max-w-sm md:max-w-none"
          >
            <a
              href="mailto:Bayronvillanea.info@gmail.com"
              className="flex flex-col md:flex-row items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-3 md:px-8 md:py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 w-full break-all"
            >
              <FiMail className="text-xl md:text-2xl" />
              <span className="text-sm md:text-xl font-semibold text-center md:text-left whitespace-nowrap overflow-hidden overflow-ellipsis">
                Bayronvillanea.info@gmail.com
              </span>
            </a>
          </motion.div>

          <div className="mt-12">
            <h3 className="text-gray-400 text-lg mb-6">Or find me on</h3>
            <div className="flex justify-center gap-4 md:gap-6 flex-wrap">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="p-3 md:p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors duration-300"
                  title={link.name}
                >
                  <span className="text-2xl text-white">{link.icon}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      
    </div>
  );
}