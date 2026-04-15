
import React, { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import route from "./route";
import { useDispatch } from "react-redux";
import { setUsers, logout } from "../features/auth/authSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");

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
            token: token,
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
  }, [dispatch]);

  return <RouterProvider router={route} />;
}

export default App;