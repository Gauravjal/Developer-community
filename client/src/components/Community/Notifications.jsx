import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdOutlineUpdate } from "react-icons/md";
import LeftSideBar from "./LeftSideBar";
import RightSideBar from "./RightSideBar";

import moment from "moment";
function Notification() {
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
  const user = useSelector((state) => state.currentUser);

  useEffect(() => {
    console.log(user?.name);
    console.log("why");
    console.log(user);
  }, [dispatch]);

  return (
    <div
      style={{
        display: "flex",
        paddingTop: "50px",
        backgroundColor: "#eef1f4",
      }}
    >
      <LeftSideBar />
      <div
        style={{
          borderLeft:"none",
          borderTop: "none",
          display: "flex",
          flexDirection: "column",
          width: "100%",
          minHeight: "100vh",
          marginLeft:isSmallScreen?'12vw':'17vw',
          marginRight: isSmallScreen ? "1vw" : "24vw",
          backgroundColor: "#eef1f4",
        }}
      >
        <h1 style={{ textAlign: "center" }}>Notifications</h1>
        {user?.notifications.length===0 && 
          <h3 style={{ textAlign: "center" }}>No notifications yet !!</h3>
        }
        {user?.notifications?.map((notification) => {
          return (
            <>
              {notification?.val === "likePost" && (
                <div
                  style={{
                    border: "1px solid grey",
                    borderRadius: "10px",
                    padding: "10px",
                    margin: "10px",
                    display: "flex",
                    alignItems: "center",
                    backgroundColor: "#fff",
                    justifyContent: "space-between",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "10px",
                    }}
                  >
                    <img
                      width="5%"
                      style={{
                        borderRadius: "50%",
                        marginRight: "10px",
                        border: "1px solid grey",
                      }}
                      alt="profile PIC"
                      src={notification?.avatar}
                    />
                    <strong style={{ marginRight: "10px" }}>
                      {notification.name}
                    </strong>{" "}
                    liked your post
                  </div>
                  <p>
                    <MdOutlineUpdate />
                    {moment(notification.date).fromNow()}
                  </p>
                </div>
              )}
              {notification?.val === "likeComment" && (
                <div
                  style={{
                    border: "1px solid grey",
                    borderRadius: "10px",
                    padding: "10px",
                    margin: "10px",
                    display: "flex",
                    alignItems: "center",
                    backgroundColor: "#fff",
                    justifyContent: "space-between",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "10px",
                    }}
                  >
                    <img
                      width="5%"
                      style={{
                        borderRadius: "50%",
                        marginRight: "10px",
                        border: "1px solid grey",
                      }}
                      alt="profile PIC"
                      src={notification?.avatar}
                    />
                    <strong style={{ marginRight: "10px" }}>
                      {notification.name}
                    </strong>{" "}
                    liked your comment
                  </div>
                  <p>
                    <MdOutlineUpdate />
                    {moment(notification.date).fromNow()}
                  </p>
                </div>
              )}
              {notification?.val === "Comment" && (
                <div
                  style={{
                    border: "1px solid grey",
                    borderRadius: "10px",
                    padding: "10px",
                    margin: "10px",
                    display: "flex",
                    alignItems: "center",
                    backgroundColor: "#fff",
                    justifyContent: "space-between",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "10px",
                    }}
                  >
                    <img
                      width="5%"
                      style={{
                        borderRadius: "50%",
                        marginRight: "10px",
                        border: "1px solid grey",
                      }}
                      alt="profile PIC"
                      src={notification?.avatar}
                    />
                    <strong style={{ marginRight: "10px" }}>
                      {notification.name}
                    </strong>{" "}
                    commented on your post
                  </div>
                  <p>
                    <MdOutlineUpdate />
                    {moment(notification.date).fromNow()}
                  </p>
                </div>
              )}

              {notification?.val === "following" && (
                <div
                  style={{
                    border: "1px solid grey",
                    borderRadius: "10px",
                    padding: "10px",
                    margin: "10px",
                    display: "flex",
                    alignItems: "center",
                    backgroundColor: "#fff",
                    justifyContent: "space-between",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "10px",
                    }}
                  >
                    <img
                      width="5%"
                      style={{
                        borderRadius: "50%",
                        marginRight: "10px",
                        border: "1px solid grey",
                      }}
                      alt="profile PIC"
                      src={notification?.avatar}
                    />
                    <strong style={{ marginRight: "10px" }}>
                      {notification.name}
                    </strong>{" "}
                    started following you
                  </div>
                  <p>
                    <MdOutlineUpdate />
                    {moment(notification.date).fromNow()}
                  </p>
                </div>
              )}
            </>
          );
        })}
      </div>
      <RightSideBar />
    </div>
  );
}

export default Notification;
