import React, { useEffect, useRef } from "react";
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

export const TestTexts = () => {
  return (
    <li className="bg-white pb-8">
      <div className="flex justify-end items-end relative space-x-2">
        <div className="space-y-2 flex flex-col justify-end items-end">
          <div className="bg-activeBg py-2 px-4 text-gray-900 rounded-md flex flex-col items-end space-y-2">
            <span>
              {" "}
              Next.js and Tailwind CSS starter In this project, I'm using
              Next.js and Tailwind CSS, but at the end of the day all we're
              doing is creating a React component. Feel free to use Next.js,
              Gatsby, Create React App, or whatever library or starter you want.
              The core concepts are the same as long as you're building with
              React. Styling your component is also up to your project
              preferences. I've been enjoying Tailwind CSS lately and use it in
              this lesson, but feel free to use any CSS solution you want. Check
              out the Tailwind installation guide if you're interested in using
              Tailwind for your project.
            </span>
            <span className="text-gray-500 flex items-center space-x-2">
              <div>
                <AiOutlineClockCircle />
              </div>
              <p>01:55</p>
            </span>
            <span className="before:block before:absolute before:-inset-1  before:bg-activeBg relative w-2 h-2 rotate-45 -bottom-2 " />
          </div>
          <p>You</p>
        </div>
        <img
          src={DefaultProfile}
          alt="DefaultProfile"
          className="h-12 w-12 rounded-full"
        />
      </div>
    </li>
  );
};

const ChatBox = () => {
  const inputFile = useRef(null);
  const uploadFile = () => {
    inputFile.current.click();
  };

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, []);

  const ProfileMale =
    "https://themesbrand.com/chatvia/layouts/assets/images/users/avatar-7.jpg";

  return (
    <div className="bg-white w-full lg:relative absolute top-0  left-0 bottom-0 lg:right-0">
      {/* chat body  */}
      <div>
        {/* chat-header */}
        <div className="flex justify-between items-center z-10 p-5 border-b-2 border-gray-200 absolute top-0 left-0 right-0 bg-white">
          <div className="flex justify-start items-center space-x-7">
            <div>
              <IoChevronBack className="p-5 cursor-pointer h-16 w-16" />
            </div>
            <div>
              <h2 className="font-bold text-gray-700 text-2xl">John smith</h2>
              <p className="text-green-400 flex justify-start items-center">
                Online <GoPrimitiveDot />
              </p>
            </div>
          </div>
          <div className="text-gray-800 text-2xl flex items-center space-x-7">
            <IoCall className="cursor-pointer" />
            <IoVideocam className="cursor-pointer" />
            <HiDotsVertical className="cursor-pointer" />
          </div>
        </div>
        {/* users chat */}
        <div className="h-full">
          {/* received message */}
          <ul className="h-[100%] w-[100%] p-5 py-28 pb-40 pr-5 overflow-hidden overflow-y-scroll scrollbar-hide  absolute bottom-0 left-0 right-0">
            <li className="bg-white pb-8">
              <div className="flex justify-start items-end relative space-x-2">
                <img
                  src={ProfileMale}
                  alt="ProfileMale"
                  className="h-12 w-12 rounded-full"
                />
                <div className="space-y-2">
                  <div className="bg-primery py-2 px-4 text-white rounded-md flex flex-col items-end space-y-2">
                    <span>Hey, Good morning!</span>
                    <span className="text-gray-300 flex items-center space-x-2">
                      <div>
                        <AiOutlineClockCircle />
                      </div>
                      <p>01:55</p>
                    </span>
                    <span className="before:block before:absolute before:-inset-1  before:bg-primery relative w-2 h-2 rotate-45 -bottom-2 right-[99%]" />
                  </div>
                  <p>Jhon smith</p>
                </div>
              </div>
            </li>
            {/* sent message */}
            <li className="bg-white pb-8">
              <div className="flex justify-end items-end relative space-x-2">
                <div className="space-y-2 flex flex-col justify-end items-end">
                  <div className="bg-activeBg py-2 px-4 text-gray-900 rounded-md flex flex-col items-end space-y-2">
                    <span>Good morning!</span>
                    <span className="text-gray-500 flex items-center space-x-2">
                      <div>
                        <AiOutlineClockCircle />
                      </div>
                      <p>01:55</p>
                    </span>
                    <span className="before:block before:absolute before:-inset-1  before:bg-activeBg relative w-2 h-2 rotate-45 -bottom-2 " />
                  </div>
                  <p>You</p>
                </div>
                <img
                  src={DefaultProfile}
                  alt="DefaultProfile"
                  className="h-12 w-12 rounded-full"
                />
              </div>
            </li>

            {/* scroll to bottom reference */}
            <div ref={messagesEndRef} />
          </ul>
        </div>
        {/* chat-sender */}
        <div className="flex justify-between items-center space-x-7 p-5 border-t-2 border-b-2 border-gray-200 absolute bottom-20 lg:bottom-0 left-0 right-0 bg-white z-30">
          <div className="w-full h-full relative">
            <input
              type="search"
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
          </div>
          <div>
            <RiSendPlaneFill className="h-10 w-12 p-2 rounded-md bg-primery text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
