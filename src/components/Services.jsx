import React, { useState, useEffect } from "react";
import service1 from "../images/service1.webp";
import service2 from "../images/service2.webp";
import service3 from "../images/service3.webp";
import service4 from "../images/service4.webp";

import service1mobile from "../images/service1mobile.webp";
import service2mobile from "../images/service2mobile.webp";
import service3mobile from "../images/service3mobile.webp";
import service4mobile from "../images/service4mobile.webp";

const services = [
  {
    image: service1,
    imageMobile: service1mobile,
    title: "Dental Care",
    desc: "Professional dental treatments including cleaning, whitening, and smile care.",
  },
  {
    image: service2,
    imageMobile: service2mobile,
    title: "Skin Wellness",
    desc: "Advanced skincare treatments to rejuvenate and enhance your natural glow.",
  },
  {
    image: service3,
    imageMobile: service3mobile,
    title: "Hair Treatment",
    desc: "Expert hair restoration and wellness solutions tailored for you.",
  },
  {
    image: service4,
    imageMobile: service4mobile,
    title: "Charitable OPD",
    desc: "Every Friday we conduct a charitable OPD to serve the community with affordable healthcare. All dental procedures are available with up to 70% off.",
  },
];

const Services = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % services.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full bg-[#d7f5fb] py-16 px-6 md:px-12">
      <h2 className="text-[#12ace5] text-3xl md:text-4xl font-bold mb-10 text-center font-caveat">
        Welcome to Havenn Studio
      </h2>

      <div className="max-w-5xl mx-auto bg-[#fefffe] rounded-3xl shadow-lg flex flex-col md:flex-row overflow-hidden">
        <div className="md:w-2/3 w-full h-64 md:h-96 overflow-hidden relative">
          <div
            className="flex transition-transform duration-1000 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {services.map((service, index) => (
              <picture key={index} className="flex-none w-full h-full">
                <source media="(max-width: 768px)" srcSet={service.imageMobile} />
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </picture>
            ))}
          </div>
        </div>

        <div className="md:w-1/3 w-full p-6 flex flex-col justify-center">
          <h3 className="text-2xl font-bold text-[#12ace5] mb-4 font-caveat">
            {services[current].title}
          </h3>
          <p className="text-gray-800 font-sans">{services[current].desc}</p>

          <div className="flex gap-2 mt-6 justify-center md:justify-start">
            {services.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === current ? "bg-[#12ace5] w-6 h-3" : "bg-gray-400 w-3 h-3"
                }`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
