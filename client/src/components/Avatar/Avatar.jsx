import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
function Avatar({ children }) {
  var user = useSelector((state) => state.currentUser);
  return (
    <Link
      style={{ backgroundColor: "none" }}
      to="/profile"
      className="nav-item nav-logo"
    >
      {/* <button
        style={{
          backgroundColor: "transparent",
          color: "none",
          borderRadius: "50%",
          padding: "10px",
          width: "40px",
          height: "40px",
          margin: "10px",
          fontSize: "20px",
          fontWeight: "bold",
          outline: "none",
          cursor: "pointer",
          border:'1px solid grey'
        }}
      > */}
        <img
          width="30vw"
          height="30vh"
          style={{
            borderRadius: "50%",
            marginRight: "10px",
            border: "1px solid grey",
          }}
          // src={file}
          src={`https://stackoverflow-clone-mfrc.onrender.com/uploads/${user?.avatar}`}
          alt="avatar"
        />
      {/* </button> */}
    </Link>
  );
}

export default Avatar;
