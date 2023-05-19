import React from "react";
import LeftSide from "../components/LeftSide";

const GroupsPage = () => {
  return (
    <>
      <LeftSide />
      <div className=" absolute top-0 bottom-0 lg:left-20 right-0 bg-primery">
        <div className="h-full flex justify-start">
          <div className="p-5">
            <h1 className="text-4xl text-white">Available rooms</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default GroupsPage;
