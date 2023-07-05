import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Post from "./Post";
import { fetchPosts } from "../../actions/community";
function Home() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.post);
  useEffect(() => {
    dispatch(fetchPosts());
    console.log(posts?.data);
  }, [dispatch]);
  return (
    <div  style={{ border: "1px solid black" ,width:'100%',borderTop:'none' }}>
      {posts?.data?.map((post) => {
        return(
        <Post children={post}/>
        )
      })}
      {/* <Post />
      <Post />
      <Post /> */}
    </div>
  );
}

export default Home;
