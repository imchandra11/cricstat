import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const NavbarMobile = ({ liveScore, submit2, submitrank }) => {
  const [showModal, setShowModal] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const modal = () => {
    setShowModal(!showModal);
    setIsOpen(!isOpen);
    console.log(showModal);
  };
  return (
    <>
      <div style={{ height: "10vh" }} className="navdiv">
        <div>
          <Link href="/">
            <img src={logo} alt="" className="main-logo" />{" "}
          </Link>
        </div>
        <div>
          <button onClick={modal} className="ham-btn">
            <div className="hamburger-icon" onClick={modal}>
              <div className={`line ${isOpen ? "open" : ""}`}></div>
              <div
                className={`line ${isOpen ? "open" : ""}`}
                style={{
                  width: "1rem",
                }}
              ></div>
              <div className={`line ${isOpen ? "open" : ""}`}></div>
            </div>
          </button>
        </div>
      </div>

      <div className={`${showModal ? "visible" : "hide"} `}>
        <ul className="final-list">
          <li>
            <Link to="/" className="">
              <button onClick={modal} className="pretty">
                Home
              </button>
            </Link>
          </li>
          <li>
            <Link to="/profile" className="">
              <button onClick={liveScore} className="pretty">
                Matches
              </button>
            </Link>
          </li>
          <li>
            <Link to="/player" className="">
              <button className="pretty">Player</button>
            </Link>
          </li>
          <li>
            <Link to="/record" className="">
              <button className="pretty">Records</button>
            </Link>
          </li>
          <li>
            <Link to="/ranking" className="">
              <button onClick={submitrank} className="pretty">
                Rankings
              </button>
            </Link>
          </li>
          <li>
            <Link to="/about" className="">
              <button className="pretty">About</button>
            </Link>
          </li>
          <li>
            <Link to="/contact" className="">
              <button className="pretty">Contact</button>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavbarMobile;
