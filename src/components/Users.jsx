import React, { useEffect, useContext } from "react";
import { useSelector } from "react-redux";
import { AppContext } from "../context/appContext";

const Users = () => {
  const user = useSelector((state) => state.user);
  const {
    socket,
    rooms,
    setRooms,
    currentRoom,
    setCurrentRoom,
    members,
    setMembers,
    messages,
    setMessages,
    privateMemberMsg,
    setPrivateMemberMsg,
    newMessages,
    setNewMessages,
  } = useContext(AppContext);

  useEffect(() => {
    if (user) {
      setCurrentRoom("general");
      getRooms();
      socket.emit("join-room", "general");
      socket.emit("new-user");
    }
  }, []);

  socket.off("new-user").on("new-user", (payload) => {
    setMembers(payload);
  });

  console.log(members);

  const getRooms = () => {
    fetch("http://localhost:5000/rooms")
      .then((res) => res.json())
      .then((data) => setRooms(data));
  };

  const textMessage = "Hey, how are you doing today?";
  const textMessageTwo = "Ok, then call me when you're free.";

  return (
    <div className="bg-[#f5f7fb] lg:w-[500px] w-full col-span-3 p-5">
      <div className="flex justify-between items-start">
        <h1 className="font-bold text-3xl text-gray-800">Chats</h1>
      </div>
      {/* search box */}
      <div className="my-5">
        <input
          type="search"
          placeholder="#SEARCH"
          className="bg-activeBg text-gray-600 w-full p-2 rounded-md outline-none focus:ring-1 ring-primery"
        />
      </div>
      {/* users conversations */}
      <div className="h-[88%] overflow-hidden overflow-y-scroll">
        {members.map((users) => (
          <div
            key={users._id}
            className="hover:bg-activeBg flex justify-start items-center rounded-md cursor-pointer p-3 space-x-3"
          >
            <img
              src={users.photo}
              alt="Profile"
              className="h-14 w-14 rounded-full object-cover"
            />
            <div className="flex justify-between flex-1">
              <div>
                <h1 className="text-gray-900 font-bold">{users.username}</h1>
                <p className="text-gray-600">
                  {textMessageTwo.slice(0, 20) + "..."}
                </p>
              </div>
              <div className="text-gray-600">
                <p>11:07</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
