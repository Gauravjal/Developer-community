import React from "react";
import { ImCross } from "react-icons/im";
import { ImCheckmark } from "react-icons/im";
import { useSelector, useDispatch } from "react-redux";
import { createSubscription } from "../../actions/payment";
import { Link } from "react-router-dom";
function Subscribe() {
  const dispatch = useDispatch();
  var User = useSelector((state) => state.currentUser);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "10vh",
      }}
    >
      <h2>Our Subscription Plans</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "96%",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            border: "1px solid black",
            width: "30%",
            textAlign: "center",
            margin: "10px",
            borderRadius: "10px",
          }}
        >
          <div style={{ backgroundColor: "#f6f7d3" }}>
            <h1>Free</h1>
          </div>
          <h3>
            Rs <h1 style={{ display: "inline", padding: "10px" }}>0</h1>/MON
          </h3>
          {User?.subscription === "Free" ? (
            <button
              style={{borderRadius:'20px',border:'1px solid blue', marginLeft: "20%", marginRight: "20%" }}
              className="btn"
            >
              Current
            </button>
          ) : (
            <button
            style={{
              borderRadius:'20px',
              border:'1px solid blue',
            }}
              onClick={() => {
                dispatch(createSubscription({ id: User?._id, plan: "Free" }));
              }}
              style={{ marginLeft: "20%", marginRight: "20%" }}
              className="btn"
            >
              Downgrade
            </button>
          )}
          <div style={{}}>
            <p style={{borderTop:'1px solid black',paddingTop:'10px',borderBottom:'1px solid black',paddingBottom:'10px'}}>
              <ImCheckmark style={{ color: "green" }} />
              One Question a day
            </p>
            <p style={{borderBottom:'1px solid black',paddingBottom:'10px'}}>
              <ImCross style={{ color: "red" }} />
              Two Questions a day
            </p>
            <p style={{}}>
              <ImCross style={{ color: "red" }} />
              Infinite Questions a day
            </p>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            border: "1px solid black",
           
            textAlign: "center",
            width: "30%",
            margin: "10px",
            borderRadius: "10px",
          }}
        > 
        <div style={{ backgroundColor: "silver",}}>
          <h1 >Silver</h1>
          </div>
          <h3>
            Rs <h1 style={{ display: "inline", padding: "10px" }}>500</h1>/MON
          </h3>
          {User?.subscription === "Silver" ? (
            <button
              style={{borderRadius:'20px',border:'1px solid blue', marginLeft: "20%", marginRight: "20%" }}
              className="btn"
            >
              Current
            </button>
          ) : (
            <Link
              to="/payment/Silver"
              style={{border:'1px solid blue',borderRadius:'20px', marginLeft: "20%", marginRight: "20%" }}
              className="btn"
            >
              Upgrade Now
            </Link>
          )}
          <div>
            <p style={{borderTop:'1px solid black',paddingTop:'10px',borderBottom:'1px solid black',paddingBottom:'10px'}}>
              <ImCheckmark style={{ color: "green" }} />
              One Question a day
            </p>
            <p style={{borderBottom:'1px solid black',paddingBottom:'10px'}}>
              <ImCheckmark style={{ color: "green" }} />
              Two Questions a day
            </p>
            <p style={{}}>
              <ImCross style={{ color: "red" }} />
              Infinite Questions a day
            </p>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            border:'1px solid black',
            textAlign: "center",
            width: "30%",
            margin: "10px",
            borderRadius: "10px",
          }}
        >
          <div style={{ backgroundColor: "gold" }}>
          <h1>Gold</h1>
          </div>
          <h3>
            Rs <h1 style={{ display: "inline", padding: "10px" }}>1000</h1>/MON
          </h3>
          {User?.subscription === "Gold" ? (
            <button
              style={{borderRadius:'20px',border:'1px solid blue', marginLeft: "20%", marginRight: "20%" }}
              className="btn"
            >
              Current
            </button>
          ) : (
            <Link
              to="/payment/Gold"
              style={{border:'1px solid blue',borderRadius:'20px', marginLeft: "20%", marginRight: "20%" }}
              className="btn"
            >
              Upgrade Now
            </Link>
          )}
          <div>
            <p style={{borderTop:'1px solid black',paddingTop:'10px',borderBottom:'1px solid black',paddingBottom:'10px'}}>
              <ImCheckmark style={{ color: "green" }} />
              One Question a day
            </p>
            <p style={{borderBottom:'1px solid black',paddingBottom:'10px'}}>
              <ImCheckmark style={{ color: "green" }} />
              Two Questions a day
            </p>
            <p style={{}}>
              <ImCheckmark style={{ color: "green" }} />
              Infinite Questions a day
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Subscribe;
