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
//import { Link } from'react-router-dom'

export default function Portfolio() {
  return (
    <div>
        <section className='Contenedor-Cards'>
            <h2 className='Portfolio-H2' id='PortfolioP'>Portfolio</h2>
            <div className="cads">
                <div className='cads-grid'>
                    <h6 className='Portfolio-6'>Poke-Api</h6>
                    <img src={pk} alt='poke-api' className='Portfolio-img'/>
                    <p className='Portfolio-P'>It is a pokemon search engine that shows the statistics</p>
                    <h6 className='Portfolio-6'>Used technologies.</h6>
                    <i className='html5'> <img src={ht} alt="" width="19" height="19" style={{margin: '20px'}} /></i>
                    <i className='css3'> <img src={css} alt="" width="19" height="19" style={{margin: '20px'}} /></i>
                    <i className='js'><img src={js} alt="" width="19" height="19" style={{margin: '20px'}} /></i>
                    <a className='Portfolio-link' href="https://bespoke-gumdrop-39d59e.netlify.app">Visit Web</a>
                </div>
                <div className='cads-grid'>
                    <h6 className='Portfolio-6'>Login</h6>
                    <img src={lg} alt='Login' className='Portfolio-img'/>
                    <p className='Portfolio-P'>It was created for the purpose of practice styles and handling validation and errors.</p>
                    <h6 className='Portfolio-6'>Used technologies.</h6>
                    <i className='html5'> <img src={ht} alt="" width="19" height="19" style={{margin: '20px'}} /></i>
                    <i className='css3'> <img src={css} alt="" width="19" height="19" style={{margin: '20px'}} /></i>
                    <i className='js'><img src={js} alt="" width="19" height="19" style={{margin: '20px'}} /></i>
                    <a className='Portfolio-link' href="https://amazing-moonbeam-2c69fa.netlify.app">Visit Web</a>
                </div>
                <div className='cads-grid'>
                    <h6 className='Portfolio-6'>Portfolio</h6>
                    <img src={pf} alt='Portfolio' className='Portfolio-img'/>
                    <p className='Portfolio-P'>Portfolio created for people to see my projects and knowledge that I have.</p>
                    <h6 className='Portfolio-6'>Used technologies.</h6>
                    <i className='html5'> <img src={ht} alt="" width="19" height="19" style={{margin: '20px'}} /></i>
                    <i className='css3'> <img src={css} alt="" width="19" height="19" style={{margin: '20px'}} /></i>
                    <i className='js'><img src={js} alt="" width="19" height="19" style={{margin: '20px'}} /></i>
                    <i className='rt'><img src={rt} alt="" width="19" height="19" style={{margin: '20px'}} /></i>
                    <a className='Portfolio-link' href="">Visit Web</a>
                </div>
            </div>
        </section>
    </div>
  )
}
