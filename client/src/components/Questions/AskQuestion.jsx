import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import LeftSideBar from "../LeftSideBar/LeftSidebar";
import RightSideBar from "../RightSideBar/RightSideBar";
import MainBar from "../MainSideBar/MainSideBar";
import { postQuestion } from "../../actions/Question";
import Alert from "../Alert/Alert";
function Questions() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  var User = useSelector((state) => state.currentUser);
  const [questionTitle, setQuestionTitle] = useState("");
  const [questionBody, setQuestionBody] = useState("");
  const [questionTags, setQuestionTags] = useState("");
  const [showAlert, setAlert] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (questionTitle === "" || questionBody === "" || questionTags === ""){
      
      const today = new Date().setHours(0, 0, 0, 0);
        const questionsPostedToday=User?.postedQuestions?.filter(
          (item) => new Date(item.date).setHours(0, 0, 0, 0) === today
        );
        console.log(User);
        alert(User?.postedQuestions.length);
        setAlert("Please fill all the details");
    }
    else {
      if (User){
        const today = new Date().setHours(0, 0, 0, 0);
        const questionsPostedToday=User?.postedQuestions?.filter(
          (item) => new Date(item.date).setHours(0, 0, 0, 0) === today
        );
        alert(questionsPostedToday.length);
        if(User?.subscription==="Free" && questionsPostedToday.length>=1){
          setAlert("You have reached your daily limit of 1 question");
          navigate('/subscribe');
        }
        else if(User?.subscription==="Silver" && questionsPostedToday.length>=3){
          setAlert("You have reached your daily limit of 3 questions");
          navigate('/subscribe');
        }
        else{
        dispatch(
          postQuestion(
            {
              questionTitle,
              questionBody,
              questionTags,
              userPosted: User?.name,
              userId: User?._id,
            },
            navigate
          )
        );
          }
    }
    else setAlert("sign up or login to post question");
    }
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      setQuestionBody(questionBody + "\n");
    }
  };
  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert("");
    }, 3000);

    return () => clearTimeout(timeout);
  }, [showAlert]);
  return (
    // <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContents:'center'}}><h1 style={{display:'flex',alignItems:'center',justifyContents:'center'}}>Ask a public question</h1>
    <div style={{ paddingTop: "10px" }}>
      <section className="auth-section">
        <div className="auth-container">
          <h1>Ask a Public Question</h1>
          <form
            onSubmit={handleSubmit}
            style={{ width:'70vw', margin: "auto" }}
          >
            {showAlert && <Alert Children={showAlert} />}
            <label htmlFor="name">
              <h4>Title</h4>
              <p>
                Be specific and imagine you’re asking a question to another
                person.
              </p>
              <input
                type="name"
                id="name"
                placeholder="e.g. is there an R function for finding the index of an element in a vector"
                onChange={(e) => {
                  setQuestionTitle(e.target.value);
                }}
              />
            </label>

            <label htmlFor="body">
              <h4>Body</h4>
              <p>
                Introduce the problem and expand on what you put in the
                title.Min 20 charcters.
              </p>
              <textarea
                style={{
                  padding: "10px",
                  width: "calc(100% - 30px)",
                  fontSize: "13px",
                  border: "solid 1px #0000003e",
                }}
                type="text"
                id="body"
                placeholder=""
                onChange={(e) => {
                  setQuestionBody(e.target.value);
                }}
                onKeyPress={handleKeyPress}
              />
            </label>
            <label htmlFor="password">
              <h4>Tags </h4>
              <p>Add upto 5 tags to describe what your question is about</p>

              <input
                className="form-input"
                type="text"
                id="text"
                placeholder="e.g C,C++"
                onChange={(e) => {
                  setQuestionTags(e.target.value.split(" "));
                }}
              />
            </label>
            <br />
            <button type="submit">Review your question</button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Questions;
