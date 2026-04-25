import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX, FiLogOut, FiChevronDown } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../features/auth/authSlice";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { user } = useSelector((store) => store.auth);
  let dispatch = useDispatch();

  const [profileOpen, setProfileOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const profileRef = useRef(null);
  const mobileRef = useRef(null);
  const location = useLocation();

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Blog", path: "/blog" },
    { label: "Contact", path: "/contact" },
  ];

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setProfileOpen(false);
      }
      if (mobileRef.current && !mobileRef.current.contains(e.target)) {
        setMobileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close mobile on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  // Lock scroll
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [mobileOpen]);

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* NAVBAR */}
      <header className="fixed top-0 left-0 right-0 z-50">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mt-3 flex h-16 items-center justify-between rounded-2xl border border-white/20 bg-white/80 px-5 backdrop-blur-lg shadow-sm">
            {/* LOGO */}
            <Link to="/" className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-pink-500 to-orange-400">
                <span className="text-sm font-bold text-white">BP</span>
              </div>
              <span className="text-lg font-semibold text-gray-900">
                Blog Posts
              </span>
            </Link>

            {/* DESKTOP NAV */}
            <div className="hidden md:flex items-center gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="relative px-4 py-2 text-sm font-medium group"
                >
                  <span
                    className={`absolute left-4 right-4 -bottom-1 h-0.5 rounded-full bg-gradient-to-r from-pink-500 to-orange-400 transition-all duration-300 ${
                      isActive(link.path)
                        ? "opacity-100 scale-x-100"
                        : "opacity-0 scale-x-0 group-hover:opacity-60 group-hover:scale-x-100"
                    }`}
                  />
                  <span
                    className={`transition ${
                      isActive(link.path)
                        ? "bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent"
                        : "text-gray-600 group-hover:text-gray-900"
                    }`}
                  >
                    {link.label}
                  </span>
                </Link>
              ))}
            </div>

            {/* RIGHT SIDE */}
            <div className="flex items-center gap-3">
              {/* AUTH */}
              {!user ? (
                <div className="hidden md:flex items-center gap-3">
                  <Link
                    to="/login"
                    className="px-4 py-2 text-sm rounded-xl border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 transition"
                  >
                    Log in
                  </Link>

                  <Link
                    to="/signup"
                    className="px-4 py-2 text-sm rounded-xl bg-gradient-to-r from-pink-500 to-orange-400 text-white font-semibold shadow-sm hover:shadow-md transition"
                  >
                    Sign up
                  </Link>
                </div>
              ) : (
                <div ref={profileRef} className="relative">
                  <button
                    onClick={() => setProfileOpen(!profileOpen)}
                    className="flex items-center gap-2 rounded-xl px-2 py-1 hover:bg-gray-100 transition"
                  >
                    {console.log("user checking hs or her data", user)}
                    <img
                      src={`http://localhost:5000/public/${user.profileImage}`}
                      alt="profile"
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <span className="hidden sm:block text-sm text-gray-700">
                      {user.name.split(" ")[0]}
                    </span>
                    <FiChevronDown
                      className={`transition ${
                        profileOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* DROPDOWN */}
                  <div
                    className={`absolute right-0 mt-2 w-64 rounded-xl bg-white shadow-md border p-2 transition-all duration-200 ${
                      profileOpen
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-95 pointer-events-none"
                    }`}
                  >
                    <div className="px-3 py-2 bg-gray-50 rounded-lg">
                      <p className="text-sm font-semibold text-gray-900">
                        {user.name}
                      </p>
                      <p className="text-xs text-gray-500">{user.email}</p>
                    </div>
                    {user.role == "admin" && (
                      <div className="px-3 py-2 bg-gray-50 rounded-lg">
                        <Link
                          to="/dashboard"
                          className="text-sm font-semibold text-gray-900 hover:text-pink-500"
                        >
                          Dashboard
                        </Link>
                      </div>
                    )}
                    <div className="mt-2 border-t pt-2">
                      <button
                        onClick={() => {
                          dispatch(logout());
                          setProfileOpen(false);
                        }}
                        className="flex items-center gap-2 w-full px-3 py-2 text-sm text-rose-500 hover:bg-rose-50 rounded-lg"
                      >
                        <FiLogOut />
                        Logout
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* MOBILE MENU BUTTON */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="md:hidden w-9 h-9 flex items-center justify-center rounded-xl hover:bg-gray-100"
              >
                {mobileOpen ? <FiX /> : <FiMenu />}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* OVERLAY */}
      <div
        className={`fixed inset-0 bg-black/30 backdrop-blur-sm z-40 transition ${
          mobileOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileOpen(false)}
      />

      {/* MOBILE PANEL */}
      <div
        ref={mobileRef}
        className={`fixed top-0 right-0 h-full w-[85%] max-w-sm bg-white z-50 shadow-lg transition-all duration-300 ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 flex flex-col gap-6">
          {/* CLOSE */}
          <div className="flex justify-between items-center">
            <span className="font-semibold">Menu</span>
            <button onClick={() => setMobileOpen(false)}>
              <FiX />
            </button>
          </div>

          {/* LINKS */}
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-base ${
                isActive(link.path)
                  ? "text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-400 font-semibold"
                  : "text-gray-700"
              }`}
            >
              {link.label}
            </Link>
          ))}

          {/* AUTH MOBILE */}
          {!user && (
            <div className="flex flex-col gap-3 mt-4">
              <Link to="/login" className="border py-2 rounded-lg text-center">
                Log in
              </Link>
              <Link
                to="/signup"
                className="bg-gradient-to-r from-pink-500 to-orange-400 text-white py-2 rounded-lg text-center"
              >
                Sign up
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* SPACER */}
      <div className="h-[80px]" />
    </>
  );
};

export default Header;
