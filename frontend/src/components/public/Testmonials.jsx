import React from "react";

const testimonials = [
  {
    id: 1,
    name: "Ahmed Hassan",
    role: "Frontend Developer",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "This platform really helped me improve my skills. The content is simple and very practical.",
  },
  {
    id: 2,
    name: "Halima Adow",
    role: "UI/UX Designer",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "I love the clean design and useful insights. It inspires me every day.",
  },
  {
    id: 3,
    name: "Mohamed Ali",
    role: "Software Engineer",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
    text: "Great articles and very helpful tutorials. Highly recommended for beginners.",
  },
];

const Testimonial = () => {
  return (
    <section className="py-16 bg-gray-50  max-w-[1200px] mx-auto">
      <h2 className="text-3xl font-bold text-center  mb-10">What People Say</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1100px] mx-auto px-6">
        {testimonials.map((item) => (
          <div
            key={item.id}
            className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition duration-300"
          >
            <p className="text-gray-600 text-sm mb-4 text-justify leading-relaxed">
              <span className="text-3xl text-gray-600 px-3">❝</span>
              {item.text}
              <span className="text-3xl text-gray-600 px-3">❞</span>
            </p>

            <div className="flex items-center gap-3 mt-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-12 h-12 rounded-full object-cover"
              />

              <div>
                <h4 className="font-semibold">{item.name}</h4>
                <p className="text-xs text-gray-400">{item.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
