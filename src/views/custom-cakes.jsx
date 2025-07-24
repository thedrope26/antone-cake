import "../styles/custom-cakes.css";
import { useState } from 'react';

const customImages = [
    'custom-cake1.jpg',
    'custom-cake2.jpg',
    'custom-cake3.jpg',
    'custom-cake4.jpg',
    'custom-cake5.jpg',
    'custom-cake6.jpg',
    'custom-cake7.jpg',
    'custom-cake8.jpg',
    'custom-cake9.jpg',
    'custom-cake10.jpg',
    'custom-cake11.jpg',
    'custom-cake12.jpg',
    'custom-cake13.jpg'
];

export default function CustomCakes() {
    const [activeImage, setActiveImage] = useState(0);

    const handleImageChange = () => {
        setActiveImage((prev) => (prev + 1) % customImages.length);
    };

    return (
        <section id="disenos" className="custom-cakes-section">

            <div className='custom-cakes-container'>
                <div className="custom-cakes-content">
                    <div className="custom-cakes-img">
                        {customImages.map((image, index) => (
                            <img 
                                key={index}
                                src={`/img/custom/${image}`} 
                                alt={`Diseño personalizado ${index + 1}`}
                                className={`custom-cakes-img-item ${index === activeImage ? 'active' : ''}`}
                                loading="lazy"
                            />
                        ))}
                    </div>
                </div>
                <div className="custom-cakes-text">
                    <h2>Contamos con diseños personalizados</h2>
                    <p> Por que cada detalle importa. Creamos tu torta a tu gusto. 
                        Cada diseño es hecho con dedicación, pensado en tu estilo y ocasión. 
                        Tú eliges los sabores, colores y decoración, y nosotros lo hacemos 
                        realidad con amor y detalle</p>
                    <button 
                        onClick={handleImageChange} 
                        className="custom-cakes-button"
                    >
                        Ver otros diseños
                    </button>
                </div>
            </div>
        </section>
    )
}
