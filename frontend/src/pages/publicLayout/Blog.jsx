import React from "react";
import SidebarBlog from "../../components/public/SidebarBlog";
import MainBlog from "../../components/public/MainBlog";

const Blog = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <SidebarBlog />
      <MainBlog />
    </div>
  );
};

export default Blog;
