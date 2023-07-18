import React from "react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import moment from "moment";

import copy from "copy-to-clipboard";
import LeftSideBar from "../LeftSideBar/LeftSidebar";
import RightSideBar from "../RightSideBar/RightSideBar";
import MainBar from "../MainSideBar/MainSideBar";
import { useDispatch } from "react-redux";
import upvoteIcon from "../../assets/caret-up-solid.svg";
import downvoteIcon from "../../assets/caret-down-solid.svg";
import { useParams, useLocation, useNavigate, Link } from "react-router-dom";
import Avatar from "../Avatar/Avatar";
import { postAnswer } from "../../actions/Question";
import { deleteQuestion } from "../../actions/Question";
import { voteQuestion } from "../../actions/Question";
import { deleteAnswer } from "../../actions/Question";
import { setGlobalAlert } from "../../actions/alert";
import Alert from "../Alert/Alert";
function Question() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let { id } = useParams();
  var location = useLocation();
  var questionList = useSelector((state) => state.question);
  let alertMessage = useSelector((state) => state.alert);
  var User = useSelector((state) => state.currentUser);
  const url = "http://localhost:3000";
  console.log(questionList);
  const [answerBody, setAnswerBody] = useState("");
  const [showAlert, setAlert] = useState("");
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
        dispatch(setGlobalAlert("Answer posted successfully"));
        setTimeout(() => {
          dispatch(setGlobalAlert(""));
        }, 5000);
        console.log({ answerBody });
      } else {
        dispatch(setGlobalAlert("Please enter answer"));
        setTimeout(() => {
          dispatch(setGlobalAlert(""));
        }, 5000);
      }
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert("");
    }, 3000);

    return () => clearTimeout(timeout);
  }, [showAlert]);

  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth <= 1000); // Set the breakpoint size according to your requirements
    };

    checkScreenSize();

    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);
  return (
    <div className="home-main-container">
      <LeftSideBar />
      <div
        style={{
          display: "flex",
          marginLeft: isSmallScreen ? "7vw" : "17vw",
          marginTop: "5vh",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "80vw",
            flexDirection: "column",
            float: "left",
          }}
          className="home-sub-container"
        >
          {showAlert !== "" && (
            <Alert
              imageUrl="data:image/png;base64,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"
              Children={showAlert}
            ></Alert>
          )}
          <section>
            {questionList?.data
              .filter((item) => item._id === id)
              .map((item) => {
                return (
                  <div key={item.id}>
                    <section
                      style={{
                        marginBottom: "20px",
                        paddingBottom: "20px",
                        borderBottom: "solid 1px rgba(0, 0, 0, 0.112)",
                      }}
                      className="question-details-container"
                    >
                      <h1>{item.questionTitle}</h1>
                      <div
                        style={{
                          display: "flex",
                        }}
                      >
                        <div
                          style={{
                            padding: "5px 20px 5px 10px",
                          }}
                        >
                          <img
                            style={{
                              fontSize: "40px",
                              cursor: "pointer",
                              color: "rgb(206, 203, 203)",
                            }}
                            width="20px"
                            src={upvoteIcon}
                            alt="upvote"
                            onClick={upvote}
                          ></img>

                          <p
                            style={{
                              margin: "0%",
                              fontSize: "25px",
                              textAlign: "center",
                            }}
                          >
                            {item.upvotes?.length - item.downvotes?.length}
                          </p>

                          <img
                            width="20px"
                            style={{
                              fontSize: "40px",
                              cursor: "pointer",
                              color: "rgb(206, 203, 203)",
                            }}
                            src={downvoteIcon}
                            alt="downvote"
                            onClick={downvote}
                          ></img>
                        </div>
                        <div style={{ width: "100%" }}>
                          <p
                            style={{
                              lineHeight: "22px",
                              whiteSpace: "pre-line",
                            }}
                          >
                            {item.questionBody}
                          </p>
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifContent: "flex-start",
                            }}
                          >
                            {item.questionTags.map((tag) => (
                              <p
                                style={{
                                  padding: "5px 5px",
                                  margin: "3px",
                                  fontSize: "13px",
                                  borderRadius: "2px",
                                  backgroundColor: "#e1ecf4",
                                  color: "#39739d",
                                  textDecoration: "none",
                                  lineHeight: "22px",
                                }}
                                key={tag}
                              >
                                {tag}
                              </p>
                            ))}
                          </div>

                          <div
                            style={{
                              width: "100%",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "space-between",
                            }}
                          >
                            <button
                              style={{
                                backgroundColor: "transparent",
                                border: "none",
                                padding: "5px 0px",
                                margin: "0px 10px 0px 0px",
                                textDecoration: "none",
                                color: "#939292",
                                cursor: "pointer",
                                fontSize: "14px",
                                transition: "0.3s",
                              }}
                              onClick={() => {
                                copy(url + location.pathname);
                                alert("Question url copied to clipboard");
                              }}
                            >
                              share
                            </button>{" "}
                            {User?._id === item.userId && (
                              <button
                                style={{
                                  backgroundColor: "transparent",
                                  border: "none",
                                  padding: "5px 0px",
                                  margin: "0px 10px 0px 0px",
                                  textDecoration: "none",
                                  color: "#939292",
                                  cursor: "pointer",
                                  fontSize: "14px",
                                  transition: "0.3s",
                                }}
                                onClick={() => {
                                  dispatch(deleteQuestion(id, navigate));
                                  dispatch(
                                    setGlobalAlert(
                                      "Question deleted successfully"
                                    )
                                  );
                                }}
                              >
                                delete
                              </button>
                            )}
                          </div>
                          <div>
                            <p>Asked {moment(item.askedOn).fromNow()}</p>
                            <div style={{ paddingLeft: "10px" }}>
                              {item.userPosted}
                            </div>
                          </div>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            float: "right",
                            flexDirection: "column",
                            justifyContent: "center",
                            paddingRight: "10px",
                          }}
                        ></div>
                      </div>
                    </section>
                    <h3>{item.noOfAnswers} answers</h3>
                    <section>
                      {item.answer.map((ans) => {
                        return (
                          <div
                            style={{
                              paddingBottom: "20px",
                              borderBottom: "solid 1px rgba(0, 0, 0, 0.112)",
                            }}
                            className="display-ans"
                            key={ans._id}
                          >
                            <p
                              style={{
                                fontSize: "14px",
                                lineHeight: "18px",
                                whiteSpace: "pre-line",
                              }}
                            >
                              {ans.answerBody}
                            </p>
                            <div
                              style={{
                                width: "100%",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                              }}
                              className="question-actions-user"
                            >
                              <div>
                                <button
                                  style={{
                                    backgroundColor: "transparent",
                                    border: "none",
                                    padding: "5px 0px",
                                    margin: "0px 10px 0px 0px",
                                    textDecoration: "none",
                                    color: "#939292",
                                    cursor: "pointer",
                                    fontSize: "14px",
                                    transition: "0.3s",
                                  }}
                                  onClick={() => {
                                    copy(url + location.pathname);
                                    alert("Answer url copied to clipboard");
                                  }}
                                >
                                  share
                                </button>{" "}
                                {ans.userId === User?._id && (
                                  <button
                                    style={{
                                      backgroundColor: "transparent",
                                      border: "none",
                                      padding: "5px 0px",
                                      margin: "0px 10px 0px 0px",
                                      textDecoration: "none",
                                      color: "#939292",
                                      cursor: "pointer",
                                      fontSize: "14px",
                                      transition: "0.3s",
                                    }}
                                    onClick={() => {
                                      dispatch(deleteAnswer(item._id, ans._id));
                                      dispatch(
                                        setGlobalAlert(
                                          "Answer deleted successfully"
                                        )
                                      );
                                    }}
                                  >
                                    delete
                                  </button>
                                )}
                              </div>
                              <div>
                                <p
                                  style={{
                                    textDecoration: "none",
                                    fontSize: "14px",
                                    margin: "0%",
                                  }}
                                >
                                  answered {moment(ans.answeredOn).fromNow()}
                                </p>
                                
                                <div>{ans.userAnswered}</div>
                              </div>
                            </div>
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
            {alertMessage?.data && (
              <Alert type="success" Children={alertMessage?.data} />
            )}
            <h1>Your Answer</h1>

            <form onSubmit={handleSubmit}>
              <textarea
                style={{
                  padding: "10px",
                  border: "solid 1px rgba(0, 0, 0, 0.3)",
                  fontFamily: 'Roboto", sans-serif',
                  width: "70vw",
                  resize: "vertical",
                }}
                rows="10"
                cols="30"
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
              <button
                style={{
                  margin: "20px 0px",
                  padding: "10px 10px",
                  backgroundColor: "#009dff",
                  color: "white",
                  border: "solid 1px #009dff",
                  borderRadius: "4px",
                  cursor: "pointer",
                  transition: "0.5s all",
                }}
              >
                Post answer
              </button>
            </form>
          </section>
        </div>
      </div>
      {/* <RightSideBar /> */}
    </div>
  );
}

export default Question;
