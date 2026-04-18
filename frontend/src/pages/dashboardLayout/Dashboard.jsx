import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

let data = [
  { name: "feb", posts: 10 },
  { name: "March", posts: 20 },
  { name: "April", posts: 35 },
  { name: "May", posts: 40 },
];
const Dashboard = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-lg font-semibold mb-4">Monthly Posts</h2>

      <div className="overflow-x-auto">
        <div className="min-w-[600px] h-[300px]">
          <ResponsiveContainer>
            <BarChart data={data} barCategoryGap="20%">
              <XAxis dataKey="name" angle={-30} textAnchor="end" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="posts" fill="#6366f1" barSize={100} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
