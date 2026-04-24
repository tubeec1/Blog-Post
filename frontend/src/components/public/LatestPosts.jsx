import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const LatestPosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
    
  useEffect(() => {
    const fetchPosts = async (page =1) => {
   
      try {
          const  limit =6;
        const res = await fetch(`http://localhost:5000/api/posts/read?page=${page}&limit=${limit}`);
        const data = await res.json();
        if (data.status) {
          setPosts(data.data);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div className="flex min-h-[40vh] items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-gray-200 border-t-pink-500" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-[40vh] items-center justify-center">
        <p className="text-sm font-medium text-rose-500">{error}</p>
      </div>
    );
  }

  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="mb-12 sm:mb-14 flex flex-col items-center text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Latest{" "}
            <span className="bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent">
              Posts
            </span>
          </h2>
          <p className="mt-3 max-w-xl text-sm sm:text-base text-gray-500">
            Fresh insights, ideas, and stories to help you grow.
          </p>
        </div>

        {/* GRID */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {posts.map((post) => (
            <Link
              key={post.postId}
              to={post.slug}
              className="group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              {/* IMAGE */}
              <div className="relative overflow-hidden">
                <img
                  src={`http://localhost:5000/public/${post.postImage}`}
                  alt={post.postTitle}
                  className="h-48 w-full object-cover transition duration-500 group-hover:scale-105"
                />

                {/* subtle overlay on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition duration-300" />
              </div>

              {/* CONTENT */}
              <div className="flex flex-1 flex-col p-5">
                {/* CATEGORY */}
                <span className="w-fit rounded-full bg-pink-50 px-3 py-1 text-xs font-medium text-pink-600">
                  {post.categoryName}
                </span>

                {/* TITLE */}
                <h3 className="mt-3 line-clamp-2 text-lg font-semibold text-gray-900 group-hover:text-pink-600 transition">
                  {post.postTitle}
                </h3>

                {/* DESCRIPTION */}
                <p className="mt-2 line-clamp-3 text-sm text-gray-500 leading-relaxed flex-1">
                  {post.postContent}
                </p>

                {/* FOOTER */}
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs text-gray-400">{post.userName}</span>

                  <span className="text-xs font-medium text-pink-500 flex items-center gap-1">
                    Read more →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestPosts;
