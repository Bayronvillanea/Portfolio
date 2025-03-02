import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import github from '../img/github.svg';
import linkedin from '../img/linkedin.svg';
import pdf from "../pdf/CurrículumBayronVillaneaing.pdf";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.backgroundColor = 'rgba(0, 0, 0, 0.98)';
    } else {
      document.body.style.overflow = 'auto';
      document.body.style.backgroundColor = 'transparent';
    }
  }, [isMenuOpen]);

  const menuItems = [
    { path: '/home', label: 'Home' },
    { path: '/aboutme', label: 'About' },
    { path: '/stack', label: 'Stack' },
    { path: '/works', label: 'Projects' },
    { path: '/contact', label: 'Contact' },
    { path: '/Certificaciones', label: 'Certificates' },
    { type: 'pdf', label: 'CV' }
  ];

  return (
    <nav className="w-full bg-gray-900/98 backdrop-blur-xl fixed top-0 z-50 py-4 shadow-2xl border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <div className="hidden lg:flex space-x-8">
          {menuItems.map((item, index) => (
            item.type === 'pdf' ? (
              <a
                key={index}
                href={pdf}
                download
                className="text-gray-200 hover:text-blue-400 transition-all duration-300 text-lg font-medium hover:scale-105"
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={index}
                to={item.path}
                className="text-gray-200 hover:text-blue-400 transition-all duration-300 text-lg font-medium hover:scale-105"
              >
                {item.label}
              </Link>
            )
          ))}
        </div>

        <div className="flex items-center space-x-6">
          <a
            href="https://github.com/Bayronvillanea"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-gray-800 transition-all duration-300 hover:rotate-12"
          >
            <img src={github} alt="GitHub" className="h-7 w-7 hover:scale-125 transition-transform" />
          </a>
          <a
            href="https://www.linkedin.com/in/bayron-villanea-a95277174/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-gray-800 transition-all duration-300 hover:-rotate-12"
          >
            <img src={linkedin} alt="LinkedIn" className="h-7 w-7 hover:scale-125 transition-transform" />
          </a>
        </div>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden text-gray-200 hover:text-blue-400 z-50 p-2 rounded-full hover:bg-gray-800"
          aria-label="Toggle navigation"
        >
          <svg className="w-9 h-9" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        <AnimatePresence>
  {isMenuOpen && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="lg:hidden fixed inset-0 bg-gray-900/98 backdrop-blur-2xl z-40"
    >
      <div className="h-full flex flex-col items-center justify-start pt-24 relative">
        <div className='w-screen min-h-screen bg-gray-900 pt-10 mt-[-20px] overflow-y-auto'>
          <ul className="flex flex-col space-y-10 text-center mt-12">
            {menuItems.map((item, index) => (
              <motion.li
                key={index}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.15, type: 'spring' }}
              >
                {item.type === 'pdf' ? (
                  <a
                    href={pdf}
                    download
                    className="block py-4 text-3xl text-gray-200 hover:text-blue-400 hover:scale-110 transition-transform"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    to={item.path}
                    className="block py-4 text-3xl text-gray-200 hover:text-blue-400 hover:scale-110 transition-transform"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </motion.li>
            ))}
          </ul>

          {/* Social Links Section - Now inside the scrollable area */}
          <div className="flex justify-center space-x-10 mt-16 w-full">
            <a
              href="https://github.com/Bayronvillanea"
              className="p-3 hover:rotate-12 transition-transform hover:scale-125" 
            >
              <img
                src={github}
                className="h-10 w-10 hover:scale-125 transition-transform"
                alt="GitHub"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/bayron-villanea-a95277174/"
              className="p-3 hover:-rotate-12 transition-transform hover:scale-125" 
            >
              <img
                src={linkedin}
                className="h-10 w-10 hover:scale-125 transition-transform"
                alt="LinkedIn"
              />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  )}
</AnimatePresence>



      </div>
    </nav>
  );
}
