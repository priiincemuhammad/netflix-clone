import React from "react";
import Logo from "../assets/logo.svg";
import { BsChatRightDots } from "react-icons/bs";
import { RiGroupLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import DefaultProfile from "../assets/profile.jpg";
import { FaRegUserCircle } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";
import { useLogoutUserMutation } from "../services/appApi";
import { useSelector } from "react-redux";

const Header = () => {
  const user = useSelector((state) => state.user);
  const [logoutUser] = useLogoutUserMutation(user);

  const handleLogout = async () => {
    await logoutUser(user);
    window.location.replace("/signin");
  };

  return (
    <header
      className="bg-white lg:w-20 lg:h-screen w-full h-20 z-20 
     absolute bottom-0 lg:left-0 right-0 p-5 flex lg:flex-col justify-between items-center overflow-hidden"
    >
      <div className="w-full h-[100%]  flex lg:flex-col lg:justify-start justify-between items-center space-y-14 lg:mt-0 -mt-12">
        <img src={Logo} alt="Logo" className="w-10 hidden lg:inline-flex" />
        <Link to="/">
          <BsChatRightDots
            className={`${
              window.location.href.includes("/groups")
                ? "text-gray-800 "
                : "bg-secondary text-primery"
            } h-12 w-12 rounded-lg  cursor-pointer p-3`}
          />
        </Link>
        <Link to="/groups">
          <RiGroupLine
            className={`${
              window.location.href.includes("/groups")
                ? "bg-secondary text-primery"
                : "text-gray-800 "
            } h-12 w-12 rounded-lg  cursor-pointer p-3`}
          />
        </Link>
        <div className="lg:h-full lg:flex lg:items-end">
          <div>
            <BiLogOut
              onClick={handleLogout}
              className="h-12 w-12 rounded-lg text-gray-800 cursor-pointer p-3"
            />
            <img
              src={user.photo}
              className="h-10 w-10 rounded-full cursor-pointer object-cover"
              alt="DefaultProfile"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
