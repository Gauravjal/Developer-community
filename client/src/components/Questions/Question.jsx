import React from "react";
import LeftSideBar from "../LeftSideBar/LeftSidebar";
import RightSideBar from "../RightSideBar/RightSideBar";
import MainBar from "../MainSideBar/MainSideBar";
import upvoteIcon from "../../assets/caret-up-solid.svg";
import downvoteIcon from "../../assets/caret-down-solid.svg";
import { useParams } from "react-router-dom";
import Avatar from "../Avatar/Avatar";
function Question() {
  let { id } = useParams();
  var questionList = [
    {
      id: "1",
      votes: 3,
      noOfAnswers: 4,
      questionTitle: "What is the function?",
      questionBody: "It menat to be",
      questionTags: ["c", "c++", "java", "javascript", "python"],
      userPosted: "mano",
      time: "1 Jan",
    },
    {
      id: "2",
      votes: 3,
      noOfAnswers: 4,
      questionTitle: "What is the function?",
      questionBody: "It menat to be",
      questionTags: ["c", "c++", "java", "javascript", "python"],
      userPosted: "mano",
      time: "1 Jan",
    },
    {
      id: "3",
      votes: 3,
      noOfAnswers: 4,
      questionTitle: "What is the function?",
      questionBody: "It menat to be",
      questionTags: ["c", "c++", "java", "javascript", "python"],
      userPosted: "mano",
      time: "1 Jan",
    },
  ];
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
          <section >
            {questionList
              .filter((item) => item.id === id)
              .map((item) => {
                return (
                  <div  key={item.id}>
                    <h1>{item.questionTitle}</h1>
                    <div style={{borderBottom:'1px solid black', display: "flex" }}>
                      <div
                        style={{
                          flexDirection: "column",
                          display: "flex",
                          padding: "20px",
                        }}
                      >
                        <img width="20px" src={upvoteIcon} alt="upvote"></img>
                        <p style={{display:'flex', justifyContent:'center', paddingTop: "0px",  alignItems:'center'}}>{item.votes}</p>
                        <img
                          width="20px"
                          src={downvoteIcon}
                          alt="downvote"
                        ></img>
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
                        <p style={{display:'flex', justifyContent:'space-between', padding: "20px", paddingTop: "0px", color:'#0000003e', fontWeight:'bold',textUnderlineOffset:'2px', textDecoration:'underline'}}>share delete</p>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          float:'right',
                          flexDirection: "column",
                          justifyContent: "center",
                          paddingRight: "10px",
                        }}
                      >
                        <p>Asked on {item.time}</p>
                        <Avatar>
                          {item.userPosted.charAt(0).toUpperCase()}
                        </Avatar>
                      </div>
                    </div>
                    <h3>{item.noOfAnswers} answers</h3>
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
            <textarea
              style={{
                padding: "10px",
                fontSize: "13px",
                border: "solid 1px #0000003e",
              }}
              rows="5"
              cols="50"
            ></textarea>
            <br />
            <button className="btn">Post answer</button>
          </section>
        </div>
        <RightSideBar />
      </div>
    </div>
  );
}

export default Question;
