import Navbar from './Navbar.jsx'
import '../src/style/Portfolio.css' // Importamos el CSS externo
import React from 'react'
import  MovingBanner from './MovingBanner.jsx'

const Portfolio = () => {
  return (
    <div className="portfolio-container">
      <Navbar />
      <section id="inicio" className="hero-section">
        <h1>HOLA, SOY LUCIA</h1>
        <MovingBanner/>
      </section>

      <section id="proyectos" className="section">
       
      </section>

      <section id="sobre-mi" className="section">
       
      </section>

      <section id="newsletter" className="section">
        
      </section>

      <section id="contacto" className="section">
       
      </section>

    </div>
  )
}

export default Portfolio
