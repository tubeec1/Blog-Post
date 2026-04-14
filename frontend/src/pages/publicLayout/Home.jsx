import React from "react";
import HeroSection from "../../components/public/HeroSection";
import LatestPosts from "../../components/public/LatestPosts";
import Posts from "../../components/public/Posts";
import Testimonial from "../../components/public/Testmonials";

const Home = () => {
  return (
    <div > 
      <HeroSection/>
      <LatestPosts/>
      <Posts/>
      <Testimonial/>
</div>
  )
  
};

export default Home;
