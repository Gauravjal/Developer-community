import React, { useState, useEffect } from "react";
import Post from "./Post";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../../actions/community";
import LeftSideBar from "./LeftSideBar";
import RightSideBar from "./RightSideBar";
import Search from "./Search";
function Explore() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.post);
  useEffect(() => {
    dispatch(fetchPosts());
    console.log(posts?.data);
  }, [dispatch]);
  return (

    <div style={{display:'flex',paddingTop:'50px'}}>
        <LeftSideBar />
    <div style={{border:'1px solid black',borderTop:'none', display: "flex", flexDirection: "column",width:'100%' }}>
     
      <div style={{ display: "flex", flexDirection: "row",borderBottom:'1px solid black' }}>
        <Search/>
      </div>
      {posts?.data?.map((post) => {
        return(
        <Post children={post}/>
        )
      })}
    </div>
    <RightSideBar />
    </div>
  );
}

export default Explore;
