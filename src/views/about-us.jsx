import "../styles/contact.css"
export default function AboutUs() {
    return (
        <section className="contact-section">
            <div className="contact-content">
                <div className="contact-img">
                    <img src="../img/chatting-42.svg" alt="" />
                </div>
                <div className="contact-text">
                    <h3>Visita nuestro perfil en Instagram</h3>
                    <p>
                    ¡No te pierdas nada! Síguenos en Instagram y sé el primero en descubrir nuestros últimos y deliciosos productos.
                    Te esperamos
                    </p>
                    <a href="https://www.instagram.com/antonecake/" target="_blank">
                        <i className="fa-brands fa-instagram"></i>
                        Vamos a la tienda
                    </a>
                </div>
            </div>
        </section>
    );
}