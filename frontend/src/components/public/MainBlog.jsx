import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

const MainBlog = () => {
  const [search , setSearch]= useState("")
  let [posts, setPosts] = useState({
    allPosts: [],
    numberOfPages: [],
    recentPosts: [],
    page: 1,
    limit: 6,
  });

  let navigate = useNavigate();

  let fetchAllPosts = async () => {
    let res = await fetch("http://localhost:5000/api/posts/read?order=desc");
    let data = await res.json();
    if (data.status) {
      setPosts((prev) => {
        return { ...prev, allPosts: data.data };
      });
    }
  };

  let fetchRecentPosts = async (page) => {
    let res = await fetch(
      `http://localhost:5000/api/posts/read?page=${page}&limit=${posts.limit}&order=desc`,
    );
    let data = await res.json();
    if (data.status) {
      setPosts((prev) => {
        return { ...prev, recentPosts: data.data };
      });
    }
  };

  let num = Math.ceil(posts.allPosts.length / 6);
  posts.numberOfPages = [];
  for (let i = 1; i <= num; i++) {
    posts.numberOfPages.push(i);
  }

  useEffect(() => {
    fetchAllPosts();
    fetchRecentPosts(posts.page);
  }, []);
  const handleSearch = async (value) => {
  setSearch(value);

  if (!value.trim()) {
    fetchRecentPosts(1)
    return;
  }

  const res = await fetch(
    `http://localhost:5000/api/posts/read?search=${value}`
  );

  const data = await res.json();

  if (data.status) {
    setPosts((prev) => ({
      ...prev,
      recentPosts: data.data,
    }));
  }
};
  return (
    <div className="w-[80%] p-4 ">
      <div className="flex flex-col md:flex-row justify-between gap-5">
        <h1 className="text-3xl font-semibold">Our Blogs </h1>
        <form className="flex flex-row gap-5">
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e)=>handleSearch(e.target.value)}
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.recentPosts.map((post) => (
            <div
              key={post.PostId}
              className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition duration-300 hover:-translate-y-2 cursor-pointer"
              onClick={() => navigate(`/blogDetails/${post.PostId}`)}
            >
              <img
                src={`http://localhost:5000/public/${post.postThumbnail}`}
                alt=""
                className="h-48 w-full object-cover"
              />
              <div className=" p-4">
                <span className="text-sm text-pink-500 font-medium">
                  {post.categoryName}
                </span>

                <h3 className="text-lg font-bold mt-2">{post.postTitle}</h3>
                <p className="text-gray-600 text-sm mt-2">
                  {post.postContent.substring(0, 80)}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-row justify-center gap-2 mt-5">
          {posts.numberOfPages.map((page, index) => {
            return (
              <button
                key={index}
                className="border-1 border-gray-400 px-3 py-2 hover:bg-pink-500 hover:text-white"
                onClick={() => {
                  let newP = index + 1;
                  fetchRecentPosts(newP);
                }}
              >
                {page}
              </button>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default MainBlog;
