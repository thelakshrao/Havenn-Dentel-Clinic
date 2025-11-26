import React, { useState, useEffect, useRef } from "react";
import Background from "../images/background6.webp";
import BackgroundMobile from "../images/background6mobile.webp";
import section2card1 from "../images/appointment2.webp";
import section2card2 from "../images/section1pic1.webp";
import section2card3 from "../images/section1pic2.webp";
import section2card4 from "../images/section1pic3.webp";

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

const MainAbout = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const heroRef = useRef(null);
  const [heroInView, setHeroInView] = useState(false);

  // Detect mobile screen
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Intersection Observer for animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === heroRef.current) setHeroInView(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (heroRef.current) observer.observe(heroRef.current);

    return () => {
      if (heroRef.current) observer.unobserve(heroRef.current);
    };
  }, []);

  return (
    <>
      <section
        ref={heroRef}
        className={`w-full transition-all duration-700 ${
          heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {isMobile ? (
          // Mobile Layout: Image on top, text below, very small text
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
          // Desktop Layout: Image left, text right
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
          className="text-4xl md:text-5xl font-bold text-[#12ace5] text-center"
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
                  ? "flex-1 mb-4"
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
                <h3 className="text-2xl md:text-3xl font-bold mb-2">
                  {card.title}
                </h3>
                <p className="text-base md:text-lg">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default MainAbout;
