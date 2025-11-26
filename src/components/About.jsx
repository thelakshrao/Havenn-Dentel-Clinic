import React from "react";
import doctor1 from "../images/doctor1.webp";
import doctor2 from "../images/doctor1.webp";
import doctor3 from "../images/doctor1.webp";
import doctor1mobile from "../images/doctor1mobile.webp";
import doctor2mobile from "../images/doctor1mobile.webp";
import doctor3mobile from "../images/doctor1mobile.webp";
import whyBig from "../images/why.webp";
import whyMobile from "../images/whymobile.webp";

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
    { img: doctor1, imgMobile: doctor1mobile, name: "Dr. Mahan B", title: "Cosmetic Dentist & Aesthetic Specialist", desc: "BDS | Smile Designing | Full Mouth Rehab" },
    { img: doctor2, imgMobile: doctor2mobile, name: "Dr. ABC", title: "Dermatologist & Skin Specialist", desc: "MD Dermatology | Anti-Ageing Expert" },
    { img: doctor3, imgMobile: doctor3mobile, name: "Dr. XYZ", title: "Hair Restoration Specialist", desc: "Trichologist | Hair Transplant Certified" },
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

        <div className="max-w-6xl mx-auto bg-[#fefffe] rounded-3xl shadow-lg flex flex-col md:flex-row overflow-hidden">
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
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-24">
        <h2
          className="text-4xl font-bold text-center mb-12 text-[#12ace5]"
          style={{ fontFamily: "Caveat, cursive" }}
        >
          Meet Our Team
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {doctors.map((doc, index) => (
            <div
              key={index}
              className="bg-[#fefffe] rounded-xl p-6 pt-14 shadow-xl relative text-center md:text-left"
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

              <div className="mt-10 md:ml-32">
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

                <button
                  className="mt-5 px-6 py-2 bg-[#12ace5] hover:bg-[#d7f5fb] hover:text-black text-white rounded-full shadow-md transition"
                  style={{ fontFamily: "Open Sans, sans-serif" }}
                >
                  Book Appointment
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
