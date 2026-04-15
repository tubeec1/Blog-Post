import React from "react";
import { Link } from "react-router-dom";
let inputs = [
  {
    label: "OTP Number",
    placeholder: "Enter OTP in your email",
    type: "text",
  },

  {
    label: "Password",
    placeholder: "Enter your password",
    type: "password",
  },
  {
    label: "Confirm Password",
    placeholder: "Confirm your password",
    type: "password",
  },
];
const ResetPassword = () => {
  return (
    <div className="md:min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white border border-gray-200 rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Reset Password
        </h2>

        <form className="space-y-4">
          {inputs.map((input, index) => (
            <div>
              <label className="text-sm text-gray-700">{input.label}</label>
              <input
                type="text"
                placeholder={input.placeholder}
                className="w-full mt-1 p-3 rounded-xl bg-gray-50 border border-gray-300 outline-none"
              />
            </div>
          ))}

          <button
            type="button"
            className="w-full bg-gray-800 text-white font-semibold py-3 rounded-xl hover:bg-gray-700 transition"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center mt-6 text-sm text-gray-600">
          back to login?{" "}
          <Link to="/login" className="underline cursor-pointer font-semibold">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ResetPassword;
