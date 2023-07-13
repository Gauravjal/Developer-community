import React, { useState, useEffect } from "react";
import ReactQuill, { Quill } from "react-quill";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "react-quill/dist/quill.snow.css";
import LeftSideBar from "./LeftSideBar";
import RightSideBar from "./RightSideBar";
import { createPost } from "../../actions/community";
import { RiImageAddFill } from "react-icons/ri";
import { uploadFiles } from "../../actions/community";
const CustomBackground = Quill.import("attributors/style/background");
CustomBackground.whitelist = [
  "white",
  "#f0f0f0",
  "#ff0000",
  "#00ff00",
  "#0000ff",
];
Quill.register(CustomBackground, true);
function CreatePost() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [text, setText] = useState("");
  const [files, setFiles] = useState([]);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth <= 1000); // Set the breakpoint size according to your requirements
    };

    checkScreenSize();

    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const User = useSelector((state) => state.currentUser);

  const handleTextChange = (value) => {
    setText(value);
    console.log(text);
  };

  const handleFileChange = (e) => {
    let alreadyFiles = files;
    var selectedFiles = Array.from(e.target.files);
    for (let i = 0; i < alreadyFiles.length; i++) {
      selectedFiles.push(alreadyFiles[i]);
    }
    // selectedFiles.push(e.target.files);
    //Array.from(e.target.files);
    setFiles(selectedFiles);
    alert(files.length);
    for (let i = 0; i < files.length; i++) {
      console.log(files[i].name);
    }
  };
  const handleSubmit = async(e) => {
    e.preventDefault();
    let fileNames=[];
    if (text === "" && files.length === 0) {
      alert("Please enter a post.");
    } else {
      console.log("pahije",files);
      if (files.length > 0) {
        const formData = new FormData();
        files.forEach((file) => {
          formData.append("files", file);
        });

         fileNames = await dispatch(uploadFiles(formData));
 
      }
      console.log("heaahetfiles",fileNames);
      dispatch(
        createPost(
          {
            postBody: text,
            userPosted: User?.name,
            userId: User?._id,
            files: fileNames,//files.map((file) => file.name),
            avatar:User?.avatar
          },
          navigate
        )
      );

      
    }
  };
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
        display: "flex",
        paddingTop: "50px",
        backgroundColor: "#eef1f4",
      }}
    >
      <LeftSideBar />
      <div
        style={{
          borderLeft: "1px solid black",
          borderRight: "1px solid black",
          width: "100%",
          height: "100vh",
          justifyContent: "center",
          padding: "10px",
          marginLeft: "17vw",
          marginRight: isSmallScreen ? "1vw" : "24vw",
        }}
      >
        <h1 style={{ textAlign: "center" }}>Create Post</h1>
        <form onSubmit={handleSubmit}>
          <div
            style={{
              backgroundColor: "#ffffff",
              width: isSmallScreen ? "70vw" : "50vw",
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
              placeholder="Create a community post"
            />
            <div style={{ display: "flex", overflow: "scroll" }}>
              {files.map((file, index) => (
                <div key={index}>
                  {file.type.startsWith("image/") ? (
                    <div>
                      <button
                        style={{
                          position: "relative",
                          left: "6vw",
                          top: "0vh",
                          bottom: "6vh",
                        }}
                        onClick={() =>
                          setFiles(files.filter((f, i) => i !== index))
                        }
                      >
                        x
                      </button>
                      <img
                        style={{ width: "5vw", height: "5vw", padding: "10px" }}
                        src={URL.createObjectURL(file)}
                        alt={file.name}
                      />
                    </div>
                  ) : (
                    <video
                      style={{ width: "10vw", height: "10vw" }}
                      src={URL.createObjectURL(file)}
                      controls
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              // marginTop: "100px",
            }}
          >
            <input
              type="file"
              id="file"
              multiple
              onChange={handleFileChange}
              style={{
                display: "none",
              }}
            />
            <label
              style={{
                backgroundColor: "orange",
                width: isSmallScreen ? "70vw" : "50vw",
                textAlign: "center",
                fontSize: "40px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
              }}
              htmlFor="file"
            >
              <RiImageAddFill />
            </label>
          </div>

          <br />
          <button
            style={{
              backgroundColor: "orange",
              width: isSmallScreen ? "70vw" : "50vw",
              textAlign: "center",
              fontSize: "40px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "auto",
              cursor: "pointer",
            }}
            type="submit"
          >
            Post
          </button>
        </form>
      </div>
      <RightSideBar />
    </div>
  );
}

export default CreatePost;