export function sendOrderWs({ message }) {
    const encodedMessage = encodeURIComponent(message);
    const phoneNumber = "584125501517";
    const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  
    window.open(url, "_blank");
  }
  