import React, { useEffect, useState } from "react";

let inputs = [
  {
    label: "Title",
    name: "name",
    type: "text",
    placeholder: "Enter a category title",
  },
  {
    label: "Slug",
    name: "slug",
    type: "text",
    placeholder: "Enter a category slug",
  },
];
const CategoryHeader = ({
  showForm,
  setShowForm,
  selectedCategory,
  fetchCategories,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    slug: "",
  });
  useEffect(() => {
    if (selectedCategory) {
      setFormData({
        name: selectedCategory.name || "",
        slug: selectedCategory.slug || "",
      });
    } else {
      setFormData({
        name: "",
        slug: "",
      });
    }
  }, [selectedCategory]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");
    const categoryId = selectedCategory?.id;

    if (!token) {
      alert("No token found");
      return;
    }

    if (!categoryId) {
      alert("No category selected");
      return;
    }

    const res = await fetch(
      `http://localhost:5000/api/categories/update/${categoryId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      },
    );

    const data = await res.json();

    if (data.status) {
      alert("Updated successfully");
      setShowForm(false);
      fetchCategories();
    } else {
      alert(data.message || "Update failed");
    }
  };

  return (
    <div>
      <div className="p-6">
        <div className="flex justify-between mb-4">
          <h1 className="text-2xl font-bold text-pink-500">
            Categories Dashboard
          </h1>

          <button
            onClick={() => setShowForm(true)}
            className="bg-gray-600 text-white px-4 py-2 rounded"
          >
            Create Category
          </button>
        </div>

        {showForm && (
          <div className="fixed inset-0 bg-[rgba(0,0,0,0.7)] z-50">
            <div className="w-[50%] h-fit bg-white text-black mx-auto mt-20 py-10 px-10 rounded">
              <div className="flex justify-between py-2 mb-5">
                <h1 className="text-3xl font-bold text-center">
                  {" "}
                  Category Registrasion
                </h1>

                <button
                  className="text-3xl cursor-pointer hover:text-pink-500"
                  onClick={() => setShowForm(false)}
                >
                  X
                </button>
              </div>

              <form onSubmit={handleUpdate} className="space-y-4">
                {inputs.map((input, index) => (
                  <div key={index}>
                    <label>{input.label}</label>

                    <input
                      type={input.type}
                      name={input.name}
                      value={formData[input.name]}
                      onChange={handleChange}
                      placeholder={input.placeholder}
                      className="w-full mt-1 p-3 rounded-xl bg-gray-50 border border-gray-300 outline-none"
                    />
                  </div>
                ))}

                <button
                  type="submit"
                  className="w-full bg-gray-800 text-white py-3 rounded-xl hover:bg-gray-700 transition"
                >
                  Create Category
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryHeader;
