import React, { useState, useEffect } from "react";
import background2 from "../images/background2.webp";
import background2mobile from "../images/background2mobile.webp";
import section1pic1 from "../images/appointment1.webp";
import section1pic2 from "../images/appointment2.webp";
import section1pic3 from "../images/appointment3.webp";

import section1pic1mobile from "../images/appointment1mobile.webp";
import section1pic2mobile from "../images/appointment2mobile.webp";
import section1pic3mobile from "../images/appointment3mobile.webp";

const Appointment = () => {
  const picturesDesktop = [section1pic1, section1pic2, section1pic3];
  const picturesMobile = [
    section1pic1mobile,
    section1pic2mobile,
    section1pic3mobile,
  ];
  const [current, setCurrent] = useState(0);


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % picturesDesktop.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className=" w-full min-h-[700px] relative flex items-center justify-center overflow-hidden py-6"
    >
      <div className="absolute inset-0 bg-cover bg-center">
        <picture>
          <source media="(max-width: 768px)" srcSet={background2mobile} />
          <img
            src={background2}
            alt="Appointment Background"
            className="w-full h-full object-cover"
            style={{ filter: "blur(4px)" }}
            loading="lazy"
          />
        </picture>
      </div>

      <div className="absolute inset-0 bg-[#000000]/30"></div>

      <div className="relative z-10 flex w-11/12 md:w-4/5 bg-transparent rounded-3xl shadow-xl overflow-hidden flex-col md:flex-row">
        <div className="w-full md:w-2/5 h-64 md:h-auto flex items-center justify-center relative overflow-hidden rounded-t-3xl md:rounded-none md:rounded-l-3xl">
          {picturesDesktop.map((pic, index) => (
            <picture
              key={index}
              className={`
                absolute inset-0 transition-transform duration-900 ease-in-out
                ${index === current ? "translate-x-0 z-10" : "translate-x-full z-0"}
              `}
            >
              <source
                media="(max-width: 768px)"
                srcSet={picturesMobile[index]}
              />
              <img
                src={pic}
                alt="Appointment"
                className="w-full h-full object-cover rounded-t-3xl md:rounded-none md:rounded-l-3xl"
              />
            </picture>
          ))}
        </div>

        <div className="w-full md:w-3/5 p-6 md:p-8 bg-[#fefffe]/90 flex flex-col justify-center rounded-b-3xl md:rounded-r-3xl md:rounded-bl-none shadow-xl">
          <h2
            className="text-xl md:text-2xl font-bold mb-6 text-[#12ace5]"
            style={{ fontFamily: "Caveat, cursive" }}
          >
            Book an Appointment
          </h2>

          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Name"
              className="p-3 rounded-lg border border-[#d7f5fb] focus:outline-none focus:ring-2 focus:ring-[#12ace5]"
              style={{ fontFamily: "Open Sans, sans-serif" }}
            />
            <input
              type="email"
              placeholder="Email"
              className="p-3 rounded-lg border border-[#d7f5fb] focus:outline-none focus:ring-2 focus:ring-[#12ace5]"
              style={{ fontFamily: "Open Sans, sans-serif" }}
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="p-3 rounded-lg border border-[#d7f5fb] focus:outline-none focus:ring-2 focus:ring-[#12ace5]"
              style={{ fontFamily: "Open Sans, sans-serif" }}
            />
            <textarea
              placeholder="Message"
              rows="4"
              className="p-3 rounded-lg border border-[#d7f5fb] focus:outline-none focus:ring-2 focus:ring-[#12ace5]"
              style={{ fontFamily: "Open Sans, sans-serif" }}
            ></textarea>

            <button
              type="submit"
              className="bg-[#12ace5] text-white font-semibold py-3 rounded-lg hover:bg-[#d7f5fb] hover:text-black transition-colors"
              style={{ fontFamily: "Open Sans, sans-serif" }}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
