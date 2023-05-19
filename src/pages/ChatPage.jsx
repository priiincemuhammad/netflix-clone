import React from "react";
import ChatBox from "../components/ChatBox";
import Users from "../components/Users";
import LeftSide from "../components/LeftSide";

const ChatHome = () => {
  return (
    <>
      <LeftSide />
      <div className=" absolute top-0 bottom-0 lg:left-20 left-0 right-0 bg-primery">
        <div className="h-full flex justify-start">
          <Users />
          <ChatBox />
        </div>
      </div>
    </>
  );
};

export default ChatHome;
