import React, { useState, useEffect, useRef } from "react";
import Background from "../images/background6.webp";
import section2card1 from "../images/appointment2.webp";
import section2card2 from "../images/section1pic1.webp";
import section2card3 from "../images/section1pic2.webp";
import section2card4 from "../images/section1pic3.webp";
import Doctors from "../images/doctor1.webp";
import BackgroundDesktop from "../images/background3.webp";
import BackgroundMobile from "../images/background3mobile.webp";
import Footer from "./Footer.jsx";

const MainAbout = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const heroRef = useRef(null);
  const teamRef = useRef(null);
  const [heroInView, setHeroInView] = useState(false);
  const [teamInView, setTeamInView] = useState(false);

//   const [rating, setRating] = useState(5);
//   const [name, setName] = useState("");
//   const [text, setText] = useState("");

//   const [reviews, setReviews] = useState(() => {
//     const storedReviews = localStorage.getItem("reviews");
//     if (!storedReviews) {
//       return [
//         {
//           name: "Nikhat Khan",
//           text: "I was facing a lot of hair fall, and my hair growth had completely stopped. No matter what I tried, nothing seemed to work. But after first session, I started noticing a big difference. My hair fall has reduced a lot, and new hair has started growing again. My hair now feels stronger, healthier, and more voluminous. I’m really happy with the results and would definitely recommend it to anyone struggling with hair fall problems. I am extremely grateful to Dr. Manvi.",
//           rating: 5,
//         },
//         {
//           name: "Pawan Diwania",
//           text: "I recently had a Root Canal Treatment (RCT) at Havenn Smile And Aesthetic Studio and the experience was excellent. The doctor is highly knowledgeable and made the whole process smooth and almost painless. What I really liked is that they only charge for what’s necessary—no extra or unnecessary treatments. Everything felt honest and professional. Definitely a place you can trust for quality dental care.",
//           rating: 5,
//         },
//         {
//           name: "Sumit Dixit",
//           text: "Must visit if you are facing any kind teeth problems and if you want to save your smile Dr. Manvi done a great job",
//           rating: 5,
//         },
//         {
//           name: "Harshita Choudhary",
//           text: "I have struggled with thin and sparse hair since early thirties. My experience with Dr. Manvi has been truly amazing. Now, I feel confident with my hair. I have tried countless products and treatments but her treatment worked like magic for me.",
//           rating: 5,
//         },
//         {
//           name: "Abhimanyu Singh",
//           text: "I recently had a Root Canal Treatment (RCT) at Havenn Smile And Aesthetic Studio and the experience was excellent. The doctor is highly knowledgeable and made the whole process smooth and almost painless.",
//           rating: 5,
//         },
//         {
//           name: "Vishu Tanwar",
//           text: "My experience was excellent, and my skin was glowing. The doctors are highly trained, and Dr. Manvi is very kind and polite. I will definitely visit again in the future. If you're looking for a clinic for perfect skin, this is the right place. Go for it.",
//           rating: 5,
//         },
//       ];
//     }

//     try {
//       const parsed = JSON.parse(storedReviews);
//       return Array.isArray(parsed) ? parsed : [];
//     } catch (err) {
//       return [];
//     }
//   });

//   useEffect(() => {
//     localStorage.setItem("reviews", JSON.stringify(reviews));
//   }, [reviews]);

  // Detect mobile screen
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Intersection Observer for animations
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

  // Add review handler
//   const handleAddReview = (e) => {
//     e.preventDefault();
//     if (name && text) {
//       setReviews([{ name, text, rating }, ...reviews]);
//       setName("");
//       setText("");
//       setRating(5);
//     }
//   };

  const cards = [
    {
      title: "Advanced Dental Care",
      desc: "Providing high-quality dental treatments using modern technology. From routine checkups to complex procedures, your smile is our priority.",
      img: section2card1,
    },
    {
      title: "Skin & Hair Treatments",
      desc: "Specialized care for healthy skin and hair tailored to you. Treatments include rejuvenation, hair restoration, and personalized skincare.",
      img: section2card2,
    },
    {
      title: "Laser & Anti-Ageing",
      desc: "Innovative treatments to keep you looking youthful and fresh using cutting-edge laser and anti-ageing technologies.",
      img: section2card3,
    },
    {
      title: "Wellness & Consultation",
      desc: "Expert advice and wellness plans for your overall health. We guide you to holistic wellbeing and lifestyle improvements.",
      img: section2card4,
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section
        ref={heroRef}
        className={`flex w-full ${
          isMobile ? "flex-col h-auto" : "h-[500px] md:h-[600px]"
        } transition-all duration-700 ${
          heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div
          className={`${isMobile ? "w-full h-64" : "w-2/5"} bg-cover bg-center`}
          style={{ backgroundImage: `url(${Background})` }}
        ></div>

        <div
          className={`${
            isMobile ? "w-full p-6" : "w-3/5 p-8 md:p-16"
          } flex flex-col justify-center transition-all duration-700`}
        >
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
            environment. Our team of specialists ensures the best treatments for
            all your needs.
          </p>
          <p className="text-gray-700">
            Whether it’s a dental procedure, skincare regimen, or wellness
            consultation, we focus on delivering results that matter.
          </p>
        </div>
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

      {/* Team Section */}
      <section
        ref={teamRef}
        className={`w-full max-w-6xl mx-auto py-16 px-4 space-y-16 transition-all duration-700 ${
          teamInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h2
          style={{ fontFamily: "Caveat, cursive" }}
          className="text-4xl md:text-5xl font-bold text-[#12ace5] text-center mb-12"
        >
          Team Behind Our Success
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: "Dr. John Doe",
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
          ].map((doc, index) => (
            <div key={index} className="flex flex-col">
              <div className="relative overflow-hidden rounded-2xl shadow-lg group cursor-pointer">
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

                <div className="absolute inset-0 bg-[#12ace5]/20 backdrop-blur-md flex-col justify-center items-center text-center text-white p-6 transform translate-y-full md:group-hover:translate-y-0 transition-all duration-500 hidden md:flex">
                  <h4 className="text-lg font-semibold mb-2">{doc.degree}</h4>
                  <p className="text-sm">{doc.desc}</p>
                </div>
              </div>

              <div className="mt-4 md:hidden text-center">
                <h4 className="text-lg font-semibold text-gray-800">
                  {doc.degree}
                </h4>
                <p className="text-sm text-gray-600">{doc.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full flex justify-center mt-12">
          <button className="px-8 py-3 text-lg font-semibold rounded-full text-white bg-[#12ace5] hover:bg-[#0d8bbd] transition-all duration-300 shadow-md hover:shadow-xl">
            Book Appointment
          </button>
        </div>
      </section>

     {/* Reviews Section
      <section className="w-full min-h-screen relative flex items-center justify-center">
        <div
          className="hidden md:block absolute inset-0"
          style={{
            backgroundImage: `url(${BackgroundDesktop})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>

        <div
          className="block md:hidden absolute inset-0"
          style={{
            backgroundImage: `url(${BackgroundMobile})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>

        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

        <div className="relative w-11/12 max-w-6xl bg-white rounded-2xl shadow-2xl flex flex-col md:flex-row overflow-hidden z-10">
          <div className="w-full md:w-1/3 p-6 flex flex-col">
            <h2 className="text-2xl font-bold mb-4">Write a Review</h2>
            <form className="flex flex-col space-y-4" onSubmit={handleAddReview}>
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="p-2 border border-gray-300 rounded"
              />

              <div className="flex items-center space-x-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    type="button"
                    key={star}
                    onClick={() => setRating(star)}
                    className={`text-2xl transition-colors duration-200 ${
                      rating >= star ? "text-yellow-400" : "text-gray-300"
                    }`}
                  >
                    ★
                  </button>
                ))}
              </div>

              <textarea
                placeholder="Your Review"
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="p-2 border border-gray-300 rounded h-24"
              />

              <button
                type="submit"
                className="bg-[#12ace5] text-white py-2 rounded hover:bg-blue-700 transition"
              >
                Submit
              </button>
            </form>
          </div>

          <div className="hidden md:block w-px bg-gray-300 my-6"></div>

          <div className="w-full md:w-2/3 p-6 flex flex-col">
            <h2 className="text-2xl font-bold mb-4">Reviews</h2>
            <div className="flex overflow-x-auto gap-4 pb-4 snap-x snap-mandatory">
              {reviews.map((review, index) => (
                <div
                  key={index}
                  className="min-w-full md:min-w-[250px] max-h-[180px] bg-gray-100 p-4 rounded-lg shadow flex flex-col overflow-y-auto snap-center"
                >
                  <h3 className="font-semibold">{review.name}</h3>
                  <p className="text-yellow-500">{"★".repeat(review.rating)}</p>
                  <p className="mt-2 text-gray-700">{review.text}</p>
                </div>
              ))}
            </div>

            <a
              href="https://share.google/3GopvlQh42egz0WQF"
              target="_blank"
              className="mt-auto text-[#12ace5] hover:underline self-end"
            >
              Check More Reviews {`->`}
            </a>
          </div>
        </div>
       </section>  */}

      {/* <Footer /> */}
    </>
  );
};

export default MainAbout;
