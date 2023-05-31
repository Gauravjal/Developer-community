import React from "react";

function RightSideBar() {
  return (
    <div style={{ float: "right", width: "300px",margin:'40px 15px 0px 25px',fontSize:'15px' }}>
        <div style={{padding:'10px'}}>
            <div style={{backgroundColor:'#fbf3d5',border:'1px solid #e3e6e8',padding:'10px'}}>
        Hello World!
        </div>
      <div style={{ backgroundColor:'#fbf3d5',border:'1px solid #e3e6e8',padding:'10px' }}>
         This is a collaboratively edited question and answer site
        for professional and enthusiast programmers. It's 100% free.<br/> Got a
        question about the site itself? meta is the place to talk about things
        like what questions are appropriate, what tags we should use, etc.
        
        </div>
        <div style={{backgroundColor:'#fbf3d5',border:'1px solid #e3e6e8',padding:'10px', display: "flex", justifyContent: "space-evenly" }}>
          About Help Meta
        </div>
      </div>
      <div>
        <div style={{backgroundColor:'#fbf3d5',border:'1px solid #e3e6e8',padding:'10px', display: "flex", justifyContent: "space-evenly" }}>
      The Overflow Blog
      </div >
      <div style={{backgroundColor:'#fbf3d5',border:'1px solid #e3e6e8',padding:'10px', display: "flex", justifyContent: "space-evenly" }}>
       More on our AI future: building course recommendations
      and a new data platform<br/> This product could help build a more equitable
      workplace (Ep. 575)
      </div>
      <div style={{backgroundColor:'#fbf3d5',border:'1px solid #e3e6e8',padding:'10px', display: "flex", justifyContent: "space-evenly" }}> Featured on Meta</div>
      <div style={{backgroundColor:'#fbf3d5',border:'1px solid #e3e6e8',padding:'10px', display: "flex", justifyContent: "space-evenly" }}>
       AI/ML Tool examples part 3 -
      Title-Drafting Assistant<br/> We are graduating the updated button styling for
      vote arrows<br/> We are graduating the "Related questions using Machine
      Learning" experiment<br/> The [connect] tag is being burninated<br/> Temporary
      policy: ChatGPT is banned<br/> Stack Overflow will be testing a title-drafting
      assistant, and we’d like your...
      </div>
      </div>
    </div>
  );
}

export default RightSideBar;
