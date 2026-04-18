import React from "react";
import { IoIosSearch } from "react-icons/io";
import { MdMarkEmailUnread } from "react-icons/md";
import { FaBell } from "react-icons/fa";
import { useSelector } from "react-redux";

const Header = () => {
  let { user } = useSelector((store) => store.auth);
  console.log(user);

  return (
    <div className="flex gap-5 flex-col-reverse md:flex-row justify-between mb-7  md:[100%]">
      <div className="flex items-center gap-x-1 bg-white px-4 rounded-full shadow-md w-[80%] md:w-[30%] h-[45px] hover:-translate-y-1 transition duration-300">
        <IoIosSearch />
        <input
          type="text"
          placeholder="Search..."
          className="w-[85%] focus:outline-white focus:border-white p-2 rounded-full"
        />
      </div>
      <div className="flex flex-row items-center gap-x-5">
        <div className="bg-white p-2 shadow-md rounded-full hover:-translate-y-2 transition duration-300 hover:cursor-pointer">
          <MdMarkEmailUnread />
        </div>
        <div className="bg-white p-2 shadow-md rounded-full hover:-translate-y-2 transition duration-300 hover:cursor-pointer">
          <FaBell />
        </div>
        {user && (
          <div className="flex flex-row gap-x-2 items-center bg-white p-2 shadow-md rounded hover:-translate-y-1 transition duration-300 hover:cursor-pointer">
            <img
              className="w-[40px] h-[40px] rounded-full"
              src={`http://localhost:5000/public/${user.profileImage}`}
              alt=""
            />
            <div>
              <h2 className="font-semibold text-orange-500">{user.name}</h2>
              <p className="text-gray-400">{user.email}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
