import { useEffect, useState, useRef } from 'react';
import '../styles/modal.css';

export default function Modal({ show, onClose, children }) {
  const [isMounted, setIsMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const animationRef = useRef(null);

  useEffect(() => {
    if (show) {
      // Limpiar cualquier temporizador pendiente
      if (animationRef.current) {
        clearTimeout(animationRef.current);
      }
      
      // Montar el componente primero
      setIsMounted(true);
      
      // Forzar un reflow para asegurar que la transición se ejecute
      animationRef.current = setTimeout(() => {
        // Usar requestAnimationFrame para asegurar que el navegador esté listo
        requestAnimationFrame(() => {
          setIsVisible(true);
        });
      }, 50); // Aumentamos ligeramente el tiempo para asegurar el montaje
      
      return () => {
        if (animationRef.current) {
          clearTimeout(animationRef.current);
        }
      };
    } else {
      // Iniciar animación de salida
      setIsVisible(false);
      
      // Esperar a que termine la animación antes de desmontar
      animationRef.current = setTimeout(() => {
        setIsMounted(false);
      }, 350); // Ajustamos para que coincida con la duración de la animación
      
      return () => {
        if (animationRef.current) {
          clearTimeout(animationRef.current);
        }
      };
    }
  }, [show]);

  // Si no está montado, no renderizar nada
  if (!isMounted) return null;

  return (
    <div className={`modal-overlay ${isVisible ? 'show' : ''}`}>
      <div className="modal-content">
        <button 
          className="modal-close" 
          onClick={onClose}
          aria-label="Cerrar modal"
        >
          ×
        </button>
        {children}
      </div>
    </div>
  );
}
