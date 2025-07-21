import "../styles/contact.css"
import React, { useState } from 'react';    
export default function ContactGmail() {
    const [formData, setFormData] = useState({
        name: '',
        gmail: '',
        message: ''
      });
    const handleChange=(e)=>{
        const {id, value} = e.target;
        setFormData(prev => ({
            ...prev,
            [id]: value
        }))
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        const subject = encodeURIComponent("Pedido especial desde la página web");
        const body = encodeURIComponent(
            `Nombre: ${formData.name}\nCorreo: ${formData.gmail}\n\nMensaje:\n${formData.message}`
        );
        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=valladarespedro2016@gmail.com&su=${subject}&body=${body}`;
        window.open(gmailUrl, '_blank');
    }
    return (
        <section className="contact-section">
            <h3>Envíanos un correo electrónico para hacer tu pedido a tu gusto</h3>
            <div className="contact-content">
                <div className="contact-img">
                    <img src="../img/Sending_Emails.svg" alt="Formulario de contacto" />
                </div>
                <div className="contact-form">
                    <form onSubmit={handleSubmit} className="contact-form">
                        <h3>Ingresa tus datos</h3>
                        <div className="form-group">
                            <label htmlFor="name">Nombre</label>
                            <input type="text" id="name" name="name" 
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Ingresa tu nombre" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="gmail">Email</label>
                            <input type="email" id="gmail" name="gmail" 
                            value={formData.gmail}
                            onChange={handleChange}
                            placeholder="Ingresa tu correo electrónico" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Mensaje</label>
                            <textarea id="message" name="message" rows="10"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Ingresa tu mensaje" required></textarea>
                        </div>
                        <button type="submit" 
                        className="submit-btn">
                        <i className="fa-solid fa-envelope"></i>
                            Enviar
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}