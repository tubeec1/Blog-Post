import React from "react";
import { toast, ToastContainer } from "react-toastify";

const PostTable = ({
  loading,
  dashPosts,
  setDashPosts,
  setShowForm,
  setSelectedPosts,
}) => {
  const handleDeletePost = async (PostId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this post?",
    );

    if (!confirmDelete) return;

    try {
      const token = localStorage.getItem("token");

      const res = await fetch(
        `http://localhost:5000/api/posts/delete/${PostId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      const result = await res.json();

      if (result.status) {
        toast.success(result.message);

        setDashPosts((prev) => prev.filter((post) => post.PostId !== PostId));
      } else {
        toast.error(result.message || "Delete failed");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="overflow-x-auto overflow-y-auto flex max-h-[72vh]">
      <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg ">
        <thead className="bg-gray-100 text-gray-700 sticky top-0 z-10">
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
                {console.log("post data is here also to see it ", post)}
                <td className="py-2 px-3 border">{post.PostId}</td>

                <td className="py-2 px-3 border">{post.userName}</td>

                <td className="py-2 px-3 border font-semibold">
                  {post.postTitle}
                </td>

                <td className="py-2 px-3 border">{post.postSlug}</td>

                <td className="py-2 px-3 border">
                  {post.postContent?.slice(0, 40)}...
                </td>

                <td className="py-2 px-3 border">
                  {console.log("post iamge is here", post.postImage)}
                  <img
                    src={`http://localhost:5000/public/${post.postImage}`}
                    alt="post image"
                    className="w-12 h-12 object-cover rounded"
                  />
                </td>

                <td className="py-2 px-3 border">
                  <img
                    src={`http://localhost:5000/public/${post.postThumbnail}`}
                    alt="thumbnail"
                    className="w-12 h-12 object-cover rounded"
                  />
                </td>

                <td className="py-2 px-3 border">{post.categoryName}</td>

                <td className="py-2 px-3 border">
                  {new Date(post.postCreatedAt).toLocaleString()}
                </td>

                <td className="py-5 px-3 border space-x-2 flex">
                  <button
                    className="bg-gray-500 hover:bg-gray-600 text-white px-3 py-1 rounded text-sm"
                    onClick={() => {
                      setSelectedPosts(post);
                      setShowForm(true);
                    }}
                  >
                    Edit
                  </button>

                  <button
                    className="bg-pink-500 hover:bg-pink-600 text-white px-3 py-1 rounded text-sm"
                    onClick={() => handleDeletePost(post.PostId)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default PostTable;
