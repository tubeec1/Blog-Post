import React from "react";

let stats = [
  { id: 1, label: "Posts Published", value: 120 },
  { id: 2, label: "Active Authors", value: 15 },
  { id: 3, label: "Categories Covered", value: 8 },
];
const AboutUs = () => {
  return (
    <div className="flex flex-col items-center justify-center p-8 gap-10 md:max-w-[1200px] mx-auto">
      <div className="flex flex-col md:flex-row gap-10 mt-[50px]">
        <div>
          <h2 className="font-semibold text-3xl mb-4">
            About <span>US</span>
          </h2>
          <h2 className="font-bold text-2xl mb-4 text-pink-500">Our Story</h2>
          <p className="text-gray-400 mb-5 text-justify">
            Welcome to our blog! We are a team of passionate writers dedicated
            to sharing knowledge and insights across various topics. Our mission
            is to provide valuable content that informs, inspires, and engages
            our readers. Whether you're here to learn something new or just
            looking for some interesting reads, we hope you find something that
            resonates with you. Thank you for being a part of our community!
          </p>
        </div>
        <div>
          <img
            className="w-[100%] h-[100%] md:w-[120vw] md:h-[300px] object-cover"
            src="../../../src/assets/hero.png"
            alt=""
          />
        </div>
      </div>
      <div className=" bg-gray-50 p-20 w-[100vw]">
        <div className="md:w-[60vw] flex flex-col md:flex-row gap-15 mx-auto">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="shadow-md bg-white px-6 py-15 rounded-xl text-center w-[100%] md:w-[30%]"
            >
              <h3>{stat.label}</h3>
              <p className="font-bold text-xl bg-gradient-to-tr from-pink-500 to-orange-700 bg-clip-text text-transparent transition ">
                {stat.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
