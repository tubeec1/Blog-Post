import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";

let inputs = [
  {
    label: "Title",
    name: "postTitle",
    type: "text",
    placeholder: "Enter a post title",
  },
  {
    label: "Slug",
    name: "postSlug",
    type: "text",
    placeholder: "Enter a post slug",
  },
  {
    label: "Conent",
    name: "postContent",
    type: "text",
    placeholder: "Enter a post content",
  },
  {
    label: "Thumbnail",
    name: "postThumbnail",
    type: "file",
    placeholder: "Enter a thumbnail",
  },
  {
    label: "Image",
    name: "postImage",
    type: "file",
    placeholder: "Enter a thumbnail",
  },
];

const PostHeader = ({
  showForm,
  setShowForm,
  selectedPosts,
  setSeectedPosts,
  categories,
}) => {
  const [postData, setPostData] = useState({
    postCategorId: "",
    postTitle: "",
    postSlug: "",
    postContent: "",
    postImage: null,
    postThumbnail: null,
  });
  const handleChange = (e) => {
    const { name, value, files, type } = e.target;

    setPostData((prev) => ({
      ...prev,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  const handleCreatePost = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("categoryId", Number(postData.postCategoryId));
    formData.append("title", postData.postTitle);
    formData.append("slug", postData.postSlug);
    formData.append("content", postData.postContent);
    formData.append("image", postData.postImage);
    formData.append("thumbnail", postData.postThumbnail);

    const token = localStorage.getItem("token");

    const res = await fetch("http://localhost:5000/api/posts/create", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });

    const result = await res.json();

    console.log("RESULT:", result);

    if (result.status) {
      setShowForm(false);
      toast.success(result.message);
    } else {
      toast.error(result.message);
    }
  };
  // const handle = async (e) => {
  //   e.preventDefault();

  //   if (!selectedPosts?.id) {
  //     toast.error("No post selected for update");
  //     return;
  //   }

  //   if (!formData.category_id) {
  //     toast.error("Please select category");
  //     return;
  //   }

  //   const data = new FormData();

  //   data.append("category_id", formData.category_id);
  //   data.append("title", formData.title);
  //   data.append("slug", formData.slug);
  //   data.append("content", formData.content);

  //   if (formData.image) {
  //     data.append("image", formData.image);
  //   }

  //   if (formData.thumbnail) {
  //     data.append("thumbnail", formData.thumbnail);
  //   }

  //   const token = localStorage.getItem("token");

  //   const res = await fetch(
  //     `http://localhost:5000/api/posts/update/${selectedPosts.id}`,
  //     {
  //       method: "PUT",
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //       body: data,
  //     },
  //   );

  //   const result = await res.json();

  //   if (result.status) {
  //     toast.success("Post updated successfully");

  //     setSeectedPosts(null);
  //     setShowForm(false);
  //   } else {
  //     toast.error(result.message);
  //   }
  // };
  return (
    <div>
      <ToastContainer position="top-center" />
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold text-pink-500">Posts Dashboard</h1>

        <button
          className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-md shadow"
          onClick={() => {
            setPostData((prev) => {
              return {
                ...prev,
                postCategorId: "",
                postTitle: "",
                postSlug: "",
                postContent: "",
                postImage: null,
                postThumbnail: null,
              };
            });
            setShowForm(true);
          }}
        >
          Create Post
        </button>
      </div>
      {showForm && (
        <div className="fixed inset-0 bg-[rgba(0,0,0,0.7)] z-50">
          <div className="w-[50%] h-fit bg-white text-black mx-auto mt-20 py-10 px-10 rounded">
            <div className="flex justify-between py-2 mb-5">
              <h1 className="text-3xl font-bold text-center">
                {selectedPosts ? "  Post Updating" : "Post Creation"}
              </h1>
              <button
                className="text-3xl cursor-pointer hover:text-pink-500"
                onClick={() => setShowForm(false)}
              >
                X
              </button>
            </div>

            <form className="space-y-4" onSubmit={handleCreatePost}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {inputs.map((input, index) => (
                  <div key={index}>
                    <label className="text-sm">{input.label}</label>
                    {console.log("selected posts,", selectedPosts)}
                    <input
                      type={input.type}
                      name={input.name}
                      {...(input.type !== "file" && {
                        value: selectedPosts
                          ? selectedPosts[input.name] || ""
                          : postData[input.name] || "",
                      })}
                      onChange={handleChange}
                      placeholder={input.placeholder}
                      className="w-full mt-1 p-3 rounded-xl bg-gray-50 border border-gray-300 outline-none"
                    />
                  </div>
                ))}
                <div>
                  <label className="text-sm">Category</label>

                  <select
                    name="category_id"
                    value={postData.category_id}
                    onChange={handleChange}
                    className="w-full mt-1 p-3 rounded-xl bg-gray-50 border border-gray-300 outline-none"
                  >
                    <option value="">Select category</option>

                    {categories.map((cat) => (
                      <option key={cat.id} value={cat.id}>
                        {cat.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-gray-800 text-white py-3 rounded-xl hover:bg-gray-700 transition"
              >
                {selectedPosts ? "Update post" : "Create post"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default PostHeader;
