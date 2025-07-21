import { useState } from "react";
import "../styles/Navbar.css"; // Asegúrate de tener tus estilos separados

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Función para cambiar el estado del menú (abrir/cerrar)
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

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
              <a href="/">Inicio</a>
            </div>
          </li>
          <li>
            <div className="nav-item">
              <i className="fa-solid fa-store"></i>
              <a href="/productos">Productos</a>
            </div>
          </li>
          <li>
            <div className="nav-item">
              <i className="fa-solid fa-paint-roller"></i>
              <a href="/disenos">Diseños</a>
            </div>
          </li>
          <li>
            <div className="nav-item">
              <i className="fa-solid fa-envelope-open-text"></i>
              <a href="/contacto">Contacto</a>
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
          <i className="fa-solid fa-xmark"></i> // Icono de "X" cuando el menú está abierto
        ) : (
          <i className="fa-solid fa-bars"></i> // Icono de hamburguesa cuando el menú está cerrado
        )}
      </button>
    </header>
  );
}
