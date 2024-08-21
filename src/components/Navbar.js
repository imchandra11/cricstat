import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
const Navbar = ({ liveScore, submit2, submitrank }) => {
  return (
    <>
      <div className="nav-header">
        <div className="nav-logo">
          <img src={logo} alt="" className="main-logo" />
        </div>
        <div className="nav-links">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/profile" className="nav-link">
            <button onClick={liveScore} className="nav-btn">
              Matches
            </button>
          </Link>
          <Link to="/player" className="nav-link">
            Player
          </Link>
          <Link to="/record" className="nav-link">
            <button onClick={submit2} className="nav-btn">
              Records
            </button>
          </Link>
          <Link to="/ranking" className="nav-link">
            <button onClick={submitrank} className="nav-btn">
              Rankings
            </button>
          </Link>
          <Link to="/about" className="nav-link">
            About
          </Link>
          <Link to="/contact" className="nav-link">
            Contact
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
