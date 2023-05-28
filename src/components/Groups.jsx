import React, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppContext } from "../context/appContext";
import { addNotifications, resetNotifications } from "../features/userSlice";

const Groups = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
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

  console.log(messages);

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
      setCurrentRoom("General");
      getRooms();
      socket.emit("join-room", "General");
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
        {rooms.map((singleRoom, index) => (
          <div
            key={index}
            onClick={() => joinRoom(singleRoom)}
            className={`hover:bg-activeBg ${
              currentRoom === singleRoom ? "bg-activeBg" : ""
            } flex justify-start items-center rounded-md cursor-pointer p-3 space-x-3`}
          >
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
                <h1 className="text-gray-900 font-bold">{singleRoom}</h1>
                <p className="text-gray-600">
                  {textMessageTwo.slice(0, 20) + "..."}
                </p>
              </div>
              <div className="text-gray-600">
                <p>11:07</p>
                <div className="text-gray-600">
                  {user.newMessages[singleRoom] && (
                    <div className="text-red-500 font-bold bg-red-200 h-6 w-6 flex justify-center items-center text-[12px] rounded-full">
                      <p>{user.newMessages[singleRoom]}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Groups;
