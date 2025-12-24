import React from "react";
import doctor1 from "../images/doctor1.webp";
import doctor2 from "../images/doctor2.webp";
import doctor3 from "../images/doctor3.webp";
import doctor1mobile from "../images/doctor1.webp";
import doctor2mobile from "../images/doctor2.webp";
import doctor3mobile from "../images/doctor3mobile.webp";
import doctor4 from "../images/profile.png";
import doctor4mobile from "../images/profile.png";
import whyBig from "../images/why.webp";
import whyMobile from "../images/whymobile.webp";
import { Link } from "react-router-dom";

const About = () => {
  const steps = [
    "State-of-the-art Technology",
    "Certified & Experienced Doctors",
    "Hygienic & Safe Environment",
    "Personalized Treatment Plans",
    "Advanced Laser & Aesthetic Equipment",
    "Quick & Comfortable Procedures",
    "Affordable Premium Care",
    "Trusted by Thousands of Patients",
  ];

  const doctors = [
    {
      img: doctor1,
      imgMobile: doctor1mobile,
      name: "Dr. Manvi Dixit",
      title:
        "Dental Surgeon | Root Canal Specialist | Certified Implantologist, Barcelona, Spain | Medical Cosmetologist",
      desc: "BDS | FCE | FCAM",
    },
    {
      img: doctor2,
      imgMobile: doctor2mobile,
      name: "Dr. Karan Tyagi",
      title: "Pediatric Dentist",
      desc: "BDS | MDS",
    },
    {
      img: doctor3,
      imgMobile: doctor3mobile,
      name: "Dr. Subhanshi Mahajan",
      title: "Dental Surgeon",
      desc: "BDS",
    },
    {
      img: doctor4,
      imgMobile: doctor4mobile,
      name: "Dr. Lokesh",
      title: "Orthodontist",
      desc: "BDS | MDS",
    },
  ];

  return (
    <section className="w-full bg-[#d7f5fb] py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2
          className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-[#12ace5]"
          style={{ fontFamily: "Caveat, cursive" }}
        >
          Why Patients Love Us
        </h2>
        <div className="max-w-6xl mx-auto bg-[#fefffe] rounded-3xl shadow-lg flex-col md:flex-row overflow-hidden hidden md:flex">
          <div className="md:w-1/2 w-full p-10 flex flex-col justify-center gap-4">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start gap-3">
                <span
                  className="text-[#12ace5] font-bold text-xl"
                  style={{ fontFamily: "Caveat, cursive" }}
                >
                  {index + 1}.
                </span>
                <p
                  className="text-gray-800 text-lg"
                  style={{ fontFamily: "Open Sans, sans-serif" }}
                >
                  {step}
                </p>
              </div>
            ))}
          </div>

          <div className="md:w-1/2 w-full h-80 md:h-auto">
            <picture>
              <source media="(max-width: 768px)" srcSet={whyMobile} />
              <img
                src={whyBig}
                alt="Why Choose Us"
                loading="lazy"
                decoding="async"
                fetchPriority="low"
                className="w-full h-full object-cover"
              />
            </picture>
          </div>
        </div>

        <div className="flex flex-col gap-4 md:hidden bg-[#fefffe] rounded-2xl shadow-md p-4">
          <div className="flex flex-col gap-2">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start gap-2">
                <span
                  className="text-[#12ace5] font-bold text-base"
                  style={{ fontFamily: "Caveat, cursive" }}
                >
                  {index + 1}.
                </span>
                <p
                  className="text-gray-800 text-sm"
                  style={{ fontFamily: "Open Sans, sans-serif" }}
                >
                  {step}
                </p>
              </div>
            ))}
          </div>

          <div className="w-full h-48 mt-4">
            <picture>
              <source media="(max-width: 768px)" srcSet={whyMobile} />
              <img
                src={whyBig}
                alt="Why Choose Us"
                loading="lazy"
                decoding="async"
                fetchPriority="low"
                className="w-full h-full object-cover rounded-xl"
              />
            </picture>
          </div>
        </div>
      </div>

      <div className="max-w-8xl mx-auto px-6 mt-24">
        <h2
          className="text-4xl font-bold text-center mb-12 text-[#12ace5]"
          style={{ fontFamily: "Caveat, cursive" }}
        >
          Meet Our Team
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {doctors.map((doc, index) => (
            <div
              key={index}
              className="bg-[#fefffe] rounded-xl p-6 pt-14 shadow-xl relative text-center h-full flex flex-col"
            >
              <div className="absolute -top-12 left-1/2 md:left-6 transform -translate-x-1/2 md:translate-x-0">
                <picture>
                  <source media="(max-width: 768px)" srcSet={doc.imgMobile} />
                  <img
                    src={doc.img}
                    alt={doc.name}
                    loading="lazy"
                    decoding="async"
                    fetchPriority="low"
                    className="w-24 h-24 md:w-28 md:h-28 object-cover rounded-full border-4 border-[#d7f5fb] shadow-md"
                  />
                </picture>
              </div>

              <div className="mt-10 flex flex-col items-center text-center">
                <h3
                  className="text-2xl font-bold text-[#12ace5]"
                  style={{ fontFamily: "Caveat, cursive" }}
                >
                  {doc.name}
                </h3>
                <p
                  className="text-[#12ace5] font-semibold"
                  style={{ fontFamily: "Open Sans, sans-serif" }}
                >
                  {doc.title}
                </p>
                <p
                  className="text-gray-800 mt-2"
                  style={{ fontFamily: "Open Sans, sans-serif" }}
                >
                  {doc.desc}
                </p>

                <Link to="/bookappointment">
                  <button className="mt-5 md:mt-16 px-8 py-3 bg-[#12ace5] text-white cursor-pointer font-semibold rounded-full shadow-lg hover:bg-[#d7f5fb] hover:text-black transition z-50 w-full">
                    Book Appointment 📆
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
