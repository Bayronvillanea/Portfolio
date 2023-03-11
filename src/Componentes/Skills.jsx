import React from 'react'
import '../Estilos/Skills.css'

import ht from '../img/html.svg'
import css from '../img/css3.svg'
import js from '../img/js.svg'
import rt from '../img/react.svg'
import tp from '../img/typescript.svg'
import gt from '../img/git.svg'

export default function Skills() {
  return (
    <div className='Contenedor-Skills'>
        <section className='Contenedor-Section'>
        <h2 className='Skills-h2' id='SkillsP'>SKILLS</h2>
        <p className='Skills-p'>I am learning React and TypeScript</p>
        <section className='Section-Icon'>
            
            <i className='html5'> <img src={ht} alt="" width="50" height="50" style={{margin: '20px'}} /></i>
            <i className='css3'> <img src={css} alt="" width="50" height="50" style={{margin: '20px'}} /></i>
            <i className='js'><img src={js} alt="" width="50" height="50" style={{margin: '20px'}} /></i>
            <i className='git'><img src={gt} alt="" width="50" height="50" style={{margin: '20px'}} /></i>
            <i className='react'><img src={rt} alt="" width="50" height="50" style={{margin: '20px'}} /></i>
            <i className='typescript'><img src={tp} alt="" width="50" height="50" style={{margin: '20px'}} /></i>
        </section>

        </section>
        
    </div>
  )
}
