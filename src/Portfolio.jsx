import Navbar from './Navbar.jsx'
import AboutMe from './AboutMe.jsx'
import '../src/style/Portfolio.css' // Importamos el CSS externo
import React from 'react'
import  MovingBanner from './MovingBanner.jsx'
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

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
            Diseño, desarrollo y estrategia digital unidas para crear algo único.
          </p>
        </div>

        <div className="hero-buttons" ref={buttonsRef}>
          <a href="#about" className="hero-btn secondary">Sobre mí</a>
          <a href="#proyectos" className="hero-btn primary">Ver proyectos</a>
        </div>
     
        <div className="scroll-down-arrow">
        <svg width="24" height="24" viewBox="0 0 24 24">
          <path d="M12 5v14m0 0l-6-6m6 6l6-6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      
      </section>
      <MovingBanner/>

      <section id="about" className="section">
       
      </section>

      <section id="proyectos" className="section">
       
      </section>

     

      <section id="newsletter" className="section">
        
      </section>

      <section id="contacto" className="contacto-section">
             <div className="contact-content">
            <div className="text-zone">
              <h2>¡TRABAJEMOS JUNTOS!</h2>
              <h3>Conecta y crea sin límites</h3>
              <p>Cuéntame tu visión y veamos cómo podemos hacerla realidad juntos.</p>
        
              <button className="contact-button">Escríbeme</button>
        
              <div className="contact-info">
                <p>tucorreo@example.com</p>
              </div>
            </div>
        
            <div className="icon-zone">
              <div className="social-icons">
                <a href="#" className="social-circle">IG</a>
                <a href="#" className="social-circle">Bē</a>
                <a href="#" className="social-circle">✉️</a>
              </div>
            </div>
          </div>
      </section>

    </div>
  )
}

export default Portfolio
