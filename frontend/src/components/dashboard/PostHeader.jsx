import React, { useState } from "react";

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
const PostHeader = () => {
  let [showForm, setShowForm] = useState(false);
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold text-pink-500">Posts Dashboard</h1>

        <button
          className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-md shadow"
          onClick={() => setShowForm(true)}
        >
          Create Post
        </button>
      </div>
      {showForm && (
        <div className="fixed inset-0 bg-[rgba(0,0,0,0.7)] z-50">
          <div className="w-[50%] h-fit bg-white text-black mx-auto mt-20 py-10 px-10 rounded">
            <div className="flex justify-between py-2 mb-5">
              <h1 className="text-3xl font-bold text-center">
                Post Registration
              </h1>
              <button
                className="text-3xl cursor-pointer hover:text-pink-500"
                onClick={() => setShowForm(false)}
              >
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

export default PostHeader;
