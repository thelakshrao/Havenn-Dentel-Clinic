import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../images/logo.png";

const treatments = [
  { name: "Anti Hair Loss Treatment", slug: "anti-hair-loss-treatment" },
  { name: "Hair PRP", slug: "hair-prp" },
  { name: "Hair GFC", slug: "hair-gfc" },
  { name: "Face Mesotherapy", slug: "face-mesotherapy" },
  { name: "Hydra Facial", slug: "hydra-facial" },
  { name: "Oxygeno Facial", slug: "oxygono-facial" },
  { name: "Chemical Peels", slug: "chemical-peels" },
  { name: "Acne Control Treatment", slug: "acne-control-treatment" },
  { name: "Acne Scar Treatment", slug: "acne-scar-treatment" },
  { name: "Vampire Facial", slug: "vampire-facial" },
  { name: "Root Canal Treatment", slug: "root-canal-treatment" },
  { name: "Painless Tooth Removal", slug: "painless-tooth-removal" },
  { name: "Bleaching", slug: "bleaching" },
  { name: "Crown & Bridge", slug: "crown-bridge" },
  { name: "Clear Aligners", slug: "clear-aligners" },
  { name: "Dental Implants", slug: "dental-implants" },
  { name: "Kids Dentistry", slug: "kids-dentistry" },
  { name: "Metal / Ceramic Braces", slug: "metal-ceramic-braces" },
  { name: "Cosmetic Dentistry", slug: "cosmetic-dentistry" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileTreatOpen, setMobileTreatOpen] = useState(false);
  const [showTreatment, setShowTreatment] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();

  // Navbar scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Reset on route change
  useEffect(() => {
    setIsOpen(false);
    setMobileTreatOpen(false);
    setShowTreatment(false);
    setScrolled(false);
    window.scrollTo(0, 0);
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

          {/* Treatments Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setShowTreatment(true)}
            onMouseLeave={() => setShowTreatment(false)}
          >
            <span className="cursor-pointer">Treatments ↓</span>
            <div
              className={`absolute top-10 left-0 w-50 bg-white shadow-lg z-40 overflow-hidden transition-all duration-300 origin-top ${
                showTreatment
                  ? "max-h-96 opacity-100 scale-y-100"
                  : "max-h-0 opacity-0 scale-y-0"
              }`}
            >
              <div className="flex flex-col px-5 py-5 max-h-80 overflow-y-auto">
                {treatments.map((t, i) => (
                  <Link
                    key={i}
                    to={`/treatment/${t.slug}`}
                    className="py-2 text-black text-sm font-medium hover:text-[#0a749b]"
                  >
                    {t.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <Link to="/contactus">Contact Us</Link>

          <Link
            to="/bookappointment"
            className="ml-4 bg-white text-black px-5 py-2 rounded-full shadow-lg font-semibold"
          >
            Book Appointment
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => {
            setIsOpen(!isOpen);
            setMobileTreatOpen(false);
          }}
          className="md:hidden text-white"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
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
          <Link to="/" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link to="/about" onClick={() => setIsOpen(false)}>
            About Us
          </Link>

          {/* Mobile Treatments */}
          <button
            onClick={() => setMobileTreatOpen(!mobileTreatOpen)}
            className="font-medium"
          >
            Treatments {mobileTreatOpen ? "▲" : "▼"}
          </button>

          {mobileTreatOpen && (
            <div className="w-full py-4 bg-white text-black rounded-xl shadow-lg">
              <div className="flex flex-col gap-2 px-4">
                {treatments.map((t, i) => (
                  <Link
                    key={i}
                    to={`/treatment/${t.slug}`}
                    className="w-full p-3 rounded-xl bg-[#f1f1f1] text-center text-sm font-medium shadow"
                    onClick={() => setIsOpen(false)}
                  >
                    {t.name}
                  </Link>
                ))}
              </div>
            </div>
          )}

          <a href="#blogs">Blogs</a>
          <Link to="/contactus" onClick={() => setIsOpen(false)}>
            Contact Us
          </Link>

          <Link
            to="/bookappointment"
            onClick={() => setIsOpen(false)}
            className="mt-2 bg-white text-black px-5 py-2 rounded-full shadow-lg font-semibold"
          >
            Book Appointment
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
