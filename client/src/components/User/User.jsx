import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllUsers } from "../../actions/getAllUsers";
import { Link } from "react-router-dom";
import Alert from "../Alert/Alert";
import LeftSidebar from "../LeftSideBar/LeftSidebar";
function User() {
  const Users = useSelector((state) => state.Users);
  const alertMessage = useSelector((state) => state.alert);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllUsers());
  }, []);
  console.log("users", Users);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        
      }}
    >
      <LeftSidebar />
      <div  className="user-list-container" style={{ marginLeft: "16vw", width: "70vw",marginTop:'10vh' }}>
        {Users?.data?.map((item) => {
          return (
            <div
            className="user-profile-link"
              style={{
                marginTop: "10px",
                width: "200px",
                height: "80px",
                border: "1px soid black",
                borderRadius: "10px",
                backgroundColor: "#fff",
                textDecoration: "none",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                padding: "10px",
                marginRight: "10px",
              }}
            >
              <Link
                style={{
                  textDecoration: "none",
                  display: "flex",
                  //border: "1px solid black",
                  borderRadius: "10px",
                  width: "25vw",
                  height: "15vw",
                }}
                to={`/Users/${item._id}`}
              >
                <img
                  style={{ width: "50px", height: "10vh" ,border:'1px solid grey',borderRadius:'10px'}}
                  src={`https://stackoverflow-clone-mfrc.onrender.com/uploads/${item?.avatar}`}
                  alt="img"
                />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    marginLeft: "10px",
                  }}
                >
                  <h5 style={{ textDecoration: "none" }}>{item?.name}</h5>
                  <h5 style={{ textDecoration: "none", color: "black" }}>
                    {item?.location}
                  </h5>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default User;
