


import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    gender: ""
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      let res = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
      });

      let data = await res.json();

      if (data.status === true) {
        toast.success("Signup successful!");
        setUser({
          name: "",
          email: "",
          password: "",
          gender: ""
        });
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

      <ToastContainer />

      <div className="w-full max-w-md bg-white border border-gray-200 rounded-2xl shadow-lg p-8">

        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Sign Up
        </h2>

        <form onSubmit={handleSignup} className="space-y-4">

          <input
            name="name"
            placeholder="Name"
            value={user.name}
            onChange={handleChange}
            className="w-full p-3 border rounded-xl outline-none"
          />

          <input
            name="email"
            placeholder="Email"
            value={user.email}
            onChange={handleChange}
            className="w-full p-3 border rounded-xl outline-none"
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            value={user.password}
            onChange={handleChange}
            className="w-full p-3 border rounded-xl outline-none"
          />

          <select
            name="gender"
            value={user.gender}
            onChange={handleChange}
            className="w-full p-3 border rounded-xl outline-none"
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>

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