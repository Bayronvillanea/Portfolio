import { useEffect } from 'react';
import { motion } from 'framer-motion';

export default function AboutMe() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-gray-900 py-16 px-4 sm:px-6 lg:px-8 mt-2">
      <div className="max-w-4xl mx-auto">
        {/* Sección About Me */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent mb-8 md: mt-3">
            About Me
          </h1>
          
          <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
            <p className="flex items-start">
              <span className="text-2xl mr-2">👋</span>
              I'm Bayron Villanea, a passionate Software Engineer specializing in frontend development. 
              My journey in tech combines formal education with relentless self-learning, always seeking 
              to merge innovation with practical solutions.
            </p>

            <div className="p-6 bg-gray-800 rounded-xl mt-8">
              <h3 className="text-2xl font-bold text-blue-400 mb-4">Current Focus</h3>
              <p className="flex items-center">
                <span className="text-xl mr-2">🚀</span>
                Advancing my expertise in modern web technologies while completing my  Software Engineer
              </p>
            </div>
          </div>
        </motion.div>

        {/* Experiencia Laboral */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent mb-8">
            Professional Journey
          </h2>

          <div className="space-y-12">
            {/* Experiencia 1 */}
            <div className="bg-gray-800 p-8 rounded-2xl shadow-xl">
              <div className="flex items-center mb-4">
                <div className="bg-blue-500 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl">💻</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Web Developer</h3>
                  <p className="text-blue-400">American Roofing Solutions | 2023 </p>
                </div>
              </div>
              <p className="text-gray-300 mb-6">
                Led full-stack development of company website using React + Tailwind CSS, resulting in 40% lead increase
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="tech-badge text-white">React</span>
                <span className="tech-badge text-white">Tailwind</span>
                <span className="tech-badge text-white">Node.js</span>
              </div>
            </div>

            {/* Experiencia 2 */}
            <div className="bg-gray-800 p-8 rounded-2xl shadow-xl">
              <div className="flex items-center mb-4">
                <div className="bg-teal-500 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl">🎮</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Full Stack Developer</h3>
                  <p className="text-teal-400">Tienda Vargas | 2022</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6">
                Developed internal training platform and gaming solutions using diverse tech stack
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="tech-badge text-white">C#</span>
                <span className="tech-badge text-white">Unity</span>
                <span className="tech-badge text-white">MySQL</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Educación */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent mb-8">
            Education Path
          </h2>

          <div className="space-y-6">
            <div className="bg-gray-800 p-6 rounded-xl flex items-start">
              <div className="bg-purple-500 p-3 rounded-lg mr-4">
                <span className="text-2xl">🎓</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">B.Sc. Software Engineer</h3>
                <p className="text-purple-400">International University of the Americas | 2022 - Present</p>
                <p className="text-gray-400 mt-2">Relevant Coursework: Algorithms, Web Development, Software Architecture</p>
              </div>
            </div>

            <div className="bg-gray-800 p-6 rounded-xl flex items-start">
              <div className="bg-green-500 p-3 rounded-lg mr-4">
                <span className="text-2xl">🏫</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Technical High School Diploma</h3>
                <p className="text-green-400">CTP Santo Cristo de Esquipulas | 2014 - 2021</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .tech-badge {
          @apply px-3 py-1 bg-gray-700 text-blue-400 rounded-full text-sm font-mono;
          transition: all 0.3s ease;
        }
        .tech-badge:hover {
          @apply bg-blue-500 text-white transform scale-105;
        }
      `}</style>
    </div>
  );
}