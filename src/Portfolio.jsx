import Navbar from './Navbar.jsx'
import Newsletter from './Newsletter.jsx'
import AboutMe from './AboutMe.jsx'
import Sticker from '../src/assets/Sticker2.png'
import Ticket from '../src/assets/ticket.png'
import StringTie from '../src/assets/image.png'
import Camara from '../src/assets/camara.png'
import Star from '../src/assets/giphy.gif'
import Post from '../src/assets/post.png'
import QR from '../src/assets/qr.png'
import Exclamation from '../src/assets/exclamation.gif'
import '../src/style/Portfolio.css' // Importamos el CSS externo
import React from 'react'
import  MovingBanner from './MovingBanner.jsx'
import Linkedin from '../src/assets/linkedin.svg';
import Dribble from '../src/assets/dribble.svg';
import Github from '../src/assets/github.svg';
import BackstageGif from '../src/assets/backstage.gif'; 
import { useEffect, useRef, useState } from 'react';


const Portfolio = () => {
  const [showStickers, setShowStickers] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const wrapper = wrapperRef.current; // ✅ copia local
  
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowStickers(true);
        }
      },
      { threshold: 0.5 }
    );
  
    if (wrapper) {
      observer.observe(wrapper);
    }
  
    return () => {
      if (wrapper) {
        observer.unobserve(wrapper);
      }
    };
  }, []);
  

  return (
    <div className="portfolio-container">
      <Navbar />
      <section id="inicio" className="section">

      </section>
      <MovingBanner/>

      <section id="about" className="section" >
      <div
        className={`stickers-wrapper ${showStickers ? "show" : ""}`}
        ref={wrapperRef}
      >
          <img src={Sticker} alt="Sticker decorativo" className="sticker main-sticker" />
          <img src={Ticket} alt="Skills ticket" className="sticker ticket" />
          <img src={Exclamation} alt="Exclamacion icono" className="sticker exclamation" />
          <img src={Camara} alt="Foto camara vintage" className="sticker camara" />
          <img src={Post} alt="About post" className="sticker post" />
          <img src={QR} alt="qr" className="sticker qr" />
          <img src={Star} alt="Gif decoracion" className="sticker gif" />
        </div>
      </section>

      <section id="proyectos" className="section">
      </section>

      <section id="newsletter" className="section">
          <div class="newsletter-message">
            <p class="gracias">GRACIAS</p>
            <p class="conectar">Estoy deseando conectar contigo</p>
          </div>
      </section>

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
