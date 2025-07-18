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
      Como diseñadora UX/UI  y desarroladora con sede en Madrid, 
      puedo combinar mi amor por la tecnología con mi pasión por el arte y el diseño.
      Disfruto usando mi creatividad y mis habilidades de resolución de problemas para crear experiencias digitales 
      que no solo se vean muy bien, sino que también funcionen a la perfección para el usuario.
      Creo que  el aprendizaje continuo es la clave del éxito, y siempre estoy buscando nuevos desafíos para mantenerme motivada y comprometida.
    </p>
    </section>
  );
};

export default AboutMe;
