

import React, { useEffect, useState } from "react";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/categories/read");
        const data = await res.json();

        setCategories(data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="p-6">

      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold text-pink-500">Categories Dashboard</h1>

        <button className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-md shadow">
           Create Category
        </button>
      </div>

    
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg">

          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="py-3 px-4 border">ID</th>
              <th className="py-3 px-4 border">Name</th>
              <th className="py-3 px-4 border">Slug</th>
              <th className="py-3 px-4 border">User ID</th>
              <th className="py-3 px-4 border">Created At</th>
              <th className="py-3 px-4 border">Actions</th>
            </tr>
          </thead>

          <tbody>
            {categories.map((cat) => (
              <tr key={cat.id} className="text-center border-t hover:bg-gray-50">

                <td className="py-2 px-3 border">{cat.id}</td>

                <td className="py-2 px-3 border font-semibold">
                  {cat.name}
                </td>

                <td className="py-2 px-3 border">
                  {cat.slug}
                </td>

                <td className="py-2 px-3 border">
                  {cat.user_id}
                </td>

                <td className="py-2 px-3 border">
                  {new Date(cat.created_at).toLocaleString()}
                </td>

               
                <td className="py-2 px-3 border space-x-2">
                  <button className="bg-gray-500 hover:bg-gray-600 text-white px-3 py-1 rounded text-sm">
                    Edit
                  </button>

                  <button className="bg-pink-500 hover:bg-pink-600 text-white px-3 py-1 rounded text-sm">
                    Delete
                  </button>
                </td>

              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
};

export default Categories;