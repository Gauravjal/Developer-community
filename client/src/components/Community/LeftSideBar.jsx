import React, { useState, useEffect } from "react";
import { AiFillHome } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { RxAvatar } from "react-icons/rx";
import { BiMessageSquareAdd } from "react-icons/bi";
import { MdNotifications } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import "./style.css";

function LeftSideBar() {
  const location = useLocation();
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth <= 768); // Set the breakpoint size according to your requirements
    };

    checkScreenSize();

    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);
  return (
    <div
      className="navigation"
      style={{
        width: isSmallScreen ? "10vw" : "15vw",
        height: "100%",
        position: "fixed",
        left: "0",
        padding: "30px 15px",
        // backgroundColor:'blue',
        background: "#2b343b",
        // backdropFilter: "blur(5px)",
        trainsition: "width 0.5s",
        boxShadow: "10px 0 0 #4187f6",
      }}
    >
      <ul
        style={{ listStyle: "none", position: "relative",
         padding: "0 15px"
         }}
      >
        <li
          style={{
            margin: "30px 0",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            cursor: "pointer",
            borderRadius: "10px",
            padding: "1vw",
            background:
              location.pathname === "/community" ? "#4187f6" : "#2b343b",

          }}
        >
          <Link
            style={{
              textDecoration: "none",
              display: "flex",
              background:
                location.pathname === "/community" ? "#4187f6" : "#2b343b",
              //onHover:{color:"red}
            }}
            to="/community"
          >
            {isSmallScreen ? (
              <AiFillHome
                style={{
                  width: "30px",
                  marginRight: "10px",
                  color: "#fff",
                  display: "flex",
                  background:
              location.pathname === "/community" ? "#4187f6" : "#2b343b",
                }}
              />
            ) : (
              <>
                <AiFillHome
                  style={{
                    width: "30px",
                    marginRight: "10px",
                    color: "#fff",
                    display: "flex",
                  }}
                />
                <span
                  style={{
                    whiteSpace: "nowrap",
                    color: "#fff",
                    display: "flex",
                  }}
                >
                  Home
                </span>
              </>
            )}
          </Link>
        </li>
        <li
          style={{
            margin: "30px 0",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            cursor: "pointer",
            borderRadius: "10px",
            padding: "10px",
            background:
              location.pathname === "/community/explore"
                ? "#4187f6"
                : "#2b343b",
          }}
        >
          <Link
            to="/community/explore"
            style={{ textDecoration: "none", display: "flex" }}
          >
            {isSmallScreen ? (
              <AiOutlineSearch
                style={{
                  width: "30px",
                  marginRight: "10px",
                  color: "#fff",
                  display: "flex",
                }}
              />
            ) : (
              <>
                <AiOutlineSearch
                  style={{
                    width: "30px",
                    marginRight: "10px",
                    color: "#fff",

                    display: "flex",
                  }}
                />
                <span
                  style={{
                    whiteSpace: "nowrap",
                    color: "#fff",
                    display: "flex",
                  }}
                >
                  Explore
                </span>
              </>
            )}
          </Link>
        </li>
        <li
          style={{
            margin: "30px 0",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            cursor: "pointer",
            borderRadius: "10px",
            padding: "10px",
            background:
              location.pathname === "/community/notifications"
                ? "#4187f6"
                : "#2b343b",
          }}
        >
          <Link
            to="/community/notifications"
            style={{ textDecoration: "none", display: "flex" }}
          >
            {isSmallScreen ? (
              <MdNotifications
                style={{
                  width: "30px",
                  marginRight: "10px",
                  color: "#fff",
                  display: "flex",
                }}
              />
            ) : (
              <>
                <MdNotifications
                  style={{
                    width: "30px",
                    marginRight: "10px",
                    color: "#fff",

                    display: "flex",
                  }}
                />
                <span
                  style={{
                    whiteSpace: "nowrap",
                    color: "#fff",
                    display: "flex",

                  }}
                >
                  Notification
                </span>
              </>
            )}
          </Link>
        </li>
        <li
          style={{
            margin: "30px 0",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            cursor: "pointer",
            borderRadius: "10px",
            padding: "10px",
            background:
              location.pathname === "/community/profile"
                ? "#4187f6"
                : "#2b343b",
          }}
        >
          <Link
            to="/community/profile"
            style={{ textDecoration: "none", display: "flex" }}
          >
            {isSmallScreen ? (
              <RxAvatar
                style={{
                  width: "30px",
                  marginRight: "10px",
                  color: "#fff",
                  display: "flex",
                }}
              />
            ) : (
              <>
                <RxAvatar
                  style={{
                    width: "30px",
                    marginRight: "10px",
                    color: "#fff",
                    display: "flex",
                  }}
                />
                <span
                  style={{
                    whiteSpace: "nowrap",
                    color: "#fff",
                    display: "flex",
                  }}
                >
                  Profile
                </span>
              </>
            )}
          </Link>
        </li>
        <li
          style={{
            margin: "30px 0",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            cursor: "pointer",
            borderRadius: "10px",
            padding: "10px",
            background:
              location.pathname === "/community/post" ? "#4187f6" : "#2b343b",
          }}
        >
          <Link
            to="/community/post"
            style={{ textDecoration: "none", display: "flex" }}
          >
            {isSmallScreen ? (
              <BiMessageSquareAdd
                style={{
                  width: "30px",
                  marginRight: "10px",
                  color: "#fff",
                  display: "flex",
                }}
              />
            ) : (
              <>
                <BiMessageSquareAdd
                  style={{
                    width: "30px",
                    marginRight: "10px",
                    color: "#fff",
                    display: "flex",
                  }}
                />
                <span
                  style={{
                    whiteSpace: "nowrap",
                    color: "#fff",
                    display: "flex",
                  }}
                >
                  Post
                </span>
              </>
            )}
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default LeftSideBar;
