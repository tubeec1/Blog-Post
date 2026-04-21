import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const CategoryTable = ({
  setShowForm,
  setSelectedCategory,
  fetchCategories,
  categories,
  setCategories,
}) => {
  useEffect(() => {
    fetchCategories();
  }, []);

  const handleDelete = async (categoryId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this category?",
    );

    if (!confirmDelete) return;

    const token = localStorage.getItem("token");

    if (!token) {
      toast.error("No token found. Please login again.");
      return;
    }

    const res = await fetch(
      `http://localhost:5000/api/categories/delete/${categoryId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      },
    );

    const data = await res.json();

    if (data.status) {
      toast.success("Deleted successfully");
       fetchCategories();
      setCategories((prev) => prev.filter((item) => item.id !== categoryId));
    } else {
      toast.error(data.message || "Delete failed");
    }
  };
  return (
    <div className="overflow-x-auto overflow-y-auto flex max-h-[72vh]">
      <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg">
        <thead className="bg-gray-100 sticky top-0">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Slug</th>
            <th>User ID</th>
            <th>Created At</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {categories.map((cat) => (
            <tr key={cat.id} className="text-center border-t p-6">
              <td>{cat.id}</td>
              <td>{cat.name}</td>
              <td>{cat.slug}</td>
              <td>{cat.user_id}</td>
              <td>{new Date(cat.created_at).toLocaleString()}</td>

              <td className="space-x-2  space-y-2 p-2">
                <button
                  onClick={() => {
                    setSelectedCategory(cat);
                    setShowForm(true);
                  }}

                  className="bg-gray-500 text-white px-3 py-1 rounded"
                >
                  Edit
                </button>

                <button
                  className="bg-pink-500 text-white px-3 py-1 rounded"
                  onClick={() => handleDelete(cat.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CategoryTable;
