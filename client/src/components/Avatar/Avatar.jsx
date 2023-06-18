import React from "react";
import { Link } from "react-router-dom";
function Avatar({ children }) {
  return (
    <Link to="/profile" className="nav-item nav-logo">
      <button
        style={{
          backgroundColor: "orangered",
          color: "black",
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
        {children}
      </button>
    </Link>
  );
}

export default Avatar;
