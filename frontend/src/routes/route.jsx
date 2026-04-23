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
import ForgetPassword from "../pages/publicLayout/ForgetPassword";
import React from "react";
import ResetPassword from "../pages/publicLayout/ResetPassword";
import Dashboard from "../pages/dashboardLayout/Dashboard";
import Posts from "../pages/dashboardLayout/Posts";
import Categories from "../pages/dashboardLayout/Categories";
import NotFound from "../pages/publicLayout/NotFound";

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
      {
        path: "/forget-password",
        element: <ForgetPassword />,
      },
      {
        path: "/reset-password",
        element: <ResetPassword />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "/dashboard/posts",
        element: <Posts />,
      },
      {
        path: "/dashboard/categories",
        element: <Categories />,
      },
    ],
  },
]);

export default route;
