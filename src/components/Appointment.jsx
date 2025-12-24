import React, { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
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
  const picturesMobile = [section1pic1mobile, section1pic2mobile, section1pic3mobile];
  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const form = useRef();
  const [status, setStatus] = useState("");

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % picturesDesktop.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const pics = isMobile ? picturesMobile : picturesDesktop;

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .sendForm(
        "service_ufyd7im",   
        "template_ne9wa4p",  
        form.current,
        "jJyjQfeftSCMObGKr"  
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus(" Appointment request sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          setStatus(" Failed to send. Please try again later.");
        }
      );
  };

  return (
    <div className="w-full min-h-[500px] md:min-h-[700px] relative flex items-center justify-center overflow-hidden py-6">

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

      <div
        className={`relative z-10 flex flex-col ${
          isMobile ? "w-11/12" : "w-4/5 md:flex-row"
        } bg-transparent rounded-3xl shadow-xl overflow-hidden`}
      >

        <div
          className={`${
            isMobile ? "w-full h-48" : "w-2/5 h-64 md:h-auto"
          } flex items-center justify-center relative overflow-hidden rounded-t-3xl md:rounded-none md:rounded-l-3xl`}
        >
          {pics.map((pic, index) => (
            <img
              key={index}
              src={pic}
              alt="Appointment"
              className={`absolute inset-0 w-full h-full object-cover rounded-t-3xl md:rounded-none md:rounded-l-3xl transition-transform duration-900 ease-in-out ${
                index === current ? "translate-x-0 z-10" : "translate-x-full z-0"
              }`}
            />
          ))}
        </div>

        <div
          className={`${
            isMobile ? "w-full p-4" : "w-3/5 p-6 md:p-8"
          } bg-[#fefffe]/90 flex flex-col justify-center rounded-b-3xl md:rounded-r-3xl md:rounded-bl-none shadow-xl`}
        >
          <h2
            className={`font-bold mb-4 text-[#12ace5] ${
              isMobile ? "text-lg" : "text-2xl"
            }`}
            style={{ fontFamily: "Caveat, cursive" }}
          >
            Book an Appointment →
          </h2>

          <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-3">
            <input
              type="text"
              name="from_name"
              placeholder="Name"
              className="p-2 md:p-3 rounded-lg border border-[#d7f5fb] focus:outline-none focus:ring-2 focus:ring-[#12ace5]"
              required
            />
            <input
              type="email"
              name="reply_to"
              placeholder="Email"
              className="p-2 md:p-3 rounded-lg border border-[#d7f5fb] focus:outline-none focus:ring-2 focus:ring-[#12ace5]"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              className="p-2 md:p-3 rounded-lg border border-[#d7f5fb] focus:outline-none focus:ring-2 focus:ring-[#12ace5]"
              required
            />
            <textarea
              name="message"
              placeholder="Message"
              rows={isMobile ? 3 : 4}
              className="p-2 md:p-3 rounded-lg border border-[#d7f5fb] focus:outline-none focus:ring-2 focus:ring-[#12ace5]"
              required
            ></textarea>

            <button
              type="submit"
              className="bg-[#12ace5] text-white font-semibold py-2 md:py-3 rounded-lg hover:bg-[#0e8dbf] transition-colors"
            >
              Submit
            </button>
          </form>

          {status && <p className="mt-2 text-center text-sm">{status}</p>}
        </div>
      </div>
    </div>
  );
};

export default Appointment;
