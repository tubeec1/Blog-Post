import React, { useEffect, useState } from "react";

import posts from "../../assets/data/posts.json";
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
      <h3 className="text-3xl font-bold mb-10">POPULAR POSTS</h3>
      <button
        className="bg-white shadow-md w-10 h-10 rounded-full flex items-center justify-center   absolute  top-60  -left-20 hover:bg-gray-100 transition"
        onClick={() => {
          if (popularPosts.page > 1) {
            let newP = popularPosts.page - 1;
            fetchPopularPosts(newP);
            setPopularPosts((prev) => {
              return { ...prev, page: newP };
            });
          }
        }}
      >
        &lt;
      </button>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {popularPosts.posts.map(
          (post, index) =>
            index < 3 && (
              <div
                key={post.id}
                className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition duration-300 hover:-translate-y-2 cursor-pointer"
                onClick={() => navigate(`/blogDetails/${post.PostId}`)}
              >
                <img
                  src={post.postThumbnail}
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
            ),
        )}
      </div>
      <button
        className="bg-white shadow-md w-10 h-10 rounded-full flex items-center justify-center   absolute  top-60  -right-20 hover:bg-gray-100 transition"
        onClick={() => {
          let newP = popularPosts.page + 1;
          fetchPopularPosts(newP);
          setPopularPosts((prev) => {
            return { ...prev, page: newP };
          });
        }}
      >
        &gt;
      </button>
    </section>
  );
};

export default PopularPosts;
