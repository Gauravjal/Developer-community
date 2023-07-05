import React from "react";
import { AiFillHome } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { RxAvatar } from "react-icons/rx";
import { BiMessageSquareAdd } from "react-icons/bi";
import { Link } from "react-router-dom";
function LeftSideBar() {
  return (
    <div
      style={{
        width: "30%",
        display: "flex",
        flexDirection: "column",
        //alignItems: "center",
        position:'relative',
        textAlign: "center", // Aligns text horizontally at the center
      }}
    >
      <h3 style={{ textAlign: "left" ,position:'relative',left:'30%'}}>
        <Link style={{ textDecoration: "none" }} to="/community">
          <AiFillHome /> Home
        </Link>
      </h3>
      <h3 style={{ textAlign: "left" ,position:'relative',left:'30%'}}>
        <Link to="/community/explore" style={{ textDecoration: "none" }}>
          <AiOutlineSearch />
          Explore
        </Link>
      </h3>
      <h3 style={{ textAlign: "left" ,position:'relative',left:'30%'}}>
        <Link to="/community/profile" style={{ textDecoration: "none" }}>
          <RxAvatar />
          Profile
        </Link>
      </h3>
      <h3 style={{ textAlign: "left" ,position:'relative',left:'30%'}}>
        <Link to="/community/post" style={{ textDecoration: "none" }}>
          <BiMessageSquareAdd />
          Post
        </Link>
      </h3>
    </div>
  );
}

export default LeftSideBar;
