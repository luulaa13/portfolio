import React, { useState } from 'react'
import '../src/style/Navbar.css'


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen(!menuOpen)
  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <nav className={`navbar ${menuOpen ? 'hidden-navbar' : ''}`}>
        <div className="navbar__logo">
         
        </div>
 {/* Eliminado el switch de tema */}

 <div className="navbar__menu" onClick={toggleMenu}>
          <div className="hamburger">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>

      {/* Cortina con bordes redondeados */}
      <div className={`dropdown-curtain ${menuOpen ? 'open' : ''}`}>
        <button className="close-button" onClick={closeMenu}>✕</button>
        <ul>
          <li><a href="#inicio" onClick={closeMenu}>Inicio</a></li>
          <li><a href="#about" onClick={closeMenu}>About</a></li>
          <li><a href="#proyectos" onClick={closeMenu}>Proyectos</a></li>
          <li><a href="#newsletter" onClick={closeMenu}>Newsletter</a></li>
          <li><a href="#contacto" onClick={closeMenu}>Contacto</a></li>
        </ul>
      </div>

      {menuOpen && (
        <div className="backdrop" onClick={closeMenu}></div>
      )}
    </>
  )
}

export default Navbar