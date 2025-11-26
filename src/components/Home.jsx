import React, { useEffect, useState, Suspense } from "react";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import background1 from "../images/background1.webp";
import background1mobile from "../images/background1mobile.webp";

import section1pic1 from "../images/section1pic1.webp";
import section1pic2 from "../images/section1pic2.webp";
import section1pic3 from "../images/section1pic3.webp";

import section1pic1mobile from "../images/section1pic1mobile.webp";
import section1pic2mobile from "../images/section1pic2mobile.webp";
import section1pic3mobile from "../images/section1pic3mobile.webp";

const Services = React.lazy(() => import("./Services"));
const Treatments = React.lazy(() => import("./Treatments"));
const About = React.lazy(() => import("./About"));
const Appointment = React.lazy(() => import("./Appointment"));

const Home = () => {
  const picturesDesktop = [section1pic1, section1pic2, section1pic3];
  const picturesMobile = [
    section1pic1mobile,
    section1pic2mobile,
    section1pic3mobile,
  ];
  const [order, setOrder] = useState([0, 1, 2]);
  const [animateText, setAnimateText] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimateText(true), 300);

    const interval = setInterval(() => {
      setOrder(([a, b, c]) => [b, c, a]);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Navbar />

      <section className="relative w-full h-[90vh] md:h-screen overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${background1})`,
            filter: "blur(3px)",
          }}
        >
          <picture>
            <source media="(max-width: 768px)" srcSet={background1mobile} />
            <img
              src={background1}
              alt="Background"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </picture>
        </div>

        {/* DARKER OVERLAY */}
        <div className="absolute inset-0 bg-black/60"></div>

        <div
          className={`
            absolute z-40 transition-all duration-1000
            ${animateText ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
            left-1/2 top-[85px] -translate-x-1/2 text-center w-[90%]
            md:left-40 md:top-65 md:text-left md:translate-x-0
          `}
        >
          <h3
            className="text-lg font-light mb-2 text-[#12ace5]"
            style={{ fontFamily: "Open Sans, sans-serif" }}
          >
            Comprehensive Care for Your Smile, Skin, and Hair
          </h3>

          <h1
            className="text-5xl md:text-[8rem] font-bold leading-tight text-[#12ace5]"
            style={{ fontFamily: "Caveat, cursive" }}
          >
            Havenn
          </h1>

          <h2
            className="text-3xl font-semibold mt-1 text-white"
            style={{ fontFamily: "Open Sans, sans-serif" }}
          >
            Smile and Aesthetic Studio
          </h2>

          <p
            className="text-lg mt-2 tracking-wide text-white"
            style={{ fontFamily: "Open Sans, sans-serif" }}
          >
            Dental | Skin | Hair | Lasers | Anti-ageing
          </p>

          <button className="mt-6 px-8 py-3 bg-[#12ace5] text-white cursor-pointer font-semibold rounded-full shadow-lg hover:bg-[#d7f5fb] hover:text-black transition">
            Book Appointment
          </button>
        </div>

        <div className="hidden md:block">
          {order.map((idx, i) => (
            <div
              key={i}
              className={`absolute transition-all duration-700 ${
                i === 0
                  ? "right-95 top-28 z-30"
                  : i === 1
                  ? "right-80 top-110 z-30"
                  : "right-50 top-64 z-40"
              }`}
            >
              <picture>
                <source
                  media="(max-width: 768px)"
                  srcSet={picturesMobile[idx]}
                />
                <img
                  src={picturesDesktop[idx]}
                  alt={`Section Image ${i}`}
                  className="w-56 h-72 rounded-3xl object-cover shadow-xl"
                  loading="lazy"
                />
              </picture>
            </div>
          ))}
        </div>

        <div className="md:hidden flex justify-center gap-3 mt-100 mb-10 z-30 relative">
          {picturesDesktop.map((pic, idx) => (
            <picture key={idx}>
              <source media="(max-width: 768px)" srcSet={picturesMobile[idx]} />
              <img
                src={pic}
                alt={`Mobile Section Image ${idx}`}
                loading="lazy"
                className="w-24 h-40 rounded-2xl object-cover shadow-lg"
              />
            </picture>
          ))}
        </div>
      </section>

      <Suspense
        fallback={<div className="text-center p-10 text-[#12ace5]">Loading...</div>}
      >
        <Services />
        <Treatments />
        <About />
        <Appointment />
      </Suspense>

      <Footer />
    </>
  );
};

export default Home;
