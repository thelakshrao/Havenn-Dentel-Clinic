import React, { useState, useEffect } from "react";
import Footer from "./Footer.jsx";
import ContactDetailsSection from "./ContactDetailsSection.jsx";
import Background3 from "../images/background3.webp";
import Background3Mobile from "../images/background3mobile.webp";
import cardImg1 from "../images/appointment2.webp";
import cardImg2 from "../images/section1pic1.webp";
import cardImg3 from "../images/section1pic2.webp";

const ContactUs = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const cards = [
    {
      title: "Call Us",
      text: "Reach our dental clinic via phone.\nBook your appointments easily.\nOur staff is available Mon-Sat, 9AM-6PM.",
      image: cardImg1,
    },
    {
      title: "Email Us",
      text: "Send us an email for consultation.\nWe respond within 24 hours.\nAttach any dental reports for faster service.",
      image: cardImg2,
    },
    {
      title: "Visit Us",
      text: "Our clinic welcomes walk-ins.\nSchedule your visit today.\nWe maintain high hygiene and safety standards.",
      image: cardImg3,
    },
  ];

  const backgroundTop = isMobile ? Background3Mobile : Background3;

  // Mobile slider effect
  useEffect(() => {
    if (isMobile) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % cards.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isMobile, cards.length]);

  return (
    <>
    <div className="w-full">
      {/* Section 1 */}
      <div
        className={`w-full ${isMobile ? "h-110" : "h-[550px]"} flex flex-col items-center justify-center relative`}
        style={{
          backgroundImage: `url(${backgroundTop})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Desktop: 3 static cards */}
        {!isMobile && (
          <div className="flex flex-row gap-10 items-center justify-center p-4 mt-18">
            {cards.map((card, index) => (
              <div
                key={index}
                className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden relative shadow-2xl"
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover filter brightness-50"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                  <h3 className="text-white text-2xl font-bold mb-2">{card.title}</h3>
                  <p className="text-white text-sm whitespace-pre-line">{card.text}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Mobile: single card slider */}
        {isMobile && (
          <div className="relative top-8 w-full h-full flex items-center justify-center overflow-hidden">
            {cards.map((card, index) => (
              <div
                key={index}
                className={`absolute w-72 h-72 rounded-full overflow-hidden shadow-2xl transition-all duration-700 ease-in-out
                  ${index === currentIndex ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"}
                `}
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover filter brightness-50"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                  <h3 className="text-white text-xl font-bold mb-1">{card.title}</h3>
                  <p className="text-white text-sm whitespace-pre-line">{card.text}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
    <ContactDetailsSection/>
    <Footer/>
    </>
  );
};

export default ContactUs;