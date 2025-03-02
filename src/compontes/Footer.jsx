import github from "../img/github.svg";
import linked from "../img/linkedin.svg";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import { useEffect } from "react";

export default function Footer() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Animaciones
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <footer className=" py-12 mt-20 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="flex flex-col items-center space-y-8"
        >
          {/* Contact Info */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col md:flex-row items-center gap-8 text-gray-400"
          >
            

            <div className="flex items-center hover:text-blue-400 transition-colors">
              <i className="fas fa-envelope mr-3 text-lg"></i>
              <a
                href="mailto:Bayronvillanea.info@gmail.com"
                className="hover:underline"
              >
                Bayronvillanea.info@gmail.com
              </a>
            </div>

            <div className="flex gap-6">
              <a 
                href="https://github.com/Bayronvillanea" 
                className="p-2 rounded-full hover:bg-gray-800 transition-all"
              >
                <img 
                  src={github} 
                  className="h-6 w-6 hover:scale-110 transition-transform" 
                  alt="GitHub" 
                />
              </a>
              <a 
                href="https://www.linkedin.com/in/bayron-villanea-a95277174/" 
                className="p-2 rounded-full hover:bg-gray-800 transition-all"
              >
                <img 
                  src={linked} 
                  className="h-6 w-6 hover:scale-110 transition-transform" 
                  alt="LinkedIn" 
                />
              </a>
            </div>
          </motion.div>

          {/* Navigation Links */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-6 text-gray-400"
          >
            <Link 
              to="/home" 
              className="hover:text-blue-400 hover:underline transition-colors"
            >
              Home
            </Link>
            <Link 
              to="/aboutme" 
              className="hover:text-blue-400 hover:underline transition-colors"
            >
              About
            </Link>
            <Link 
              to="/stack" 
              className="hover:text-blue-400 hover:underline transition-colors"
            >
              Stack
            </Link>
            <Link 
              to="/works" 
              className="hover:text-blue-400 hover:underline transition-colors"
            >
              Projects
            </Link>
            <Link 
              to="/contact" 
              className="hover:text-blue-400 hover:underline transition-colors"
            >
              Contact
            </Link>
            <Link 
              to="/Certificaciones" 
              className="hover:text-blue-400 hover:underline transition-colors"
            >
              Certificates
            </Link>
          </motion.div>

          {/* Copyright */}
          <motion.p 
            variants={itemVariants}
            className="text-gray-600 text-center text-sm mt-6"
          >
            © {new Date().getFullYear()} Bayron Villanea. All rights reserved.
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
}