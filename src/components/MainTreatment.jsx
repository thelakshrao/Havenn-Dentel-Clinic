import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import BookAppointment from "./BookAppointment.jsx";
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
    desc: "Advanced therapy to reduce hair fall and strengthen roots. Improves scalp health and promotes long-term hair density.",
    slogan: "Strengthen roots, reduce hair fall",
    overview:
      "A targeted medical treatment designed to control hair fall, nourish the scalp, and restore weak follicles. It combines advanced dermatology solutions with nutrient-based therapy to boost blood circulation and improve hair density. Suitable for men and women experiencing early to moderate thinning.",
    duration: "30–45 minutes per session",
    recovery: "No downtime",
    safety: "Safe and clinically tested",
    benefits: [
      "Reduces hair fall and strengthens follicles",
      "Improves blood circulation to the scalp",
      "Enhances hair thickness and texture",
      "Controls dandruff and inflammation",
      "Visible improvement within 8–12 weeks",
      "Non-invasive and suitable for all hair types",
    ],
    procedure: [
      "Scalp evaluation and treatment planning",
      "Deep scalp cleansing for better absorption",
      "Application of medical-grade serums",
      "Nutrient infusion to strengthen roots",
      "Post-care instructions and follow-up plan",
    ],
    faqs: [
      {
        q: "How soon will I see results?",
        a: "Most patients notice reduced hair fall within 3–4 weeks, with visible density improvements in 2–3 months.",
      },
      {
        q: "Is it suitable for men and women?",
        a: "Yes, this treatment is designed for both genders experiencing mild to moderate hair thinning.",
      },
    ],
  },

  {
    name: "Hair PRP",
    img: treatment2,
    desc: "Platelet-rich plasma injections to stimulate natural hair growth and revive weak follicles.",
    slogan: "Regrow naturally with your own growth factors",
    overview:
      "Hair PRP uses concentrated platelets from your own blood to stimulate inactive or weak hair follicles. It boosts growth factors, improves hair volume, and enhances scalp health. Ideal for early-stage hair loss and thinning.",
    duration: "45–60 minutes",
    recovery: "Minimal redness for 24 hours",
    safety: "Very safe as it uses your own blood",
    benefits: [
      "Activates dormant hair follicles",
      "Improves hair thickness and density",
      "Reduces shedding and weak roots",
      "Enhances scalp health and hydration",
      "Natural and nonsurgical method",
      "Effective for both men and women",
    ],
    procedure: [
      "Blood collection and PRP separation",
      "Preparation of high-concentration plasma",
      "Scalp numbing for comfort",
      "Micro-injections across thinning areas",
      "Post-treatment serum application",
    ],
    faqs: [
      {
        q: "How many sessions are required?",
        a: "Usually 4–6 sessions spaced 3–4 weeks apart for best results.",
      },
      {
        q: "Is PRP painful?",
        a: "Mild discomfort may be felt, but numbing cream reduces most of the pain.",
      },
    ],
  },

  {
    name: "Hair GFC",
    img: treatment3,
    desc: "Concentrated growth factor therapy that strengthens follicles and enhances hair growth.",
    slogan: "Next-generation growth factor therapy",
    overview:
      "GFC (Growth Factor Concentrate) is an advanced hair restoration therapy containing highly concentrated growth factors extracted from your own blood. It provides superior stimulation of follicles and faster visible results compared to regular PRP.",
    duration: "45 minutes",
    recovery: "No downtime",
    safety: "Highly safe and minimally invasive",
    benefits: [
      "Stronger and thicker hair growth",
      "Faster results than standard PRP",
      "Reduces hair shedding significantly",
      "Improves scalp health and nutrient supply",
      "Natural and long-lasting improvement",
      "Suitable for both men and women",
    ],
    procedure: [
      "Blood draw and separation of growth factors",
      "Preparation of high-purity GFC",
      "Scalp cleansing and numbing",
      "Micro-injection of GFC into thinning areas",
      "Post-procedure care and follow-up",
    ],
    faqs: [
      {
        q: "Is GFC better than PRP?",
        a: "Yes, GFC contains higher concentration growth factors, giving faster and more noticeable results.",
      },
      {
        q: "How many sessions are needed?",
        a: "Most patients require 3–4 sessions depending on hair loss severity.",
      },
    ],
  },

  {
    name: "Face Mesotherapy",
    img: treatment4,
    desc: "Skin rejuvenation with vitamins and hyaluronic acid for glowing and hydrated skin.",
    slogan: "Nourish your skin from within",
    overview:
      "Face Mesotherapy infuses antioxidants, vitamins, and hyaluronic acid directly into the skin to improve hydration, elasticity, and radiance. Ideal for dullness, early aging, and dry skin.",
    duration: "30–40 minutes",
    recovery: "Mild redness for a few hours",
    safety: "Safe and suitable for all skin types",
    benefits: [
      "Deep hydration from within",
      "Improves elasticity and firmness",
      "Reduces pigmentation and dullness",
      "Minimizes fine lines",
      "Boosts collagen production",
      "Gives instant glow",
    ],
    procedure: [
      "Skin cleansing",
      "Application of numbing cream",
      "Micro-injections of meso cocktail",
      "Gentle massage for absorption",
      "Soothing post-care mask",
    ],
    faqs: [
      {
        q: "Is mesotherapy painful?",
        a: "Minor pricks may be felt, but numbing cream makes it comfortable.",
      },
      {
        q: "How long do results last?",
        a: "Results usually last 3–4 months depending on skin condition.",
      },
    ],
  },

  {
    name: "Hydra Facial",
    img: treatment5,
    desc: "Deep cleansing and exfoliation for glowing skin. Hydra Facial gently removes dead skin cells while infusing moisturizing serums.",
    slogan: "Deep cleansing for instantly glowing skin",
    overview:
      "A Hydra Facial is a gentle, non-invasive skincare treatment that deeply cleanses, exfoliates, hydrates, and nourishes the skin in a single session. It removes dead skin cells, clears clogged pores, and delivers essential serums for instant radiance. Suitable for all skin types.",
    duration: "45–60 minutes",
    recovery: "No downtime",
    safety: "Very safe, painless, and suitable for all skin types",
    benefits: [
      "Deep cleanses and unclogs pores",
      "Improves hydration and skin smoothness",
      "Reduces acne, whiteheads, and blackheads",
      "Gives instant glow and brightness",
      "Minimizes fine lines and uneven texture",
      "Safe for sensitive skin",
    ],
    procedure: [
      "Gentle cleansing",
      "Exfoliation",
      "Vacuum-based extraction",
      "Hydration with serums",
      "LED therapy or soothing mask",
    ],
    faqs: [
      {
        q: "Is Hydra Facial safe for sensitive skin?",
        a: "Yes, it is extremely gentle and safe.",
      },
      {
        q: "How long does the glow last?",
        a: "Usually 1–2 weeks with proper care.",
      },
      {
        q: "Can I apply makeup afterward?",
        a: "It’s best to avoid makeup for 4–6 hours.",
      },
    ],
  },

  {
    name: "Oxygeno Facial",
    img: treatment6,
    desc: "Oxygen infusion facial for bright, hydrated, and refreshed skin.",
    slogan: "Oxygen boost for instant radiance",
    overview:
      "Oxygeno Facial uses pure oxygen technology to infuse active ingredients into deeper skin layers. It brightens, hydrates, and revitalizes dull and tired skin.",
    duration: "45 minutes",
    recovery: "Zero downtime",
    safety: "Safe, gentle, and suitable for all skin types",
    benefits: [
      "Instant brightness and glow",
      "Improves hydration",
      "Reduces dullness and fatigue",
      "Minimizes fine lines",
      "Boosts collagen production",
      "Improves complexion and clarity",
    ],
    procedure: [
      "Cleansing and exfoliation",
      "Oxygen infusion",
      "Application of brightening serums",
      "Hydrating mask",
      "Sunscreen application",
    ],
    faqs: [
      {
        q: "Is it suitable for all skin types?",
        a: "Yes, including sensitive and acne-prone skin.",
      },
      {
        q: "How often can I take it?",
        a: "Once every 3–4 weeks for best results.",
      },
    ],
  },

  {
    name: "Chemical Peels",
    img: treatment7,
    desc: "Effective peeling treatment for pigmentation, acne, and dull skin.",
    slogan: "Reveal smooth, glowing skin",
    overview:
      "Chemical peels remove damaged top layers of the skin to reduce pigmentation, acne marks, tanning, and uneven texture. Customizable for mild to deep peeling based on skin type.",
    duration: "20–30 minutes",
    recovery: "1–3 days depending on peel depth",
    safety: "Dermatologist-performed and safe when done correctly",
    benefits: [
      "Reduces pigmentation and tanning",
      "Improves skin texture",
      "Minimizes acne and acne marks",
      "Brightens skin tone",
      "Stimulates collagen production",
      "Reveals fresh and smoother skin",
    ],
    procedure: [
      "Skin analysis and selection of peel type",
      "Cleansing of the face",
      "Application of chemical peel solution",
      "Neutralization after required time",
      "Post-peel soothing and sunscreen",
    ],
    faqs: [
      {
        q: "Will my skin peel visibly?",
        a: "Mild to moderate peeling may occur depending on the peel strength.",
      },
      {
        q: "How many sessions are needed?",
        a: "4–6 sessions for long-lasting results.",
      },
    ],
  },

  {
    name: "Acne Control Treatment",
    img: treatment8,
    desc: "Advanced acne reduction therapy to control breakouts and balance oil production.",
    slogan: "Clear skin, controlled acne",
    overview:
      "A combination of dermatologist-approved treatments to reduce active acne, unclog pores, control excess oil, and calm inflammation. Suitable for mild to severe acne.",
    duration: "30–45 minutes",
    recovery: "Minimal redness for a few hours",
    safety: "Safe and customized for each skin type",
    benefits: [
      "Reduces active breakouts",
      "Controls excess oil and sebum",
      "Unclogs congested pores",
      "Reduces inflammation and redness",
      "Improves overall skin texture",
      "Prevents future acne formation",
    ],
    procedure: [
      "Skin assessment and treatment selection",
      "Deep pore cleansing",
      "Acne extraction",
      "Laser/chemical application (as needed)",
      "Soothing and antibacterial mask",
    ],
    faqs: [
      {
        q: "Is it safe for sensitive skin?",
        a: "Yes, treatments are customized for your skin type.",
      },
      {
        q: "How many sessions do I need?",
        a: "Usually 4–8 sessions depending on acne severity.",
      },
    ],
  },

  {
    name: "Acne Scar Treatment",
    img: treatment9,
    desc: "Effective reduction of acne scars through laser, PRP, or microneedling.",
    slogan: "Smooth away acne scars",
    overview:
      "This treatment targets deep acne scars using advanced dermatology techniques like microneedling, PRP, subcision, or laser resurfacing. It remodels collagen and smoothens skin texture.",
    duration: "45–60 minutes",
    recovery: "2–5 days depending on technique",
    safety: "Safe when performed by a dermatologist",
    benefits: [
      "Reduces deep and shallow scars",
      "Improves overall skin texture",
      "Boosts collagen production",
      "Minimizes pits and uneven skin",
      "Safe for all skin types",
      "Long-term visible improvement",
    ],
    procedure: [
      "Skin consultation to assess scar type",
      "Selection of laser/PRP/microneedling",
      "Numbing for comfort",
      "Controlled treatment application",
      "Post-care soothing and sunscreen",
    ],
    faqs: [
      {
        q: "How many sessions are required?",
        a: "3–6 sessions depending on scar depth.",
      },
      {
        q: "Will scars completely disappear?",
        a: "They improve significantly but complete removal may not always be possible.",
      },
    ],
  },

  {
    name: "Vampire Facial",
    img: treatment11,
    desc: "PRP-based facial for younger, fresher, and tighter skin.",
    slogan: "Rejuvenate naturally with your own PRP",
    overview:
      "The Vampire Facial combines microneedling with platelet-rich plasma to boost collagen, reduce wrinkles, and improve skin texture. Ideal for anti-aging and dull skin.",
    duration: "60 minutes",
    recovery: "1–2 days",
    safety: "Safe as it uses your own blood",
    benefits: [
      "Improves skin texture and firmness",
      "Reduces fine lines and wrinkles",
      "Boosts collagen",
      "Reduces pigmentation and dullness",
      "Tightens and brightens skin",
      "Natural, long-lasting results",
    ],
    procedure: [
      "Blood draw and PRP preparation",
      "Microneedling the face",
      "Application of PRP",
      "Soothing mask application",
      "Post-care sun protection",
    ],
    faqs: [
      {
        q: "Is the vampire facial painful?",
        a: "Numbing cream ensures minimal discomfort.",
      },
      {
        q: "When will I see results?",
        a: "Visible improvement within 3–4 weeks.",
      },
    ],
  },

  {
    name: "Root Canal Treatment",
    img: treatment12,
    desc: "Pain-free RCT using modern technology to save infected teeth.",
    slogan: "Save your tooth, stop the pain",
    overview:
      "Root Canal Treatment removes infected pulp from the tooth, cleans the canal, and seals it to prevent reinfection. It preserves natural teeth and prevents extraction.",
    duration: "45–90 minutes",
    recovery: "1–2 days of mild sensitivity",
    safety: "Very safe with modern techniques",
    benefits: [
      "Eliminates infection and pain",
      "Saves the natural tooth",
      "Prevents spread of infection",
      "Restores chewing function",
      "Long-lasting results",
      "Fast healing and comfort",
    ],
    procedure: [
      "Digital X-ray and diagnosis",
      "Local anesthesia for comfort",
      "Cleaning and shaping of canals",
      "Filling and sealing of tooth",
      "Placement of crown if needed",
    ],
    faqs: [
      {
        q: "Is RCT painful?",
        a: "Modern RCT is virtually painless.",
      },
      {
        q: "Do I need a crown after RCT?",
        a: "Yes, most back teeth need a crown for protection.",
      },
    ],
  },

  {
    name: "Painless Tooth Removal",
    img: treatment13,
    desc: "Gentle, modern tooth extraction with zero discomfort.",
    slogan: "Safe, smooth, and painless extraction",
    overview:
      "Tooth removal is performed using advanced anesthesia techniques and minimally traumatic tools to ensure comfort and fast healing. Ideal for damaged, decayed, or impacted teeth.",
    duration: "20–40 minutes",
    recovery: "1–3 days",
    safety: "Safe and performed by experienced dentists",
    benefits: [
      "Pain-free experience",
      "Minimal swelling and bleeding",
      "Quick and smooth extraction",
      "Reduced trauma to surrounding tissue",
      "Fast recovery",
      "Safe for adults and kids",
    ],
    procedure: [
      "Dental X-ray",
      "Local anesthesia",
      "Atraumatic extraction",
      "Cleaning of socket",
      "Post-removal instructions",
    ],
    faqs: [
      {
        q: "Is extraction painful?",
        a: "No, the process is completely painless with anesthesia.",
      },
      {
        q: "How long is recovery?",
        a: "Most patients recover within 24–72 hours.",
      },
    ],
  },

  {
    name: "Bleaching",
    img: treatment14,
    desc: "Professional teeth whitening for a brighter, more confident smile.",
    slogan: "Brighten your smile in one session",
    overview:
      "Dental bleaching removes stains caused by coffee, tea, food, and smoking. Performed using safe, high-quality whitening agents for long-lasting brightness.",
    duration: "45 minutes",
    recovery: "Immediate return to routine",
    safety: "Safe and dentist-supervised",
    benefits: [
      "Lightens stains and discoloration",
      "Quick and effective results",
      "Boosts confidence",
      "Minimal tooth sensitivity",
      "Long-lasting shine",
      "Safe for enamel",
    ],
    procedure: [
      "Shade evaluation",
      "Protection of gums and lips",
      "Application of whitening gel",
      "Activation with light (if required)",
      "Rinse and shade comparison",
    ],
    faqs: [
      {
        q: "Will bleaching damage my teeth?",
        a: "No, professional bleaching is completely safe for enamel.",
      },
      {
        q: "How long does whitening last?",
        a: "Results last 6–12 months with proper care.",
      },
    ],
  },

  {
    name: "Crown & Bridge",
    img: treatment15,
    desc: "Permanent restorative solution for damaged or missing teeth.",
    slogan: "Restore function and beauty",
    overview:
      "Crowns restore damaged or weak teeth, while bridges replace missing teeth by anchoring to adjacent teeth. Custom-made for natural appearance and strong bite.",
    duration: "2–3 appointments",
    recovery: "Same-day routine activities",
    safety: "Safe, durable, and long-lasting",
    benefits: [
      "Restores chewing and speech",
      "Protects weak or cracked teeth",
      "Natural-looking and aesthetic",
      "Long-lasting durability",
      "Improves bite alignment",
      "Boosts overall smile appearance",
    ],
    procedure: [
      "Tooth preparation",
      "Digital impression",
      "Temporary crown placement",
      "Final crown or bridge fitting",
      "Bite adjustment and polishing",
    ],
    faqs: [
      {
        q: "How long do crowns last?",
        a: "Crowns typically last 10–15+ years with good care.",
      },
      {
        q: "Is the process painful?",
        a: "No, it is done under local anesthesia.",
      },
    ],
  },

  {
    name: "Clear Aligners",
    img: treatment16,
    desc: "Invisible trays for teeth straightening with comfort and flexibility.",
    slogan: "Straighten your teeth invisibly",
    overview:
      "Clear aligners gently move teeth into correct alignment using transparent, removable trays. They are comfortable, aesthetic, and suitable for teens and adults.",
    duration: "6–18 months depending on case",
    recovery: "No recovery needed",
    safety: "Safe, modern, and orthodontist-supervised",
    benefits: [
      "Nearly invisible and aesthetic",
      "Removable and comfortable",
      "No food restrictions",
      "Better oral hygiene than braces",
      "Predictable results with 3D planning",
      "Suitable for mild to moderate alignment issues",
    ],
    procedure: [
      "Dental scan and evaluation",
      "3D aligner treatment planning",
      "Delivery of aligner sets",
      "Monthly monitoring",
      "Final correction and retainers",
    ],
    faqs: [
      {
        q: "Do aligners hurt?",
        a: "Mild pressure is normal and indicates they are working.",
      },
      {
        q: "How long must I wear aligners daily?",
        a: "20–22 hours per day for best results.",
      },
    ],
  },

  {
    name: "Dental Implants",
    img: treatment17,
    desc: "Permanent tooth replacement using titanium implants for long-lasting function.",
    slogan: "Strong, stable, lifelong replacement",
    overview:
      "Dental implants replace missing teeth with titanium posts that fuse to the jawbone, offering strong support for crowns, bridges, or dentures. They look, feel, and function like natural teeth.",
    duration: "3–6 months (including healing)",
    recovery: "3–7 days",
    safety: "Highly safe with 95–98% success rate",
    benefits: [
      "Permanent and natural-looking",
      "Restores chewing and speech",
      "Prevents bone loss",
      "Supports facial structure",
      "Long-lasting durability",
      "Improves confidence and comfort",
    ],
    procedure: [
      "CBCT scan and evaluation",
      "Titanium implant placement",
      "Healing and osseointegration",
      "Abutment placement",
      "Final crown fitting",
    ],
    faqs: [
      {
        q: "Are implants painful?",
        a: "No, the procedure is done under anesthesia and recovery pain is minimal.",
      },
      {
        q: "How long do implants last?",
        a: "Implants can last a lifetime with proper oral hygiene.",
      },
    ],
  },

  {
    name: "Kids Dentistry",
    img: treatment18,
    desc: "Friendly and gentle dental care for children of all ages.",
    slogan: "Happy smiles for little ones",
    overview:
      "Kids dentistry focuses on preventive care, cavity protection, early diagnosis, and creating a positive dental experience. Designed to keep children comfortable and stress-free.",
    duration: "20–40 minutes",
    recovery: "No downtime",
    safety: "Safe, child-friendly techniques",
    benefits: [
      "Prevents cavities early",
      "Builds healthy dental habits",
      "Reduces dental anxiety",
      "Guides proper tooth development",
      "Treats early dental problems",
      "Fun and comfortable experience",
    ],
    procedure: [
      "Gentle oral check-up",
      "Cleaning and polishing",
      "Fluoride application",
      "Sealants if required",
      "Parent guidance",
    ],
    faqs: [
      {
        q: "At what age should a child visit the dentist?",
        a: "Ideally by age 1 or when the first tooth appears.",
      },
      {
        q: "Is fluoride safe for kids?",
        a: "Yes, it protects teeth and prevents cavities.",
      },
    ],
  },

  {
    name: "Metal / Ceramic Braces",
    img: treatment19,
    desc: "Effective teeth alignment using durable metal or aesthetic ceramic brackets.",
    slogan: "Strong, reliable, and effective alignment",
    overview:
      "Braces correct teeth alignment, overcrowding, and bite issues with metal or ceramic brackets. Ceramic braces offer a more aesthetic, tooth-colored option.",
    duration: "12–24 months",
    recovery: "No downtime",
    safety: "Safe and orthodontist-supervised",
    benefits: [
      "Corrects complex alignment issues",
      "Improves bite and function",
      "Durable and reliable",
      "Ceramic option for aesthetics",
      "Suitable for all age groups",
      "Long-term stable results",
    ],
    procedure: [
      "Dental evaluation and X-ray",
      "Bracket placement",
      "Wire insertion and adjustments",
      "Monthly follow-ups",
      "Retainer after completion",
    ],
    faqs: [
      {
        q: "Do braces hurt?",
        a: "Mild discomfort is normal for 2–3 days after adjustments.",
      },
      {
        q: "Which is better, metal or ceramic?",
        a: "Metal is stronger; ceramic is more aesthetic. Both work equally well.",
      },
    ],
  },

  {
    name: "Cosmetic Dentistry",
    img: treatment20,
    desc: "Smile enhancement using veneers, bonding, whitening, and reshaping.",
    slogan: "Design your perfect smile",
    overview:
      "Cosmetic dentistry focuses on improving smile aesthetics through veneers, bonding, contouring, whitening, and gap correction. Designed to match natural facial symmetry.",
    duration: "30–90 minutes depending on procedure",
    recovery: "Minimal to none",
    safety: "Safe and minimally invasive",
    benefits: [
      "Improves overall smile appearance",
      "Corrects gaps and uneven teeth",
      "Brightens and enhances tooth color",
      "Boosts facial aesthetics",
      "Quick, minimally invasive solutions",
      "Long-lasting cosmetic results",
    ],
    procedure: [
      "Smile analysis and planning",
      "Selection of cosmetic treatment",
      "Tooth preparation (if needed)",
      "Procedure execution",
      "Final polishing and care advice",
    ],
    faqs: [
      {
        q: "Will my smile look natural?",
        a: "Yes, cosmetic dentistry is customized to your face and teeth.",
      },
      {
        q: "How long do cosmetic treatments last?",
        a: "5–15 years depending on the procedure and care.",
      },
    ],
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

  const slogan = treatment.slogan || "";
  const overview = treatment.overview || treatment.desc || "";
  const duration = treatment.duration || "Varies by case";
  const recovery = treatment.recovery || "Consult for details";
  const safety = treatment.safety || "Safe when performed by professionals";
  const benefits = treatment.benefits || [
    ...(treatment.desc ? [treatment.desc] : []),
  ];
  const procedure = treatment.procedure || [
    "Consultation and assessment",
    "Treatment planning",
    "Procedure as per protocol",
    "Post-procedure care and follow-up",
  ];
  const faqs = treatment.faqs || [
    {
      q: "Is this treatment painful?",
      a: "Most treatments are minimally invasive with local anaesthesia or painless techniques. Ask during consultation.",
    },
    {
      q: "How many sessions are needed?",
      a: "Number of sessions depends on the condition and treatment. A consultation will clarify the exact plan.",
    },
    {
      q: "Are results permanent?",
      a: "Results vary by treatment; some are long-lasting while others need maintenance. Your doctor will explain during consultation.",
    },
  ];

  const [openFaq, setOpenFaq] = useState(null);

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col">
        <header className="w-full bg-gradient-r from-white to-white/80">
          <div className="max-w-6xl mx-auto mt-15 px-4 py-6">
            <div className="bg-[#f0fbff] rounded-md p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h1
                  className="text-3xl md:text-4xl font-bold text-[#12ace5]"
                  style={{ fontFamily: "Caveat, cursive" }}
                >
                  {treatment.name}
                </h1>
                {slogan && (
                  <p className="mt-1 text-sm text-gray-600">{slogan}</p>
                )}
              </div>
              <div className="text-sm text-gray-700">
                <span className="hidden md:inline">
                  Expert care • Trusted clinic
                </span>
              </div>
            </div>
          </div>
        </header>

        <section className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-4">
            <h2 className="text-xl font-semibold text-[#12ace5]">Overview</h2>
            <p className="text-gray-700 leading-relaxed">{overview}</p>

            <div className="mt-6">
              <img
                src={treatment.img}
                alt={treatment.name}
                className="w-full rounded-lg shadow-lg object-cover max-h-96"
              />
            </div>
          </div>

          <aside className="md:col-span-1">
            <div className="border rounded-lg p-4 shadow-sm">
              <h3 className="text-lg font-semibold text-[#0a749b] mb-3">
                Quick Info
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li>
                  <span className="block text-sm text-gray-500">Duration</span>
                  <span className="font-medium">{duration}</span>
                </li>
                <li>
                  <span className="block text-sm text-gray-500">Recovery</span>
                  <span className="font-medium">{recovery}</span>
                </li>
                <li>
                  <span className="block text-sm text-gray-500">Safety</span>
                  <span className="font-medium">{safety}</span>
                </li>
              </ul>

              <div className="mt-4">
                <button
                  onClick={() => {
                    const el = document.getElementById("book-appointment");
                    if (el)
                      el.scrollIntoView({
                        behavior: "smooth",
                        block: "center",
                      });
                  }}
                  className="w-full inline-block text-white bg-[#12ace5] hover:bg-[#0a749b] transition px-4 py-2 rounded-full font-medium"
                >
                  Book Appointment →
                </button>
              </div>
            </div>
          </aside>
        </section>
        <section className="bg-white py-8">
          <div className="max-w-6xl mx-auto px-4">
            <h3 className="text-2xl font-semibold text-[#12ace5] mb-6">
              Benefits
            </h3>

            <div
              className={`grid gap-4 ${
                benefits.length >= 6
                  ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
                  : benefits.length >= 4
                  ? "grid-cols-1 sm:grid-cols-2"
                  : "grid-cols-1"
              }`}
            >
              {benefits.map((b, idx) => (
                <div
                  key={idx}
                  className="p-4 border rounded-lg shadow-sm bg-white flex items-start gap-3"
                >
                  <div className="flex-0">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#e6f7fb] text-[#12ace5] font-bold">
                      {idx + 1}
                    </div>
                  </div>
                  <div className="text-gray-700">{b}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="max-w-6xl mx-auto px-4 py-12">
          <h3 className="text-2xl font-semibold text-[#12ace5] mb-6">
            Procedure
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {procedure.map((step, idx) => (
              <div
                key={idx}
                className="p-4 border rounded-lg shadow-sm bg-white"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[#e6f7fb] text-[#12ace5] font-bold">
                    {idx + 1}
                  </div>
                  <div>
                    <div className="font-semibold">Step {idx + 1}</div>
                    <div className="text-gray-600">{step}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-gray-50 py-10">
          <div className="max-w-6xl mx-auto px-4">
            <h3 className="text-2xl font-semibold text-[#12ace5] mb-6">
              Frequently Asked Questions
            </h3>

            <div className="space-y-3">
              {faqs.map((f, i) => (
                <div
                  key={i}
                  className="border rounded-md bg-white overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full text-left px-4 py-3 flex justify-between items-center"
                  >
                    <div>
                      <div className="font-medium text-gray-800">{f.q}</div>
                    </div>
                    <div className="text-gray-500">
                      {openFaq === i ? "−" : "+"}
                    </div>
                  </button>

                  {openFaq === i && (
                    <div className="px-4 pb-4 text-gray-700">{f.a}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
        <div id="book-appointment" className="pt-12">
          <BookAppointment />
        </div>
      </div>
    </>
  );
};

export default MainTreatment;
