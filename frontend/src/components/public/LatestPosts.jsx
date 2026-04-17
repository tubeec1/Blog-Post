import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { readPosts } from "../../features/auth/postSlice";

const LatestPosts = () => {
  let [latestPosts, setLatestPosts] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    const fetchPosts = async () => {
      let res = await fetch(
        "http://localhost:5000/api/posts/read?page=1&limit=6&order=desc",
      );
      let data = await res.json();

      if (data.status) {
        setLatestPosts(data.data);
      } else {
        setLatestPosts([]);
        alert(data.message);
      }
    };

    fetchPosts();
  }, []);
  return (
    <section className="py-10 px-6 max-w-[1200px] mx-auto ">
      <h3 className="text-3xl font-bold mb-10">Latest Posts</h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {latestPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition duration-300 cursor-pointer"
            onClick={() => navigate(`/blogDetails/${post.id}`)}
          >
            <img
              src={`http://localhost:5000/public/${post.postThumbnail}`}
              alt={post.postTitle}
              className="h-48 w-full object-cover"
            />

            <div className="p-4">
              <span className="text-sm text-pink-500 font-medium">
                {post.categoryName}
              </span>

              <h3 className="text-lg font-bold mt-2">{post.postTtitle}</h3>

              <p className="text-gray-600 text-sm mt-2">
                {post.postContent.substring(0, 30)}...
              </p>

              <p className="text-xs text-gray-400 mt-3">By {post.userName}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LatestPosts;
