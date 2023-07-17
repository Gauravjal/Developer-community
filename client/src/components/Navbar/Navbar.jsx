import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import decode from 'jwt-decode';
import logo from "../../assets/logo.png";
import search from "../../assets/search-solid.svg";
import Avatar from "../../components/Avatar/Avatar";
import "./Navbar.css";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUser } from "../../actions/getCurrentUser";
import {logout} from '../../actions/auth';
const Navbar = () => {
  var User = useSelector((state) => state.currentUser);
  const dispatch = useDispatch();
  const navigate=useNavigate();
  const log_out=()=>{
    dispatch(logout(navigate));
    // dispatch(getCurrentUser(null));
  }
  useEffect(() => {
    const token=User?.token;
    if(token)
    {
      const decodedToken=decode(token);
      if(decodedToken.exp*1000 < new Date.getTime())
      log_out();
    }
    if(JSON.parse(localStorage.getItem("user"))?.res) dispatch(getCurrentUser(JSON.parse(localStorage.getItem("user"))?.res));
  }, []);
  
  return (
    <nav className="main-nav">
      <div className="navbar">
        <div className="navbar-1">
          <Link to="/" className="nav-item nav-logo">
            <img src={logo} alt="logo" />
          </Link>
          <Link to="/" className="nav-item nav-btn res-nav">
            About
          </Link>
          <Link to="/" className="nav-item nav-btn res-nav">
            Products
          </Link>
          <Link to="/" className="nav-item nav-btn res-nav">
            For Teams
          </Link>
          <form>
            <input type="text" placeholder="Search..." />
            <img src={search} alt="search" width="18" className="search-icon" />
          </form>
        </div>
        <div className="navbar-2">
          {User === null ? (
            <Link to="/auth" className="nav-item nav-links">
              Log in
            </Link>
          ) : (
            <>
              <Avatar
              />
                {/* <Link
                  to={`/`}
                  style={{ color: "white", textDecoration: "none" }}
                >
                  {User?.name?.charAt(0).toUpperCase()}
                </Link>
              </Avatar> */}
              <button onClick={log_out} className="nav-item nav-links">Log out</button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
