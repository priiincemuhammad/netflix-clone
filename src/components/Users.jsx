import React, { useEffect, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppContext } from "../context/appContext";
import { addNotifications, resetNotifications } from "../features/userSlice";

const Users = () => {
  const dispatch = useDispatch();
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
    setPrivateChat,
  } = useContext(AppContext);

  const filteredUsers = members.filter((newUser) => newUser._id !== user._id);

  const joinRoom = (room, isPublic = true) => {
    if (!user) {
      return alert("Please login");
    }
    socket.emit("join-room", room, currentRoom);
    setCurrentRoom(room);

    if (isPublic) {
      setPrivateMemberMsg(null);
    }
    // dispatch for notifications
    dispatch(resetNotifications(room));
  };

  socket.off("notifications").on("notifications", (room) => {
    if (currentRoom != room) dispatch(addNotifications(room));
  });

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

  const getRooms = () => {
    fetch("http://localhost:5000/rooms")
      .then((res) => res.json())
      .then((data) => setRooms(data));
  };

  const orderIds = (id1, id2) => {
    if (id1 > id2) {
      return id1 + "-" + id2;
    } else {
      return id2 + "-" + id1;
    }
  };

  const handlePrivateMessage = (member) => {
    setPrivateMemberMsg(member);
    const roomId = orderIds(user._id, member._id);
    joinRoom(roomId, false);
  };

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
      <div className="h-[80%] overflow-hidden overflow-y-scroll">
        {filteredUsers.map((member) => (
          <div
            key={member._id}
            onClick={() => {
              handlePrivateMessage(member);
              setPrivateChat(true);
            }}
            className={`hover:bg-activeBg ${
              privateMemberMsg?._id === member._id ? "bg-activeBg" : ""
            } flex justify-start items-center rounded-md cursor-pointer p-3 space-x-3`}
          >
            <div className="relative">
              <img
                src={member.photo}
                alt="Profile"
                className="h-14 w-14 rounded-full object-cover"
              />
              {member.status == "online" ? (
                <div className="absolute bottom-0 right-0">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                  </span>
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="flex justify-between flex-1">
              <div>
                <h1 className="text-gray-900 font-bold">{member.username}</h1>
                <p className="text-gray-600">
                  {textMessageTwo.slice(0, 20) + "..."}
                </p>
              </div>
              <div className="text-gray-600">
                <p>11:07</p>
                {user.newMessages[member] && (
                  <div className="text-red-500 font-bold bg-red-200 h-6 w-6 flex justify-center items-center text-[12px] rounded-full">
                    <p>{user.newMessages.length}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
