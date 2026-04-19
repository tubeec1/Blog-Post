
import React, { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import route from "./route";
import { useDispatch } from "react-redux";
import { setUsers, logout } from "../features/auth/authSlice";

function App() {
  const dispatch = useDispatch();
 useEffect(() => {
  const token = localStorage.getItem("token");
  const storedUser = JSON.parse(localStorage.getItem("user"));

 
  if (storedUser && token) {
    dispatch(setUsers({ user: storedUser, token }));
  }

 
  if (!token) {
    dispatch(logout());
    return;
  }

 
  const fetchUser = async () => {
    try {
      const res = await fetch(
        "http://localhost:5000/api/auth/profile",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await res.json();

      if (data.status) {
        dispatch(setUsers({
          user: data.user,
          token,
        }));

        localStorage.setItem("user", JSON.stringify(data.user));
      } else {
        dispatch(logout());
      }
    } catch (error) {
      console.log(error);
      dispatch(logout());
    }
  };

  fetchUser();
}, []);

  return <RouterProvider router={route} />;
}

export default App;