import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllUsers } from "../../actions/getAllUsers";
import { Link, useParams } from "react-router-dom";
import LeftSideBar from "../LeftSideBar/LeftSidebar";
import moment from "moment";
function Public() {
  let { id } = useParams();
  // alert(id)
  const Users = useSelector((state) => state.Users);
  const Questions = useSelector((state) => state.question);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllUsers());
  }, []);
  console.log("users", Users);
  return (
    <>
    <LeftSideBar/>
      <div
      className="main-bar"
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
          marginLeft: "14vw", 
          width: "75vw",
          borderBottom:'1px solid grey'
        }}
      >
        {Users?.data
          ?.filter((item) => item._id === id)
          .map((item) => {
            return (
              <div style={{ marginTop: "10px" }}>
                <div className="profile-name">
                  <h1>{item?.name}</h1>
                  <h3>Joined {moment(item?.joinedOn).fromNow()}</h3>
                </div>

                <label htmlFor="name">
                  <h4>About me</h4>
                  <p>{item?.about || "No about details found"}</p>
                </label>

                <label htmlFor="name">
                  <p>{item?.location || "No location details found"}</p>
                </label>

                <label htmlFor="name">
                  <h4>{item?.tags}</h4>
                </label>
              </div>
            );
          })}
      </div>
      
      <div style={{ height: "90vh", width: "75vw" ,marginLeft:'15vw'}}>
      <h1 style={{textAlign:'center'}}>Questions asked</h1>
        {Questions?.data
          ?.filter((item) => item.userId === id)
          .map((question) => {
            return (
              <div
              style={{
                minHeight: "80px",
                width: "100%",
                display: "flex",
                alignItems: "center",
                backgroundColor: "#fdf7e2",
                borderBottom: "solid 1px #edeff0",
              }}
              className="display-question-container"
            >
              <div style={{ padding: "10px" }} className="display-votes-ans">
                <p style={{ margin: "0%", textAlign: "center" }}>
                  {question?.upvotes?.length - question?.downvotes?.length}
                </p>
                <p style={{  }}>votes</p>
              </div>
              <div style={{ padding: "10px" }} className="display-votes-ans">
                <p style={{ margin: "0%", textAlign: "center" }}>
                  {question.noOfAnswers}
                </p>
                <p style={{}}>answers</p>
              </div>
              <div
                style={{ flexGrow: "1", padding: "10px", margin: "0%" }}
                className="display-question-details"
              >
                <Link
                  to={`/Questions/${question._id}`}
                  className="question-title-link"
                  style={{
                    textDecoration: "none",
                    color: "#037ecb",
                    transition: "0.3s",
                  }}
                >
                  {question?.questionTitle?.length >
                  (window.innerWidth <= 400 ? 70 : 90)
                    ? question?.questionTitle?.substring(
                        0,
                        window.innerWidth <= 400 ? 70 : 90
                      ) + "..."
                    : question?.questionTitle}
                </Link>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                  className="display-tags-time"
                >
                  <div
                    style={{ display: "flex", flexWrap: "wrap" }}
                    className="display-tags"
                  >
                    {question?.questionTags?.map((tag) => (
                      <p
                        style={{
                          margin: "2px",
                          padding: "4px",
                          fontSize: "13px",
                          backgroundColor: "#edeff0",
                          color: "#39739d",
                        }}
                        key={tag}
                      >
                        {tag}
                      </p>
                    ))}
                  </div>
                  <p
                    style={{
                      fontSize: "13px",
                    }}
                    className="display-time"
                  >
                    asked {moment(question?.askedOn).fromNow()}{" "}
                    {question?.userPosted}
                  </p>
                </div>
              </div>
            </div>
            );
          })}
      </div>
    </>
  );
}

export default Public;
