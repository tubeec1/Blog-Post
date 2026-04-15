import React from "react";

const ForgetPassword = () => {
  return (
    <div className="md:min-h-screen flex md:items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white border border-gray-200 rounded-2xl shadow-lg p-8 text-gray-800">
        <h2 className="text-3xl font-bold text-center mb-2">Forget Password</h2>
        <form className="space-y-4">
          <div>
            <label className="text-sm">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full mt-1 p-3 rounded-xl bg-gray-50 border border-gray-300 outline-none"
            />
          </div>

          <button
            type="button"
            className="w-full bg-gray-800 text-white font-semibold py-3 rounded-xl hover:bg-gray-700 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;
