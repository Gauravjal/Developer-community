import React from "react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import moment from "moment";
import {MdOutlineClose} from "react-icons/md";
import LeftSideBar from "../LeftSideBar/LeftSidebar";
import { useDispatch } from "react-redux";
import Alert from "../Alert/Alert";
import { Link } from "react-router-dom";
import { updateCurrentUser } from "../../actions/getCurrentUser";


const Modal = ({ onClose, children }) => {
    const dispatch = useDispatch();
  var User = useSelector((state) => state.currentUser);
  console.log("currentUser", User);
  const [showAlert, setAlert] = useState("");
  const [name, setName] = useState(User?.name);
  const [about, setAbout] = useState(User?.about);
  const [location, setLocation] = useState(User?.location);
  const [tags, setTags] = useState(User?.tags);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert("");
    }, 3000);

    return () => clearTimeout(timeout);
  }, [showAlert]);
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({ name, about, location, tags });
    if (name === "") alert("Name is required");
    else{
      dispatch(
        updateCurrentUser({ _id: User?._id, name, about, location, tags })
      );
      onClose();
      setAlert("Profile updated successfully")
    }
  };
  return (
    <div className="modal">
      <div className="modal-content">
      <div className="close-button-container">
  <button
   //style={{backgroundColor:'white',color:'black'}}
    className="close-button" onClick={onClose}>
    X
  </button>
</div>
        {/* <h1 style={{textAlign:'center'}}>Edit profile</h1> */}
          <form 
            onSubmit={handleSubmit}
            style={{
              maxWidth: "80%",
              margin: "auto",
              border:'1px solid black',
              padding:'20px',
              borderRadius:'10px'
            }}
          >
            <label htmlFor="name">
              <h4>Display Name</h4>
            </label>
            <input
              className="form-input"
              type="text"
              id="name"
              style={{
                padding: "10px",
                width: "calc(100% - 40px)",
                fontSize: "13px",
                border: "solid 1px #0000003e",
              }}
              onChange={(e) => {
                setName(e.target.value);
              }}
              value={name}
            />
            <label htmlFor="name">
              <h4>About me</h4>
            </label>
            <textarea
              style={{
                padding: "10px",
                width: "calc(100% - 40px)",
                fontSize: "13px",
                border: "solid 1px #0000003e",
              }}
              type="text"
              id="name"
              value={about}
              onChange={(e) => {
                setAbout(e.target.value);
              }}
            />
            <label htmlFor="name">
              <h4>Location</h4>
            </label>
            <input
              className="form-input"
              type="text"
              id="name"
              value={location}
              style={{
                padding: "10px",
                width: "calc(100% - 40px)",
                fontSize: "13px",
                border: "solid 1px #0000003e",
              }}
              onChange={(e) => {
                setLocation(e.target.value);
              }}
            />
            <label htmlFor="name">
              <h4>Tags</h4>
            </label>
            <input
              className="form-input"
              type="text"
              id="name"
              value={tags}
              style={{
                padding: "10px",
                width: "calc(100% - 40px)",
                fontSize: "13px",
                border: "solid 1px #0000003e",
              }}
              onChange={(e) => {
                setTags(e.target.value);
              }}
            />
            <br />
            <button
              type="submit"
              style={{
                padding: "10px",
                backgroundColor: "blue",
                color: "white",
                border: "none",
              }}
            >
              Update Profile
            </button>
          </form>
      </div>
    </div>
  );
};

export default Modal;
