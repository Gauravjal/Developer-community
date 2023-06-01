import React from "react";

function Avatar({children}) {
  return <button style={{backgroundColor:"orangered",color:"black",borderRadius:"50%",padding:"10px",width:"40px",height:"40px",margin:"10px",fontSize:"20px",fontWeight:"bold",border:"none",outline:"none",cursor:"pointer",}}>{children}</button>;
}

export default Avatar;
