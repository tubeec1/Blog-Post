import React from "react";

import posts from "../../assets/data/posts.json";
import { useNavigate } from "react-router-dom";

const MainBlog = () => {
  let navigate = useNavigate();
  return (
    <div className="w-[80%] p-4">
      <div className="flex flex-col md:flex-row justify-between gap-5">
        <h1 className="text-3xl font-semibold">Our Blogs </h1>
        <form className="flex flex-row gap-5">
          <input
            type="text"
            placeholder="Search..."
            className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <button
            className="bg-pink-500 text-white py-2 px-4 rounded-md hover:bg-pink-600 transition"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
      <section className="py-10 px-6 max-w-[1200px] mx-auto relative">
        <button className="bg-white shadow-md w-10 h-10 rounded-full flex items-center justify-center   absolute  top-60  -left-20 hover:bg-gray-100 transition">
          &lt;
        </button>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition duration-300 hover:-translate-y-2 cursor-pointer"
              onClick={() => navigate(`/blogDetails/${post.id}`)}
            >
              <img
                src={post.image}
                alt=""
                className="h-48 w-full object-cover"
              />
              <div className=" p-4">
                <span className="text-sm text-pink-500 font-medium">
                  {post.category}
                </span>

                <h3 className="text-lg font-bold mt-2">{post.title}</h3>
                <p className="text-gray-600 text-sm mt-2">
                  {post.content.substring(0, 80)}
                </p>
              </div>
            </div>
          ))}
        </div>
        <button className="bg-white shadow-md w-10 h-10 rounded-full flex items-center justify-center   absolute  top-60  -right-20 hover:bg-gray-100 transition">
          &gt;
        </button>
      </section>
    </div>
  );
};

export default MainBlog;
