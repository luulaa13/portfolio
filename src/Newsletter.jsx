import React, { useState } from "react";
import "../src/style/Newsletter.css"; // Asegúrate de importar tu CSS aquí

const CartaInteractiva = () => {
  const [abierta, setAbierta] = useState(false);

  const manejarClick = () => {
    setAbierta(!abierta);
  };

  return (
 <section id="newsletter" className="section">
  <div className="newsletter-wrapper">
    {/* Columna izquierda */}
    <div className="columna-izquierda">
      <p className="texto-secreto">💌 Pulsa para abrir la carta secreta</p>
      <img
        src="/flecha.gif"
        alt="Flecha apuntando al sobre"
        className="flecha"
      />
      <div
        className="contenedor"
        id="AbrirContenedor"
        onClick={manejarClick}
        style={{ cursor: "pointer" }}
      >
        <div className={`superior ${abierta ? "abrir-superior" : ""}`}></div>
        <div className={`mensaje ${abierta ? "abrir-mensaje" : ""}`}></div>
        <div className="carta"></div>
      </div>
    </div>

    {/* Columna derecha */}
    <div className="columna-derecha">
      <h3>📝 Últimos posts</h3>
      <ul className="lista-posts">
        <li>
          <strong>✦ Cómo elegir colores UX</strong>
          <p>Trucos rápidos para crear una paleta usable sin romperte.</p>
        </li>
        <li>
          <strong>✦ Devs que odian CSS</strong>
          <p>Cómo sobrevivir al estilo sin perder la cabeza (ni el layout).</p>
        </li>
        <li>
          <strong>✦ Prototipos rápidos</strong>
          <p>Herramientas para validar ideas sin escribir una línea de código.</p>
        </li>
      </ul>
    </div>
  </div>
</section>

  );
};

export default CartaInteractiva;
