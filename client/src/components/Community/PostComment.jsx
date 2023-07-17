import React, { useState, useEffect } from "react";
import ReactQuill, { Quill } from "react-quill";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "react-quill/dist/quill.snow.css";
import { postComment } from "../../actions/community";
import Alert from "../Alert/Alert";
import { setGlobalAlert } from "../../actions/alert";
const CustomBackground = Quill.import("attributors/style/background");
CustomBackground.whitelist = [
  "white",
  "#f0f0f0",
  "#ff0000",
  "#00ff00",
  "#0000ff",
];
Quill.register(CustomBackground, true);
function PostComment({ id }) {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  var User = useSelector((state) => state.currentUser);
  let alertMessage=useSelector((state)=>state.alert);
  const [text, setText] = useState("");

  const handleTextChange = (value) => {
    setText(value);
    console.log(text);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform your post submission logic here
    // You can access the text and images state variables to get the entered text and uploaded images
    if (text === ""){
       dispatch(setGlobalAlert("Please enter post"));
       setTimeout(() => {
        dispatch(setGlobalAlert(""));
      }, 5000);
  }
    else
      dispatch(
        postComment(
          {
            id: id,
            commentBody: text,
            userCommented: User?.name,
            userId: User?._id,
          },
          navigate
        )
      );

      setText("");
  };

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth <= 1000); // Set the breakpoint size according to your requirements
    };

    checkScreenSize();

    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);
  const modules = {
    toolbar: [
      [{ font: [] }],
      [{ header: [1, 2, 3, 4, 5, 6, true] }],
      ["bold", "italic", "underline", "strike"],
      [{ color: [] }, { background: [] }],
      [{ script: "sub" }, { script: "super" }],
      ["blockquote", "code-block"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link"],
      ["clean"],
    ],
  };
  return (
    <div
      style={{
        borderTop: "1px solid black",
        display: "flex",
        paddingTop: "50px",
        width: "100%",
        flexDirection:'column'
      }}
    >
      {alertMessage?.data && <Alert type="success" Children={alertMessage?.data} />}
      <div
        style={{
          //   borderLeft: "1px solid black",
          //   borderRight: "1px solid black",
          width: "100%",
          justifyContent: "center",
          padding: "10px",
          backgroundColor: "black",
        }}
      >
        <form onSubmit={handleSubmit}>
          <div
            style={{
              backgroundColor: "#ffffff",
              width: isSmallScreen ? "60vw" : "50vw",
              borderRadius: "20px",
              margin: "auto",
            }}
          >
            <ReactQuill
              theme="snow"
              modules={modules}
              value={text}
              onChange={handleTextChange}
              style={{
                width: "100%",

                marginTop: "10px",
                backgroundColor: "#ffffff",

                border: "none",
                minHeight: "30vh",
              }}
              placeholder="Post a comment"
            />
          </div>

          <br />
          <button style={{ cursor: "pointer" }} type="submit">
            Comment
          </button>
        </form>
      </div>
    </div>
  );
}

export default PostComment;
