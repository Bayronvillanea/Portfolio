import imgMe from '../img/ME.jpg';
import Projects from './Projects';
import Skills from './Skills';
import Footer from './Footer';
import { motion } from 'framer-motion';

export default function Section() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start w-full bg-gradient-to-b from-gray-900 to-gray-800">
      {/* Hero Section */}
      <section className="flex flex-col w-full h-auto px-4 pt-24 pb-12 md:p-20 justify-center items-center">
        <div className="flex flex-col md:flex-row items-center justify-center w-full gap-y-12 md:gap-8 max-w-6xl mx-auto">
          
          {/* Contenedor de Imagen */}
          <div className="md:order-2 relative mx-auto">
            <div className="w-48 h-48 sm:w-40 xs:w-36 
                          md:w-64 md:h-64
                          md:mt-5
                          rounded-full border-4 border-blue-500 
                          overflow-hidden shadow-2xl 
                          transition-all duration-300 
                          hover:border-blue-400 
                          mx-auto 
                          mt-8 md:mt-0  
                          mb-10 md:mb-0 
                          relative aspect-square">
              <motion.img 
                src={imgMe} 
                alt="Bayron Villanea" 
                className="w-full h-full object-cover object-center"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.05 }} // 🔥 Solo la imagen se acerca
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>

          {/* Contenedor de Texto */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left space-y-4 px-2"
          >
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent leading-tight">
              Bayron<br className="hidden md:inline" /> Villanea
            </h1>
            <p className="text-2xl md:text-2xl text-gray-300 font-medium tracking-tight">
              <span className="block md:inline">Frontend Developer</span>{' '}
              <span className="block md:inline">& Software Engineer</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sección de Habilidades y Proyectos */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="w-full py-16 px-4 md:px-8"
      >
        <Skills />
        <Projects />
        <Footer />
      </motion.div>
    </div>
  );
}
