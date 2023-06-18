import React from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
function MainSideBar() {
  const location = useLocation();
  var questionList = useSelector((state) => state.question);
  console.log(questionList);
  return (
    <div className="main-bar">
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
      <div>
        {questionList?.data?.length} Questions
        {questionList?.data?.map((question) => {
          return (
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
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
                  {question.upvotes?.length-question.downvotes?.length}{" "}
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
                <p>{question.userPosted}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MainSideBar;
