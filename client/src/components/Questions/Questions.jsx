import React from "react";
import LeftSideBar from "../LeftSideBar/LeftSidebar";
import RightSideBar from "../RightSideBar/RightSideBar";
import MainBar from "../MainSideBar/MainSideBar";
function Questions() {
  var questionList = [
    {
      id: 1,
      votes: 3,
      noOfAnswers: 4,
      questionTitle: "What is the function?",
      questionBody: "It menat to be",
      questionTags: ["c", "c++", "java", "javascript", "python"],
      userPosted: "mano",
      time: "1 Jan",
    },
    {
      id: 2,
      votes: 3,
      noOfAnswers: 4,
      questionTitle: "What is the function?",
      questionBody: "It menat to be",
      questionTags: ["c", "c++", "java", "javascript", "python"],
      userPosted: "mano",
      time: "1 Jan",
    },
    {
      id: 3,
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
      <div className="home-sub-container">
        <MainBar />
        {/* <RightSideBar /> */}
      </div>
    </div>
  );
}

export default Questions;
