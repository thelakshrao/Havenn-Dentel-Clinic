import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-[#0a749b]/95 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer">
          <Link to="/">
            <img src={logo} alt="Clinic Logo" className="w-36 h-10 object-cover" />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10 text-white font-medium">
          <Link to="/" className="hover:text-[#12ace5] duration-300">Home</Link>
          <Link to="/about" className="hover:text-[#12ace5] duration-300">About Us</Link>
          <a href="#treatments" className="hover:text-[#12ace5] duration-300">Treatments ↓</a>
          <a href="#blogs" className="hover:text-[#12ace5] duration-300">Blogs</a>
          <Link to="/contactus" className="hover:text-[#12ace5] duration-300">Contact Us</Link>

          <button className="ml-4 bg-white hover:bg-[#12ace5] hover:text-white text-black px-5 py-2 rounded-full font-semibold shadow-lg duration-300">
            Book Appointment
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
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
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0a749b]/90 text-white flex flex-col items-center py-4 gap-4 rounded-b-xl shadow-lg backdrop-blur-md">
          <Link to="/" onClick={() => setIsOpen(false)} className="hover:text-[#12ace5]">Home</Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className="hover:text-[#12ace5]">About Us</Link>
          <a href="#treatments" onClick={() => setIsOpen(false)} className="hover:text-[#12ace5]">Treatments</a>
          <a href="#blogs" onClick={() => setIsOpen(false)} className="hover:text-[#12ace5]">Blogs</a>
          <Link to="/contactus" onClick={() => setIsOpen(false)} className="hover:text-[#12ace5]">Contact Us</Link>
          <button className="mt-2 bg-white hover:bg-[#12ace5] hover:text-white text-black px-5 py-2 rounded-full font-semibold shadow-lg duration-300">
            Book Appointment
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
