import React, { useState, useEffect } from "react";
import Post from "./Post";
import { useDispatch, useSelector } from "react-redux";

import { useParams ,Link} from "react-router-dom";
import { fetchPosts } from "../../actions/community";
import LeftSideBar from "./LeftSideBar";
import RightSideBar from "./RightSideBar";
import { MdAdd } from "react-icons/md";
import { MdMinimize } from "react-icons/md";
import { fetchAllUsers } from "../../actions/getAllUsers";
import { followUser } from "../../actions/community";
function Profile() {
    const [isSmallScreen, setIsSmallScreen] = useState(false);
  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth <= 1000); // Set the breakpoint size according to your requirements
    };

    checkScreenSize();

    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);
  let { id } = useParams();
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.post);
  const Users = useSelector((state) => state.Users);
  const currentUser = useSelector((state) => state.currentUser);
  useEffect(() => {
    dispatch(fetchPosts());
    dispatch(fetchAllUsers());
    console.log(posts?.data);
  }, [dispatch]);

  return (
    <>
      <div style={{ display: "flex", paddingTop: "50px",backgroundColor: "#eef1f4", }}>
        <LeftSideBar />
        {Users?.data
          ?.filter((item) => item._id === id)
          .map((item) => {
            return (
              <div
                style={{
                  border: "1px solid black",
                  borderTop: "none",
                  display: "flex",
                  flexDirection: "column",
                  marginLeft:'17vw',
                  width:'100%',
                  height:'100vh',
                  marginRight: isSmallScreen ? "1vw" : "24vw",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    borderBottom: "1px solid black",
                    backgroundColor:'#ffffff'
                  }}
                >
                  <img
                    style={{margin:'1vw', borderRadius: "35%", padding: "3%" ,border:'1px solid grey'}}
                    width="20%"
                    height="60%"
                    src={`http://localhost:5000/uploads/${item?.avatar}`}
                    alt="avatar"
                  ></img>
                  <div>
                    <h3>{item?.name}</h3>
                    <h4>Location</h4>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                <Link style={{textDecoration:'none',cursor:'pointer'}}  to={`/community/followers/${item._id}`}>
                <h1>{item?.followers?.length}</h1> Followers
                </Link>
              </div>
              <div

                style={{
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "center",
                  padding: "10px",
                }}
              >
                <Link style={{textDecoration:'none',cursor:'pointer'}} to={`/community/followers/${item._id}`}>
                <h1>{item?.following?.length}</h1> Following
                </Link>
              </div>
            </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "100%",
                    }}
                  >
                    {id !== currentUser?._id &&
                      item?.followers?.filter((id) => id === currentUser?._id)
                        .length === 0 && (
                        <button
                          onClick={() => {
                            dispatch(followUser(id, currentUser?._id));
                          }}
                          style={{ height: "25%", borderRadius: "20px",cursor:'pointer' }}
                        >
                          <MdAdd />
                          Follow
                        </button>
                      )}

                    {id !== currentUser?._id &&
                      item?.followers?.filter((idd) => idd === currentUser?._id)
                        .length !== 0 && (
                            <button
                            onClick={() => {
                              dispatch(followUser(id, currentUser?._id));
                            }}
                            style={{ height: "25%", borderRadius: "20px",backgroundColor:'red',color:'black',cursor:'pointer' }}
                          >
                          <MdMinimize />
                          Unfollow
                        </button>
                      )}
                  </div>
                </div>

                <div>
                  <h3 style={{ textAlign: "center" }}>
                    Posted by {item?.name}
                  </h3>
                  {posts?.data
                    ?.filter((post) => post.userId === id)
                    ?.map((post) => {
                      return <Post children={post} />;
                    })}
                </div>
              </div>
            );
          })}
        <RightSideBar />
      </div>
    </>
  );
}

export default Profile;
