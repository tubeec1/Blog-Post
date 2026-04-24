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
   <section className="py-20 bg-gradient-to-b from-gray-50 to-white">

  {/* HEADER */}
  <div className="text-center mb-14 px-6">
    <h2 className="text-4xl font-bold text-gray-900">
      What People Say
    </h2>
    <p className="mt-3 text-gray-500 text-sm sm:text-base">
      Real feedback from our happy users
    </p>
  </div>

  {/* GRID */}
  <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">

    {testimonials.map((item) => (
      <div
        key={item.id}
        className="group relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition duration-300 hover:-translate-y-2"
      >

        {/* QUOTE ICON */}
        <div className="text-5xl text-pink-500 opacity-20 absolute top-4 left-4">
          ❝
        </div>

        {/* TEXT */}
        <p className="text-gray-600 text-sm leading-relaxed mt-6 mb-6">
          {item.text}
        </p>

        {/* USER */}
        <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
          <img
            src={item.image}
            alt={item.name}
            className="w-12 h-12 rounded-full object-cover ring-2 ring-pink-100"
          />

          <div>
            <h4 className="font-semibold text-gray-900 group-hover:text-pink-600 transition">
              {item.name}
            </h4>
            <p className="text-xs text-gray-400">{item.role}</p>
          </div>
        </div>

      </div>
    ))}

  </div>

</section>
  )
}
export default Testimonial;