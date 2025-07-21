import { useState } from 'react';
import Cake from '../components/cakes'; // Importa correctamente tu componente
import Modal from './Modal';
import '../styles/menu.css';

const Cakedatas = [
  {
    CakeName: "Torta",
    CakePrice: "10",
    CakeImg: "../img/menu-card/cake.jpg",
    CakeDescription: "Un pastel exquisito con capas tiernas y aromáticas, y un relleno aterciopelado que deleita el paladar. Es el toque dulce ideal para convertir cualquier momento en una ocasión especial.",
    CakeIngredients:"Harina, Mantequilla, Azúcar, Huevos, Leche, Vainilla, Sal",
    CakeFlavors:"Chocolate, Vainilla, Fresa, Frutos Rojos, Limón"
  },
  {
    CakeName: "3 leches",
    CakePrice: "12",
    CakeImg: "../img/menu-card/3leche.jpg",
    CakeDescription:"Un esponjoso bizcocho bañado en una dulce mezcla de tres leches, culminado con suave merengue o crema batida.",
    CakeIngredients:"Bizcocho, Leche Condensada, Leche Evaporada, Crema de Leche, Merengue",

  },
  {
    CakeName: "Pies",
    CakePrice: "8",
    CakeImg: "../img/menu-card/pie.jpg",
    CakeDescription:"Un pie horneado a la perfección con una corteza dorada y crujiente, y un relleno generoso y aromático. Es el postre ideal para compartir o disfrutar en cualquier momento.",
    CakeIngredients:"Harina , Mantequilla, Frutas, Azúcar, Especias Aromáticas",
    CakeFlavors:"Manzana, Limón, Mora, Fresa"
  },
  {
    CakeName: "Gelatinas",
    CakePrice: "5",
    CakeImg: "../img/menu-card/gelatina.jpg",
    CakeDescription: "Una textura vibrante y ligera que se deshace suavemente en tu boca, llena de sabores frutales y un toque dulce. Nuestras gelatinas son el postre perfecto para refrescar y deleitar en cualquier momento.",
    CakeIngredients:"Gelatina, Azúcar, Agua, Crema, Frutos Rojos, Vainilla",
    CakeFlavors:"Manzana, Limón, Mora, Fresa"
  },
];

export default function Menu() {
  const [selectedCake, setSelectedCake] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleShowDetails = (cake) => {
    setSelectedCake(cake);
    setShowModal(true);
  };

  return (
    <section className="menu">
      <div className="menu-title">
        <h2>Te ofrecemos los siguientes productos</h2>
      </div>
      <div className="menu-cards">
        {Cakedatas.map((cake, index) => (
          <Cake
            key={index}
            {...cake}
            onClick={() => handleShowDetails(cake)}
          />
        ))}
      </div>

      <Modal show={showModal} onClose={() => setShowModal(false)}>
        <div className="image-container">
          <img
            src={selectedCake?.CakeImg}
            alt={selectedCake?.CakeName}
          />
        </div>
        <div className="content-container">
          <div className='content-container-description'>
            <h2>{selectedCake?.CakeName}</h2>
            <p><b>Detalles del producto:</b> {selectedCake?.CakeDescription}</p>
            <p><b>Ingredientes:</b> {selectedCake?.CakeIngredients}</p>
            {selectedCake?.CakeFlavors && (
              <p><b>Sabores:</b> {selectedCake.CakeFlavors}</p>
            )}
            <p><b>Tiempo de entrega estimado:</b> 24 horas a 48 horas</p>
            <p><b>Precio de Referencia:</b> {selectedCake?.CakePrice}$</p>
          </div>
          <a 
          className="order-button"
            href={`https://wa.me/584247342619?text=${encodeURIComponent(
              `¡Hola! Estoy interesado en el siguiente producto:
              *Producto:* ${selectedCake?.CakeName}
              *Precio:* ${selectedCake?.CakePrice}$
              *Descripción:* ${selectedCake?.CakeDescription}
              *Ingredientes:* ${selectedCake?.CakeIngredients}
              *Sabores disponibles:* ${selectedCake?.CakeFlavors || 'No especificado'}

              Me gustaría hacer un pedido de este producto.`
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
          >
            Hacer Pedido
          </a>
        </div>
      </Modal>
    </section>
  );
}
