import React from "react";
import { Link } from "react-router-dom";
let inputs = [
  {
    label: "Email",
    placeholder: "Enter your email",
    type: "email",
  },
  {
    label: "Password",
    placeholder: "Enter your password",
    type: "password",
  },
];
const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white border border-gray-200 rounded-2xl shadow-lg p-8 text-gray-800">
        <h2 className="text-3xl font-bold text-center mb-6">Login </h2>

        <form className="space-y-4">
          {inputs.map((input, index) => {
            return (
              <div>
                <label className="text-sm">{input.label}</label>
                <input
                  type={input.type}
                  placeholder={input.placeholder}
                  className="w-full mt-1 p-3 rounded-xl bg-gray-50 border border-gray-300 outline-none"
                />
              </div>
            );
          })}
          <Link
            to="/forget-password"
            className="text-pink-600 underline flex justify-end font-semibold"
          >
            Foget Password
          </Link>
          <button
            type="button"
            className="w-full bg-gray-800 text-white font-semibold py-3 rounded-xl hover:bg-gray-700 transition"
          >
            Submit
          </button>
        </form>

        <p className="text-center mt-6 text-sm text-gray-600">
          Don't have an account?{" "}
          <Link to="/signup" className="underline font-semibold cursor-pointer">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
