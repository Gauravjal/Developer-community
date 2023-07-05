import React from "react";
import { ImCross } from "react-icons/im";
import { ImCheckmark } from "react-icons/im";
import {useSelector,useDispatch} from "react-redux"
import {createSubscription} from "../../actions/payment"
import {Link} from "react-router-dom"
function Subscribe() {
    const dispatch = useDispatch();
  var User = useSelector((state) => state.Users);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems:'center'
      }}
    >
      <br />
      <h1>Become a premium member</h1>
      <div style={{ display: "flex", flexDirection: "row" ,width: "96%",justifyContent:'center'}}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#f6f7d3",
            width: "30%",
            textAlign: "center",
          }}
        >
          <h3>Free Plan</h3>
          <p>Ask a question</p>
          <h3>Free</h3>
          {User?.subscription==="Free" ? (
          <button
            style={{ marginLeft: "20%", marginRight: "20%" }}
            className="btn"
          >
            Current
          </button>
          ):(
            <button
            onClick={()=>{
                dispatch(createSubscription({id:User?._id,plan:"Free"}));
            }}
            style={{ marginLeft: "20%", marginRight: "20%" }}
            className="btn"
          >
            Downgrade
          </button>
          )
            }
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <p>
              <ImCheckmark style={{ color: "green" }} />
              One Question a day
            </p>
            <p>
              <ImCross style={{ color: "red" }} />
              Two Questions a day
            </p>
            <p>
              <ImCross style={{ color: "red" }} />
              Infinite Questions a day
            </p>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "silver",
            textAlign: "center",
            width: "30%",
          }}
        >
          <h3>Silver Plan</h3>
          <p>Ask many questions</p>
          <h3>Rs 500/Mo</h3>
          {User?.subscription==="Silver" ? (
          <button
            style={{ marginLeft: "20%", marginRight: "20%" }}
            className="btn"
          >
            Current
          </button>
          ):(
            <Link to='/payment/Silver'
            
            style={{ marginLeft: "20%", marginRight: "20%" }}
            className="btn"
          >
            Upgrade Now
          </Link>
          )
            }
          <div>
            <p>
              <ImCheckmark style={{ color: "green" }} />
              One Question a day
            </p>
            <p>
              <ImCheckmark style={{ color: "green" }} />
              Two Questions a day
            </p>
            <p>
              <ImCross style={{ color: "red" }} />
              Infinite Questions a day
            </p>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "gold",
            textAlign: "center",
            width: "30%",
          }}
        >
          <h3>Gold Plan</h3>
          <p>Ask infinite questions</p>
          <h3>Rs 1000/Mo</h3>
          {User?.subscription==="Gold" ? (
          <button
            style={{ marginLeft: "20%", marginRight: "20%" }}
            className="btn"
          >
            Current
          </button>
          ):(
            <Link to='/payment/Gold'
            
            style={{ marginLeft: "20%", marginRight: "20%" }}
            className="btn"
          >
            Upgrade Now
          </Link>
          )
            }
          <div>
            <p>
              <ImCheckmark style={{ color: "green" }} />
              One Question a day
            </p>
            <p>
              <ImCheckmark style={{ color: "green" }} />
              Two Questions a day
            </p>
            <p>
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
