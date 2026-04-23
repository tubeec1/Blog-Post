import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-white px-4 py-12">
      {/* Background blobs (cleaned) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-1/3 h-[350px] w-[350px] rounded-full bg-gradient-to-br from-pink-100/40 to-orange-100/20 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-[400px] w-[400px] rounded-full bg-gradient-to-tl from-orange-100/40 to-pink-100/20 blur-3xl" />
      </div>

      <div className="relative z-10 text-center max-w-xl mx-auto">
        {/* ICON */}
        <div className="mb-8 flex justify-center">
          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-pink-50 to-orange-50 shadow-md">
            <span className="text-3xl">🔍</span>
          </div>
        </div>

        {/* 404 */}
        <h1 className="text-6xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight">
          <span className="bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent">
            404
          </span>
        </h1>

        {/* TEXT */}
        <h2 className="mt-4 text-xl sm:text-2xl font-bold text-gray-900">
          Page not found
        </h2>

        <p className="mt-3 text-sm sm:text-base text-gray-500 leading-relaxed">
          The page you're looking for doesn’t exist or may have been moved.
        </p>

        {/* ACTIONS */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-orange-400 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:shadow-lg"
          >
            Go Home
          </Link>

          <button
            onClick={handleGoBack}
            className="inline-flex items-center justify-center rounded-full border border-gray-200 px-6 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Go Back
          </button>
        </div>

        {/* EXTRA CTA (important upgrade) */}
        <div className="mt-6">
          <Link
            to="/blog"
            className="text-sm font-medium text-pink-500 hover:underline"
          >
            Or explore latest articles →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
