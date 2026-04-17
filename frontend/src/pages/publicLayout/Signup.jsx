import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

let inputs = [
  {
    label: "Name",
    name: "name",
    type: "text",
    placeholder: "Enter your name",
  },
  {
    label: "Email",
    name: "email",
    type: "email",
    placeholder: "Enter your email",
  },
  {
    label: "Password",
    name: "password",
    type: "password",
    placeholder: "Enter your password",
  },
  {
    label: "Confirm Password",
    name: "confirmPassword",
    type: "password",
    placeholder: "Enter your confirm password",
  },
  {
    label: "gender",
    name: "gender",
    options: ["male", "female"],
  },
];

const Signup = () => {
  let navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const handleChange = (e) => {
    setUser((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    if (!user.name) {
      toast("Enter your name");
      return;
    } else if (!user.email) {
      toast("Enter your email");
      return;
    } else if (!user.password) {
      toast("Enter your password");
      return;
    } else if (!user.confirmPassword) {
      toast("Enter confirm password");
      return;
    } else if (user.password != user.confirmPassword) {
      toast("There is mismatch password and confirm password");
      return;
    } else if (!user.gender) {
      toast("Choose your gender! either male or female");
      return;
    }
    try {
      let res = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      let data = await res.json();

      if (data.status === true) {
        toast.success("Signup successful!");
        setTimeout(() => {
          setUser({
            name: "",
            email: "",
            password: "",
            gender: "",
          });
          navigate("/login");
        }, 3000);
      } else {
        toast.error(data.message || "Signup failed");
      }
    } catch (error) {
      toast.error("Server error");
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <ToastContainer position="top-center" />

      <div className="w-full max-w-md bg-white border border-gray-200 rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Sign Up
        </h2>

        <form onSubmit={handleSignup} className="space-y-4">
          {inputs.map((input, index) =>
            input.options ? (
              <div key={index}>
                <label className="text-sm">{input.label}</label>
                <select
                  onChange={handleChange}
                  className="w-full mt-1 p-3 rounded-xl bg-gray-50 border border-gray-300 outline-none"
                  name={input.name}
                  value={user[input.name]}
                >
                  <option disabled>Choose Gender:</option>
                  {input.options.map((option, index) => (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            ) : (
              <div>
                <label className="text-sm">{input.label}</label>
                <input
                  type={input.type}
                  name={input.name}
                  value={user[input.name]}
                  onChange={handleChange}
                  placeholder={input.placeholder}
                  className="w-full mt-1 p-3 rounded-xl bg-gray-50 border border-gray-300 outline-none"
                />
              </div>
            ),
          )}

          <button
            type="submit"
            className="w-full bg-gray-800 text-white py-3 rounded-xl hover:bg-gray-700 transition"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center mt-6 text-sm text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="underline font-semibold">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
