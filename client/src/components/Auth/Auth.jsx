import React, { useState } from "react";
import Logo from "../../assets/logo.png";
import AboutAuth from "./AboutAuth";
import "./Auth.css";
function Auth() {
  const [isSignUp, setIsSignUp] = useState(true);
  return (
    <section className="auth-section">
      {isSignUp && <AboutAuth />}
      <div className="auth-container">
        {/* {isSignUp && <img width="13px" src={Logo} alt="logo" />} */}

        <form>
          {isSignUp && (
            <label htmlFor="name">
              <h4>Display Name</h4>
              <input
                type="name"
                id="name"
                placeholder="name"
              />
            </label>
          )}
          <label htmlFor="email">
            <h4>Email</h4>
            <input
              type="email"
              id="email"
              placeholder="Email"
            />
          </label>
          <label htmlFor="password">
            <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
            <h4>Password </h4>
            {!isSignUp && <h4 style={{color:'#007ac6'}}> Forgot Password?</h4>}
            </div>
            <input
              className="form-input"
              type="password"
              id="password"
              placeholder="Password"
            />
          </label>
          {isSignUp && (
            <small>
              Password must be at least 8 charcters
              <br /> long and should contain atleast one alphabet
              <br /> and one special character
            </small>
          )}
          {isSignUp && (
            <label>
              <input
                className="form-input"
                type="checkbox"
                id="checkbox"
              ></input>
            opt-in to receive occasional updates
            </label>
          )}
          <br />
          {isSignUp ? (
            <button type="submit">Sign Up</button>
          ) : (
            <button type="submit">Login</button>
          )}
          {isSignUp && (
            <p style={{ color: "#666767", fontSize: "13px" }}>
              By clicking on "Sign Up" , you agree with our <br />
              <span style={{ color: "#007ac6" }}>terms of service</span> and
              <span style={{ color: "#007ac6" }}> privacy policy</span> and{" "}
              <br />
              <span style={{ color: "#007ac6" }}>cookie policy</span>
            </p>
          )}
          
        </form>
        {!isSignUp ? (
            <p>
              Not a member?{" "}
              <button
                onClick={() => {
                  setIsSignUp(true);
                }}
              >
                Sign Up
              </button>
            </p>
          ) : (
            <p>
              Already a member{" "}
              <button onClick={() => setIsSignUp(false)}>Sign In</button>
            </p>
          )}
      </div>
    </section>
  );
}

export default Auth;
