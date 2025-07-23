import { useEffect, useState, useRef } from 'react';
import '../styles/modal.css';

export default function Modal({ show, onClose, children }) {
  const [isMounted, setIsMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const animationRef = useRef(null);

  useEffect(() => {
    if (show) {
      if (animationRef.current) {
        clearTimeout(animationRef.current);
      }
      setIsMounted(true);
      animationRef.current = setTimeout(() => {
        requestAnimationFrame(() => {
          setIsVisible(true);
        });
      }, 50); 
      
      return () => {
        if (animationRef.current) {
          clearTimeout(animationRef.current);
        }
      };
    } else {
    
      setIsVisible(false);
      
      animationRef.current = setTimeout(() => {
        setIsMounted(false);
      }, 350); 
      
      return () => {
        if (animationRef.current) {
          clearTimeout(animationRef.current);
        }
      };
    }
  }, [show]);

 
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
