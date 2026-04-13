import React from "react";
import { Link } from "react-router-dom";

let footer = [
  {
    title: "Bloggers Company",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, eaque.",
  },
  {
    title: "Products",
    desc: "",
    links: ["Blog", "Podcast", "Newsletter", "Webinars", "Events", "Courses"],
  },
  {
    title: "Usefull Links",
    links: ["Home", "About", "Blog", "Contact", "Login", "Signup"],
  },
  {
    title: "Contact Us",
    desc: "",
    links: [
      "123 Main Street, Anytown, USA",
      "Phone: (123) 456-7890",
      "Email: info@bloggerscompany.com",
    ],
  },
];
const Footer = () => {
  return (
    <div>
      <div className="bg-blue-500 text-white p-4 text-xl">
        <p>Get connected with us on social media</p>
      </div>
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
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Footer;
