import React, { useState } from "react";
import CategoryTable from "../../components/dashboard/CategoryTable";
import CategoryHeader from "../../components/dashboard/CategoryHeader";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  const [showForm, setShowForm] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const fetchCategories = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/categories/read");
      const data = await res.json();
      setCategories(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-6">
      <CategoryHeader
        showForm={showForm}
        setShowForm={setShowForm}
        selectedCategory={selectedCategory}
        fetchCategories={fetchCategories}
      />
      <CategoryTable
        categories={categories}
        setShowForm={setShowForm}
        setSelectedCategory={setSelectedCategory}
        fetchCategories={fetchCategories}
      />
    </div>
  );
};

export default Categories;
