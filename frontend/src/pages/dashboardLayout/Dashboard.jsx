import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
   Cell
} from "recharts";
let stats = {
  posts: 60,
  categories: 20,
  users: 20,
};
let data = [
   { name: "Jan", posts: 40 },
  { name: "feb", posts: 10 },
  { name: "March",posts: 20 },
  { name: "April",posts: 35 },
  { name: "May", posts:  40 },
  { name: "Jun", posts:  10 },
  { name: "Jly", posts:  20 },
  { name: "Aug", posts:  35 },
  { name: "Sep", posts: 40 },
  { name: "Oct", posts:  20 },
  { name: "Nov", posts: 35 },
  { name: "Dec", posts: 40 },
];
const colors = ["#f59e0b",  "#16a34a"];
const Dashboard = () => {

  return (
     <div>

     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      
     
      <div className="bg-pink-500 text-white p-5 rounded-xl  shadow-md">
        <h3 className="text-xl">Posts</h3>
        <p className="text-2xl font-bold">{stats.posts}</p>
      </div>

    
      <div className="bg-white text-black p-5 rounded-xl shadow-md">
        <h3 className="text-xl">Categories</h3>
        <p className="text-2xl font-bold">{stats.categories}</p>
      </div>

     
      <div className="bg-white text-black p-5 rounded-xl shadow-md">
        <h3 className="text-xl">Users</h3>
        <p className="text-2xl font-bold">{stats.users}</p>
      </div>

    </div>
    <div className="bg-white p-6 rounded-xl shadow-md mt-10">
  

      <h2 className="text-lg font-semibold mb-4">Monthly Posts</h2>

      <div className="overflow-x-auto">
        <div className="min-w-[600px] h-[300px]">
         
          <ResponsiveContainer>
         <BarChart data={data} barCategoryGap="20%">
        
        <XAxis dataKey="name" angle={30} textAnchor="end" />
        <YAxis />
        <Tooltip />

        <Bar dataKey="posts" barSize={50}>
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={colors[index % 2]}
            />
          ))}
        </Bar>

      </BarChart>
    </ResponsiveContainer>
        </div>
      </div>
    </div>
     </div>
    
  );
};

export default Dashboard;
