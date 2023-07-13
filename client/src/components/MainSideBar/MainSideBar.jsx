import React from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import moment from "moment";

function MainSideBar() {
  const location = useLocation();
  var questionList = useSelector((state) => state.question);
  console.log(questionList);
  return (
    <div style={{ marginLeft: "14vw", width: "75vw" }} className="main-bar">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {location.pathname === "/" ? (
          <h1 style={{ fontWeight: "400" }}>Top Questions</h1>
        ) : (
          <h1 style={{ fontWeight: "400" }}>All Questions</h1>
        )}
        <Link to="/AskQuestion" className="btn">
          Ask Question
        </Link>
      </div>
      <div style={{ overflowY: "scroll", height: "500px", width: "100%" }}>
        {questionList?.data?.length} Questions
        {questionList?.data?.map((question) => {
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
                <p style={{padding: '10px'
}}>votes</p>
              </div>
              <div style={{ padding: "10px" }} className="display-votes-ans">
                <p style={{ margin: "0%", textAlign: "center" }}>
                  {question.noOfAnswers}
                </p>
                <p style={{ margin: "0%", textAlign: "center" }}>answers</p>
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
                      <p style={{margin: '2px',
                        padding: '4px',
                        fontSize: '13px',
                        backgroundColor: '#edeff0',
                        color: '#39739d'}} key={tag}>{tag}</p>
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
    </div>
  );
}

export default MainSideBar;
