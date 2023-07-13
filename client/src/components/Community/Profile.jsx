import React, { useState, useEffect } from "react";
import Post from "./Post";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../../actions/community";
import LeftSideBar from "./LeftSideBar";
import RightSideBar from "./RightSideBar";
import { MdLocationOn } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import {useNavigate,Link} from 'react-router-dom';
import { updateAvatar } from "../../actions/getCurrentUser";
import Modal from "./Modal";

function Profile() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [file, setFile] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);
  const navigate=useNavigate();
  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth <= 1000); // Set the breakpoint size according to your requirements
    };

    checkScreenSize();

    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const dispatch = useDispatch();
  const posts = useSelector((state) => state.post);
  const user = useSelector((state) => state.currentUser);

  useEffect(() => {
    dispatch(fetchPosts());
    console.log(posts?.data);
  }, [dispatch]);

  const handleFileChange = async (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = async () => {
        setFile(reader.result);
        const formData = new FormData();
        formData.append("file", selectedFile);
        await dispatch(updateAvatar(formData, user._id));
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleEditButtonClick = () => {
    setModalOpen(true);
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
          border: "1px solid black",
          borderTop: "none",
          display: "flex",
          flexDirection: "column",
          width: "100%",
          marginLeft: "17vw",
          marginRight: isSmallScreen ? "1vw" : "24vw",
          backgroundColor: "#eef1f4",
          minHeight: "100vh",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            borderBottom: "1px solid black",
            backgroundColor: "#ffffff",
          }}
        >
          <div>
            {user?.avatar ? (
              <img
                style={{
                  margin: "1vw",
                  borderRadius: "35%",
                  padding: "3%",
                  border: "1px solid grey",
                }}
                width="50%"

                src={`http://localhost:5000/uploads/${user?.avatar}`}
                alt="avatar"
              />
            ) : (
              <img
                style={{
                  borderRadius: "35%",
                  padding: "3%",
                }}
                width="20%"
                    height="60%"
                src="https://gratisography.com/wp-content/uploads/2023/03/gratisography-happy-woman-cool-shades-stock-photo-800x525.jpg"
                alt="avatar"
              ></img>
            )}
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
                backgroundColor: "none",
                color: "#4187f6",
                textAlign: "center",
                fontSize: "40px",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
              }}
              htmlFor="file"
            >
              <MdEdit />
            </label>
          </div>
          <div>
            <h3>{user?.name}</h3>
            <h4>
              <MdLocationOn />
              {user?.location}
            </h4>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                <Link style={{textDecoration:'none',cursor:'pointer'}}  to={`/community/followers/${user._id}`}>
                <h1>{user?.followers?.length}</h1> Followers
                </Link>
              </div>
              <div

                style={{
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "center",
                  padding: "10px",
                }}
              >
                <Link style={{textDecoration:'none',cursor:'pointer'}} to={`/community/followers/${user._id}`}>
                <h1>{user?.following?.length}</h1> Following
                </Link>
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            }}
          >
            <button
              style={{
                height: "20%",
                backgroundColor: "#4187f6",
                cursor:'pointer'
              }}
              onClick={handleEditButtonClick}
            >
              Edit
            </button>
          </div>
        </div>

        <div>
          <h3 style={{ textAlign: "center" }}>Posted by {user?.name}</h3>
          {posts?.data
            ?.filter((post) => post.userId === user?._id)
            ?.map((post) => {
              return <Post children={post} />;
            })}
          {/* <p>No post found</p> */}
        </div>
      </div>
      <RightSideBar />
      {isModalOpen && (
        <Modal onClose={() => setModalOpen(false)}>
          {/* Modal content */}
          <h1>Edit Profile</h1>
          {/* Add your form or any other content here */}
        </Modal>
      )}
    </div>
  );
}

export default Profile;
