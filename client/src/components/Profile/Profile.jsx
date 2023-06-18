import React from "react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import moment from "moment";
import Avatar from "../Avatar/Avatar";
import LeftSideBar from "../LeftSideBar/LeftSidebar";
import { useDispatch } from "react-redux";
import Alert from "../Alert/Alert";
import { Link } from "react-router-dom";
import { updateCurrentUser } from "../../actions/getCurrentUser";
function Profile() {
  const dispatch = useDispatch();
  var User = useSelector((state) => state.Users);
  console.log("currentUser", User);
  const [showAlert, setAlert] = useState("");
  const [name, setName] = useState(User?.name);
  const [about, setAbout] = useState(User?.about);
  const [location, setLocation] = useState(User?.location);
  const [tags, setTags] = useState(User?.tags);
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({ name, about, location, tags });
    if(name==="")
    alert("Name is required");
    else
    dispatch(
      updateCurrentUser({ _id: User?._id, name, about, location, tags })
    );
  };
  return (
    <div className="home-main-container">
      <LeftSideBar />
      <div style={{border:'1px solid black',marginLeft:'30px',paddingLeft:'50px'}} className="main-bar">
        <br />

        <div className="profile-name">
          <h1>{User?.name}</h1>
          <h3>Joined {moment(User?.joinedOn).fromNow()}</h3>
        </div>
        <hr />
        <section>
          <h1>Edit profile</h1>
          <form
            onSubmit={handleSubmit}
            style={{ maxWidth: "1200px", margin: "auto" }}
          >
            <label htmlFor="name">
              <h4>Display Name</h4>
            </label>
            <input
              className="form-input"
              type="text"
              id="name"
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
              onChange={(e) => {
                setTags(e.target.value);
              }}
            />
            <br />
            <button type="submit">Update Profile</button>
          </form>
        </section>
      </div>
    </div>
  );
}

export default Profile;
