



import React, { useEffect, useState } from "react";

const Posts = () => {
  const [dashPosts, setDashPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/posts/read");
        const data = await res.json();

        setDashPosts(data?.data || []);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="p-6">
   
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold text-pink-500">
          Posts Dashboard
        </h1>

        <button className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-md shadow">
          Create Post
        </button>
      </div>

  
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg">
          
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="py-3 px-4 border">Post ID</th>
              <th className="py-3 px-4 border">User Name</th>
              <th className="py-3 px-4 border">Title</th>
              <th className="py-3 px-4 border">Slug</th>
              <th className="py-3 px-4 border">Content</th>
              <th className="py-3 px-4 border">Image</th>
              <th className="py-3 px-4 border">Thumbnail</th>
              <th className="py-3 px-4 border">Category</th>
              <th className="py-3 px-4 border">Created At</th>
              <th className="py-3 px-4 border">Actions</th>
            </tr>
          </thead>

          <tbody>
            {loading ? (
              <tr>
                <td colSpan="10" className="text-center py-6">
                  Loading posts...
                </td>
              </tr>
            ) : dashPosts.length === 0 ? (
              <tr>
                <td colSpan="10" className="text-center py-6">
                  No posts found
                </td>
              </tr>
            ) : (
              dashPosts.map((post) => (
                <tr
                  key={post.PostId}
                  className="text-center border-t hover:bg-gray-50"
                >
                  <td className="py-2 px-3 border">{post.PostId}</td>

                  <td className="py-2 px-3 border">
                    {post.userName}
                  </td>

                  <td className="py-2 px-3 border font-semibold">
                    {post.postTitle}
                  </td>

                  <td className="py-2 px-3 border">
                    {post.postSlug}
                  </td>

                  <td className="py-2 px-3 border">
                    {post.postContent?.slice(0, 40)}...
                  </td>

                  <td className="py-2 px-3 border">
                    <img
                      src={`http://localhost:5000/${post.postImage}`}
                      alt="post"
                      className="w-12 h-12 object-cover rounded"
                    />
                  </td>

                  <td className="py-2 px-3 border">
                    <img
                      src={`http://localhost:5000/${post.postThumbnail}`}
                      alt="thumbnail"
                      className="w-12 h-12 object-cover rounded"
                    />
                  </td>

                  <td className="py-2 px-3 border">
                    {post.categoryName}
                  </td>

                  <td className="py-2 px-3 border">
                    {new Date(post.postCreatedAt).toLocaleString()}
                  </td>

                  <td className="py-5 px-3 border space-x-2 flex">
                    <button className="bg-gray-500 hover:bg-gray-600 text-white px-3 py-1 rounded text-sm">
                      Edit
                    </button>

                    <button className="bg-pink-500 hover:bg-pink-600 text-white px-3 py-1 rounded text-sm">
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>

        </table>
      </div>
    </div>
  );
};

export default Posts;

 