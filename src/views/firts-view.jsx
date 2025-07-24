import "../styles/style-menu.css"

export default function FirtsView(){
    const message = encodeURIComponent("Hola, vi sus productos y me gustaría hacer un pedido, me gustaría saber más sobre el precio y el envio.");
    const number = "584125501517";
    
    return (
        <section id="home" className="style-menu-container">
            <div className="style-menu-img">
                <img src="../img/logo.png" alt="Logo de AntoneCake" loading="lazy"/>
            </div>
            <div className="style-menu-text">
                <h1>AntoneCake</h1>
                <p>La mejor pastelería de la ciudad, donde la creatividad de nuestros 
                diseños transforma cada pastel en una obra de arte. Disfruta de la máxima 
                calidad en cada bocado y de una atención personalizada que hace tu experiencia 
                tan dulce como nuestros postres.</p>
                <h2>Ponte en contacto con nosotros ahora</h2>
                <div className="social-buttons">
                    <a 
                        href={`https://wa.me/${number}?text=${message}`}
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        <i className="fa-brands fa-whatsapp"></i>Whatsapp
                    </a>
                    <a 
                        href="https://www.instagram.com/antonecake/" 
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fa-brands fa-instagram"></i>Instagram
                    </a>
                </div>
            </div>
        </section>
    )
}