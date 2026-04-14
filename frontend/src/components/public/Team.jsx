import React from 'react'

const Team = () => {
  return (
    <div class=" bg-gray-200 w-[100%] ">
     <div class="  p-5 ">

    <div class="text-center mb-8">
      <h1 class="text-3xl font-bold tracking-wide">MEET OUR TEAM</h1>
      <p class="text-gray-500 mt-2 text-sm">
        Behind every great business is a team of passionate professionals.
      </p>
    </div>

    
    <div class="flex items-center bg-gray-50 rounded-xl p-5 mb-5 shadow-sm mx-20">
      <img class="w-20 h-20 rounded-full object-cover" src="https://i.pravatar.cc/150?img=12" />
      <div class="ml-20  flex-1  float-right">
        <h3 class="font-semibold">Axmed Said</h3>
        <p class="text-sm text-gray-500">Creative Director</p>
        <p class="text-sm text-gray-600 mt-2">
          Alex brings over a decade of experience in branding and design...
        </p>
      </div>
    </div>

    
    <div class="flex items-center bg-gray-50 rounded-xl p-5 mb-5 shadow-sm mx-20">
      <img class="w-20 h-20 rounded-full object-cover" src="https://i.pravatar.cc/150?img=32" />
      <div class="ml-5 flex-1">
        <h3 class="font-semibold">Rayan Nur</h3>
        <p class="text-sm text-gray-500">Customer Experience Specialist</p>
        <p class="text-sm text-gray-600 mt-2">
          Riley focuses on building lasting relationships with customers...
        </p>
      </div>
    </div>

    
    <div class="flex items-center bg-gray-50 rounded-xl p-5 mx-20">
      <img class="w-20 h-20 rounded-full object-cover" src="https://i.pravatar.cc/150?img=47" />
      <div class="ml-5 flex-1">
        <h3 class="font-semibold">Amina Abdi</h3>
        <p class="text-sm text-gray-500">Marketing Manager</p>
        <p class="text-sm text-gray-600 mt-2">
          Taylor crafts campaigns that connect audiences and convert leads...
        </p>
      </div>
    </div>

  </div>
</div>

  )
}

export default Team