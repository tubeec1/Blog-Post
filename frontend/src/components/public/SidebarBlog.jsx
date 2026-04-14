import React from "react";

let categories = ["Technology", "Health", "Travel"];
let order = ["asc", "desc"];
const SidebarBlog = () => {
  return (
    <div className="w-[100vw] md:w-[20vw] p-4 bg-gray-100">
      <h1 className="text-2xl font-bold my-4 text-center">Filter Blogs</h1>
      <h2 className="text-xl font-semibold text-center">Choose Category:</h2>
      <select
        name=""
        id=""
        className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 my-3 text-center mx-auto block"
      >
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      <h2 className="text-xl font-semibold text-center">Sort by:</h2>
      <select
        name=""
        id=""
        className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 mx-auto block  my-3"
      >
        {order.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SidebarBlog;
