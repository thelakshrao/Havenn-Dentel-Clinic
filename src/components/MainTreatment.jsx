import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";

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

const makeSlug = (name) =>
  name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const treatments = [
  {
    name: "Anti Hair Loss Treatment",
    img: treatment1,
    desc: "Advanced therapy to reduce hair fall and strengthen roots. This treatment targets the scalp to nourish hair follicles deeply, improving hair density over time. Regular sessions help in preventing premature hair loss and thinning. It combines modern technology with natural solutions to enhance hair growth. Suitable for both men and women experiencing hair thinning. It also improves scalp health and elasticity. Results are usually visible within a few months with consistent treatment. Patients report stronger, shinier hair and reduced shedding.",
  },
  {
    name: "Hair PRP",
    img: treatment2,
    desc: "Platelet-rich plasma treatment for hair regrowth. PRP involves extracting the patient’s own blood, processing it, and injecting growth factors into the scalp. This stimulates dormant hair follicles and encourages new hair growth. It’s a minimally invasive procedure with quick recovery time. Helps reduce hair thinning and improve hair texture. Can be combined with other therapies for optimal results. Suitable for early to moderate hair loss cases. Regular sessions improve overall hair volume and density. Provides natural-looking results without the need for surgery.",
  },
  {
    name: "Hair GFC",
    img: treatment3,
    desc: "Growth Factor Concentrate therapy for hair restoration. GFC is designed to rejuvenate hair follicles and strengthen the hair shaft. It delivers concentrated growth factors directly to the scalp for maximum effectiveness. Promotes natural hair growth and improves hair thickness. Helps repair damaged follicles and reduce hair shedding. Safe and minimally invasive with no downtime. Works best in combination with lifestyle and dietary improvements. Ideal for patients seeking a non-surgical solution for thinning hair.",
  },
  {
    name: "Face Mesotherapy",
    img: treatment4,
    desc: "Skin rejuvenation with vitamins and hyaluronic acid. This treatment revitalizes the skin by injecting essential nutrients directly into the dermis. It hydrates deeply, improves elasticity, and reduces fine lines. Helps combat aging, pigmentation, and dullness for a youthful glow. Stimulates collagen production and promotes healthier skin texture. Quick and minimally invasive sessions with little downtime. Can be tailored to individual skin needs. Suitable for all skin types looking for natural rejuvenation.",
  },
  {
    name: "Hydra Facial",
    img: treatment5,
    desc: "Deep cleansing and exfoliation for glowing skin. Hydra Facial gently removes dead skin cells while infusing moisturizing serums. Improves hydration, clarity, and skin texture instantly. Reduces appearance of fine lines, wrinkles, and enlarged pores. Suitable for all skin types and concerns. Non-invasive with no downtime. Enhances overall radiance and leaves the skin refreshed. Regular sessions help maintain youthful and healthy-looking skin.",
  },
  {
    name: "Oxygeno Facial",
    img: treatment6,
    desc: "Oxygen infusion treatment for brightening and hydration. This facial uses pure oxygen to deliver active ingredients deep into the skin. Improves blood circulation and enhances skin tone. Helps in reducing fine lines, puffiness, and dullness. Hydrates and revitalizes tired and stressed skin. Stimulates collagen production and promotes cell regeneration. Provides a plump, radiant, and refreshed appearance. Ideal for instant glow and long-term skin health.",
  },
  {
    name: "Chemical Peels",
    img: treatment7,
    desc: "Peels for pigmentation, acne, and skin refreshing. Chemical peels remove the outer damaged layers of the skin, promoting regeneration. Helps reduce acne scars, pigmentation, and sun damage. Improves skin texture, tone, and elasticity. Can be customized for mild, moderate, or deep peeling depending on the skin type. Stimulates collagen production for youthful and healthy skin. Regular sessions reveal smoother and glowing skin. Minimal downtime and long-lasting effects with proper care.",
  },
  {
    name: "Acne Control Treatment",
    img: treatment8,
    desc: "Targeted acne treatment to reduce breakouts. This treatment helps in controlling excess sebum and unclogging pores. Combats acne-causing bacteria and reduces inflammation. Improves overall skin texture and prevents future breakouts. Combines advanced techniques and skincare products for best results. Suitable for mild to severe acne cases. Regular sessions maintain clear and healthy skin. Also reduces post-acne marks and redness effectively.",
  },
  {
    name: "Acne Scar Treatment",
    img: treatment9,
    desc: "Scar reduction with advanced dermatology techniques. Uses laser, microneedling, or PRP depending on scar type. Stimulates collagen remodeling to smooth skin texture. Helps reduce deep acne scars, pitting, and discoloration. Improves skin tone and overall appearance gradually. Safe, minimally invasive, and effective for long-term results. Can be combined with other skincare treatments for better outcomes. Provides smoother, healthier, and more even-looking skin.",
  },
  {
    name: "Vampire Facial",
    img: treatment11,
    desc: "PRP facial for anti-aging and skin tightening. Uses patient’s own platelet-rich plasma to rejuvenate the skin. Stimulates collagen and elastin production for firmer skin. Reduces fine lines, wrinkles, and sagging. Improves skin texture, tone, and radiance. Quick procedure with minimal downtime. Enhances overall facial appearance naturally. Suitable for all skin types and ages for long-lasting results.",
  },
  {
    name: "Root Canal Treatment",
    img: treatment12,
    desc: "Pain-free RCT to save damaged teeth. This procedure removes infected pulp from the tooth and seals it to prevent further infection. Preserves the natural tooth structure and prevents extraction. Modern techniques ensure minimal discomfort and faster recovery. Helps maintain oral health and function. Effective for teeth with deep decay or infection. Reduces pain, sensitivity, and swelling. Suitable for adults and teens with tooth nerve issues.",
  },
  {
    name: "Painless Tooth Removal",
    img: treatment13,
    desc: "Modern tooth extraction with zero discomfort. Uses advanced anesthesia techniques to ensure a pain-free experience. Gentle and precise removal reduces trauma to surrounding tissues. Quick recovery with minimal swelling and bleeding. Prevents damage to adjacent teeth and gums. Ideal for impacted, damaged, or decayed teeth. Suitable for both adults and children. Ensures safe and comfortable treatment in a stress-free environment.",
  },
  {
    name: "Bleaching",
    img: treatment14,
    desc: "Teeth whitening for a brighter smile. Removes stains caused by food, drinks, or smoking. Uses safe, professional-grade bleaching agents for effective results. Enhances overall appearance and boosts confidence. Quick procedure with minimal sensitivity. Can be combined with polishing for extra shine. Provides long-lasting whitening with proper care. Suitable for adults seeking cosmetic improvement of tooth color.",
  },
  {
    name: "Crown & Bridge",
    img: treatment15,
    desc: "Permanent tooth replacement solutions. Crowns restore damaged or weak teeth, while bridges fill gaps caused by missing teeth. Improves chewing, speaking, and smile aesthetics. Custom-made to match natural teeth for seamless appearance. Durable materials ensure long-lasting results. Protects remaining healthy teeth and distributes bite forces evenly. Minimally invasive with precise fitting. Suitable for patients with broken, worn, or missing teeth.",
  },
  {
    name: "Clear Aligners",
    img: treatment16,
    desc: "Invisible braces for straightening teeth. Custom-made transparent trays gradually shift teeth into correct alignment. Comfortable, removable, and nearly invisible compared to traditional braces. Improves bite, aesthetics, and oral hygiene. Ideal for mild to moderate misalignment issues. Regular monitoring ensures efficient progress. Requires minimal lifestyle changes and no food restrictions. Suitable for teens and adults seeking discreet orthodontic treatment.",
  },
  {
    name: "Dental Implants",
    img: treatment17,
    desc: "Permanent tooth replacement implants. Titanium posts are surgically placed into the jawbone to replace missing teeth. Provides stability, function, and natural appearance. Helps maintain bone density and facial structure. Long-lasting solution with high success rates. Can support crowns, bridges, or dentures. Requires proper oral hygiene and regular follow-ups. Suitable for patients missing one or multiple teeth seeking permanent restoration.",
  },
  {
    name: "Kids Dentistry",
    img: treatment18,
    desc: "Child-friendly dental care and treatments. Focuses on prevention, education, and gentle care for young patients. Offers cavity prevention, fluoride treatment, and habit guidance. Creates a positive dental experience to reduce fear and anxiety. Tailored approach for different age groups. Monitors dental development and addresses issues early. Engages children with fun and interactive techniques. Promotes healthy oral habits for lifelong dental wellness.",
  },
  {
    name: "Metal / Ceramic Braces",
    img: treatment19,
    desc: "Braces for teeth alignment. Corrects overcrowding, spacing, and bite issues effectively. Metal braces are durable, while ceramic braces offer a less noticeable option. Gradually moves teeth into ideal position for improved function and aesthetics. Regular adjustments ensure consistent progress. Suitable for teens and adults with moderate to severe alignment concerns. Improves oral health by facilitating proper cleaning. Provides long-term results with maintained oral care.",
  },
  {
    name: "Cosmetic Dentistry",
    img: treatment20,
    desc: "Smile design, reshaping, and aesthetic treatments. Enhances appearance using veneers, bonding, and contouring techniques. Corrects discoloration, gaps, chips, and uneven teeth. Improves confidence, facial symmetry, and overall smile aesthetics. Combines functional and cosmetic improvements for best results. Tailored to individual facial features and preferences. Minimally invasive procedures with lasting results. Suitable for adults seeking a beautiful, natural-looking smile.",
  },
];

const MainTreatment = () => {
  const { treatmentName } = useParams();

  const treatment = treatments.find((t) => makeSlug(t.name) === treatmentName);

  if (!treatment) {
    return (
      <div>
        <Navbar />
        <div className="text-center py-20 text-2xl font-semibold">
          Treatment not found
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <Navbar />

      <section className="max-w-6xl mx-auto px-4 py-20 flex flex-col md:flex-row items-center gap-10">
        <div className="md:w-1/2">
          <h1
            className="text-4xl font-bold mb-6 text-[#0a749b]"
            style={{ fontFamily: "Caveat, cursive" }}
          >
            {treatment.name}
          </h1>
          <p className="text-gray-700 text-lg leading-relaxed">
            {treatment.desc}
          </p>
        </div>

        <div className="md:w-1/2">
          <img
            src={treatment.img}
            alt={treatment.name}
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MainTreatment;
