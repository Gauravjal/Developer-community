import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
function Avatar({ children }) {
  var user = useSelector((state) => state.currentUser);
  return (
    <Link to="/profile" className="nav-item nav-logo">
      <button
        style={{
          backgroundColor:'none',
          color:'none',
          borderRadius: "50%",
          padding: "10px",
          width: "40px",
          height: "40px",
          margin: "10px",
          fontSize: "20px",
          fontWeight: "bold",
          border: "none",
          outline: "none",
          cursor: "pointer",
        }}
      >
        <img
              style={{ borderRadius: "35%", padding: "3%" }}
              width="70%"
              // src={file}
              src={`http://localhost:5000/uploads/${user?.avatar}`}
              alt="avatar"
            />
      </button>
    </Link>
  );
}

export default Avatar;
