import Navbar from '../components/Navbar'
import React from 'react'

const Portfolio = () => {
  return (
    <div>
      <Navbar />
      {/* Aquí van tus secciones futuras */}
      <section id="proyectos" style={{ paddingTop: '100px' }}>Proyectos</section>
      <section id="sobre-mi">Sobre mí</section>
      <section id="newsletter">Newsletter</section>
      <section id="contacto">Contacto</section>
    </div>
  )
}

export default Portfolio
