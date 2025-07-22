import React, { useState } from "react";
import "../src/style/Newsletter.css"; // Asegúrate de importar tu CSS aquí

const CartaInteractiva = () => {
  const [abierta, setAbierta] = useState(false);

  const manejarClick = () => {
    setAbierta(!abierta);
  };

  return (
    <section id="newsletter" className="section">
      <div
        className="contenedor"
        id="AbrirContenedor"
        onClick={manejarClick}
        style={{ cursor: "pointer" }}
      >
        <div className={`superior ${abierta ? "abrir-superior" : ""}`}></div>
        <div className={`mensaje ${abierta ? "abrir-mensaje" : ""}`}>
        
         
        </div>
        <div className="carta"></div>
      </div>
    </section>
  );
};

export default CartaInteractiva;
