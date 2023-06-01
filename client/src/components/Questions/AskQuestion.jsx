import React from "react";
import LeftSideBar from "../LeftSideBar/LeftSidebar";
import RightSideBar from "../RightSideBar/RightSideBar";
import MainBar from "../MainSideBar/MainSideBar";
function Questions() {
  return (
    // <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContents:'center'}}><h1 style={{display:'flex',alignItems:'center',justifyContents:'center'}}>Ask a public question</h1>
    <section className="auth-section">
      <div className="auth-container">
        <h1>Ask a Public Question</h1>
        <form style={{maxWidth:'1200px',margin:'auto'}}>
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
            />
          </label>

          <label htmlFor="body">
            <h4>Body</h4>
            <p>
              Introduce the problem and expand on what you put in the title.Min
              20 charcters.
            </p>
            <textarea style={{  padding:'10px',
   width:'calc(100% - 30px)',
   fontSize: '13px',
   border:'solid 1px #0000003e'}} type="text" id="body" placeholder="" />
          </label>
          <label htmlFor="password">
            <h4>Tags </h4>
            <p>
              Add upto 5 tags to describe what your question is about
            </p>

            <input
              className="form-input"
              type="password"
              id="password"
              placeholder="e.g C,C++"
            />
          </label>
            <br/>
          <button type="submit">Review your question</button>
        </form>
      </div>
    </section>
    // </div>
  );
}

export default Questions;
