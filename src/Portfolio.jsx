import Navbar from './Navbar.jsx'
import Newsletter from './Newsletter.jsx'
import AboutMe from './AboutMe.jsx'
import Sticker from './Sticker2.png'
import StringTie from './image.png'
import '../src/style/Portfolio.css' // Importamos el CSS externo
import React from 'react'
import  MovingBanner from './MovingBanner.jsx'
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

     <Newsletter/>

      <div className="string-tie-connector">
        <img src={StringTie} alt="Decoración string tie"></img>
      </div>
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
       <div className="email-illustration-row">
          <p className="email">luciauxui<br/>
            @gmail.com</p>

          <div className="illustrations">
            <img src={BackstageGif} alt="Animación Backstage" />
          </div>
         </div>
      </section>

    </div>
  )
}

export default Portfolio
