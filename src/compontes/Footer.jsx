import github from "../img/github.svg";
import linked from "../img/linkedin.svg";
import { Link } from "react-router-dom";
import { useEffect } from "react";
export default function Footer() {
  useEffect(() => {
    // Desplaza la página al principio cuando se carga
    window.scrollTo(0, 0);
  }, []);
  return (
    <footer className=" text-enlace py-8 mt-8">
      <div className="container mx-auto flex flex-col items-center">
        <div className="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0 mb-6">
        
          <div className="flex items-center mr-10 ">
            <i className="fas fa-phone mr-2"></i>
            <span>+506 86057181</span>
          </div>
       
          <div className="flex items-center ">
            <i className="fas fa-envelope mr-2"></i>
            <a
        href="mailto:Bayronvillanea.info@gmail.com"
        className="font-semibold  hover:underline"
      >
        Bayronvillanea.info@gmail.com   
      </a>
          </div>
        
          <div className="flex space-x-4">
            <a href="https://github.com/Bayronvillanea" className="text-white  ">
              <img src={github} className="h-6 w-6 inline-block transition-opacity hover:opacity-75" alt="GitHub"></img>
            </a>
            <a href="https://www.linkedin.com/in/bayron-villanea-a95277174/" className="text-white  ">
              <img src={linked} className="h-6 w-6 inline-block transition-opacity hover:opacity-75" alt="LinkedIn"></img>
            </a>
          </div>
        </div>
        <hr className="w-11/12	 border-t border-raya mb-6" />
        <div className="flex flex-wrap justify-center md:justify-start space-x-3 ">
          {/* Enlaces a las secciones */}
          <Link to={'/home'} className="text-enlace hover:underline">Home</Link>
          <Link to={'/aboutme'} className="text-enlace hover:underline">About</Link>
          <Link to={'/stack'} className="text-enlace hover:underline">Stack</Link>
          <Link to={'/works'} className="text-enlace hover:underline">Projects</Link>
          <Link to={'/contact'} className="text-enlace hover:underline">Contact</Link>
          <Link to={'/Certificaciones'} className="text-enlace hover:underline">Certificate</Link>
        </div>
      </div>
    </footer>
  );
}
