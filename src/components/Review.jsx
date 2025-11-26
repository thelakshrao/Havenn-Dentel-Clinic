import React, { useState, useEffect } from "react";
import BackgroundDesktop from "../images/background3.webp";
import BackgroundMobile from "../images/background3mobile.webp";

const Reviews = () => {
  const [rating, setRating] = useState(5);
  const [name, setName] = useState("");
  const [text, setText] = useState("");

  const [reviews, setReviews] = useState(() => {
    const storedReviews = localStorage.getItem("reviews");
    if (!storedReviews) {
      return [
        {
          name: "Nikhat Khan",
          text: "I was facing a lot of hair fall, and my hair growth had completely stopped. No matter what I tried, nothing seemed to work. But after first session, I started noticing a big difference. My hair fall has reduced a lot, and new hair has started growing again. My hair now feels stronger, healthier, and more voluminous. I’m really happy with the results and would definitely recommend it to anyone struggling with hair fall problems. I am extremely grateful to Dr. Manvi.",
          rating: 5,
        },
        {
          name: "Pawan Diwania",
          text: "I recently had a Root Canal Treatment (RCT) at Havenn Smile And Aesthetic Studio and the experience was excellent. The doctor is highly knowledgeable and made the whole process smooth and almost painless. What I really liked is that they only charge for what’s necessary—no extra or unnecessary treatments. Everything felt honest and professional. Definitely a place you can trust for quality dental care.",
          rating: 5,
        },
        {
          name: "Sumit Dixit",
          text: "Must visit if you are facing any kind teeth problems and if you want to save your smile Dr. Manvi done a great job",
          rating: 5,
        },
        {
          name: "Harshita Choudhary",
          text: "I have struggled with thin and sparse hair since early thirties. My experience with Dr. Manvi has been truly amazing. Now, I feel confident with my hair. I have tried countless products and treatments but her treatment worked like magic for me.",
          rating: 5,
        },
        {
          name: "Abhimanyu Singh",
          text: "I recently had a Root Canal Treatment (RCT) at Havenn Smile And Aesthetic Studio and the experience was excellent. The doctor is highly knowledgeable and made the whole process smooth and almost painless.",
          rating: 5,
        },
        {
          name: "Vishu Tanwar",
          text: "My experience was excellent, and my skin was glowing. The doctors are highly trained, and Dr. Manvi is very kind and polite. I will definitely visit again in the future. If you're looking for a clinic for perfect skin, this is the right place. Go for it.",
          rating: 5,
        },
      ];
    }

    try {
      const parsed = JSON.parse(storedReviews);
      return Array.isArray(parsed) ? parsed : [];
    } catch (err) {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("reviews", JSON.stringify(reviews));
  }, [reviews]);

  const handleAddReview = (e) => {
    e.preventDefault();
    if (name && text) {
      setReviews([{ name, text, rating }, ...reviews]);
      setName("");
      setText("");
      setRating(5);
    }
  };

  return (
    <section className="w-full min-h-screen relative flex items-center justify-center">
      {/* Background */}
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

      {/* Reviews Container */}
      <div className="relative w-11/12 max-w-6xl bg-white rounded-2xl shadow-2xl flex flex-col md:flex-row overflow-hidden z-10">
        {/* Write Review */}
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

        {/* Display Reviews */}
        <div className="w-full md:w-2/3 p-6 flex flex-col">
          <h2 className="text-2xl font-bold mb-4">Reviews</h2>
          <div className="flex overflow-x-auto gap-4 pb-4 snap-x snap-mandatory flex-nowrap scroll-smooth">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="min-w-[250px] max-w-[300px] max-h-[180px] bg-gray-100 p-4 rounded-lg shadow flex flex-col overflow-y-auto snap-center"
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
    </section>
  );
};

export default Reviews;
