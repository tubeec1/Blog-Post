import { createBrowserRouter } from "react-router-dom";
import PublicLayout from "../layouts/PublicLayout";
import Home from "../pages/publicLayout/Home";
import About from "../pages/publicLayout/About";
import Blog from "../pages/publicLayout/Blog";
import Contact from "../pages/publicLayout/Contact";
import Login from "../pages/publicLayout/Login";
import Signup from "../pages/publicLayout/Signup";
import DashboardLayout from "../layouts/DashboardLayout";
import BlogDetails from "../pages/publicLayout/BlogDetails";
import React from "react";

let route = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "blogDetails/:id",
        element: <BlogDetails />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
  },
]);

export default route;
