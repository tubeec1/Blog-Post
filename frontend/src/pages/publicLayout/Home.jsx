import React from "react";
import HeroSection from "../../components/public/HeroSection";
import LatestPosts from "../../components/public/LatestPosts";
import Testimonial from "../../components/public/Testmonials";
import PopularPosts from "../../components/public/PopularPosts";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <LatestPosts />
      <PopularPosts />
      <Testimonial />
    </div>
  );
};

export default Home;
