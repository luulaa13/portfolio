import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "../src/style/AboutMe.css";

gsap.registerPlugin(ScrollTrigger);

const AboutMe = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const q = gsap.utils.selector(sectionRef);

    let ctx = gsap.context(() => {
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
          once: true,  // <- importante para que se ejecute una sola vez y se quede ahí
        },
      });
    }, sectionRef);

    return () => ctx.revert(); // limpieza al desmontar
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
    </section>
  );
};

export default AboutMe;
