import React from "react";
import { FaPhone, FaEnvelope, FaWhatsapp, FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import clinicLogo from "../images/logo.png";

const ContactDetailsSection = () => {
  return (
    <div className="w-full bg-white text-white py-10 px-4">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row gap-4">
        {/* Part 1: Contact Info */}
        <div className="flex-1 bg-[#12ace5] rounded-lg p-6 flex flex-col gap-4">
          <h3 className="text-2xl font-bold mb-4">Contact Info</h3>
          <div className="flex flex-col gap-3 text-white">
            <div className="flex items-center gap-3">
              <FaPhone /> <span>+91 9876543210</span>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope /> <span>contact@clinic.com</span>
            </div>
            <div className="flex items-center gap-3">
              <FaWhatsapp /> <span>+91 9876543210</span>
            </div>
            <div className="flex items-center gap-3">
              <FaInstagram /> <span>@clinic_insta</span>
            </div>
            <div className="flex items-center gap-3">
              <FaFacebook /> <span>@clinic_fb</span>
            </div>
            <div className="flex items-center gap-3">
              <FaLinkedin /> <span>@clinic_linkedin</span>
            </div>
          </div>
        </div>

        {/* Part 2: Logo on dark blurred image */}
        <div className="flex-1 relative rounded-lg overflow-hidden">
          <img
            src={clinicLogo}
            alt="Clinic Background"
            className="w-full h-full object-cover filter brightness-50 blur-sm"
          />
          <img
            src={clinicLogo}
            alt="Clinic Logo"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 object-contain"
          />
        </div>

        {/* Part 3: Google Map */}
        <div className="flex-1 rounded-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14028.568893768956!2d77.22781733131249!3d28.54614720907824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d03e9b8037d7d%3A0x8a16e528e5ffea91!2sBasement%20E%2C%205%2F1%2C%20Block%20E%2C%20Malviya%20Nagar%2C%20New%20Delhi%2C%20Delhi%20110017!5e0!3m2!1sen!2sin!4v1700928745641!5m2!1sen!2sin"
            width="100%"
            height="100%"
            className="border-0"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactDetailsSection;
