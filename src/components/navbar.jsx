import { useState } from "react";
import "../styles/navbar.css";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false); // ✅ Función para cerrar menú

  return (
    <header className="header">
      <a href="/">
        <img src="../img/logo.png" alt="Logo de la tienda" />
      </a>
      <nav className={`nav-container ${isMenuOpen ? "open" : ""}`}>
        <ul>
          <li>
            <a href="#home" className="nav-item" onClick={closeMenu}>
              <i className="fa-solid fa-house"></i>
              <span>Inicio</span>
            </a>
          </li>
          <li>
            <a href="#productos" className="nav-item" onClick={closeMenu}>
                <i className="fa-solid fa-store"></i>
                <span>Productos</span>
            </a>
          </li>
          <li>
            <a href="#disenos" className="nav-item" onClick={closeMenu}>
              <i className="fa-solid fa-paint-roller"></i>
              <span>Diseños</span>
            </a>
          </li>
          <li>
            <a href="#contacto" className="nav-item" onClick={closeMenu}>
              <i className="fa-solid fa-envelope-open-text"></i>
              <span>Contacto</span>
            </a>
          </li>
        </ul>
      </nav>

      <button
        className="hamburger"
        onClick={toggleMenu}
        aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
      >
        {isMenuOpen ? (
          <i className="fa-solid fa-xmark"></i>
        ) : (
          <i className="fa-solid fa-bars"></i>
        )}
      </button>
    </header>
  );
}
