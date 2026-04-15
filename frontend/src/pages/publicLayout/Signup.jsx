import React from "react";

let inputs = [
  {
    label: "Name",
    placeholder: "Enter your name",
    type: "text",
  },
  {
    label: "Email",
    placeholder: "Enter your email",
    type: "email",
  },
  {
    label: "Gender",
    options: ["Male", "Female"],
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
const Signup = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white border border-gray-200 rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Sign Up
        </h2>

        <form className="space-y-4">
          {inputs.map((input, index) =>
            input.options ? (
              <div>
                <label className="text-sm text-gray-700">{input.label}</label>
                <select className="w-full mt-1 p-3 rounded-xl bg-gray-50 border border-gray-300 outline-none">
                  {input.options.map((option, index) => (
                    <option value={option}>{option}</option>
                  ))}
                </select>
              </div>
            ) : (
              <div>
                <label className="text-sm text-gray-700">{input.label}</label>
                <input
                  type="text"
                  placeholder={input.placeholder}
                  className="w-full mt-1 p-3 rounded-xl bg-gray-50 border border-gray-300 outline-none"
                />
              </div>
            ),
          )}

          <button
            type="button"
            className="w-full bg-gray-800 text-white font-semibold py-3 rounded-xl hover:bg-gray-700 transition"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center mt-6 text-sm text-gray-600">
          Already have an account?{" "}
          <span className="underline cursor-pointer font-semibold">Login</span>
        </p>
      </div>
    </div>
  );
};

export default Signup;
