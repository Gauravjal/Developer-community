import React, { useState,useEffect } from "react";
import Logo from "../../assets/logo.png";
import Alert from "../Alert/Alert";
import AboutAuth from "./AboutAuth";
import { useDispatch,useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../actions/auth";
import { signUp } from "../../actions/auth";
import { setGlobalAlert } from "../../actions/alert";
import "./Auth.css";
function Auth() {
  let alertMessage=useSelector((state)=>state.alert);
  const navigate = useNavigate();
  const dispatch = useDispatch(login);
  const [isSignUp, setIsSignUp] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showAlert, setAlert] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignUp) {
      if (name === "" || email === "" || password === "")
        setAlert("Please fill all the fields");
      else{ dispatch(signUp({ name, email, password }, navigate));
      dispatch(setGlobalAlert("Welcome to Stackoverflow community"));
      setTimeout(() => {
        dispatch(setGlobalAlert(""));
      }, 5000); 
    }
    } else {
      if (email === "" || password === "") {
        setAlert("Please fill all the fields");
      } else {
        dispatch(login({ email, password }, navigate));
        dispatch(setGlobalAlert("Welcome back"));
        setTimeout(() => {
          dispatch(setGlobalAlert(""));
        }, 5000); 
      }
    }
  };
  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert("");
    }, 3000);

    return () => clearTimeout(timeout);
  }, [showAlert]);

  const [isSmallScreen, setIsSmallScreen] = useState(false);
  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth <= 1000); // Set the breakpoint size according to your requirements
    };

    checkScreenSize();

    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);
  return (
    <section className="auth-section">
      
      {isSignUp && !isSmallScreen && <AboutAuth />}
      <div className="auth-container">
        {/* {isSignUp && <img width="13px" src={Logo} alt="logo" />} */}
        
        <form onSubmit={handleSubmit}>
        {alertMessage?.data && <Alert type="danger" Children={alertMessage?.data} />}
        {showAlert && <Alert Children={showAlert} />}
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
            <button style={{cursor:'pointer'}} type="submit">Sign Up</button>
          ) : (
            <button style={{cursor:'pointer'}} type="submit">Login</button>
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
