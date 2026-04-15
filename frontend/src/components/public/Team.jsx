import React from "react";

let teams = [
  {
    name: "Axmed Said",
    role: "Creative Director",
    description:
      "Alex brings over a decade of experience in branding and design to lead our creative team. With a keen eye for aesthetics and a passion for storytelling, Alex ensures that every project we undertake is visually stunning and strategically sound.",
    image: "https://i.pravatar.cc/150?img=12",
  },
  {
    name: "Rayan Nur",
    role: "Customer Experience Specialist",
    description:
      "Riley focuses on building lasting relationships with customers by understanding their needs and providing exceptional service. With a background in customer support and a genuine passion for helping others, Riley ensures that every interaction leaves a positive impression.",
    image: "https://i.pravatar.cc/150?img=32",
  },
  {
    name: "Amina Abdi",
    role: "Marketing Manager",
    description:
      "Taylor crafts campaigns that connect audiences and convert leads. With a strategic mindset and a deep understanding of market dynamics, Taylor drives growth and brand awareness.",
    image: "https://i.pravatar.cc/150?img=47",
  },
];
const Team = () => {
  return (
    <div class=" bg-gray-200 w-[100%]  py-[90px]">
      <div class="  p-5 ">
        <div class="text-center mb-8">
          <h1 class="text-3xl font-bold tracking-wide">MEET OUR TEAM</h1>
          <p class="text-gray-500 mt-2 text-sm">
            Behind every great business is a team of passionate professionals.
          </p>
        </div>

        <div>
          {teams.map((member, index) =>
            index % 2 == 0 ? (
              <div class=" flex items-center flex-row-reverse rounded-xl p-5 mb-5 shadow-sm mx-20 bg-white gap-7">
                <img
                  class="w-20 h-20 rounded-full object-cover"
                  src="https://i.pravatar.cc/150?img=12"
                />
                <div class="ml-20 text-right">
                  <h3 class="font-semibold">{member.name}</h3>
                  <p class="text-sm text-gray-500">{member.role}</p>
                  <p class="text-sm text-gray-600 mt-2">{member.description}</p>
                </div>
              </div>
            ) : (
              <div class="flex items-center rounded-xl p-5 mb-5 bg-white shadow-sm mx-20 gap-7">
                <img
                  class="w-20 h-20 rounded-full object-cover"
                  src="https://i.pravatar.cc/150?img=12"
                />
                <div class="">
                  <h3 class="font-semibold">{member.name}</h3>
                  <p class="text-sm text-gray-500">{member.role}</p>
                  <p class="text-sm text-gray-600 mt-2">{member.description}</p>
                </div>
              </div>
            ),
          )}
        </div>
      </div>
    </div>
  );
};

export default Team;
