import React from "react";
import Home from "./Home";
import LeftSideBar from "./LeftSideBar";
import RightSideBar from "./RightSideBar";
function Community() {
  return (
    <div style={{display:'flex',paddingTop:'50px'}}>
        
        <LeftSideBar />
        <Home/>
        <RightSideBar/>
    </div>
  );
}

export default Community;
