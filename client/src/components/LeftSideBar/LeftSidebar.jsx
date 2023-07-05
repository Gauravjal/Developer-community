import React, { useState } from "react";
import { BsGlobeAmericas } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import Chat from "../Chat/Chat.jsx";
import { AiFillRobot } from "react-icons/ai";
import {AiFillHome} from "react-icons/ai";
import {BsQuestionCircleFill} from "react-icons/bs";
import {IoIosPricetags} from "react-icons/io";
import {FaUsers} from "react-icons/fa";

function LeftSidebar() {
  const [showBot, setShowBot] = useState(false);
  return (
    <nav style={{position:'relative'}} className="left-side-bar">
      <NavLink style={{ textDecoration: "none"}} className="item" to="/">
        <h4 style={{ textAlign: "left" ,position:'relative',left:'5%'}}><AiFillHome/>HOME</h4>
      </NavLink>
      <NavLink style={{ textDecoration: "none" }} className="item" to="/">
        <h4 style={{ textAlign: "left" ,position:'relative',left:'5%'}}>
          <BsGlobeAmericas />
          PUBLIC
        </h4>
      </NavLink>
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
          <h4
            style={{ textAlign: "left" ,position:'relative',left:'20%'}}
          >
            <BsQuestionCircleFill/>QUESTIONS
          </h4>
        </NavLink>

        <NavLink style={{ textDecoration: "none" }} className="item" to="/Tags">
          <h4
            style={{ textAlign: "left" ,position:'relative',left:'20%'}}
          >
            <IoIosPricetags/>TAGS
          </h4>
        </NavLink>
        <NavLink
          style={{ textDecoration: "none" }}
          className="item"
          to="/Users"
        >
          <h4
            style={{ textAlign: "left" ,position:'relative',left:'20%'}}
          >
            USERS
          </h4>
        </NavLink>
        <NavLink
          style={{ textDecoration: "none" }}
          className="item"
          to="/community"
        >
          <h4
           style={{ textAlign: "left" ,position:'relative',left:'20%'}}
          >
            <FaUsers/>COMMUNITY
          </h4>
        </NavLink>
      </div>
      {!showBot && (
        <button
          type="submit"
          style={{
            display: "flex",
            position: "fixed",
            top: "500px",
            left: "60px",
            color: "black",
            fontSize: "20px",
            backgroundColor: "#ef8236",
            borderRadius: "50%",
            padding: "0px",
            paddingLeft: "25px",
            paddingRight: "25px",
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
