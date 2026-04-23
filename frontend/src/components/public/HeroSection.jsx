import React from "react";
import { Link } from "react-router-dom";
import { FiArrowRight, FiPlay } from "react-icons/fi";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-white pt-28 pb-16 sm:pt-32 lg:pt-36">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-120px] left-[-120px] w-[400px] h-[400px] bg-pink-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-[-150px] right-[-120px] w-[400px] h-[400px] bg-orange-100/40 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* LEFT */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-pink-50 text-gray-700 px-4 py-1.5 rounded-full text-xs font-semibold mb-6">
              🔥 Trending Insights
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900">
              Ideas that inspire{" "}
              <span className="bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent">
                growth
              </span>
            </h1>

            {/* Subtext */}
            <p className="mt-5 max-w-lg text-lg text-gray-500 leading-relaxed">
              Explore powerful stories, technology trends, and creative ideas
              designed to help you learn, build, and grow faster.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-orange-400 text-white px-6 py-3 rounded-full text-sm font-semibold shadow-sm hover:shadow-md transition"
              >
                Read Articles
                <FiArrowRight />
              </Link>

              <button className="inline-flex items-center gap-2 border border-gray-200 px-6 py-3 rounded-full text-sm text-gray-700 hover:bg-gray-50 transition">
                <FiPlay />
                Watch Demo
              </button>
            </div>

            {/* Social Proof */}
            <div className="mt-10 flex items-center gap-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <img
                    key={i}
                    src={`https://picsum.photos/seed/user${i}/40`}
                    className="w-8 h-8 rounded-full border-2 border-white"
                  />
                ))}
              </div>
              <p className="text-sm text-gray-400">
                Trusted by 50,000+ readers
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex justify-center lg:justify-end">
            <div className="rounded-2xl overflow-hidden shadow-lg border">
              <img
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
                alt="Blog preview"
                className="w-full max-w-[520px] object-cover hover:scale-[1.02] transition duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
