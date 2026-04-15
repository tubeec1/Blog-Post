import React from "react";
import { Link } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { MdOutlineCategory } from "react-icons/md";
import { IoMdLogOut } from "react-icons/io";

import { GiPostStamp } from "react-icons/gi";

let links = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: <MdDashboard />,
  },
  {
    name: "Posts",
    path: "/dashboard/posts",
    icon: <GiPostStamp />,
  },
  {
    name: "Categories",
    path: "/dashboard/categories",
    icon: <MdOutlineCategory />,
  },
  {
    name: "Logout",
    path: "/",
    icon: <IoMdLogOut />,
  },
];

const SidebarDashboard = () => {
  return (
    <div className="w-[100vw] md:min-h-[96vh] py-5  md:w-[20%] bg-gray-50 shadow-md">
      <div className="py-5 px-2 flex justify-center items-center">
        <img
          className="w-[60px] rounded-full"
          src="../../../src/assets/logo.png"
          alt=""
        />
        <h2 className="font-bold text-xl text-pink-500">Blogosphere</h2>
      </div>
      <div className="flex flex-col gap-y-4">
        {links.map((link, index) => (
          <Link
            className="bg-white w-[90%] text-gray-600 md:w-[100%] mx-auto flex flex-row items-center gap-x-3 shadow-md px-2 py-3 rounded hover:bg-pink-500 hover:text-white hover:-translate-y-1 transition duration-300"
            to={link.path}
          >
            {link.icon}
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SidebarDashboard;
