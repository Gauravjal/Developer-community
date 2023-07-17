import React, { useState } from "react";
import copy from "copy-to-clipboard";
import moment from "moment";
import { BiLike } from "react-icons/bi";
import { AiFillLike } from "react-icons/ai";
import { FaRegComments } from "react-icons/fa";
import { BiShare } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import PostComment from "./PostComment";
import { useDispatch, useSelector } from "react-redux";
import { likePost } from "../../actions/community";
import { likeComment } from "../../actions/community";
import { useLocation } from "react-router-dom";
import { MdOutlineUpdate } from "react-icons/md";
import Alert from "../Alert/Alert";
import Comments from "./Comments";
import { Link } from "react-router-dom";
function Post({ children }) {
  var location = useLocation();
  const url = "https://stackoverflow-clone-mfrc.onrender.com";
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.currentUser);
  let alertMessage = useSelector((state) => state.alert);
  const [showComments, setShowComments] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "20px",
        borderBottom: "1px solid black",
        backgroundColor: "pink",
        borderRadius: "10px",
        marginBottom: "10px",
        marginLeft: "10px",
        marginRight: "10px",
        marginTop: "10px",
        backgroundColor: "#ffffff",
      }}
    >
      {/* <div className="post bg-white p-1 my-1">
    <div>
      <Link to={`community/profile/${children?.userId}`}>
        
        <h4>{children?.userPosted}</h4>
      </Link>
    </div>
    <div>
      <p className="my-1">{children?.userPosted}</p>
      <p className="post-date">Posted on {children?.postedOn}</p>

      <button
        //onClick={() => addLike(_id)}
        type="button"
        className="btn btn-light"
      >
        <i className="fas fa-thumbs-up" />{' '}

      </button>
      <button
        //onClick={() => removeLike(_id)}
        type="button"
        className="btn btn-light"
      >
        <i className="fas fa-thumbs-down" />
      </button>
     
     
    </div>
  </div> */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginBottom: "10px",
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
            width="25vw"
            height="25vh"
            style={{
              borderRadius: "50%",
              marginRight: "10px",
              border: "1px solid black",
            }}
            alt="profile PIC"
            src={`https://stackoverflow-clone-mfrc.onrender.com/uploads/${children?.avatar}`}
          />
          <strong>{children?.userPosted}</strong>
        </div>
        <p style={{ position: "flex-end" }}>
          <MdOutlineUpdate style={{ marginRight: "5px" }} />
          {moment(children.postedOn).fromNow()}
        </p>
      </div>
      <div
        style={{
          whiteSpace: "pre-wrap",
          wordBreak: "break-word",
          marginBottom: "10px",
        }}
        dangerouslySetInnerHTML={{ __html: children?.postBody }}
      />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          //overflowX:'scroll',
          padding: "10px",
        }}
      >
        {children?.files?.map((file) =>
          file.slice(-4) === ".svg" || file.slice(-4) === ".png" ? (
            <img
              style={{
                padding: "3%",
                margin: "auto",
                border: "1px solid pink",
              }}
              //width="60%"
              height="150vh"
              src={`https://stackoverflow-clone-mfrc.onrender.com/uploads/${file}`}
              alt="img"
            />
          ) : (
            <video
              style={{
                padding: "3%",
                margin: "auto",
                border: "1px solid pink",
              }}
              width="60%"
              height="150vh"
              src={`https://stackoverflow-clone-mfrc.onrender.com/uploads/${file}`}
              controls
              autoPlay
              alt="video"
            ></video>
          )
        )}
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <button
          onClick={() => {
            dispatch(likePost(children._id, user._id));
          }}
          style={{
            backgroundColor: "#eff2f7",
            border: "none",
            cursor: "pointer",
            marginRight: "5px",
            borderRadius: "10px",
          }}
        >
          <div
            style={{ fontSize: "20px", marginRight: "10px", color: "black" }}
          >
            {children?.likes?.includes(user?._id) ? (
              <AiFillLike
                style={{
                  fontSize: "21px",
                  fill: "#4187f6",
                  alignItems: "center",
                  top: "0px",
                }}
              />
            ) : (
              <BiLike
                style={{
                  fontSize: "21px",
                  fill: "black",
                  alignItems: "center",
                  top: "0px",
                }}
              />
            )}

            <span style={{ paddingLeft: "10px" }}>
              {children?.likes?.length}
            </span>
          </div>
        </button>

        <button
          style={{
            backgroundColor: "#eff2f7",
            border: "none",
            cursor: "pointer",
            marginRight: "5px",
            borderRadius: "10px",
          }}
          onClick={() => {
            setShowComments(!showComments);
          }}
        >
          <div
            style={{ fontSize: "20px", marginRight: "10px", color: "black" }}
          >
            <FaRegComments
              style={{
                fontSize: "21px",
                color: "black",
                alignItems: "center",
                top: "0px",
              }}
            />
            <span style={{ paddingLeft: "10px" }}>
              {children?.comments?.length}
            </span>
          </div>
        </button>
        <button
          onClick={() => {
            copy(url + location.pathname);
            alert("Post URL copied to clipboard");
          }}
          style={{
            backgroundColor: "#eff2f7",
            border: "none",
            cursor: "pointer",
            marginRight: "5px",
            borderRadius: "10px",
          }}
        >
          <div
            style={{ fontSize: "20px", marginRight: "10px", color: "black" }}
          >
            <BiShare style={{ fontSize: "20px", color: "black" }} />
          </div>
        </button>
      </div>
      {showComments && (
        <div style={{ width: "100%", marginTop: "10px" }}>
          <PostComment id={children?._id} />
          <strong>Comments</strong>
          {children?.comments?.map((comment) => {
            return (
              <div
                style={{
                  border: "1px solid black",
                  marginTop: "10px",
                  padding: "10px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "10px",
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
                    <strong>{comment?.userCommented}</strong>
                  </div>
                  <p style={{ position: "flex-end" }}>
                    <MdOutlineUpdate style={{ marginRight: "5px" }} />
                    {moment(comment.commentedOn).fromNow()}
                  </p>
                </div>
                <div
                  style={{
                    whiteSpace: "pre-wrap",
                    wordBreak: "break-word",
                    marginTop: "5px",
                  }}
                  dangerouslySetInnerHTML={{ __html: comment?.commentBody }}
                />
                <button
                  onClick={() => {
                    dispatch(likeComment(children._id, user._id, comment?._id));
                  }}
                  style={{
                    backgroundColor: "#eff2f7",
                    border: "none",
                    cursor: "pointer",
                    marginRight: "5px",
                    borderRadius: "10px",
                    color: "black",
                  }}
                >
                  <div
                    style={{
                      fontSize: "20px",
                      marginRight: "10px",
                      color: "black",
                    }}
                  >
                    {comment?.likes?.includes(user?._id) ? (
                      <AiFillLike
                        style={{
                          fontSize: "21px",
                          fill: "#4187f6",
                          alignItems: "center",
                          top: "0px",
                        }}
                      />
                    ) : (
                      <BiLike
                        style={{
                          fontSize: "21px",
                          fill: "black",
                          alignItems: "center",
                          top: "0px",
                        }}
                      />
                    )}
                    <span style={{ paddingLeft: "10px" }}>
                      {comment?.likes.length}
                    </span>
                  </div>
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Post;
