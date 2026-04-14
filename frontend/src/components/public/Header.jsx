import React from "react";
import { Link } from "react-router-dom";

const linkStyle =
  "text-gray-700 hover:bg-gradient-to-r py-6 hover:from-pink-500 hover:to-orange-400 hover:bg-clip-text hover:text-transparent transition duration-300";
const Header = () => {
  return (
    <div className="bg-white shadow-md sticky inset-0 z-50">
      <div className="max-w-[1200px] mx-auto flex justify-between items-center  w-[100%]">
        <div className="w-[120px]">
          <img src="../../assets/logo.png" alt="logo" />
        </div>

        <nav className="flex gap-5 ml-10 text-[18px] ">
          <Link to="/" className={linkStyle}>
            Home
          </Link>
          <Link to="/about" className={linkStyle}>
            About
          </Link>
          <Link to="/blog" className={linkStyle}>
            Blog
          </Link>
          <Link to="/contact" className={linkStyle}>
            Contact
          </Link>
          <Link to="/login" className={linkStyle}>
            Login
          </Link>
          <Link to="/signup" className={linkStyle}>
            Signup
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Header;
