import React, { useRef } from "react";
import { Link } from "react-router-dom";

import treatment1 from "../images/treatment1.webp";
import treatment2 from "../images/treatment2.webp";
import treatment3 from "../images/treatment3.webp";
import treatment4 from "../images/treatment4.webp";
import treatment5 from "../images/treatment5.webp";
import treatment6 from "../images/treatment6.webp";
import treatment7 from "../images/treatment7.webp";
import treatment8 from "../images/treatment8.webp";
import treatment9 from "../images/treatment9.webp";
import treatment11 from "../images/treatment11.webp";
import treatment12 from "../images/treatment12.webp";
import treatment13 from "../images/treatment13.webp";
import treatment14 from "../images/treatment14.webp";
import treatment15 from "../images/treatment15.webp";
import treatment16 from "../images/treatment16.webp";
import treatment17 from "../images/treatment17.webp";
import treatment18 from "../images/treatment18.webp";
import treatment19 from "../images/treatment19.webp";
import treatment20 from "../images/treatment20.webp";

const treatments = [
  { name: "Anti Hair Loss Treatment", img: treatment1, desc: "Advanced therapy to reduce hair fall and strengthen roots." },
  { name: "Hair PRP", img: treatment2, desc: "Platelet-rich plasma treatment for hair regrowth." },
  { name: "Hair GFC", img: treatment3, desc: "Growth Factor Concentrate therapy for hair restoration." },
  { name: "Face Mesotherapy", img: treatment4, desc: "Skin rejuvenation with vitamins and hyaluronic acid." },
  { name: "Hydra Facial", img: treatment5, desc: "Deep cleansing and exfoliation for glowing skin." },
  { name: "Oxygeno Facial", img: treatment6, desc: "Oxygen infusion treatment for brightening and hydration." },
  { name: "Chemical Peels", img: treatment7, desc: "Peels for pigmentation, acne, and skin refreshing." },
  { name: "Acne Control Treatment", img: treatment8, desc: "Targeted acne treatment to reduce breakouts." },
  { name: "Acne Scar Treatment", img: treatment9, desc: "Scar reduction with advanced dermatology techniques." },
  { name: "Vampire Facial", img: treatment11, desc: "PRP facial for anti-aging and skin tightening." },
  { name: "Root Canal Treatment", img: treatment12, desc: "Pain-free RCT to save damaged teeth." },
  { name: "Painless Tooth Removal", img: treatment13, desc: "Modern tooth extraction with zero discomfort." },
  { name: "Bleaching", img: treatment14, desc: "Teeth whitening for a brighter smile." },
  { name: "Crown & Bridge", img: treatment15, desc: "Permanent tooth replacement solutions." },
  { name: "Clear Aligners", img: treatment16, desc: "Invisible braces for straightening teeth." },
  { name: "Dental Implants", img: treatment17, desc: "Permanent tooth replacement implants." },
  { name: "Kids Dentistry", img: treatment18, desc: "Child-friendly dental care and treatments." },
  { name: "Metal / Ceramic Braces", img: treatment19, desc: "Braces for teeth alignment." },
  { name: "Cosmetic Dentistry", img: treatment20, desc: "Smile design, reshaping, and aesthetic treatments." },
];

const Treatments = () => {
  const sliderRef = useRef(null);

  const scrollLeft = () => sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
  const scrollRight = () => sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });

  return (
    <section className="w-full bg-white py-16 px-6 md:px-12">
      <h2 className="text-[#12ace5] text-3xl md:text-4xl font-bold text-center mb-10 font-caveat">
        Treatments We Provide
      </h2>

      <div className="relative max-w-7xl mx-auto">
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-[#fefffe] shadow-md rounded-full p-2 z-10 hover:bg-[#12ace5] hover:text-white transition"
        >
          ❮
        </button>

        <div ref={sliderRef} className="flex gap-6 overflow-x-scroll scroll-smooth no-scrollbar py-4">
          {treatments.map((t, i) => (
            <Link
              key={i}
              to={`/treatment/${t.name.replace(/\s+/g, "-")}`}
              className="min-w-[180px] md:min-w-[220px] bg-[#fefffe] rounded-xl shadow-md cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl group"
            >
              <img
                src={t.img}
                alt={t.name}
                loading="lazy"
                decoding="async"
                fetchPriority="low"
                className="w-full h-36 object-cover rounded-t-xl"
              />
              <div className="p-3">
                <h3 className="text-center font-caveat font-semibold text-[#12ace5] group-hover:text-[#12ace5]">
                  {t.name}
                </h3>
                <p className="hidden group-hover:block text-gray-800 mt-2 text-sm text-center font-sans">
                  {t.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-[#fefffe] shadow-md rounded-full p-2 z-10 hover:bg-[#12ace5] hover:text-white transition"
        >
          ❯
        </button>
      </div>
    </section>
  );
};

export default Treatments;
