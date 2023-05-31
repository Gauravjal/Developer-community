import React from "react";
import LeftSideBar from '../components/LeftSideBar/LeftSidebar'
import RightSideBar from '../components/RightSideBar/RightSideBar'
import MainBar from '../components/MainSideBar/MainSideBar'
function Home() {
  return (<div className="home-main-container">
    <LeftSideBar/>
    <div className="home-sub-container">
    <MainBar />
    <RightSideBar/>
    </div>
  </div>)
}

export default Home;
