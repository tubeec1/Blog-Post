import React, { useState, useEffect, useRef } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Blogs", href: "#blogs" },
  { label: "Contact", href: "#contact" },
];

export default function Header({ isLoggedIn, onAuthOpen, onLogout, onToast }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const profileRef = useRef(null);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close profile dropdown on outside click
  useEffect(() => {
    const handleClick = (e) => {
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setProfileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  // Close mobile menu on link click
  const handleMobileLink = () => {
    setMobileOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl shadow-[0_1px_24px_rgba(0,0,0,0.06)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* ── Logo ── */}
          <a href="#home" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-brand-500 flex items-center justify-center shadow-md shadow-brand-500/25 group-hover:shadow-brand-500/40 transition-shadow">
              <i className="fa-solid fa-feather-pointed text-white text-sm"></i>
            </div>
            <span className="font-display text-xl font-bold text-ink-900">
              Blogosphere
            </span>
          </a>

          {/* ── Desktop Nav ── */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-ink-600 hover:text-brand-600 rounded-lg hover:bg-brand-50 transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* ── Desktop Right Side ── */}
          <div className="hidden md:flex items-center gap-3">
            {isLoggedIn ? (
              /* Profile dropdown */
              <div className="relative" ref={profileRef}>
                <button
                  onClick={() => setProfileOpen(!profileOpen)}
                  className="flex items-center gap-2 pl-2 pr-3 py-1.5 rounded-full hover:bg-warm-200 transition-all duration-200"
                >
                  <img
                    src="https://picsum.photos/seed/myprofile/80/80"
                    alt="Profile"
                    className="w-8 h-8 rounded-full object-cover border-2 border-white shadow-sm"
                  />
                  <span className="text-sm font-medium text-ink-700">John</span>
                  <i
                    className={`fa-solid fa-chevron-down text-[10px] text-ink-400 transition-transform duration-200 ${
                      profileOpen ? "rotate-180" : ""
                    }`}
                  ></i>
                </button>

                {profileOpen && (
                  <div className="absolute top-full right-0 mt-2 w-56 bg-white rounded-xl shadow-xl shadow-ink-900/8 border border-warm-200 py-2 animate-[slideDown_0.2s_ease]">
                    {/* User info */}
                    <div className="px-4 py-3 border-b border-warm-200">
                      <p className="text-sm font-semibold text-ink-900">
                        John Doe
                      </p>
                      <p className="text-xs text-ink-400 mt-0.5">
                        john@example.com
                      </p>
                    </div>

                    {/* Menu items */}
                    {[
                      { icon: "fa-user", label: "My Profile" },
                      { icon: "fa-newspaper", label: "My Posts" },
                      { icon: "fa-bookmark", label: "Bookmarks" },
                      { icon: "fa-gear", label: "Settings" },
                    ].map((item) => (
                      <button
                        key={item.label}
                        onClick={() => {
                          setProfileOpen(false);
                          onToast(item.label + " page coming soon!", "info");
                        }}
                        className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-ink-600 hover:bg-warm-100 hover:text-brand-600 transition-all duration-150"
                      >
                        <i
                          className={`fa-solid ${item.icon} w-4 text-center text-ink-400`}
                        ></i>
                        {item.label}
                      </button>
                    ))}

                    {/* Sign out */}
                    <div className="border-t border-warm-200 mt-1 pt-1">
                      <button
                        onClick={() => {
                          setProfileOpen(false);
                          onLogout();
                        }}
                        className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 transition-all duration-150"
                      >
                        <i className="fa-solid fa-right-from-bracket w-4 text-center"></i>
                        Sign Out
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              /* Login / Sign Up */
              <>
                <button
                  onClick={onAuthOpen}
                  className="px-4 py-2 text-sm font-semibold text-ink-700 hover:text-brand-600 transition-colors duration-200"
                >
                  Log In
                </button>
                <button
                  onClick={onAuthOpen}
                  className="relative overflow-hidden px-5 py-2 text-sm font-semibold text-white bg-ink-900 rounded-lg hover:bg-ink-800 transition-colors duration-200"
                >
                  Sign Up
                </button>
              </>
            )}
          </div>

          {/* ── Mobile Hamburger ── */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg hover:bg-warm-200 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            <i
              className={`fa-solid text-lg text-ink-700 transition-transform duration-200 ${
                mobileOpen ? "fa-xmark" : "fa-bars"
              }`}
            ></i>
          </button>
        </div>
      </div>

      {/* ── Mobile Menu ── */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-warm-200 shadow-lg animate-[slideDown_0.25s_ease]">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={handleMobileLink}
                className="block px-4 py-3 text-sm font-medium text-ink-600 hover:bg-brand-50 hover:text-brand-600 rounded-lg transition-all duration-150"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-3 border-t border-warm-200 flex gap-3">
              {isLoggedIn ? (
                <button
                  onClick={() => {
                    handleMobileLink();
                    onLogout();
                  }}
                  className="flex-1 py-2.5 text-sm font-semibold text-red-600 border border-red-200 rounded-lg hover:bg-red-50 transition-colors duration-200"
                >
                  Sign Out
                </button>
              ) : (
                <>
                  <button
                    onClick={() => {
                      handleMobileLink();
                      onAuthOpen();
                    }}
                    className="flex-1 py-2.5 text-sm font-semibold text-ink-700 border border-warm-300 rounded-lg hover:bg-warm-100 transition-colors duration-200"
                  >
                    Log In
                  </button>
                  <button
                    onClick={() => {
                      handleMobileLink();
                      onAuthOpen();
                    }}
                    className="flex-1 py-2.5 text-sm font-semibold text-white bg-ink-900 rounded-lg hover:bg-ink-800 transition-colors duration-200"
                  >
                    Sign Up
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
