import React, { useState } from "react";
import "../src/style/Newsletter.css"; // Usa tu CSS existente

export default function Newsletter() {
  const [abierto, setAbierto] = useState(false);

  const toggleCarta = () => {
    setAbierto(!abierto);
  };

  return (
    <>
      <div
        className="contenedor"
        id="AbrirContenedor"
        onClick={toggleCarta}
        style={{ cursor: "pointer" }}
      >
        <div className={`superior ${abierto ? "abrir-superior" : ""}`}></div>

        <div className={`mensaje ${abierto ? "abrir-mensaje" : ""}`}>
          El amor está en las pequeñas cosas, en los momentos compartidos, en las
          sonrisas y en los gestos que nos hacen sentir vivos. Hoy celebramos esos
          detalles que hacen que el mundo sea un lugar más bonito
          <p>Alejandro.</p>
        </div>

        <div className="carta">
        
        </div>
      </div>
    </>
  );
}
