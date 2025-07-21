import "../styles/cakes-card.css"
export default function Cake({ CakeName, CakePrice, CakeImg, onClick }) {
  return (
    <article className="estilo_cake-card">
      <div className="estilo_cake-img-container">
        <img src={CakeImg} alt={CakeName} className="estilo_cake-img" />
      </div>
      <div className="estilo_cake-info">
        <h3 className="estilo_cake-title">{CakeName}</h3>
        <h4 className="estilo_cake-price">Precio: {CakePrice}$</h4>
        <button className="estilo_cake-button" onClick={onClick}>
          Ver Detalles
        </button>
      </div>
    </article>
  );
}
