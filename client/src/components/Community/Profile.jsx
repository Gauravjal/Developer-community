import React, { useState, useEffect } from "react";
import Post from "./Post";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../../actions/community";
import LeftSideBar from "./LeftSideBar";
import RightSideBar from "./RightSideBar";
import {MdAdd} from "react-icons/md";
function Profile() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.post);
  const user = useSelector((state) => state.Users);
  useEffect(() => {
    dispatch(fetchPosts());
    console.log(posts?.data);
  }, [dispatch]);
  return (
    <div style={{ display: "flex", paddingTop: "50px" }}>
      <LeftSideBar />
      <div
        style={{
          border: "1px solid black",
          borderTop: "none",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            borderBottom: "1px solid black",
          }}
        >
          <img
            style={{ borderRadius: "35%", padding: "3%" }}
            width="30%"
            src="https://gratisography.com/wp-content/uploads/2023/03/gratisography-happy-woman-cool-shades-stock-photo-800x525.jpg"
            alt="avatar"
          ></img>
          <div>
            <h3>{user?.name}</h3>
            <h4>Location</h4>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div style={{ display: "flex" }}>0 Followers</div>
              <div style={{ display: "flex" }}>0 Following</div>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "center" ,alignItems:'center',width:'100%'}}>
            <button style={{ height: "20%" }}><MdAdd/>Follow</button>
          </div>
        </div>

        <div>
          {posts?.data?.map((post) => {
            return <Post children={post} />;
          })}
        </div>
      </div>
      <RightSideBar />
    </div>
  );
}

export default Profile;
