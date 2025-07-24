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
            <div className="nav-item">
              <i className="fa-solid fa-house"></i>
              <a href="#home" onClick={closeMenu}>Inicio</a>
            </div>
          </li>
          <li>
            <div className="nav-item">
              <i className="fa-solid fa-store"></i>
              <a href="#productos" onClick={closeMenu}>Productos</a>
            </div>
          </li>
          <li>
            <div className="nav-item">
              <i className="fa-solid fa-paint-roller"></i>
              <a href="#disenos" onClick={closeMenu}>Diseños</a>
            </div>
          </li>
          <li>
            <div className="nav-item">
              <i className="fa-solid fa-envelope-open-text"></i>
              <a href="#contacto" onClick={closeMenu}>Contacto</a>
            </div>
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
