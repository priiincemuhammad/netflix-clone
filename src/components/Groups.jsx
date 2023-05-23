import React from "react";

const Groups = () => {
  const ProfileMale =
    "https://themesbrand.com/chatvia/layouts/assets/images/users/avatar-7.jpg";
  const ProfileFemale =
    "https://themesbrand.com/chatvia/layouts/assets/images/users/avatar-4.jpg";

  const textMessage = "Hey, how are you doing today?";
  const textMessageTwo = "Ok, then call me when you're free.";

  return (
    <div className="bg-[#f5f7fb] lg:w-[500px] w-full col-span-3 p-5">
      <div className="flex justify-between items-start">
        <h1 className="font-bold text-3xl text-gray-800">Groups</h1>
      </div>
      {/* Groups conversations */}
      <div>
        {/* search box */}
        <div className="my-5">
          <input
            type="search"
            placeholder="#SEARCH"
            className="bg-activeBg text-gray-600 w-full p-2 rounded-md outline-none focus:ring-1 ring-primery"
          />
        </div>
        {/* group users photos */}
        <div className="bg-activeBg hover:bg-activeBg flex justify-start items-center rounded-md cursor-pointer p-3 space-x-3">
          <div className="relative">
            <div className="flex -space-x-2 overflow-hidden">
              <img
                className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
              <img
                className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
              <img
                className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                alt=""
              />
            </div>
            <div className="absolute bottom-0 right-0">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
            </div>
          </div>
          <div className="flex justify-between flex-1">
            <div>
              <h1 className="text-gray-900 font-bold">Group name</h1>
              <p className="text-gray-600">
                {textMessage.slice(0, 15) + "..."}
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
          <div className="flex -space-x-2 overflow-hidden">
            <img
              className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
              src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <img
              className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
              src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <img
              className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
              alt=""
            />
          </div>
          <div className="flex justify-between flex-1">
            <div>
              <h1 className="text-gray-900 font-bold">Elizabeth</h1>
              <p className="text-gray-600">
                {textMessageTwo.slice(0, 15) + "..."}
              </p>
            </div>
            <div className="text-gray-600">
              <p>11:07</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Groups;
