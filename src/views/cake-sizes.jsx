import "../styles/cakes-sizes.css"
import { useState } from 'react'

export default function CakeSizes(){
    const [selectedFloor, setSelectedFloor] = useState(1)
    
    const handleFloorClick = (floor) => {
        setSelectedFloor(floor)
    }

    const getImageUrl = (floor) => {
        switch(floor) {
            case 1:
                return "../img/cake-floor1.jpg"
            case 2:
                return "../img/cake-floor2.jpg"
            case 3:
                return "../img/cake-floor3.jpg"
            default:
                return "../img/cake-floor1.jpg"
        }
    }

    return(
        <section className="cakes-sizes-container">

            <div className="cakes-sizes-content">
                <div className="cakes-sizes-buttons">
                    <div className="cakes-sizes-buttons-title">
                        <h2>¿Necesitas más dulce para compartir?</h2>
                        <p>Nuestras tortas se adaptan a tu evento, 
                        disponibles en uno, dos o hasta tres pisos, diseñadas para complacer a todos</p>
                        <h3>Miralo Tu mismo</h3>
                    </div>
                    <div className="cakes-sizes-buttons-content">
                        <button 
                            onClick={() => handleFloorClick(1)}
                            className={selectedFloor === 1 ? 'active' : ''}
                        >
                            1 piso
                        </button>
                        <button 
                            onClick={() => handleFloorClick(2)}
                            className={selectedFloor === 2 ? 'active' : ''}
                        >
                            2 pisos
                        </button>
                        <button 
                            onClick={() => handleFloorClick(3)}
                            className={selectedFloor === 3 ? 'active' : ''}
                        >
                            3 pisos
                        </button>
                    </div>
                </div>
                <div className="cakes-sizes-img">
                    <img src={getImageUrl(1)} alt="Torta de 1 piso" className={selectedFloor === 1 ? 'active' : ''} />
                    <img src={getImageUrl(2)} alt="Torta de 2 pisos" className={selectedFloor === 2 ? 'active' : ''} />
                    <img src={getImageUrl(3)} alt="Torta de 3 pisos" className={selectedFloor === 3 ? 'active' : ''} />
                </div>
            </div>
        </section>
    )
}