import React from "react";
import {MdAdd} from "react-icons/md";
import Search from "./Search";
function RightSideBar() {
  return (
    <div style={{ width: "30%", display: "flex", flexDirection: "column" }}>
      <h4 style={{textAlign:'center'}}>Top accounts</h4>
      <div style={{ display: "flex",flexDirection:'column', justifyContent: "center" ,alignItems:'center',width:'100%'}}>
            <button style={{ height: "30%" }}><MdAdd/>Follow</button>
            <button style={{ height: "30%" }}><MdAdd/>Follow</button>
            <button style={{ height: "30%" }}><MdAdd/>Follow</button>
          </div>
    </div>
  );
}

export default RightSideBar;
