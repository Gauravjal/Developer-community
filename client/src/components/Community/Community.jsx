import React from "react";
import Home from "./Home";
import LeftSideBar from "./LeftSideBar";
import RightSideBar from "./RightSideBar";
function Community() {
  return (
    <div style={{display:'flex',paddingTop:'50px',backgroundColor:'#eef1f4'}}>
        
        <LeftSideBar />
        <Home/>
        <RightSideBar/>
    </div>
  );
}

export default Community;
