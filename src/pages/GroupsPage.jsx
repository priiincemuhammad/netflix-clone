import React from "react";
import LeftSide from "../components/LeftSide";
import Groups from "../components/Groups";
import GroupChats from "../components/GroupChats";

const GroupsPage = () => {
  return (
    <>
      <LeftSide />
      <div className=" absolute top-0 bottom-0 lg:left-20 left-0 right-0 bg-white">
        <div className="h-full flex justify-start">
          <Groups />
          <GroupChats />
        </div>
      </div>
    </>
  );
};

export default GroupsPage;
