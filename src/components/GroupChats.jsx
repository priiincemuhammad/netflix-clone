import React, { useContext, useEffect, useState, useRef } from "react";
import { format } from "timeago.js";
import InputEmoji from "react-input-emoji";
import { IoCall, IoVideocam } from "react-icons/io5";
import { GoPrimitiveDot } from "react-icons/go";
import { HiDotsVertical } from "react-icons/hi";
import { RiSendPlaneFill } from "react-icons/ri";
import { AiOutlinePaperClip, AiOutlineClockCircle } from "react-icons/ai";
import { BsEmojiSmile } from "react-icons/bs";
import { IoChevronBack } from "react-icons/io5";
import DefaultProfile from "../assets/profile.jpg";
import { useSelector } from "react-redux";
import { AppContext } from "../context/appContext";

const GroupChats = () => {
  const [message, setMessage] = useState("");
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
    groupChat,
    setGroupChat,
  } = useContext(AppContext);

  socket.off("new-user").on("new-user", (payload) => {
    setMembers(payload);
  });

  const getFormattedDate = () => {
    const date = new Date();
    const year = date.getFullYear();
    let month = (1 + date.getMonth()).toString();

    month = month.length > 1 ? month : "0" + month;
    let day = date.getDate().toString();

    day = day.length > 1 ? day : "0" + day;

    return month + "/" + day + "/" + year;
  };

  const todayDate = getFormattedDate();

  socket.off("room-messages").on("room-messages", (roomMessages) => {
    setMessages(roomMessages);
  });

  // send message
  const sendMessage = (e) => {
    e.preventDefault();
    if (!message) return;
    const today = new Date();
    const minutes =
      today.getMinutes() < 10 ? "0" + today.getMinutes() : today.getMinutes();
    const time = today.getHours() + ":" + minutes;
    const roomId = currentRoom;
    socket.emit("message-room", roomId, message, user, time, todayDate);
    setMessage("");
  };

  //************************************************************** */
  const inputFile = useRef(null);
  const uploadFile = () => {
    inputFile.current.click();
  };
  // when page reload scroll to bottom chat body function
  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div
      className={`bg-white w-full lg:relative lg:right-0   bottom-0  absolute top-0 ${
        groupChat === false ? "-left-full lg:left-0" : "left-0"
      }`}
    >
      {/* chat body  */}
      <div>
        {/* chat-header */}
        <div className="flex justify-between items-center z-10 lg:p-5 p-2 border-b-2 border-gray-200 absolute top-0 left-0 right-0 bg-white">
          <div className="flex justify-start items-center lg:space-x-7 space-x-2">
            <div className="lg:hidden flex" onClick={() => setGroupChat(false)}>
              <IoChevronBack className="p-1 cursor-pointer h-8 w-8" />
            </div>
            <div>
              <h2 className="font-bold text-gray-700 lg:text-2xl text-md">
                {currentRoom}
              </h2>
              {user?.status === "online" ? (
                <p className="text-green-400 flex justify-start items-center">
                  Online <GoPrimitiveDot />
                </p>
              ) : (
                <p className="text-gray-400 flex justify-start items-center">
                  Offline <GoPrimitiveDot />
                </p>
              )}
            </div>
          </div>
          <div className="text-gray-800 text-2xl flex items-center lg:space-x-7 space-x-3">
            <IoCall className="cursor-pointer" />
            <IoVideocam className="cursor-pointer" />
            <HiDotsVertical className="cursor-pointer" />
          </div>
        </div>
        {/* users chat */}
        <div className="h-full">
          {/* received message */}
          <ul className="h-[100%] w-[100%] space-y-8 p-5 py-28 pb-40 pr-5 overflow-hidden overflow-y-scroll scrollbar-hide  absolute bottom-0 left-0 right-0">
            {user &&
              messages.map(({ _id: date, messagesByDate }, index) => (
                <div key={index} className="space-y-8">
                  {messagesByDate?.map(
                    ({ content, time, from: sender }, msgIndex) => (
                      <div key={msgIndex}>
                        <li className="bg-white">
                          <div
                            className={`flex ${
                              sender._id == user?._id
                                ? "justify-start flex-row-reverse"
                                : "justify-start"
                            } items-end relative space-x-2`}
                          >
                            <img
                              src={sender.photo}
                              alt="ProfileMale"
                              className="h-12 w-12 rounded-full object-cover"
                            />
                            <div className={`space-y-2 `}>
                              <div
                                className={`${
                                  sender._id == user?._id
                                    ? "bg-activeBg text-gray-900"
                                    : "bg-primery text-white"
                                } py-2 px-4  rounded-md flex flex-col items-start space-y-2`}
                              >
                                <span>{content}</span>
                                <span
                                  className={`${
                                    sender._id == user?._id
                                      ? "text-gray-500"
                                      : "text-gray-300"
                                  } flex items-center`}
                                >
                                  <div>
                                    <AiOutlineClockCircle />
                                  </div>
                                  <p>{time}</p>
                                </span>
                                <span
                                  className={`${
                                    sender._id == user?._id
                                      ? "before:bg-activeBg   left-[99%]"
                                      : "before:bg-primery  "
                                  } before:block before:absolute before:-inset-1 relative w-2 h-2 rotate-45 -bottom-2`}
                                />
                              </div>
                              <p
                                className={`${
                                  sender._id == user?._id ? "text-right" : ""
                                }`}
                              >
                                {sender._id == user?._id
                                  ? "You"
                                  : sender.username}
                              </p>
                            </div>
                          </div>
                        </li>
                      </div>
                    )
                  )}
                  <li className="w-full flex justify-center items-center relative">
                    <span className="z-10 bg-activeBg py-1 px-3 rounded-md text-gray-800">
                      {date}
                    </span>
                    <span className="absolute w-full h-[1px] bg-activeBg" />
                  </li>
                  {/* scroll to bottom reference */}
                  <div ref={messagesEndRef} />
                </div>
              ))}
          </ul>
        </div>
        {/* chat-sender */}
        <div className="flex justify-between items-center space-x-7 p-5 border-t-2 border-b-2 border-gray-200 absolute bottom-20 lg:bottom-0 left-0 right-0 bg-white z-30">
          <form onSubmit={sendMessage} className="w-full h-full relative">
            <input
              type="search"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type message..."
              className="bg-activeBg text-gray-600 w-full p-2 pl-5 rounded-md outline-none focus:ring-1 ring-primery"
            />
            <div className="absolute top-0 right-0 bottom-0 flex h-full justify-center items-center space-x-3 pr-2">
              <BsEmojiSmile className="h-4 w-4 cursor-pointer" />
              <AiOutlinePaperClip
                onClick={uploadFile}
                className="h-5 w-5 cursor-pointer"
              />
              <input type="file" id="file" ref={inputFile} className="hidden" />
            </div>
          </form>
          <div onClick={sendMessage} className=" cursor-pointer">
            <RiSendPlaneFill className="h-10 w-12 p-2 rounded-md bg-primery text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupChats;
