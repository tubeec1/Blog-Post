import React from 'react'

const HeroSection = () => {
  return (
    <div>
        
     <div className="grid grid-cols-2 gap-10 max-w-[1200px] mx-auto my-20 ">
       <div>
      <h1 className=" text-3xl leading-relaxed font-semibold">Insights That Inspire Growth</h1>
      <h3 className="text-xl  font-semibold">Explore ideas, stories, and insights that spark curiosity and inspire growth.y.</h3>
       <p className=" text-gray-500 leading-6">A space where technology, lifestyle, and creativity come together to share knowledge, experiences, and digital innovation from around the world, inspiring learning, new ideas, and continuous personal and professional growth.</p>
      <button className="bg-gradient-to-r from-pink-500 to-orange-400 text-white px-4 py-2 rounded-full mt-10 border-2 border-transparent hover:border-white transition duration-300">
       Read Articles
     </button>
      
     </div>
      <div>
        <img src="../../../src/assets/hero.png" alt="" />
      </div>
     </div>
    </div>
  )
}

export default HeroSection