import React, { useState, useEffect, useRef } from "react";
import Background from "../images/background6.webp";
import BackgroundMobile from "../images/background6mobile.webp";
import section2card1 from "../images/appointment2.webp";
import section2card2 from "../images/section1pic1.webp";
import section2card3 from "../images/section1pic2.webp";
import section2card4 from "../images/section1pic3.webp";
import Doctors from "../images/doctor1.webp";
import Review from "./Review.jsx";
import Footer from "./Footer.jsx";
import { Link } from "react-router-dom";

const cards = [
  {
    title: "Consultation",
    desc: "Personalized consultation with our experts.",
    img: section2card1,
  },
  {
    title: "Advanced Treatment",
    desc: "Modern technology for safe and effective treatment.",
    img: section2card2,
  },
  {
    title: "Wellness Services",
    desc: "Holistic services for your overall well-being.",
    img: section2card3,
  },
  {
    title: "Expert Team",
    desc: "Our certified specialists ensure the best care.",
    img: section2card4,
  },
];

const doctors = [
  {
    name: "Dr. Manvi Dixit",
    degree: "BDS, MDS",
    desc: "Expert dentist with 10+ years of experience.",
  },
  {
    name: "Dr. Jane Smith",
    degree: "MBBS, Dermatologist",
    desc: "Specialist in skin and hair treatments.",
  },
  {
    name: "Dr. Mike Brown",
    degree: "MD, Laser & Anti-Ageing",
    desc: "Experienced in advanced laser treatments.",
  },
];

const MainAbout = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const heroRef = useRef(null);
  const teamRef = useRef(null);
  const [heroInView, setHeroInView] = useState(false);
  const [teamInView, setTeamInView] = useState(false);

  // Detect mobile screen
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Intersection Observer for hero and team
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === heroRef.current) setHeroInView(true);
            if (entry.target === teamRef.current) setTeamInView(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (heroRef.current) observer.observe(heroRef.current);
    if (teamRef.current) observer.observe(teamRef.current);

    return () => {
      if (heroRef.current) observer.unobserve(heroRef.current);
      if (teamRef.current) observer.unobserve(teamRef.current);
    };
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section
        ref={heroRef}
        className={`w-full transition-all duration-700 ${
          heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {isMobile ? (
          <div className="flex flex-col">
            <div
              className="w-full h-64 bg-cover bg-center"
              style={{ backgroundImage: `url(${BackgroundMobile})` }}
            ></div>
            <div className="p-4 text-center">
              <h1
                style={{ fontFamily: "Caveat, cursive" }}
                className="text-xl font-bold text-[#12ace5] mb-2"
              >
                Havenn Dental & Wellness Clinic
              </h1>
              <p className="text-black font-semibold mb-1 text-sm">
                Skin • Hair • Dental • Laser • Anti-Ageing
              </p>
              <p className="text-gray-700 text-xs mb-1">
                We provide advanced healthcare services in a comfortable
                environment. Our team of specialists ensures the best treatments
                for all your needs.
              </p>
              <p className="text-gray-700 text-xs">
                Whether it’s a dental procedure, skincare regimen, or wellness
                consultation, we focus on delivering results that matter.
              </p>
            </div>
          </div>
        ) : (
          <div className="flex h-[500px] md:h-[600px]">
            <div
              className="w-2/5 bg-cover bg-center"
              style={{ backgroundImage: `url(${Background})` }}
            ></div>
            <div className="w-3/5 p-8 md:p-16 flex flex-col justify-center">
              <h1
                style={{ fontFamily: "Caveat, cursive" }}
                className="text-3xl md:text-5xl font-bold text-[#12ace5] mb-4"
              >
                Havenn Dental & Wellness Clinic
              </h1>
              <p className="text-black font-semibold mb-4 text-lg">
                Skin • Hair • Dental • Laser • Anti-Ageing
              </p>
              <p className="text-gray-700 mb-4">
                We provide advanced healthcare services in a comfortable
                environment. Our team of specialists ensures the best treatments
                for all your needs.
              </p>
              <p className="text-gray-700">
                Whether it’s a dental procedure, skincare regimen, or wellness
                consultation, we focus on delivering results that matter.
              </p>
            </div>
          </div>
        )}
      </section>

      {/* Cards Section */}
      <section className="w-full py-16 flex flex-col items-center bg-[#d7f5fb]">
        <h2
          style={{ fontFamily: "Caveat, cursive" }}
          className="text-3xl md:text-5xl font-bold text-[#12ace5] text-center"
        >
          Step Inside Havenn
        </h2>

        <div
          className={`flex gap-4 w-[90%] max-w-[1200px] mt-12 ${
            isMobile ? "flex-col" : "flex-row"
          }`}
        >
          {cards.map((card, index) => (
            <div
              key={index}
              onMouseEnter={() => !isMobile && setActiveIndex(index)}
              className={`relative flex flex-col justify-center items-center p-6 rounded-xl shadow-lg text-white transition-all duration-500 cursor-pointer overflow-hidden ${
                isMobile
                  ? "mb-4 w-full"
                  : activeIndex === index
                  ? "flex-3"
                  : "flex-1"
              }`}
            >
              <div
                className="absolute inset-0 bg-cover bg-center scale-105"
                style={{
                  backgroundImage: `url(${card.img})`,
                  filter: "brightness(0.4) blur(4px)",
                }}
              ></div>

              <div
                className={`relative z-10 text-center px-4 transition-opacity duration-500 ${
                  isMobile || activeIndex === index
                    ? "opacity-100"
                    : "opacity-0"
                }`}
              >
                <h3 className="text-xl md:text-3xl font-bold mb-2">
                  {card.title}
                </h3>
                <p className="text-sm md:text-lg">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section
        ref={teamRef}
        className={`w-full max-w-6xl mx-auto py-16 px-4 space-y-16 transition-all duration-700 ${
          teamInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h2
          style={{ fontFamily: "Caveat, cursive" }}
          className="text-3xl md:text-5xl font-bold text-[#12ace5] text-center mb-12"
        >
          Team Behind Our Success
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {doctors.map((doc, index) => (
            <div key={index} className="flex flex-col">
              {/* Desktop Card */}
              <div className="relative overflow-hidden rounded-2xl shadow-lg group cursor-pointer hidden md:block">
                <img
                  src={Doctors}
                  alt={doc.name}
                  className="w-full h-96 object-cover"
                />
                <div className="absolute bottom-4 left-0 w-full text-center z-10">
                  <h3 className="text-xl font-bold text-white drop-shadow-lg">
                    {doc.name}
                  </h3>
                </div>

                <div className="absolute inset-0 bg-[#12ace5]/20 backdrop-blur-md flex flex-col justify-center items-center text-center text-white p-6 transform translate-y-full group-hover:translate-y-0 transition-all duration-500">
                  <h4 className="text-lg font-semibold mb-2">{doc.degree}</h4>
                  <p className="text-sm">{doc.desc}</p>
                </div>
              </div>

              {/* Mobile Card */}
              <div className="relative overflow-hidden rounded-2xl shadow-lg cursor-pointer md:hidden">
                <img
                  src={Doctors}
                  alt={doc.name}
                  className="w-full h-90 object-cover"
                />
                <div className="absolute bottom-2 left-0 w-full text-center z-10">
                  <h3 className="text-sm font-semibold text black drop-shadow-lg">
                    {doc.name}
                  </h3>
                  <p className="text-xs text-[#12ace5] mt-1">{doc.degree}</p>
                  <p className="text-[10px] text-[#12ace5]">{doc.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full flex justify-center">
          <button className="px-8 py-3 bg-[#12ace5] text-white cursor-pointer font-semibold rounded-full shadow-lg hover:bg-[#d7f5fb] hover:text-black transition z-50">
            <Link to="/bookappointment">Book Appointment</Link>
          </button>
        </div>
      </section>

      <Review />
      <Footer />
    </>
  );
};

export default MainAbout;
