import React, { useState, useEffect } from "react";

function Alert({ Children,type }) {
  return (
    <div style={{ padding: "9px" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          height: "5vh",
          borderLeft: type==="success"?"solid 3px green":"solid 3px #ef8236",
          backgroundColor: type==="success"?"#d1ffbd":"#fbf8d5",
          boxShadow: "0px 1px 5px #00000033",
        }}
      >
        {/* <button
          type="button"
          class="btn-close"
          aria-label="Close alert"
        ></button> */}
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div>
            <p style={{ padding: "5px" }}>{Children}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Alert;
