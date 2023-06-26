import React, { useState } from "react";
import { BsGlobeAmericas } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import Chat from "../Chat/Chat.jsx";
import { AiFillRobot } from "react-icons/ai";
function LeftSidebar() {
  const [showBot, setShowBot] = useState(false);
  return (
    <nav className="left-side-bar">
      <NavLink style={{ textDecoration: "none" }} className="item" to="/">
        <p>HOME</p>
      </NavLink>
      <br />
      <NavLink style={{ textDecoration: "none" }} className="item" to="/">
        <p style={{ textDecoration: "none", display: "flex" }}>
          <BsGlobeAmericas />
          PUBLIC
        </p>
      </NavLink>
      <br />
      <div
        style={{
          textDecoration: "none",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <NavLink
          style={{ textDecoration: "none" }}
          className="item"
          to="/Questions"
        >
          <p
            style={{
              textDecoration: "none",
              display: "flex",
              justifyContent: "center",
            }}
          >
            QUESTIONS
          </p>
        </NavLink>
        <br />

        <NavLink style={{ textDecoration: "none" }} className="item" to="/Tags">
          <p
            style={{
              textDecoration: "none",
              display: "flex",
              justifyContent: "center",
            }}
          >
            TAGS
          </p>
        </NavLink>
        <br />
        <NavLink
          style={{ textDecoration: "none" }}
          className="item"
          to="/Users"
        >
          <p
            style={{
              textDecoration: "none",
              display: "flex",
              justifyContent: "center",
            }}
          >
            USERS
          </p>
        </NavLink>
      </div>
      {!showBot && (
        <button
          type="submit"
          style={{
            display:'flex',
            position: "fixed",
            top:'500px',
            left:'60px',
            color: "black",
            fontSize: "20px",
            backgroundColor: "#ef8236",
            borderRadius: "50%",
            padding: "0px",
            paddingLeft:'25px',
            paddingRight:'25px',
            zIndex: "9999",
          }}
          onClick={() => {
            setShowBot(true);
          }}
        >
          <h1>
            <AiFillRobot />
          </h1>
        </button>
      )}
      {showBot && (
        <button
          style={{ backgroundColor: "red", float: "right" }}
          type="submit"
          onClick={() => {
            setShowBot(false);
          }}
        >
          Close ChatBot
        </button>
      )}
      {showBot && <Chat />}
    </nav>
  );
}

export default LeftSidebar;
