import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { readPosts } from "../../features/auth/postSlice";


const LatestPosts = () => {
   let dispatch = useDispatch();
  let navigate = useNavigate();
 const { Posts } = useSelector((state) => state.post);
  useEffect(() => {
    const fetchPosts = async () => {
      let res = await fetch("http://localhost:5000/api/posts/read");
      let data = await res.json();

     
      dispatch(readPosts(data.data));
      console.log("API RESPONSE:", data);
    };

    fetchPosts();
  }, [dispatch]);
return (
    <section className="py-10 px-6 max-w-[1200px] mx-auto ">
      <h3 className="text-3xl font-bold mb-10">Latest Posts</h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {Posts.map((post) => (
          <div
            key={post.id}
            className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition duration-300 cursor-pointer"
            onClick={() => navigate(`/blogDetails/${post.id}`)}
          >
            <img
              src={`http://localhost:5000/public/${post.postImage}`}
              
              alt={post.title}
              className="h-48 w-full object-cover"
            />

            <div className="p-4">
              <span className="text-sm text-pink-500 font-medium">
                {post.category_id}
              </span>

              <h3 className="text-lg font-bold mt-2">{post.title}</h3>

              <p className="text-gray-600 text-sm mt-2">
                {post.content.substring(0, 80)}...
              </p>

              <p className="text-xs text-gray-400 mt-3">By {post.user_id}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LatestPosts;
