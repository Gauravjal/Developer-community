import React, { useState } from "react";
import copy from "copy-to-clipboard";
import { BiLike } from "react-icons/bi";
import { FaRegComments } from "react-icons/fa";
import { BiShare } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import PostComment from "./PostComment";
import { useDispatch, useSelector } from "react-redux";
import { likePost } from "../../actions/community";
import { likeComment } from "../../actions/community";
import { useLocation } from "react-router-dom";
import Comments from "./Comments";
function Post({ children }) {
  var location = useLocation();
  const url = "http://localhost:3000";
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.Users);
  const [showComments, setShowComments] = useState(false);
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
        <button
          onClick={() => {
            dispatch(likePost(children._id, user._id));
          }}
        >
          <BiLike style={{ padding: "1%", fontSize: "20px" }} />
        </button>
        <div style={{ padding: "1%", fontSize: "20px" }}>
          {children?.likes?.length}
        </div>
        <FaRegComments
          onClick={() => {
            setShowComments(!showComments);
          }}
          style={{ padding: "1%", fontSize: "20px" }}
        />
        <button
          onClick={() => {
            copy(url + location.pathname);
            alert("Post url copied to clipboard");
          }}
        >
          <BiShare style={{ padding: "1%", fontSize: "20px" }} />
        </button>
      </div>
      {showComments && (
        <div style={{ width: "100%" }}>
          <PostComment id={children?._id} />
          <strong>Comments</strong>
          {children?.comments?.map((comment) => {
            return (
              <div style={{ border: "1px solid black" }}>
                <strong>{comment?.userCommented}</strong>
                <div
                  style={{ whiteSpace: "pre-wrap", wordBreak: "break-word" }}
                  dangerouslySetInnerHTML={{ __html: comment?.commentBody }}
                />
                <button
                  onClick={() => {
                    dispatch(likeComment(children._id, user._id, comment?._id));
                  }}
                >
                  <BiLike style={{ padding: "1%", fontSize: "20px" }} />
                </button>
                <div>{comment?.likes.length}</div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Post;
