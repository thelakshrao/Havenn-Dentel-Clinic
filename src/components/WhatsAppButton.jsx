import React from "react";
import whatsappLogo from "../images/WhatsApp.png"; 

const WhatsAppButton = () => {
  const phoneNumber = "9315220865";

  const openWhatsApp = () => {
    const url = `https://wa.me/${phoneNumber}`;
    window.open(url, "_blank");
  };

  return (
    <div
      onClick={openWhatsApp}
      className="cursor-pointer fixed bottom-6 right-6 z-50"
    >
      <img
        src={whatsappLogo}
        alt="WhatsApp"
        className="w-14 h-14 rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
      />
    </div>
  );
};

export default WhatsAppButton;
