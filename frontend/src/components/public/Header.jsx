import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../features/auth/authSlice";

const linkStyle =
  "text-gray-700 hover:bg-gradient-to-r py-6 hover:from-pink-500 hover:to-orange-400 hover:bg-clip-text hover:text-transparent transition duration-300";
const Header = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const [showCard, setShowCard] = useState(false);
  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <div className="bg-[rgba(255,255,255,0.95)] shadow-md sticky inset-0 z-50">
      <div className="max-w-[1200px] mx-auto flex justify-between items-center  w-[100%]">
        <div className="w-[120px]">
          <img src="../../../src/assets/logo.png" alt="logo" />
        </div>

        <nav className="flex gap-5 ml-10 text-[18px] items-center">
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
          {!user && (
            <div className=" flex items-center justify-center gap-3 ">
              <Link to="/login" className={linkStyle}>
                Login
              </Link>

              <Link to="/signup" className={linkStyle}>
                Signup
              </Link>
            </div>
          )}
          <div className="">
            {user && (
              <div className="relative flex items-center gap-3">
                <img
                  src={`http://localhost:5000/public/${user.profileImage}`}
                  alt="profile"
                  className="w-10 h-10 rounded-full cursor-pointer"
                  onClick={() => setShowCard((prev) => !prev)}
                />
                {showCard && (
                  <div className="absolute top-14  -right-20 w-64 bg-white shadow-lg border rounded-lg p-4 z-50">
                    <h2 className="font-semibold text-gray-800">User Info</h2>

                    <p className="text-sm text-gray-600 mt-2">
                      Email: {user.email}
                    </p>
                    {user.role == "admin" && (
                      <Link
                        className="text-sm text-gray-600 my-2 hover:text-pink-500"
                        to="/dashboard"
                      >
                        Dashboard
                      </Link>
                    )}
                    <button
                      onClick={handleLogout}
                      className="mt-4 w-full bg-pink-500 hover:bg-pink-600 text-white py-2 rounded"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
