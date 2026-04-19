import React, { useEffect, useState } from "react";
import PostTable from "../../components/dashboard/PostTable";
import PostHeader from "../../components/dashboard/PostHeader";

const Posts = () => {
  return (
    <div className="p-6 ">
      <PostHeader />
      <PostTable />
    </div>
  );
};

export default Posts;
