import { motion } from 'framer-motion';
import css from '../img/css.svg';
import html from '../img/html.svg';
import js from '../img/js.svg';
import git from '../img/git.svg';
import react from '../img/react.svg';
import typescript from '../img/typescript.svg';
import tailwind from '../img/tailwind.svg';
import mysql from '../img/mysql.svg';
import { useEffect } from 'react';

const techStack = [
  { icon: html, name: 'HTML5' },
  { icon: css, name: 'CSS3' },
  { icon: js, name: 'JavaScript' },
  { icon: react, name: 'React' },
  { icon: tailwind, name: 'Tailwind CSS' },
  { icon: typescript, name: 'TypeScript' },
  { icon: git, name: 'Git' },
  { icon: mysql, name: 'MySQL' }
];

export default function Stack() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 py-16">
      <section className="p-6 w-full max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
            Tech Stack
          </h2>
          <p className="text-lg text-gray-400 text-center mb-8 max-w-2xl mx-auto">
            Technologies I use to bring ideas to life
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {techStack.map((tech, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center p-6 bg-gray-800 rounded-xl hover:bg-gray-700 transition-all duration-300"
            >
              <img 
                src={tech.icon} 
                alt={tech.name}
                className="w-16 h-16 mb-4 object-contain hover:animate-pulse"
              />
              <span className="text-gray-300 font-medium text-sm md:text-base">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
}