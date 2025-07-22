import Navbar from './Navbar.jsx'
import AboutMe from './AboutMe.jsx'
import Sticker from './Sticker2.png'
import '../src/style/Portfolio.css' // Importamos el CSS externo
import React from 'react'
import  MovingBanner from './MovingBanner.jsx'
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Linkedin from '../src/assets/linkedin.svg';
import Dribble from '../src/assets/dribble.svg';
import Github from '../src/assets/github.svg';
import BackstageGif from '../src/assets/backstage.gif'; 


const Portfolio = () => {


  return (
    <div className="portfolio-container">
      <Navbar />
      <section id="inicio" className="section">
      </section>
      <MovingBanner/>

      <section id="about" className="section">
      </section>

      <section id="proyectos" className="section">
      </section>

      <section id="newsletter" className="section">
      </section>

      <section id="contacto" className="contacto-section">
         <div className="top-right-icons">
            <a href="https://www.linkedin.com/in/luciauxui/"><img src={Linkedin}/></a>
            <a href="https://dribbble.com/luuulaa"><img src={Dribble}/></a>
            <a href="https://github.com/luulaa13"><img src={Github}/></a>
          </div>

          <h2>¡TRABAJEMOS JUNTOS! :<br />CONECTA Y CREA SIN LIMITACIONES</h2>
          <p>Cuentame tu visión y veamos como podemos hacerla realidad juntos</p>

        <a href="mailto:luciauxui@gmail.com" className="mi-boton">
          Enviar correo
        </a>

          <p className="email">luciauxui<br/>
            @gmail.com</p>

          <div className="illustrations">
            <img src={BackstageGif} alt="Animación Backstage" />
          </div>
      </section>

    </div>
  )
}

export default Portfolio
