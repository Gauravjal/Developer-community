import React from "react";
import LeftSideBar from "../LeftSideBar/LeftSidebar";
import RightSideBar from "../RightSideBar/RightSideBar";
import MainBar from "../MainSideBar/MainSideBar";
function Questions() {
  return (
    <div className="home-main-container">
      <LeftSideBar />
      <div className="home-sub-container">
        <MainBar />
        <RightSideBar />
      </div>
    </div>
  );
}

export default Questions;
