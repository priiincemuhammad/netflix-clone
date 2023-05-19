import React from "react";
import Logo from "../assets/logo.svg";
import { BsChatRightDots, BsChatRightText } from "react-icons/bs";
import { RiGroupLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import DefaultProfile from "../assets/profile.jpg";
import { FaRegUserCircle } from "react-icons/fa";

const Header = () => {
  return (
    <header
      className="bg-white lg:w-20 lg:h-screen w-full h-20 z-20 
     absolute bottom-0 lg:left-0 right-0 p-5 flex lg:flex-col justify-between items-center overflow-hidden"
    >
      <div className="w-full h-[100%]  flex lg:flex-col justify-between items-center space-y-14 lg:mt-0 -mt-12">
        <img src={Logo} alt="Logo" className="w-10 hidden lg:inline-flex" />
        <Link to="/">
          <BsChatRightDots className="h-12 w-12 rounded-lg text-primery bg-secondary cursor-pointer p-3" />
        </Link>
        <Link to="/groups">
          <RiGroupLine className="h-12 w-12 rounded-lg text-gray-800 cursor-pointer p-3" />
        </Link>
        <div>
          <img
            src={DefaultProfile}
            className="h-10 w-10 rounded-full cursor-pointer"
            alt="DefaultProfile"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
