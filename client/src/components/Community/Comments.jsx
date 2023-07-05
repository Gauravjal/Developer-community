import React from "react";
import { BiLike } from "react-icons/bi";
import { FaRegComments } from "react-icons/fa";
import { BiShare } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
function Comments({ children }) {
  const navigate=useNavigate();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "10px",
        borderBottom: "1px solid black",
      }}
    >
      <div style={{ display: "flex" }}>
        {/* <img
          width="5%"
          style={{ borderRadius: "60%" }}
          alt="profile PIC"
          src="https://pbs.twimg.com/media/Fz6e73raIAANwaB?format=jpg&name=small"
        ></img> */}
        <strong>{children?.userPosted}</strong>
      </div>
      <div
        style={{ whiteSpace: "pre-wrap", wordBreak: "break-word" }}
        dangerouslySetInnerHTML={{ __html: children?.postBody }}
      />
      <div style={{ display: "flex" }}>
        {/* <img
          style={{ padding: "3%" }}
          width="100%"
          src="https://pbs.twimg.com/media/Fz3FlueaQAAocg5?format=jpg&name=360x360"
          alt="img"
        ></img> */}
      </div>
      <div style={{ display: "flex" }}>
        <BiLike style={{ padding: "1%", fontSize: "20px" }} />
        <FaRegComments  onClick={()=>{navigate(`/community/post/${children?._id}`)}} style={{ padding: "1%", fontSize: "20px" }} />
        <BiShare style={{ padding: "1%", fontSize: "20px" }} />
        <BiShare style={{ padding: "1%", fontSize: "20px" }} />
      </div>
    </div>
  );
}

export default Comments;
