import React from "react";
import SidebarDashboard from "../components/dashboard/SidebarDashboard";
import Header from "../components/dashboard/Header";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";

const DashboardLayout = () => {
  let { user } = useSelector((store) => store.auth);

  console.log("user", user);

  if (!user) {
    return <Navigate to="/login" />;
  } else if (user.role !== "admin") {
    return <Navigate to="/" />;
  }
  return (
    <div className="h-screen w-screen flex flex-col md:flex-row p-4 bg-white gap-5">
      <SidebarDashboard />
      <main className="bg-gray-50 flex flex-col w-[100vw] md:[80%] p-2">
        <Header />
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
