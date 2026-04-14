import React from 'react'
let posts = [
  {
    id: 1,
    title: "Getting Started with React in 2026",
    content:
      "React continues to be one of the most popular JavaScript libraries.",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee",
    categogy: "Web Development",
    username: "Ahmed Hassan",
  },
  {
    id: 2,
    title: "5 Healthy Habits for a Better Life",
    content:
      "Maintaining a healthy lifestyle doesn't have to be complicated.",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061",
    categogy: "Health",
    username: "Halima Adow",
  },
  {
    id: 3,
    title: "Top UI/UX Design Trends in 2026",
    content: "Design trends are constantly evolving.",
    image: "https://images.unsplash.com/photo-1559028012-481c04fa702d",
    categogy: "Design",
    username: "Mohamed Ali",
  },
  // {
  //   id: 4,
  //   title: "Understanding Node.js",
  //   content: "Node.js allows developers to build scalable apps.",
  //   image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
  //   categogy: "Programming",
  //   username: "Abdi Nur",
  // },
  // {
  //   id: 5,
  //   title: "Future of AI",
  //   content: "AI is transforming industries worldwide.",
  //   image: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
  //   categogy: "Technology",
  //   username: "Fatima Yusuf",
  // },
  // {
  //   id: 6,
  //   title: "Stay Productive While Studying",
  //   content: "Tips to help you focus and get more done.",
  //   image: "https://images.unsplash.com/photo-1513258496099-48168024aec0",
  //   categogy: "Education",
  //   username: "Said Mohamed",
  // },
];




const Posts = () => {
  return (
    <section className='py-10 px-6 max-w-[1200px] mx-auto relative'>
        <h3 className='text-3xl font-bold mb-10'>POPULAR POSTS</h3>
           <button className="bg-white shadow-md w-10 h-10 rounded-full flex items-center justify-center   absolute  top-60  -left-20 hover:bg-gray-100 transition">
            &lt;
        </button>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
           
          {posts.map((post)=>(
            <div key={post.id}
            className='bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition duration-300 hover:-translate-y-2'
            
            >

              <img src={post.image} alt=""  className='h-48 w-full object-cover'/>
               <div className=' p-4'>
                  <span className='text-sm text-pink-500 font-medium'>
                    {post.categogy}
                  </span>

                  <h3 className='text-lg font-bold mt-2'>{post.title}</h3>
                  <p className='text-gray-600 text-sm mt-2'>{post.content.substring(0,80)}</p>
               </div>
              
               </div> 
          ))}
           
        </div>
          <button className="bg-white shadow-md w-10 h-10 rounded-full flex items-center justify-center   absolute  top-60  -right-20 hover:bg-gray-100 transition">
            &gt;
        </button>
    </section>
  )
}

export default Posts