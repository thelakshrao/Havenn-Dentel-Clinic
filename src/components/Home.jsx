import React, { useEffect, useState, Suspense } from "react";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import logo from "../images/logo.png";

import background1 from "../images/background1.webp";
import background1mobile from "../images/background1mobile.webp";

import section1pic1 from "../images/section1pic1.webp";
import section1pic2 from "../images/section1pic2.webp";
import section1pic3 from "../images/section1pic3.webp";

import section1pic1mobile from "../images/section1pic1mobile.webp";
import section1pic2mobile from "../images/section1pic2mobile.webp";
import section1pic3mobile from "../images/section1pic3mobile.webp";
import { Link } from "react-router-dom";

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

  const textSlides = [
    {
      type: "heading",
      title: "Comprehensive Care for Your Smile, Skin, and Hair",
      bigTitle: "Havenn",
      treatments: "Skin | Hair | Dental | Wellness",
      subtitle: "Advanced solutions for a confident you.",
    },
    {
      type: "paragraph",
      logo: true,
      text: `At Havenn Smile & Aesthetic Studio, we bring together
advanced technology, artistic precision, and compassionate care.
Our team ensures tailored treatments that enhance your natural
beauty and restore confidence. From dentistry to skin, hair and
laser aesthetics — everything under one roof.`,
    },
    {
      type: "paragraph",
      logo: true,
      text: `Experience personalised treatments designed with expertise.
We focus on long-term results, patient comfort, and natural-looking
enhancements to help you feel your absolute best every day.`,
    },
  ];

  const [textIndex, setTextIndex] = useState(0);
  const [textAnimate, setTextAnimate] = useState(false);

  useEffect(() => {
    setAnimateText(true);
    setTextAnimate(true);

    const imageInterval = setInterval(() => {
      setOrder(([a, b, c]) => [b, c, a]);
    }, 5000);

    const textInterval = setInterval(() => {
      setTextAnimate(false);
      setTimeout(() => {
        setTextIndex((prev) => (prev + 1) % textSlides.length);
        setTextAnimate(true);
      }, 800);
    }, 8000);

    return () => {
      clearInterval(imageInterval);
      clearInterval(textInterval);
    };
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

        <div className="absolute inset-0 bg-black/60"></div>

        <div
          className={`
            absolute z-40 transition-all duration-1000
            ${
              animateText
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }
            left-1/2 top-[85px] -translate-x-1/2 text-center w-[90%]
            md:left-40 md:top-65 md:text-left md:translate-x-0
          `}
        >
          <div
            className={`
              transition-all duration-700
              ${
                textAnimate
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }
            `}
          >
            {textSlides[textIndex].type === "heading" ? (
              <div className="flex flex-col items-center md:items-start">
                <h3
                  className="text-lg font-light mb-2 text-[#12ace5]"
                  style={{ fontFamily: "Open Sans, sans-serif" }}
                >
                  {textSlides[textIndex].title}
                </h3>

                <h1
                  className="text-5xl md:text-[8rem] font-bold leading-tight text-[#12ace5]"
                  style={{ fontFamily: "Caveat, cursive" }}
                >
                  {textSlides[textIndex].bigTitle}
                </h1>

                <h2
                  className="text-3xl font-semibold mt-1 text-white"
                  style={{ fontFamily: "Open Sans, sans-serif" }}
                >
                  {textSlides[textIndex].treatments}
                </h2>

                <p
                  className="text-white text-md md:text-lg font-light mt-2"
                  style={{ fontFamily: "Open Sans, sans-serif" }}
                >
                  {textSlides[textIndex].subtitle}
                </p>
              </div>
            ) : (
              <div className="flex flex-col items-center md:items-start">
                {textSlides[textIndex].logo && (
                  <img src={logo} alt="Logo" className="w-40 mb-3 opacity-90" />
                )}
                <p
                  className="text-white text-md md:text-lg leading-relaxed max-w-lg"
                  style={{ fontFamily: "Open Sans, sans-serif" }}
                >
                  {textSlides[textIndex].text}
                </p>
              </div>
            )}
          </div>

          <Link to="/bookappointment">
            <button className="mt-5 md:mt-16 px-8 py-3 bg-[#12ace5] text-white cursor-pointer font-semibold rounded-full shadow-lg hover:bg-[#d7f5fb] hover:text-black transition z-50 w-60">
              Book Appointment →
            </button>
          </Link>
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

        <div className="md:hidden flex justify-center gap-3 mt-108 mb-10 z-30 relative">
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
        fallback={
          <div className="text-center p-10 text-[#12ace5]">Loading...</div>
        }
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
