import React, { useState, useEffect } from 'react'
import '../src/style/Navbar.css'

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const root = document.documentElement
    if (darkMode) {
      root.classList.add('dark-mode')
    } else {
      root.classList.remove('dark-mode')
    }
  }, [darkMode])

  const toggleMenu = () => setMenuOpen(!menuOpen)
  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <nav className={`navbar ${menuOpen ? 'hidden-navbar' : ''}`}>
        <div className="navbar__logo">
          <img src="/src/assets/logo.png" alt="Logo" className="logo-image" />
        </div>

        <div className="theme-switch">
          <label className="switch">
            <input
              type="checkbox"
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
            />
            <div className="track">
              <div className={`switch-icon ${!darkMode ? 'active' : ''}`}>🌞</div>
              <div className={`switch-icon ${darkMode ? 'active' : ''}`}>🌙</div>
            </div>
          </label>
        </div>



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