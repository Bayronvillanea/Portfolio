import React, { useState } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import '../Estilos/Header.css';

export default function Header() {
  const [showNav, setShowNav] = useState(false);

  const scrollTop = () => {
    scroll.scrollToTop();
  };

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <header className='Contenedor-header'>
      <nav className={`Contenedor-nav-header ${showNav ? 'show-nav' : ''}`}>
        <div className='hamburger' onClick={toggleNav}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={`ul-header ${showNav ? 'show-nav' : ''}`}>
          <li className='li-header'>
            <Link
              className='Header-a'
              to='Home'
              smooth={true}
              duration={500}
              onClick={scrollTop}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className='Header-a'
              to='aboutP'
              smooth={true}
              duration={500}
            >
              About Me
            </Link>
          </li>
          <li>
            <Link
              className='Header-a'
              to='SkillsP'
              smooth={true}
              duration={500}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              className='Header-a'
              to='PortfolioP'
              smooth={true}
              duration={500}
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              className='Header-a'
              to='ContactP'
              smooth={true}
              duration={800}
            >
              Contact Me
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
