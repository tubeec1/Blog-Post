
import React, { useState } from "react";
import CategoryTable from "../../components/dashboard/CategoryTable";
import CategoryHeader from "../../components/dashboard/CategoryHeader";

const Categories = () => {
   const [categories, setCategories] = useState([]);

  const [showForm, setShowForm] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
return (
   <div className="p-6">
    <CategoryHeader
      showForm={showForm}
        setShowForm={setShowForm}
        selectedCategory={selectedCategory}
    
    />
    <CategoryTable
     setShowForm={setShowForm}
      setSelectedCategory={setSelectedCategory}
    />
   
   </div>
  );
};

export default Categories;

