import React, { useState } from "react";
import Logo from "../../assets/logo.png";
import AboutAuth from "./AboutAuth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../actions/auth";
import { signUp } from "../../actions/auth";

import "./Auth.css";
function Auth() {
  const navigate = useNavigate();
  const dispatch = useDispatch(login);
  const [isSignUp, setIsSignUp] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignUp) {
      if (name === "" || email === "" || password === "")
        alert("Please fill all the fields");
      else dispatch(signUp({ name, email, password }, navigate));
    } else {
      if (email === "" || password === "") {
        alert("Please fill all the fields");
      } else {
        dispatch(login({ email, password }, navigate));
      }
    }
  };
  return (
    <section className="auth-section">
      {isSignUp && <AboutAuth />}
      <div className="auth-container">
        {/* {isSignUp && <img width="13px" src={Logo} alt="logo" />} */}

        <form onSubmit={handleSubmit}>
          {isSignUp && (
            <label htmlFor="name">
              <h4>Display Name</h4>
              <input
                type="name"
                id="name"
                placeholder="name"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </label>
          )}
          <label htmlFor="email">
            <h4>Email</h4>
            <input
              type="email"
              id="email"
              placeholder="Email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </label>
          <label htmlFor="password">
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <h4>Password </h4>
              {!isSignUp && (
                <h4 style={{ color: "#007ac6" }}> Forgot Password?</h4>
              )}
            </div>
            <input
              className="form-input"
              type="password"
              id="password"
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
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
