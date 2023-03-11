import React from 'react'
import '../Estilos/ContactMe.css'
import gh from '../img/github.svg'
import lk from '../img/linkedin.svg'
import ins from '../img/instagram.svg'
import fb from '../img/facebook.svg'
import gm from '../img/gmail.svg'
export default function ContactMe() {
  return (
    <div className='Contendor-Contact'>
        <h2 className='Contact-Me-h2' id='ContactP'>Contact Me</h2>
        <section className='Contenedor-ContactMe'>
            
           
            <a href="https://github.com/Bayronvillanea"> <i className='gh'> <img src={gh} alt="" width="50" height="50" style={{margin: '20px'}} /></i></a>
            <a href="https://www.linkedin.com/in/bayron-villanea-a95277174/">  <i className='lk'><img src={lk} alt="" width="50" height="50" style={{margin: '20px'}} /></i></a>
            <a href="https://www.instagram.com/bayron_vh/"><i className='ins'> <img src={ins} alt="" width="50" height="50" style={{margin: '20px'}} /></i></a>
            <a href="https://www.facebook.com/bayron.villanea.16/"> <i className='fb'><img src={fb} alt="" width="50" height="50" style={{margin: '20px'}} /></i></a>
        </section>
    </div>
  )
}
