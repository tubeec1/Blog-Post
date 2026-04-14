import React from "react";

const Signup = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white border border-gray-200 rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Sign Up</h2>

        <form className="space-y-4">
          <div>
            <label className="text-sm text-gray-700">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full mt-1 p-3 rounded-xl bg-gray-50 border border-gray-300 outline-none"
            />
          </div>

          <div>
            <label className="text-sm text-gray-700">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full mt-1 p-3 rounded-xl bg-gray-50 border border-gray-300 outline-none"
            />
          </div>

          <div>
            <label className="text-sm text-gray-700">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full mt-1 p-3 rounded-xl bg-gray-50 border border-gray-300 outline-none"
            />
          </div>

          <button
            type="button"
            className="w-full bg-gray-800 text-white font-semibold py-3 rounded-xl hover:bg-gray-700 transition"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center mt-6 text-sm text-gray-600">
          Already have an account? <span className="underline cursor-pointer font-semibold">Login</span>
        </p>
      </div>
    </div>


  )
};

export default Signup;
