

import React, { useState } from "react";
import { useDispatch } from "react-redux";

const Signup = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    gender: ""
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handle = async (e) => {
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

      if (data.success) {
        console.log("success");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white border border-gray-200 rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Sign Up
        </h2>

        <form onSubmit={handle} className="space-y-4">
          <div>
            <label>Name</label>
            <input
              name="name"
              value={user.name}
              onChange={handleChange}
              className="w-full p-3 border rounded-xl"
            />
          </div>

          <div>
            <label>Email</label>
            <input
              name="email"
              value={user.email}
              onChange={handleChange}
              className="w-full p-3 border rounded-xl"
            />
          </div>

          <div>
            <label>Password</label>
            <input
              name="password"
              value={user.password}
              onChange={handleChange}
              type="password"
              className="w-full p-3 border rounded-xl"
            />
          </div>
           <label>Gender</label>

      <select
       name="gender"
        value={user.gender}
       onChange={handleChange}
       className="w-full p-3 border rounded-xl"
     >
      <option value="">Select Gender</option>
      <option value="male">Male</option>
      <option value="female">Female</option>
     </select>

          <button
            type="submit"
            className="w-full bg-gray-800 text-white py-3 rounded-xl"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
