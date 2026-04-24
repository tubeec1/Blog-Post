import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
const PopularPosts = () => {
  let [popularPosts, setPopularPosts] = useState({
    posts: [],
    page: 1,
    limit: 3,
  });

  let navigate = useNavigate();

  let fetchPopularPosts = async (page) => {
    let res = await fetch(
      `http://localhost:5000/api/posts/read?page=${page}&limit=${popularPosts.limit}`,
    );
    let data = await res.json();
    if (data.status) {
      if (data.data.length == 0) {
        let newP = 1;
        setPopularPosts((prev) => ({ ...prev, page: newP }));
        fetchPopularPosts(newP);
      } else {
        setPopularPosts((prev) => {
          return { ...prev, posts: data.data };
        });
      }
    } else {
      toast.error(data.message);
    }
  };
  useEffect(() => {
    fetchPopularPosts(popularPosts.page);
  }, []);
  return (
    <section className="py-10 px-6 max-w-[1200px] mx-auto relative">
      <ToastContainer />
         <div className="mb-12 sm:mb-14 flex flex-col items-center text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Popular{" "}
            <span className="bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent">
              Posts
            </span>
          </h2>
          <p className="mt-3 max-w-xl text-sm sm:text-base text-gray-500">
            Fresh insights, ideas, and stories to help you grow.
          </p>
        </div>
    <button
    className="absolute left-2 top-1/2 -translate-y-1/2 bg-white shadow-lg w-11 h-11 rounded-full flex items-center justify-center hover:bg-gray-100 transition disabled:opacity-40"
    disabled={popularPosts.page <= 1}
    onClick={() => {
      if (popularPosts.page > 1) {
        const newPage = popularPosts.page - 1;
        fetchPopularPosts(newPage);
        setPopularPosts((prev) => ({ ...prev, page: newPage }));
      }
    }}
  >
    &lt;
  </button>

  {/* GRID */}
  <div className="mx-auto max-w-7xl px-6">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

      {popularPosts.posts.slice(0, 3).map((post) => (
        <div
          key={post.PostId}
          onClick={() => navigate(`/blogDetails/${post.PostId}`)}
          className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300 hover:-translate-y-2 cursor-pointer"
        >
          {/* IMAGE */}
          <div className="overflow-hidden">
            <img
              src={`http://localhost:5000/public/${post.postThumbnail}`}
              alt={post.postTitle}
              className="h-52 w-full object-cover group-hover:scale-105 transition duration-500"
            />
          </div>

          {/* CONTENT */}
          <div className="p-5">
            <span className="text-xs font-semibold text-pink-500 uppercase tracking-wide">
              {post.categoryName}
            </span>

            <h3 className="mt-2 text-lg font-bold text-gray-900 line-clamp-2 group-hover:text-pink-600 transition">
              {post.postTitle}
            </h3>

            <p className="mt-2 text-sm text-gray-600 line-clamp-3">
              {post.postContent.substring(0, 90)}...
            </p>
             <span className="text-xs text-gray-400">{post.userName}</span>
          </div>
        </div>
      ))}

    </div>
  </div>

  {/* RIGHT BUTTON */}
  <button
    className="absolute right-2 top-1/2 -translate-y-1/2 bg-white shadow-lg w-11 h-11 rounded-full flex items-center justify-center hover:bg-gray-100 transition"
    onClick={() => {
      const newPage = popularPosts.page + 1;
      fetchPopularPosts(newPage);
      setPopularPosts((prev) => ({ ...prev, page: newPage }));
    }}
  >
    &gt;
  </button>
    </section>
  );
};

export default PopularPosts;
