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

  const buttonsRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      buttonsRef.current.children,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
      }
    );
  }, []);
  

  return (
    <div className="portfolio-container">
      <Navbar />
      <section id="inicio" className="hero-section">
    
        <div className="hero-text">
          <h1>HOLA, SOY LUCIA</h1>
          <p className="hero-subtitle">
          Diseño, desarrollo y estrategia digital para crear experiencias únicas que conectan y transforman
          </p>
        </div>

        <div className="hero-buttons" ref={buttonsRef}>
          <a href="#about" className="hero-btn secondary">Conoceme</a>
          <a href="#proyectos" className="hero-btn primary">Explorar proyectos</a>
        </div>
     
        <div className="scroll-down-arrow">
        <svg width="24" height="24" viewBox="0 0 24 24">
          <path d="M12 5v14m0 0l-6-6m6 6l6-6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      
      </section>
      <MovingBanner/>

      <section id="about" className="section">
         <div className="sticker-wrapper">
            <img src={Sticker} className="sticker" />
          </div>
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
