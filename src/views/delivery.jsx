import "../styles/delivery.css"
export default function Delivery() {
    return (
        <section className="delivery-section">
            <div className="delivery-container">
                <div className="delivery-img">
                    <img src="../img/atention.png" alt="" />
                </div>
                <div className="delivery-text delivery-content-text">
                <div className="delivery-title">
                    <h2>Nuestro servicio y atencion nos distinguen</h2>
                </div>
                <div className="delivery-content">
                    <div className="delivery-content-item">
                        <i className="fa-solid fa-message"></i>
                        <h3>Atencion personalizada</h3>
                        <p>Nuestra atencion es personalizada y inmediata</p>
                    </div>
                    <div className="delivery-content-item">
                        <i className="fa-solid fa-clock"></i>
                        <h3>Entrega rápida</h3>
                        <p>Entrega en menos de 24 horas</p>
                    </div>
                    <div className="delivery-content-item">
                        <i className="fa-solid fa-map-location-dot"></i>
                        <h3>Amplio alcance</h3>
                        <p>Llegamos a cada rincón de la ciudad para tu comodidad.</p>
                    </div>
                    <div className="delivery-content-item">
                        <i className="fa-solid fa-truck"></i>
                        <h3>Envios multiples</h3>
                        <p>Realiza varios pedidos y recíbelos en una sola entrega.</p>
                    </div>
                </div>
                </div>
            </div>
        </section>
    );
}