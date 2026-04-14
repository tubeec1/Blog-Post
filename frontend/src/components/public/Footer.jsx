

import React from "react";
import { Link } from "react-router-dom";

let footer = [
  {
    title: "Bloggers Company",
    desc: "Sharing ideas, stories, and insights to inspire creativity and growth.",
  },
  {
    title: "Products",
    links: ["Blog", "Podcast", "Newsletter", "Webinars", "Events", "Courses"],
  },
  {
    title: "Useful Links",
    links: ["Home", "About", "Blog", "Contact", "Login", "Signup"],
  },
  {
    title: "Contact Us",
    links: [
      "123 Main Street",
      "Phone: (123) 456-7890",
      "Email: info@bloggers.com",
    ],
  },
];

const Footer = () => {
  return (
    <footer className="bg-gray-50 mt-16 shadow-inner">

      {/* TOP BAR */}
      <div className="max-w-[1200px] mx-auto px-6 py-6 border-b flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-700 font-medium">
          Get connected with us on social media
        </p>

        <div className="flex gap-4 text-gray-500 text-lg">
          <span className="hover:text-pink-500 cursor-pointer"></span>
          <span className="hover:text-pink-500 cursor-pointer"></span>
          <span className="hover:text-pink-500 cursor-pointer"></span>
        </div>
      </div>
<<<<<<< HEAD
      <div className="bg-[darkblue] text-white p-10 grid grid-cols-1 md:grid-cols-4 gap-10">
        {footer.map((item, index) => {
          return (
            <div key={index}>
              <h1 className="text-2xl font-bold mb-4 text-white">
                {item.title}
              </h1>
              <p>{item.desc}</p>
              <div
                className="flex flex-col
              "
              >
                {item.links &&
                  item.links.map((link, linkIndex) => {
                    if (link == "Home") {
                      return <Link to={`/`}>{link}</Link>;
                    }
                    return <Link to={`/${link.toLowerCase()}`}>{link}</Link>;
                  })}
              </div>
=======

      
      <div className="max-w-[1200px] mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {footer.map((item, index) => (
          <div key={index}>
            
         
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              {item.title}
            </h2>

       
            {item.desc && (
              <p className="text-sm text-gray-600 leading-relaxed mb-3">
                {item.desc}
              </p>
            )}

            <div className="flex flex-col gap-2">
              {item.links &&
                item.links.map((link, i) => {
                  if (link === "Home") {
                    return (
                      <Link
                        key={i}
                        to="/"
                        className="text-sm text-gray-600 hover:text-pink-500 transition"
                      >
                        {link}
                      </Link>
                    );
                  }

                  return (
                    <Link
                      key={i}
                      to={`/${link.toLowerCase()}`}
                      className="text-sm text-gray-600 hover:text-pink-500 transition"
                    >
                      {link}
                    </Link>
                  );
                })}
>>>>>>> 7d8a697 ( make login ,signup ,testmonials,heroSection,latestPosts,posts,header and updated footer)
            </div>
          </div>
        ))}
      </div>

    
      <div className="text-center text-sm text-gray-500 py-4 border-t">
        © 2026 Bloggers Company. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
