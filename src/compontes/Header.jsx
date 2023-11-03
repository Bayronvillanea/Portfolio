import  { useState } from 'react';
import github from '../img/github.svg';
import linkedin from '../img/linkedin.svg';
import pdf from '../pdf/CurrículumBayronVillaneaing..pdf'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-1193 h-59 flex items-center justify-center px-4 mx-auto">
      <div className="lg:flex hidden">
        <ul className="flex space-x-6">
          <li>
            <a href="/" className="text-white hover:text-gray-400 font-dm-sans text-center text-20 font-normal font-semibold leading-26">
              Home
            </a>
          </li>
          <li>
            <a href="/#about" className="text-white hover:text-gray-400 font-dm-sans text-center text-20 font-normal font-semibold leading-26">
              About me
            </a>
          </li>
          <li>
            <a href="/#skills" className="text-white hover:text-gray-400 font-dm-sans text-center text-20 font-normal font-semibold leading-26">
            Stack
            </a>
          </li>
          <li>
            <a href="/#projects" className="text-white hover:text-gray-400 font-dm-sans text-center text-20 font-normal font-semibold leading-26">
              Projects
            </a>
          </li>
          <li>
            <a href="/#contact" className="text-white hover:text-gray-400 font-dm-sans text-center text-20 font-normal font-semibold leading-26">
              Contact
            </a>
          </li>
          <li>
            <a href={pdf} download={pdf} className="text-white hover:text-gray-400 font-dm-sans text-center text-20 font-normal font-semibold leading-26">
              CV
            </a>
          </li>
        </ul>
      </div>

      {/* Mobile menu (hidden by default) */}
      <div className="lg:hidden block">
        <button onClick={toggleMenu} className="text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-6 w-6  mt-2 mr-5 ${isMenuOpen ? 'ml-0' : 'ml-3'}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu items */}
      {isMenuOpen && (
        <div className="lg:hidden block">
          <ul className="flex flex-col space-y-4">
            <li>
              <a href="/" className="text-white hover:text-gray-400 font-dm-sans text-20 font-normal font-semibold leading-26">
                Home
              </a>
            </li>
            <li>
              <a href="/#about" className="text-white hover:text-gray-400 font-dm-sans text-center text-20 font-normal font-semibold leading-26">
                About me
              </a>
            </li>
            <li>
              <a href="/#skills" className="text-white hover:text-gray-400 font-dm-sans text-center text-20 font-normal font-semibold leading-26">
                Skills
              </a>
            </li>
            <li>
              <a href="/#projects" className="text-white hover:text-gray-400 font-dm-sans text-center text-20 font-normal font-semibold leading-26">
                Projects
              </a>
            </li>
            <li>
              <a href="/#contact" className="text-white hover:text-gray-400 font-dm-sans text-center text-20 font-normal font-semibold leading-26">
                Contact
              </a>
            </li>
            <li>
              <a  href={pdf} download={pdf}  className="text-white hover:text-gray-400 font-dm-sans text-center text-20 font-normal font-semibold leading-26">
                CV
              </a>
            </li>
          </ul>
        </div>
      )}

      <a href="https://github.com/Bayronvillanea" className="ml-3">
        <img src={github} alt="GitHub" className="h-6 w-6 inline-block transition-opacity hover:opacity-75" />
      </a>

      <a href="https://www.linkedin.com/in/bayron-villanea-a95277174/" className="ml-3">
        <img src={linkedin} alt="LinkedIn" className="h-6 w-6 inline-block transition-opacity hover:opacity-75" />
      </a>
    </nav>
  );
}
