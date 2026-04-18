import React, { useEffect, useState } from "react";

let inputs = [
  {
    label: "Title",
    name: "title",
    type: "text",
    placeholder: "Enter a post title",
  },
  {
    label: "Slug",
    name: "slug",
    type: "text",
    placeholder: "Enter a post slug",
  },
  {
    label: "Conent",
    name: "content",
    type: "text",
    placeholder: "Enter a post content",
  },
  {
    label: "Thumbnail",
    name: "thumbnail",
    type: "file",
    placeholder: "Enter a thumbnail",
  },
  {
    label: "Image",
    name: "image",
    type: "file",
    placeholder: "Enter a thumbnail",
  },
  {
    label: "Category",
    name: "category",
    type: "text",
    placeholder: "Chose category",
    options: ["Web development", "Health", "Food"],
  },
];
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
    <div className="p-6 ">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold text-pink-500">Posts Dashboard</h1>

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

                  <td className="py-2 px-3 border">{post.userName}</td>

                  <td className="py-2 px-3 border font-semibold">
                    {post.postTitle}
                  </td>

                  <td className="py-2 px-3 border">{post.postSlug}</td>

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

                  <td className="py-2 px-3 border">{post.categoryName}</td>

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

      {false && (
        <div className="fixed inset-0 bg-[rgba(0,0,0,0.7)]">
          <div className="w-[50%] h-fit bg-white text-black mx-auto mt-20 py-10 px-10 rounded">
            <div className="flex justify-between py-2 mb-5">
              <h1 className="text-3xl font-bold text-center">
                Post Registration
              </h1>
              <button className="text-3xl cursor-pointer hover:text-pink-500">
                X
              </button>
            </div>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {inputs.map((input, index) =>
                  input.options ? (
                    <div key={index}>
                      <label className="text-sm">{input.label}</label>
                      <select
                        className="w-full mt-1 p-3 rounded-xl bg-gray-50 border border-gray-300 outline-none"
                        name={input.name}
                      >
                        <option disabled>Choose Gender:</option>
                        {input.options.map((option, index) => (
                          <option key={index} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>
                  ) : (
                    <div>
                      <label className="text-sm">{input.label}</label>
                      <input
                        type={input.type}
                        name={input.name}
                        placeholder={input.placeholder}
                        className="w-full mt-1 p-3 rounded-xl bg-gray-50 border border-gray-300 outline-none"
                      />
                    </div>
                  ),
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-gray-800 text-white py-3 rounded-xl hover:bg-gray-700 transition"
              >
                Create Post
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Posts;
