import React from "react";
import { useParams } from "react-router-dom";
import posts from "../../assets/data/posts.json";

const BlogDetails = () => {
  let { id } = useParams();
  let post = posts.find((post) => post.id === parseInt(id));
  return (
    <div className="bg-gray-100 w-[100vw] min-h-[100vh] p-4">
      <div className="w-[100%] md:w-[800px] bg-white p-6 rounded-lg shadow-md mx-auto">
        <img className="w-full h-[400px]" src={post.image} alt={post.title} />
        <h1 className="text-2xl font-bold mt-4">{post.title}</h1>
        <p className="text-gray-600">{post.username}</p>
        <p className="text-pink-500 font-medium">{post.category}</p>
        <p className="text-gray-700 mt-4">{post.content}</p>
      </div>
    </div>
  );
};

export default BlogDetails;
