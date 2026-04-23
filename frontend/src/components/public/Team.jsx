import React from "react";

const Team = () => {
  const teams = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "Co-Founder & CEO",
      description:
        "Sarah leads the vision and strategy, bringing a decade of experience in scaling SaaS products from zero to millions of users.",
      image: "https://picsum.photos/seed/sarahceo/200/200.jpg",
    },
    {
      id: 2,
      name: "Marcus Johnson",
      role: "Head of Engineering",
      description:
        "Marcus architects our core infrastructure and ensures performance, reliability, and scalability across the platform.",
      image: "https://picsum.photos/seed/marcuseng/200/200.jpg",
    },
    {
      id: 3,
      name: "Elena Rodriguez",
      role: "Lead Product Designer",
      description:
        "Elena designs intuitive experiences that balance usability and elegance across all product surfaces.",
      image: "https://picsum.photos/seed/elenadesign/200/200.jpg",
    },
  ];

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="mb-14 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Meet our{" "}
            <span className="bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent">
              team
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm sm:text-base text-gray-500 leading-relaxed">
            The people behind the product — building, designing, and shaping the
            future together.
          </p>
        </div>

        {/* TEAM LIST */}
        <div className="flex flex-col gap-8 lg:gap-10">
          {teams.map((member, index) => (
            <div
              key={member.id}
              className={`group flex flex-col md:flex-row items-center gap-8 rounded-2xl border border-gray-100 bg-white p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* IMAGE */}
              <div className="relative shrink-0">
                {/* subtle glow */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-pink-100 to-orange-100 blur-xl opacity-0 group-hover:opacity-100 transition duration-300" />

                <img
                  src={member.image}
                  alt={member.name}
                  className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover ring-2 ring-white shadow-sm transition duration-300 group-hover:scale-105"
                />
              </div>

              {/* CONTENT */}
              <div className="flex flex-col items-center text-center md:items-start md:text-left max-w-md">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
                  {member.name}
                </h3>

                <p className="mt-1 text-sm font-medium bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent">
                  {member.role}
                </p>

                <p className="mt-3 text-sm sm:text-base text-gray-500 leading-relaxed">
                  {member.description}
                </p>

                {/* subtle line accent */}
                <div className="mt-4 h-[2px] w-12 bg-gradient-to-r from-pink-500 to-orange-400 rounded-full opacity-70" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
