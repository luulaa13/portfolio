import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "../src/style/AboutMe.css";

gsap.registerPlugin(ScrollTrigger);

const AboutMe = () => {
  const sectionRef = useRef(null);
  const descriptionRef = useRef(null);

  useEffect(() => {
    const q = gsap.utils.selector(sectionRef);

    let ctx = gsap.context(() => {
      // Animación de las palabras
      gsap.from(q(".word"), {
        y: 80,
        opacity: 0,
        duration: 1.2,
        stagger: 0.3,
        ease: "elastic.out(1, 0.5)",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
          once: true,
        },
      });

      // Animación del párrafo
      gsap.from(descriptionRef.current, {
        y: 40,
        opacity: 0,
        duration: 2.5,
        ease: "power2.out",
        delay: 1.5, // un poco después del título
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert(); // cleanup
  }, []);


  const text = ["PERO", "QUIÉN", "ES", "LUCÍA?"];

  return (
    <section id="about" className="aboutme-section" ref={sectionRef}>
      <h2 className="animated-text">
        {text.map((word, i) => (
          <span
            key={i}
            className="word"
            style={{
                display: "inline-block",
                marginRight: i === 1 ? "2rem" : "0.8rem",  // Más espacio después de "QUIÉN"
                position: "relative",
                transform: i % 2 === 0 ? "translateX(-5px)" : "translateX(5px)",
              }}
          >
            {word}
          </span>
        ))}
      </h2>
      <p className="aboutme-description" ref={descriptionRef}>
      Soy diseñadora UX/UI  y desarroladora con sede en Madrid, 
      Me apasiona unir mi amor por la tecnología con mi pasión por el arte y el diseño para crear experiencias 
      digitales que no solo se vean bien, sino que realmente funcionen para las personas.
      Me encanta resolver problemas, aprender constantemente y enfrentar nuevos retos que me mantengan motivada.
      Diseño con propósito, buscando siempre mejorar la vida digital de quíenes usan mis productos.
     
    </p>

    <div className="scopri-wrapper">
    <button className="scopri-btn">
    <div className="text-track">
      <span className="text">CONOCEME MEJOR&nbsp;&nbsp;</span>
      <span className="text">CONOCEME MEJOR&nbsp;&nbsp;</span>
      <span className="text">CONOCEME MEJOR&nbsp;&nbsp;</span>
    </div>
  </button>
  <div className="circle">
    <span className="plus">+</span>
  </div>
</div>
    </section>
  );
};

export default AboutMe;
