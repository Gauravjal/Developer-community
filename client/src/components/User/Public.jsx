import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllUsers } from "../../actions/getAllUsers";
import { Link, useParams } from "react-router-dom";
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
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {Users?.data
          ?.filter((item) => item._id === id)
          .map((item) => {
            return (
              <div style={{ marginTop: "10px" }}>
                <div className="profile-name">
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
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
      <h1>Questions asked</h1>
      <div>
        {Questions?.data
          ?.filter((item) => item.userId === id)
          .map((question) => {
            return (
              <div
                style={{
                  display: "flex",
                  backgroundColor: "#fbf3d5",
                  border: "1px solid #e3e6e8",
                }}
                key={question.id}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    marginRight: "10px",
                    marginTop: "10px",
                    marginBottom: "10px",
                  }}
                >
                  <p
                    style={{
                      alignContent: "center",
                      justifyContent: "center",
                      display: "flex",
                    }}
                  >
                    {question.upvotes?.length - question.downvotes?.length}{" "}
                  </p>
                  <p
                    style={{
                      paddingLeft: "10px",
                      alignContent: "center",
                      justifyContent: "center",
                      display: "flex",
                    }}
                  >
                    Votes
                  </p>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    marginRight: "10px",
                    marginTop: "10px",
                    marginBottom: "10px",
                  }}
                >
                  <p
                    style={{
                      alignContent: "center",
                      justifyContent: "center",
                      display: "flex",
                    }}
                  >
                    {question.noOfAnswers}{" "}
                  </p>
                  answers
                </div>
                <div>
                  <Link to={`/Questions/${question._id}`}>
                    <p>{question.questionTitle}</p>
                  </Link>

                  <div style={{}}>
                    {question.questionTags.map((tag) => (
                      <small
                        style={{
                          borderRadius: "7px",
                          margin: "3px",
                        }}
                        className="btn"
                      >
                        {tag}
                      </small>
                    ))}
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    paddingRight: "10px",
                  }}
                >
                  <p>Asked on {question.askedOn.substring(0, 10)}</p>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
}

export default Public;
