import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllUsers } from "../../actions/getAllUsers";
import { followUser } from "../../actions/community";
import { Link } from "react-router-dom";
function RightSideBar() {
  const Users = useSelector((state) => state.Users);
  //const users=
  Users?.data?.slice(0, 5);
  const currentUser = useSelector((state) => state.currentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllUsers());
  }, []);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth <= 1000); // Set the breakpoint size according to your requirements
    };

    checkScreenSize();

    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  if (isSmallScreen) {
    return null; // Return null to render nothing when isSmallScreen is true
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        justifyContent: "space-between",
        height:'85vh',
        position:'fixed',
        right:'1vw',
        backgroundColor: "#eef1f4",
        borderLeft:'1px solid #444',
        //overflow:'scroll',
        //overflowX:'hidden',
        //overflowY: "scroll",
        //overflowX: "hidden",
        // height:'90vh'
      }}
    >
      <h3 style={{ textAlign: "center" }}>You might like</h3>
      {Users?.data
        ?.filter((item) => {
          return !item?.followers?.includes(currentUser?._id);
        })
        ?.map((item) => {
          return (
            <div
              style={{
                marginTop: "10px",
                height: "80px",
                border: "1px soid black",
                borderRadius: "10px",
                textDecoration: "none",
                display: "flex",
                flexDirection: "row",
                width: "20vw",
                alignItems: "center",
                padding: "10px",
                marginRight: "10px",
                marginLeft:"10px",
                justifyContent: "space-between",
                boxShadow: "red",
                backgroundColor:"#ffffff",
                
              }}
            >
              <Link
                style={{ textDecoration: "none", display: "flex" }}
                to={`/community/profile/${item._id}`}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    width="50vw"
                    style={{ borderRadius: "60%", height: "50%" ,border:'1px solid grey'}}
                    alt="profile PIC"
                    src={`https://stackoverflow-clone-mfrc.onrender.com/uploads/${item?.avatar}`}
                  ></img>
                </div>
                <h4
                  style={{
                    textDecoration: "none",
                    color: "black",
                    padding: "20px",
                  }}
                >
                  {item?.name}
                </h4>
                <small>{item?.bio}</small>
              </Link>

              {item?._id !== currentUser?._id &&
                item?.followers?.filter((id) => id === currentUser?._id)
                  .length === 0 && (
                  <Link
                    to={`/community/profile/${item._id}`}
                    onClick={() => {
                      //dispatch(followUser(id,currentUser?._id));
                    }}
                    className="btn"
                    style={{
                      height: "25%",
                      borderRadius: "20px",
                      paddingBottom: "none",
                      backgroundColor:"#4187f6"
                    }}
                  >
                    Follow
                  </Link>
                )}
            </div>
          );
        })}
    </div>
  );
}

export default RightSideBar;
