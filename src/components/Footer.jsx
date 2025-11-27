import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#0a749b] text-white pt-12 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between gap-8">
        {/* Logo & Tagline */}
        <div className="flex flex-col gap-4 md:w-1/3">
          <div className="flex items-center gap-1">
            <img src={logo} alt="Logo" className="w-56 h-30 object-contain" />
          </div>
          <p
            style={{ fontFamily: "Open Sans, sans-serif" }}
            className="text-[#12ace5]"
          >
            Your Smile, Our Passion – Where Beauty Meets Care
          </p>
        </div>

        <div className="flex flex-col gap-4 md:w-1/5">
          <h2
            style={{ fontFamily: "Caveat, cursive" }}
            className="text-lg font-semibold text-[#12ace5]"
          >
            Quick Links
          </h2>
          <ul
            style={{ fontFamily: "Open Sans, sans-serif" }}
            className="flex flex-col gap-2 text-gray-300"
          >
            <li>
              <Link to="/" className="hover:text-[#12ace5] cursor-pointer">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-[#12ace5] cursor-pointer">
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contactus"
                className="hover:text-[#12ace5] cursor-pointer"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        {/* Terms */}
        <div className="flex flex-col gap-4 md:w-1/5">
          <h2
            style={{ fontFamily: "Caveat, cursive" }}
            className="text-lg font-semibold text-[#12ace5]"
          >
            Terms
          </h2>
          <ul
            style={{ fontFamily: "Open Sans, sans-serif" }}
            className="flex flex-col gap-2 text-gray-300"
          >
            <li className="hover:text-[#12ace5] cursor-pointer">
              <Link to="/privacypolicy">Privacy Policy</Link>
            </li>
            <li className="hover:text-[#12ace5] cursor-pointer">
              <Link to="/termsandconditions">Terms and Conditions</Link>
            </li>
          </ul>
        </div>
        {/* Contact Info */}
        <div className="flex flex-col gap-4 md:w-1/4">
          <h2
            style={{ fontFamily: "Caveat, cursive" }}
            className="text-lg font-semibold text-[#12ace5]"
          >
            Contact Info
          </h2>
          <ul
            style={{ fontFamily: "Open Sans, sans-serif" }}
            className="flex flex-col gap-2 text-gray-300"
          >
            <li>Phone: +91 9315220865</li>
            <li>Email: Havennsmilestudio@gmail.com</li>
            <li>Address: E-5/1basement  Malviya Nagar , New Delhi-110017</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        style={{ fontFamily: "Open Sans, sans-serif" }}
        className="mt-12 border-t border-gray-600 pt-4 text-center text-gray-400 text-sm"
      >
        &copy; 2025 Havenn, Skin, and a Smile, Static Studio (Medical Treatment)
      </div>
    </footer>
  );
};

export default Footer;
