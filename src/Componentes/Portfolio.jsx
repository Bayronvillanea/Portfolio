import React from 'react'
import '../Estilos/Portfolio.css'
import ht from '../img/html.svg'
import css from '../img/css3.svg'
import js from '../img/js.svg'
import rt from '../img/react.svg'
import tp from '../img/typescript.svg'
import gt from '../img/git.svg'
import pk from '../img/poke-api.PNG'
import lg from '../img/login.PNG'
import pf from '../img/portfolio.PNG'
import form from '../img/formulario.png'
import lg2 from '../img/login2.png'
import pk2 from '../img/poke-api2.png'
import twl from '../img/tailwind.svg'
import stw from '../img/starwars.png'
//import { Link } from'react-router-dom'

export default function Portfolio() {
  return (
    <div>
        <section className='Contenedor-Cards'>
            <h2 className='Portfolio-H2' id='PortfolioP'>Portfolio</h2>
            <div className="cads">
                <div className='cads-grid'>
                    <h6 className='Portfolio-6'>Poke-Api</h6>
                    <img src={pk2} alt='poke-api' className='Portfolio-img'/>
                    <p className='Portfolio-P'>It is a pokemon search engine that shows the statistics</p>
                    <h6 className='Portfolio-6'>Used technologies.</h6>
                    <i className='html5'> <img src={ht} alt="" width="19" height="19" style={{margin: '20px'}} /></i>
                    <i className='css3'> <img src={css} alt="" width="19" height="19" style={{margin: '20px'}} /></i>
                    <i className='js'><img src={js} alt="" width="19" height="19" style={{margin: '20px'}} /></i>
                    <a className='Portfolio-link' href="https://pokemon-api-bay.vercel.app/">Visit Web</a>
                </div>
                <div className='cads-grid'>
                    <h6 className='Portfolio-6'>Login</h6>
                    <img src={lg2} alt='Login' className='Portfolio-img'/>
                    <p className='Portfolio-P'>It was created for the purpose of practice styles and handling validation and errors.</p>
                    <h6 className='Portfolio-6'>Used technologies.</h6>
                    <i className='html5'> <img src={ht} alt="" width="19" height="19" style={{margin: '20px'}} /></i>
                    <i className='css3'> <img src={css} alt="" width="19" height="19" style={{margin: '20px'}} /></i>
                    <i className='js'><img src={js} alt="" width="19" height="19" style={{margin: '20px'}} /></i>
                    <a className='Portfolio-link' href="https://login-fawn-gamma.vercel.app/">Visit Web</a>
                </div>

                <div className='cads-grid'>
                    <h6 className='Portfolio-6'>Formulario</h6>
                    <img src={form} alt='Login' className='Portfolio-img'/>
                    <p className='Portfolio-P'>This form is designed for the practice of different technologies for personal improvement.</p>
                    <h6 className='Portfolio-6'>Used technologies.</h6>
                    <i className='react'> <img src={rt} alt="" width="19" height="19" style={{margin: '20px'}} /></i>
                    <i className='react'> <img src={twl} alt="" width="19" height="19" style={{margin: '20px'}} /></i>
                    
                    <a className='Portfolio-link' href="https://formulario-taupe.vercel.app/">Visit Web</a>
                </div>


                <div className='cads-grid'>
                    <h6 className='Portfolio-6'>StarWars</h6>
                    <img src={stw} alt='Login' className='Portfolio-img'/>
                    <p className='Portfolio-P'>Clon the website practice</p>
                    <h6 className='Portfolio-6'>Used technologies.</h6>
                    <i className='react'> <img src={rt} alt="" width="19" height="19" style={{margin: '20px'}} /></i>
                    <i className='react'> <img src={css} alt="" width="19" height="19" style={{margin: '20px'}} /></i>
                    
                    
                    <a className='Portfolio-link' href="https://star-wars-kohl-eta.vercel.app/">Visit Web</a>
                </div>

                <div className='cads-grid'>
                    <h6 className='Portfolio-6'>Todo-list</h6>
                    <img src={stw} alt='Login' className='Portfolio-img'/>
                    <p className='Portfolio-P'>A task list where you can add, delete and edit your tasks</p>
                    <h6 className='Portfolio-6'>Used technologies.</h6>
                    <i className='react'> <img src={rt} alt="" width="19" height="19" style={{margin: '20px'}} /></i>
                    <i className='react'> <img src={css} alt="" width="19" height="19" style={{margin: '20px'}} /></i>
                    
                    
                    <a className='Portfolio-link' href="https://todo-list-brown-two-48.vercel.app/">Visit Web</a>
                </div>
               
            </div>
        </section>
    </div>
  )
}
