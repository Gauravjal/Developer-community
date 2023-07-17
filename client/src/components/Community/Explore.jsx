import React, { useState, useEffect } from "react";
import Post from "./Post";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../../actions/community";
import LeftSideBar from "./LeftSideBar";
import RightSideBar from "./RightSideBar";
import Search from "./Search";
function Explore() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth <= 1000); // Set the breakpoint size according to your requirements
    };

    checkScreenSize();

    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.post);
  useEffect(() => {
    dispatch(fetchPosts());
    console.log(posts?.data);
  }, [dispatch]);
  return (
    <div style={{ display: "flex", paddingTop: "50px",backgroundColor:'#eef1f4'}}>
      <LeftSideBar />
      <div
        style={{

          borderLeft:"none",
          borderTop: "none",
          display: "flex",
          flexDirection: "column",
          width: "100%",
          marginLeft:isSmallScreen?'10vw':'17vw'
          ,marginRight:isSmallScreen?'1vw':'24vw' 
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            borderBottom: "1px solid black",
          }}
        >
          <Search />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "10px",
          }}
        >
          <h3 style={{ textAlign: "center" }}>Top Posts</h3>
          {posts?.data?.map((post) => {
            return <Post children={post} />;
          })}
        </div>
      </div>
      <RightSideBar />
    </div>
  );
}

export default Explore;
