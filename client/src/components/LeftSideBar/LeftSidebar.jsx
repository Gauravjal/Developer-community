import React, { useState, useEffect } from "react";
import { BsGlobeAmericas } from "react-icons/bs";
import { NavLink, useLocation } from "react-router-dom";
import Chat from "../Chat/Chat.jsx";
import { AiFillRobot } from "react-icons/ai";
import { AiFillHome } from "react-icons/ai";
import { MdWorkspacePremium } from "react-icons/md";
import { BsQuestionCircleFill } from "react-icons/bs";
import { IoIosPricetags } from "react-icons/io";
import { FaUsers } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";
import { useSelector,useDispatch } from "react-redux";
import { setGlobalAlert } from "../../actions/alert.js";
function LeftSidebar() {
  const dispatch=useDispatch();
  const location = useLocation();
  const [showBot, setShowBot] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  var User = useSelector((state) => state.currentUser);
  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth <= 1000); // Set the breakpoint size according to your requirements
    };

    checkScreenSize();

    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);
  return (
    <nav
      style={{
        marginTop: "40px",
        width: isSmallScreen?"10vw":"15vw",
        height: "100%",
        position: "fixed",
        left: "0",
        padding: isSmallScreen?"10px 0px":"30px 15px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        trainsition: "width 0.5s",
        color: "black",
      }}
      className="left-sidebar"
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
        <button
          style={{
            backgroundColor: "inherit",
            width: "100%",
            border: "none",
            padding: "0%",
          }}
        >
          <NavLink
            className="side-nav-links"
            activeclassname="active"
            style={{
              textDecoration: "none",
              color: "black",
            }}
            to="/"
          >
            <h5 style={{ textAlign: "left", position: "relative", left:isSmallScreen?"0%": "5%" }}>
              <AiFillHome
                style={{
                  width: isSmallScreen?'':"30px",
                }}
              />
              {!isSmallScreen ? "HOME" : ""}
            </h5>
          </NavLink>
        </button>
        <button
          style={{
            backgroundColor: "inherit",
            width: "100%",
            border: "none",
            padding: "0%",
          }}
        >
          <NavLink
            className="side-nav-links"
            activeclassname="active"
            style={{
              textDecoration: "none",
              color: "black",

            }}
            activeStyle={{ backgroundColor: "black" }}
            to="/public"
          >
            <h5 style={{ textAlign: "left", position: "relative", left: "5%" }}>
              <BsGlobeAmericas
                style={{
                  width: isSmallScreen?'':"30px",
                }}
              />
              {!isSmallScreen ? "PUBLIC" : ""}
            </h5>
          </NavLink>
        </button>
        <div
          style={{
            textDecoration: "none",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <button
            style={{
              backgroundColor: "inherit",
              width: "100%",
              border: "none",
              padding: "0%",
            }}
          >
            <NavLink
              className="side-nav-links"
              activeclassname="active"
              style={{
                textDecoration: "none",
                color: "black",

              }}
              to="/Questions"
              activeStyle={{ backgroundColor: "black" }}
            >
              <h5
                style={{ textAlign: "left", position: "relative", left: "20%" }}
              >
                <BsQuestionCircleFill
                  style={{
                    width: isSmallScreen?'':"30px",
                  }}
                />
                {!isSmallScreen ? "QUESTIONS" : ""}
              </h5>
            </NavLink>
          </button>
          <button
            style={{
              backgroundColor: "inherit",
              width: "100%",
              border: "none",
              padding: "0%",
            }}
          >
            <NavLink
              className="side-nav-links"
              activeclassname="active"
              style={{
                textDecoration: "none",
                color: "black",


              }}
              to="/Tags"
              activeClassName="active-link"
            >
              <h5
                style={{ textAlign: "left", position: "relative", left: "20%" }}
              >
                <IoIosPricetags
                  style={{
                    width: isSmallScreen?'':"30px",
                  }}
                />
                {!isSmallScreen ? "TAGS" : ""}
              </h5>
            </NavLink>
          </button>
          <button
            style={{
              backgroundColor: "inherit",
              width: "100%",
              border: "none",
              padding: "0%",
            }}
          >
            <NavLink
              className="side-nav-links"
              activeclassname="active"
              style={{
                textDecoration: "none",
                color: "black",

              }}
              to="/Users"
            >
              <h5
                style={{ textAlign: "left", position: "relative", left: "20%" }}
              >
                <FaUserFriends
                  style={{
                    width: isSmallScreen?'':"30px",
                  }}
                />
                {!isSmallScreen ? "USERS" : ""}
              </h5>
            </NavLink>
          </button>
          <button
            style={{
              backgroundColor: "inherit",
              width: "100%",
              border: "none",
              padding: "0%",
            }}
            onClick={()=>{
              if(!User){
              dispatch(setGlobalAlert("Please login or sign up to view community!"));
              setTimeout(() => {
                dispatch(setGlobalAlert(""));
              }, 5000); 
            }
            }}
          >
            {User?
            (
            <NavLink
              className="side-nav-links"
              activeclassname="active"
              style={{
                textDecoration: "none",
                color: "black",
              }}
              to="/community"
              activeStyle={{ backgroundColor: "black" }}
            >
              <h5
                style={{ textAlign: "left", position: "relative", left: "20%" }}
              >
                <FaUsers
                  style={{
                    width: isSmallScreen?'':"30px",
                  }}
                />
                {!isSmallScreen ? "COMMUNITY" : ""}
              </h5>
            </NavLink>):(
            <NavLink
              className="side-nav-links"
              activeclassname="active"
              style={{
                textDecoration: "none",
                color: "black",
              }}
              to="/auth"
              activeStyle={{ backgroundColor: "black" }}
            >
              <h5
                style={{ textAlign: "left", position: "relative", left: "20%" }}
              >
                <FaUsers
                  style={{
                    width: isSmallScreen?'':"30px",
                  }}
                />
                {!isSmallScreen ? "COMMUNITY" : ""}
              </h5>
            </NavLink>)
            
}
          </button>
          <button
            onClick={()=>{
              if(User){
              dispatch(setGlobalAlert("Subscribe to our plans and enjoy premium benifits"));
              setTimeout(() => {
                dispatch(setGlobalAlert(""));
              }, 5000); 
              }
              else{
              dispatch(setGlobalAlert("Please login or sign up to subscribe!"));
              setTimeout(() => {
                dispatch(setGlobalAlert(""));
              }, 5000); 
              }
            }}

            
            style={{
              backgroundColor: "inherit",
              width: "100%",
              border: "none",
              padding: "0%",
            }}
          >
            {User?
            (
            <NavLink
              className="side-nav-links"
              activeclassname="active"
              style={{
                textDecoration: "none",
                color: "black",

              }}
              activeStyle={{ backgroundColor: "black" }}
              to="/subscribe"
            >
              <h5
                style={{ textAlign: "left", position: "relative", left: "5%" }}
              >
                <MdWorkspacePremium
                  style={{
                    width: isSmallScreen?'':"30px",
                  }}
                />
                {!isSmallScreen ? "PREMIUM" : ""}
              </h5>
            </NavLink>
            ):(
              <NavLink
              className="side-nav-links"
              activeclassname="active"
              style={{
                textDecoration: "none",
                color: "black",

              }}
              activeStyle={{ backgroundColor: "black" }}
              to="/auth"
            >
              <h5
                style={{ textAlign: "left", position: "relative", left: "5%" }}
              >
                <MdWorkspacePremium
                  style={{
                    width: isSmallScreen?'':"30px",
                  }}
                />
                {!isSmallScreen ? "PREMIUM" : ""}
              </h5>
            </NavLink>
            )}
          </button>
        </div>
      </div>
      <li style={{ display: "flex" }}>
        {!showBot && (
          <button
            type="submit"
            style={{
              //display: "flex",
              color: "black",
              fontSize: isSmallScreen ? "10px" : "20px",
              backgroundColor: "#ef8236",
              borderRadius: "50%",
              padding: "0px",
              paddingLeft: isSmallScreen ? "15px" : "25px",
              paddingRight: isSmallScreen ? "15px" : "25px",
              marginLeft: isSmallScreen ? "1vw" : "3vw",
              marginBottom: "10vh",
              zIndex: "9999",
              justifyContent: "center",
              textAlign: "center",
              alignContent: "center",
            }}
            onClick={() => {
              setShowBot(true);
            }}
          >
            <h1>
              <AiFillRobot style={{}} />
            </h1>
          </button>
        )}
        {showBot && (
          <div style={{ position: "relative" }}>
            <button
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                backgroundColor: "red",
                color: "black",
              }}
              type="submit"
              onClick={() => {
                setShowBot(false);
              }}
            >
              Close ChatBot
            </button>
            <Chat showBot={showBot} setShowBot={setShowBot} />
          </div>
        )}
      </li>
    </nav>
  );
}

export default LeftSidebar;
