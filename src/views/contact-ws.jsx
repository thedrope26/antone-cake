import "../styles/contact.css"
export default function ContactWs() {
    const massage = encodeURIComponent("Hola, vi sus productos y me gustaría hacer un pedido, me gustaría saber más sobre el precio y el envio.");
    const number = "584125501517";
    return (
        <section className="contact-section">
            <div className="contact-content">
                <div className="contact-text">
                    <h3>Escribenos por Whatsapp para hacer tu pedido a tu gusto</h3>
                    <p>
                        Escríbenos para pedidos especiales para tus fiestas, cumpleaños o cualquier 
                        evento que tengas en mente. ¡Nos encargaremos de hacerte llegar el mejor producto a la puerta de tu casa!
                    </p>
                    <a href={`https://wa.me/${number}?text=${massage}`}
                    target="_blank" 
                    rel="noopener noreferrer">
                    <i className="fa-brands fa-whatsapp"></i>
                        Contactar por Whatsapp
                    </a>
                </div>
                <div className="contact-img">
                    <img src="../img/Message_Sent.svg" alt="" />
                </div>
            </div>
        </section>
    );
}