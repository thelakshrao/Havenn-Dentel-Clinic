import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Footer from "./Footer.jsx";
import background5 from "../images/background5.webp";
import background5mobile from "../images/background5mobile.webp";
import background3 from "../images/background3.webp";
import background3mobile from "../images/background3mobile.webp";
import background2 from "../images/background2.webp";
import background2mobile from "../images/background2mobile.webp";
import background1 from "../images/background1.webp";
import background1mobile from "../images/background1mobile.webp";

const BookAppointment = () => {
  const desktopImages = [background1, background2, background3, background5];
  const mobileImages = [
    background1mobile,
    background2mobile,
    background3mobile,
    background5mobile,
  ];

  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const resize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  useEffect(() => {
    const slider = setInterval(() => {
      setIndex((prev) => (prev + 1) % desktopImages.length);
    }, 3000);
    return () => clearInterval(slider);
  }, []);

  const currentImage = isMobile ? mobileImages[index] : desktopImages[index];

  return (
    <>
      <section className="relative w-full h-[110vh] md:h-screen overflow-hidden">
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-700 ease-in-out"
          style={{
            backgroundImage: `url(${currentImage})`,
            filter: "blur(3px)",
          }}
        ></div>
        <div className="absolute inset-0 bg-black/30"></div>

        {/* MAIN CONTENT */}
        <div
          className={`absolute inset-0 flex ${
            isMobile ? "flex-col" : "flex-row"
          } items-center justify-center gap-6 px-4 mt-15 md:px-12`}
        >
          {/* LEFT – APPOINTMENT CARD */}
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className={`${
              isMobile
                ? "w-[90%] p-4 rounded-2xl"
                : "max-w-md w-full p-8 rounded-3xl"
            } bg-white/90 backdrop-blur-xl shadow-xl`}
          >
            <h2
              className={`text-[#12ace5] font-bold text-center ${
                isMobile ? "text-xl mb-3" : "text-3xl md:text-4xl mb-6"
              }`}
            >
              Book Appointment
            </h2>

            <form className="flex flex-col gap-4">
              {/* NAME */}
              <div>
                <label className="text-[#12ace5] font-semibold text-sm">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full p-1 rounded-xl border border-gray-300 outline-none text-sm"
                  placeholder="Enter your name"
                />
              </div>

              {/* EMAIL */}
              <div>
                <label className="text-[#12ace5] font-semibold text-sm">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full p-1 rounded-xl border border-gray-300 outline-none text-sm"
                  placeholder="Enter your email"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="text-[#12ace5] font-semibold text-sm">
                  Phone
                </label>
                <input
                  type="text"
                  className="w-full p-1 rounded-xl border border-gray-300 outline-none text-sm"
                  placeholder="Enter your Phone Number"
                />
              </div>

              {/* MESSAGE */}
              <div>
                <label className="text-[#12ace5] font-semibold text-sm">
                  Message
                </label>
                <textarea
                  rows="3"
                  className="w-full p-1 rounded-xl border border-gray-300 outline-none text-sm"
                  placeholder="Write your message..."
                ></textarea>
              </div>

              {/* BUTTON */}
              <button
                type="submit"
                className="w-full bg-[#12ace5] text-white py-2 rounded-xl font-semibold text-sm hover:bg-[#0e8dbf] transition-all"
              >
                Submit
              </button>
            </form>
          </motion.div>

          {/* RIGHT – TEXT + PHONE */}
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className={`text-white ${
              isMobile ? "text-center px-2 w-[90%]" : "text-left max-w-lg"
            }`}
          >
            <h1
              className={`font-bold drop-shadow-lg ${
                isMobile ? "text-2xl mb-2" : "text-4xl md:text-5xl mb-4"
              }`}
            >
              Your Smile, Our Priority
            </h1>

            <h3
              className={`font-semibold text-blue-200 ${
                isMobile ? "text-base mb-2" : "text-xl md:text-2xl mb-3"
              }`}
            >
              Premium Dental Care in New Delhi
            </h3>

            <p
              className={`drop-shadow-md ${
                isMobile ? "text-sm leading-snug" : "text-lg leading-relaxed"
              }`}
            >
              At Havenn Smile & Aesthetic Studio, we deliver painless and
              advanced dental treatments. From whitening to smile designing —
              our expert team ensures you get the perfect smile you deserve.
            </p>

            <div className="mt-3">
              <a
                href="tel:+919876543210"
                className={`inline-block bg-[#12ace5] text-white font-semibold rounded-xl shadow-lg
      ${isMobile ? "text-xs px-3 py-1.5 w-full" : "text-lg px-6 py-3"}
      text-center`}
              >
                📞 Call: 98765 43210
              </a>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default BookAppointment;
