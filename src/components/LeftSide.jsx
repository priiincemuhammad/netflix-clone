import React from "react";
import Logo from "../assets/logo.svg";
import { BsChatRightDots, BsChatRightText } from "react-icons/bs";
import { RiGroupLine } from "react-icons/ri";
import { AiOutlineSetting } from "react-icons/ai";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white w-20 h-screen p-5 flex flex-col justify-between items-center">
      <div className="flex flex-col items-center space-y-14">
        <img src={Logo} alt="Logo" className="w-10" />
        <div className="flex justify-center items-center">
          <Link to="/">
            <BsChatRightDots className="h-16 w-16 rounded-lg text-primery bg-secondary cursor-pointer p-5" />
          </Link>
        </div>
        <div className="flex justify-center items-center">
          <Link to="/groups">
            <RiGroupLine className="h-16 w-16 rounded-lg text-gray-800 cursor-pointer p-5" />
          </Link>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <AiOutlineSetting className="h-16 w-16 rounded-lg text-gray-800 cursor-pointer p-5" />
      </div>
    </header>
  );
};

export default Header;
