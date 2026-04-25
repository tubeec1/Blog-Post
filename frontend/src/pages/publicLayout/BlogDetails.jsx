import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const BlogDetails = () => {
  const [post, setPost] = useState(null);

  let { id } = useParams();

useEffect(() => {
    console.log("useEffect is running");

  const fetchPost = async () => {
    const res = await fetch(
      "http://localhost:5000/api/posts/read?order=desc"
    );

    const data = await res.json();
      console.log("clicked id:", post.PostId);
     
    if (data.status) {
      const foundPost = data.data.find(
        (p) => p.postId === parseInt(id)
      );
      setPost(foundPost);
    }
  };

  fetchPost();
}, []);
  return (
    <div className="bg-gray-100 w-[100vw] min-h-[100vh] p-4">
      <div className="w-[100%] md:w-[800px] bg-white p-6 rounded-lg shadow-md mx-auto">
        <img className="w-full h-[400px]" src={post.postImage} alt={post.postTitle} />
        <h1 className="text-2xl font-bold mt-4">{post.postTitle}</h1>
        <p className="text-gray-600">{post.username}</p>
        <p className="text-pink-500 font-medium">{post.postCategory}</p>
        <p className="text-gray-700 mt-4">{post.postContent}</p>
      </div>
    </div>
  );
};

export default BlogDetails;
