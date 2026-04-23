import React from "react";
import { MdCategory } from "react-icons/md";
import { FaFileAlt, FaUsers } from "react-icons/fa";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
  CartesianGrid,
} from "recharts";

let stats = {
  posts: 60,
  categories: 20,
  users: 20,
};

let data = [
  { name: "Jan", posts: 40 },
  { name: "Feb", posts: 10 },
  { name: "Mar", posts: 20 },
  { name: "Apr", posts: 35 },
  { name: "May", posts: 40 },
  { name: "Jun", posts: 10 },
  { name: "Jul", posts: 20 },
  { name: "Aug", posts: 35 },
  { name: "Sep", posts: 40 },
  { name: "Oct", posts: 20 },
  { name: "Nov", posts: 35 },
  { name: "Dec", posts: 40 },
];

const colors = ["url(#barGradient)", "url(#barGradient)"];

const Dashboard = () => {
  return (
    <section className="min-h-screen bg-gray-50/60 py-8 sm:py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* ── STATS ── */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
          {/* PRIMARY CARD */}
          <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-pink-500 to-orange-400 p-6 text-white shadow-lg transition hover:-translate-y-1 hover:shadow-xl">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-wide text-white/70">
                  Total Posts
                </p>
                <h2 className="mt-1 text-3xl font-extrabold">{stats.posts}</h2>

                {/* subtle stat */}
                <p className="mt-1 text-xs text-white/70">↑ 12% this month</p>
              </div>

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20 group-hover:scale-110 transition">
                <FaFileAlt className="text-2xl" />
              </div>
            </div>
          </div>

          {/* CATEGORY */}
          <div className="group rounded-2xl bg-white p-6 shadow-sm border border-gray-100 transition hover:-translate-y-1 hover:shadow-md">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-gray-500 uppercase">Categories</p>
                <h2 className="mt-1 text-3xl font-bold text-gray-900">
                  {stats.categories}
                </h2>
              </div>

              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-pink-50 to-orange-50 group-hover:scale-110 transition">
                <MdCategory className="text-xl text-orange-500" />
              </div>
            </div>
          </div>

          {/* USERS */}
          <div className="group rounded-2xl bg-white p-6 shadow-sm border border-gray-100 transition hover:-translate-y-1 hover:shadow-md">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-gray-500 uppercase">Users</p>
                <h2 className="mt-1 text-3xl font-bold text-gray-900">
                  {stats.users}
                </h2>
              </div>

              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-pink-50 to-orange-50 group-hover:scale-110 transition">
                <FaUsers className="text-xl text-pink-500" />
              </div>
            </div>
          </div>
        </div>

        {/* ── CHART ── */}
        <div className="mt-10 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
          {/* HEADER */}
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h2 className="text-lg font-bold text-gray-900">Monthly Posts</h2>
              <p className="text-xs text-gray-400">
                Overview of content activity
              </p>
            </div>

            <span className="rounded-full bg-gray-50 px-3 py-1 text-xs text-gray-500">
              2025
            </span>
          </div>

          <div className="overflow-x-auto">
            <div className="min-w-[600px] h-[320px]">
              <ResponsiveContainer>
                <BarChart data={data}>
                  {/* GRADIENT */}
                  <defs>
                    <linearGradient
                      id="barGradient"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop offset="0%" stopColor="#ec4899" />
                      <stop offset="100%" stopColor="#f97316" />
                    </linearGradient>
                  </defs>

                  {/* GRID FIX */}
                  <CartesianGrid stroke="#f3f4f6" vertical={false} />

                  <XAxis
                    dataKey="name"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "#9ca3af", fontSize: 12 }}
                  />

                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "#9ca3af", fontSize: 12 }}
                  />

                  <Tooltip
                    contentStyle={{
                      borderRadius: "10px",
                      border: "1px solid #eee",
                      fontSize: "13px",
                    }}
                  />

                  <Bar dataKey="posts" radius={[6, 6, 0, 0]} barSize={26}>
                    {data.map((_, i) => (
                      <Cell key={i} fill={colors[i % 2]} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
