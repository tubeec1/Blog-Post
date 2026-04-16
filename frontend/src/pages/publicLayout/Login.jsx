

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUsers } from "../../features/auth/authSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      let res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
      });

      let data = await res.json();

      if (data.status === true) {
        toast.success("Login successful!");

        dispatch(setUsers({
          user: data.user,
          token: data.token
        }));

        localStorage.setItem("user", JSON.stringify(data.user));
        localStorage.setItem("token", data.token);

        navigate("/");
      } else {
        toast.error(data.message || "Login failed");
      }

    } catch (error) {
      toast.error("Server error");
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">

      <ToastContainer position="top-center" />

      <div className="w-full max-w-md bg-white border border-gray-200 rounded-2xl shadow-lg p-8 text-gray-800">

        <h2 className="text-3xl font-bold text-center mb-6">
          Login
        </h2>

        <form onSubmit={handleLogin} className="space-y-4">

          <div>
            <label className="text-sm">Email</label>
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full mt-1 p-3 rounded-xl bg-gray-50 border border-gray-300 outline-none"
            />
          </div>

          <div>
            <label className="text-sm">Password</label>
            <input
              type="password"
              name="password"
              value={user.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full mt-1 p-3 rounded-xl bg-gray-50 border border-gray-300 outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gray-800 text-white font-semibold py-3 rounded-xl hover:bg-gray-700 transition"
          >
            Login
          </button>

        </form>

      </div>
    </div>
  );
};

export default Login;
