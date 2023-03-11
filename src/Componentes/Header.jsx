import React from 'react'
import '../Estilos/Header.css'

export default function Header() {
  
  return (
    <div className='Contenedor-header'>
        <header>
            
       
          <nav className='Contenedor-nav-header'>
              <ul className='ul-heaeder'>
                  <li className='li-header'>
                      <a className='Header-a' href="/Home">Home</a>
                  </li>
                  <li>
                      <a className='Header-a' href="#aboutP">About Me</a>
                  </li>
                  <li>
                      <a className='Header-a' href="#SkillsP">Skills</a>
                  </li>
                  <li>
                      <a className='Header-a' href="#PortfolioP">Porfolio</a>
                  </li>
                  <li>
                      <a className='Header-a' href="#ContactP">Contact Me</a>
                  </li>
              </ul>
            
          </nav>
        </header>  
    </div>
  )
}
