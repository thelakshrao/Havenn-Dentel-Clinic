import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../images/logo.png";

const treatments = [
  "Anti Hair Loss Treatment",
  "Hair PRP",
  "Hair GFC",
  "Face Mesotherapy",
  "Hydra Facial",
  "Oxygeno Facial",
  "Chemical Peels",
  "Acne Control Treatment",
  "Acne Scar Treatment",
  "Vampire Facial",
  "Root Canal Treatment",
  "Painless Tooth Removal",
  "Bleaching",
  "Crown & Bridge",
  "Clear Aligners",
  "Dental Implants",
  "Kids Dentistry",
  "Metal / Ceramic Braces",
  "Cosmetic Dentistry"
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileTreatOpen, setMobileTreatOpen] = useState(false);
  const [showTreatment, setShowTreatment] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();

  // Scroll listener for navbar background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) setScrolled(true);
      else setScrolled(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Reset navbar state on route change
  useEffect(() => {
    setIsOpen(false);
    setMobileTreatOpen(false);
    setShowTreatment(false);
    setScrolled(false);
    window.scrollTo(0, 0); // optional: scroll to top
  }, [location]);

  return (
    <nav
      className={`w-full fixed top-0 left-0 z-50 backdrop-blur-md shadow-md transition-all duration-300 ${
        scrolled ? "bg-[#0a749b]/95" : "bg-[#0a749b]/90"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Logo" className="h-10 w-auto" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10 text-white font-medium relative">
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>

          {/* Desktop Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setShowTreatment(true)}
            onMouseLeave={() => setShowTreatment(false)}
          >
            <span className="cursor-pointer">Treatments ↓</span>
            <div
              className={`absolute top-10 left-0 w-50 bg-white shadow-lg z-40 overflow-hidden transition-all duration-300 origin-top
              ${showTreatment ? "max-h-96 opacity-100 scale-y-100" : "max-h-0 opacity-0 scale-y-0"}`}
            >
              <div className="flex flex-col px-5 py-5 max-h-80 overflow-y-auto">
                {treatments.map((t, i) => (
                  <div
                    key={i}
                    className="py-2 text-black text-sm font-medium hover:text-[#0a749b]"
                  >
                    {t}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <a href="#blogs">Blogs</a>
          <Link to="/contactus">Contact Us</Link>

          <button className="ml-4 bg-white text-black px-5 py-2 rounded-full shadow-lg font-semibold">
            Book Appointment
          </button>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => {
            setIsOpen(!isOpen);
            setMobileTreatOpen(false);
          }}
          className="md:hidden text-white"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden bg-[#0a749b]/90 text-white flex flex-col items-center py-4 gap-4 rounded-b-xl shadow-lg">
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setIsOpen(false)}>About Us</Link>

          {/* OPEN TREATMENTS */}
          <button
            onClick={() => setMobileTreatOpen(!mobileTreatOpen)}
            className="font-medium"
          >
            Treatments {mobileTreatOpen ? "▲" : "▼"}
          </button>

          {mobileTreatOpen && (
            <div className="w-full py-4 bg-white text-black rounded-xl shadow-lg">
              <div className="flex overflow-x-auto gap-4 px-4 snap-x snap-mandatory scrollbar-hide">
                {treatments.map((t, i) => (
                  <div
                    key={i}
                    className="min-w-[90%] snap-center bg-[#f1f1f1] p-4 rounded-xl text-center text-sm font-medium shadow"
                  >
                    {t}
                  </div>
                ))}
              </div>
            </div>
          )}

          <a href="#blogs">Blogs</a>
          <Link to="/contactus" onClick={() => setIsOpen(false)}>Contact Us</Link>

          <button className="mt-2 bg-white text-black px-5 py-2 rounded-full shadow-lg font-semibold">
            Book Appointment
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
