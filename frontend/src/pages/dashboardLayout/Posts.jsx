import React, { useEffect, useState } from "react";
import PostTable from "../../components/dashboard/PostTable";
import PostHeader from "../../components/dashboard/PostHeader";

const Posts = () => {
  const [dashPosts, setDashPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedPosts, setSelectedPosts] = useState(null);
  let [showForm, setShowForm] = useState(false);
  let [categories, setCategories] = useState([]);
 
  const fetchCategories = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/categories/read");
      const data = await res.json();
      setCategories(data.data);
    } catch (error) {
      console.log(error);
    }
  };

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
    fetchCategories();
  }, []);
  return (
    <div className="p-6 ">
      <PostHeader
        setShowForm={setShowForm}
        showForm={showForm}
        selectedPosts={selectedPosts}
        setSeectedPosts={setSelectedPosts}
        categories={categories}
        fetchPosts
      />
      <PostTable
        setShowForm={setShowForm}
        showForm={showForm}
        loading={loading}
        setLoading={setLoading}
        setDashPosts={setDashPosts}
        dashPosts={dashPosts}
        selectedPosts={selectedPosts}
        setSelectedPosts={setSelectedPosts}
       
      />
    </div>
  );
};

export default Posts;

