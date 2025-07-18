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
          <a href="#proyectos" className="hero-btn primary">Ver proyectos</a>
          <a href="#about" className="hero-btn secondary">Sobre mí</a>
        </div>
     
        <div className="scroll-down-arrow">
        <svg width="24" height="24" viewBox="0 0 24 24">
          <path d="M12 5v14m0 0l-6-6m6 6l6-6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      
      </section>
      <MovingBanner/>

        <AboutMe/>
     

      <section id="proyectos" className="section">
       
      </section>

     

      <section id="newsletter" className="section">
        
      </section>

      <section id="contacto" className="section">
       
      </section>

    </div>
  )
}

export default Portfolio
