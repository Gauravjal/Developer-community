import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllUsers } from "../../actions/getAllUsers";
import { Link } from "react-router-dom";
function User() {
  const Users = useSelector((state) => state.Users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllUsers());
  }, []);
  console.log("users", Users);
  return (
    <div
      style={{
        marginTop: "100px",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
      }}
    >
      {Users?.data?.map((item) => {
        return (
          <div
            style={{
              marginTop: "10px",
              width: "200px",
              height: "80px",
              border: "1px soid black",
              borderRadius: "10px",
              backgroundColor: "#fbf3d5",
              textDecoration: "none",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              padding: "10px",
              marginRight: "10px",
            }}
          >
            <Link style={{textDecoration:'none'}} to={`/Users/${item._id}`}>
              <h2 style={{textDecoration:'none'}}>{item?.name}</h2>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default User;
