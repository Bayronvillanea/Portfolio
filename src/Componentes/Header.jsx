import React from 'react'
import { Link, animateScroll as scroll } from 'react-scroll';
import '../Estilos/Header.css'

export default function Header() {
    const scrollTop = ()=>{
        scroll.scrollToTop()
    }
  
  return (
    <div className='Contenedor-header'>
    <header>
      <nav className='Contenedor-nav-header'>
        
        <ul className='ul-heaeder'>
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
  </div>
  )
}
