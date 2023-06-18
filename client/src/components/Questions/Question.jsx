import React from "react";
import { useState,useEffect } from "react";
import { useSelector } from "react-redux";
import moment from "moment";

import copy from "copy-to-clipboard";
import LeftSideBar from "../LeftSideBar/LeftSidebar";
import RightSideBar from "../RightSideBar/RightSideBar";
import MainBar from "../MainSideBar/MainSideBar";
import { useDispatch } from "react-redux";
import upvoteIcon from "../../assets/caret-up-solid.svg";
import downvoteIcon from "../../assets/caret-down-solid.svg";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import Avatar from "../Avatar/Avatar";
import { postAnswer } from "../../actions/Question";
import { deleteQuestion } from "../../actions/Question";
import { voteQuestion } from "../../actions/Question";
import { deleteAnswer } from "../../actions/Question";
import Alert from "../Alert/Alert";
function Question() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let { id } = useParams();
  var location = useLocation();
  var questionList = useSelector((state) => state.question);
  var User = useSelector((state) => state.Users);
  const url = "http://localhost:3000";
  console.log(questionList);
  const [answerBody, setAnswerBody] = useState("");
  const [showAlert,setAlert]=useState("");
  const upvote = (val) => {
    if (User) dispatch(voteQuestion(id, "upVote", User._id));
    else setAlert("sign up or login to vote");
  };
  const downvote = (val) => {
    if (User) dispatch(voteQuestion(id, "downVote", User._id));
    else setAlert("sign up or login to vote");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (User === null) {
      setAlert("sign up or login to answer");
    } else {
      if (answerBody !== "") {
        dispatch(
          postAnswer({
            id,
            answerBody,
            userAnswered: User.name,
            userId: User._id,
          })
        );
        console.log({ answerBody });
      } else {
        setAlert("Please enter answer");
      }
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert("");
    }, 3000);

    return () => clearTimeout(timeout);
  },[showAlert])
  return (
    <div className="home-main-container">
      <LeftSideBar />
      <div style={{ display: "flex" }}>
        <div
          style={{
            display: "flex",
            width: "400px",
            flexDirection: "column",
            float: "left",
          }}
          className="home-sub-container"
        >
         {showAlert!=="" && <Alert imageUrl="data:image/png;base64,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"
           Children={showAlert}></Alert>}
          <section>
            {questionList?.data
              .filter((item) => item._id === id)
              .map((item) => {
                return (
                  <div key={item.id}>
                    <h1>{item.questionTitle}</h1>
                    <div
                      style={{
                        borderBottom: "1px solid black",
                        display: "flex",
                      }}
                    >
                      <div
                        style={{
                          flexDirection: "column",
                          display: "flex",
                          padding: "20px",
                        }}
                      >
                        <button onClick={upvote}>
                          <img width="20px" src={upvoteIcon} alt="upvote"></img>
                        </button>
                        <p
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            paddingTop: "0px",
                            alignItems: "center",
                          }}
                        >
                          {item.upvotes?.length - item.downvotes?.length}
                        </p>
                        <button onClick={downvote}>
                          <img
                            width="20px"
                            src={downvoteIcon}
                            alt="downvote"
                          ></img>
                        </button>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          padding: "20px",
                        }}
                      >
                        <p style={{ padding: "20px", paddingTop: "0px" }}>
                          {item.questionBody}
                        </p>
                        <div
                          style={{
                            padding: "20px",
                            paddingTop: "0px",
                            borderRadius: "0px",
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                          }}
                        >
                          {item.questionTags.map((tag) => (
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
                        <p
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            padding: "20px",
                            paddingTop: "0px",
                            color: "#0000003e",
                            fontWeight: "bold",
                            textUnderlineOffset: "2px",
                            textDecoration: "underline",
                          }}
                        >
                          <button
                            onClick={() => {
                              copy(url + location.pathname);
                              alert("Question url copied to clipboard");
                            }}
                          >
                            share
                          </button>{" "}
                          {User?._id === item.userId && (
                            <button
                              onClick={() => {
                                dispatch(deleteQuestion(id, navigate));
                              }}
                            >
                              delete
                            </button>
                          )}
                        </p>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          float: "right",
                          flexDirection: "column",
                          justifyContent: "center",
                          paddingRight: "10px",
                        }}
                      >
                        <p>Asked {moment(item.askedOn).fromNow()}</p>
                        <Avatar>
                          {item?.userPosted?.charAt(0).toUpperCase()}
                        </Avatar>
                      </div>
                    </div>
                    <h3>{item.noOfAnswers} answers</h3>
                    <section>
                      {item.answer.map((ans) => {
                        return (
                          <div
                            style={{
                              border: "1px solid black",
                              display: "flex",
                            }}
                            key={ans.id}
                          >
                            <p>{ans.answerBody}</p>
                            <Avatar>{ans.userAnswered.charAt(0).toUpperCase()}</Avatar>
                            <p>{moment(ans.answeredOn).fromNow()}</p>
                            <button
                              onClick={() => {
                                copy(url + location.pathname);
                                alert("Answer url copied to clipboard");
                              }}
                            >
                              share
                            </button>{" "}
                            {ans.userId === User?._id && (
                              <button
                                onClick={() => {
                                  dispatch(deleteAnswer(item._id, ans._id));
                                }}
                              >
                                delete
                              </button>
                            )}
                          </div>
                        );
                      })}
                    </section>
                  </div>
                );
              })}
          </section>

          <section
            style={{
              display: "flex",
              flexDirection: "column",
              width: "calc( 100% - 300px - 24px )",
            }}
          >
            <h1>Your Answer</h1>
            <form onSubmit={handleSubmit}>
              <textarea
                style={{
                  padding: "10px",
                  fontSize: "13px",
                  border: "solid 1px #0000003e",
                }}
                rows="5"
                cols="50"
                onChange={(e) => {
                  setAnswerBody(e.target.value);
                }}
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    setAnswerBody(answerBody + "\n");
                  }
                }}
              ></textarea>
              <br />
              <button className="btn">Post answer</button>
            </form>
          </section>
        </div>
        <RightSideBar />
      </div>
    </div>
  );
}

export default Question;
