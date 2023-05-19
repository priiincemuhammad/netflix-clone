import React from "react";
import ProfileMale from "../assets/avatarM.jpg";
import ProfileFemale from "../assets/avatarF.jpg";

const Users = () => {
  const ProfileMale =
    "https://themesbrand.com/chatvia/layouts/assets/images/users/avatar-7.jpg";
  const ProfileFemale =
    "https://themesbrand.com/chatvia/layouts/assets/images/users/avatar-4.jpg";

  const textMessage = "Hey, how are you doing today?";

  return (
    <div className="bg-[#f5f7fb] min-w-[350px] col-span-3 p-5">
      <div className="flex justify-between items-start">
        <h1 className="font-bold text-3xl text-gray-800">Chats</h1>
      </div>
      {/* users conversations */}
      <div>
        {/* search box */}
        <div className="my-5">
          <input
            type="search"
            placeholder="#SEARCH"
            className="bg-activeBg text-gray-600 w-full p-2 rounded-md outline-none focus:ring-1 ring-primery"
          />
        </div>
        <div className="bg-activeBg hover:bg-activeBg flex justify-start items-center rounded-md cursor-pointer p-3 space-x-3">
          <div className="relative">
            <img
              src={ProfileMale}
              alt="Profile"
              className="h-14 w-14 rounded-full"
            />
            <div className="absolute bottom-0 right-0">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
            </div>
          </div>
          <div className="flex justify-between flex-1">
            <div>
              <h1 className="text-gray-900 font-bold">John smith</h1>
              <p className="text-gray-600">
                {textMessage.slice(0, 20) + "..."}
              </p>
            </div>
            <div className="text-gray-600">
              <p>2:50</p>
              <div className="text-red-500 font-bold bg-red-200 h-6 w-6 flex justify-center items-center text-[12px] rounded-full">
                <p>11</p>
              </div>
            </div>
          </div>
        </div>
        <div className="hover:bg-activeBg flex justify-start items-center rounded-md cursor-pointer p-3 space-x-3">
          <img
            src={ProfileFemale}
            alt="Profile"
            className="h-14 w-14 rounded-full"
          />
          <div className="flex justify-between flex-1">
            <div>
              <h1 className="text-gray-900 font-bold">Elizabeth</h1>
              <p className="text-gray-600">
                {textMessage.slice(0, 20) + "..."}
              </p>
            </div>
            <div className="text-white">
              <p>11:07</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
