import React, { useEffect, useState } from "react";
import PostTable from "../../components/dashboard/PostTable";
import PostHeader from "../../components/dashboard/PostHeader";

const Posts = () => {
   const [dashPosts, setDashPosts] = useState([]);
   const [loading, setLoading] = useState(true);
   const [selectedPosts ,setSeectedPosts]= useState([]);
   let [showForm, setShowForm] = useState(false);

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
      <PostHeader  setShowForm={setShowForm}
      showForm={showForm}
      selectedPosts={selectedPosts}
      setSeectedPosts={setSeectedPosts}
      />
      <PostTable 
      setShowForm={setShowForm}
      showForm={showForm}
      loading={loading }
      setLoading={setLoading}
      setDashPosts={setDashPosts}
      dashPosts={dashPosts}
      selectedPosts={selectedPosts}
      setSeectedPosts={setSeectedPosts}
      />
    </div>
  );
};

export default Posts;
