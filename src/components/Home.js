import React from "react";
import Navbar from "./Navbar";
import NavbarMobile from "./NavbarMobile";
import matchImage from "../assets/matches.png";
import playerImage from "../assets/player.svg";
import recordImage from "../assets/records.svg";
import rankingImage from "../assets/rankings.png";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

const Home = ({ liveScore, submit2, submitrank }) => {
  return (
    <>
      <div className="web-hide">
        <Navbar
          liveScore={liveScore}
          submit2={submit2}
          submitrank={submitrank}
        />
      </div>
      <div className="mobile-hide">
        <NavbarMobile
          liveScore={liveScore}
          submit2={submit2}
          submitrank={submitrank}
        />
      </div>
      <Fade direction="left" triggerOnce="true" delay="10">
        <div className="home-page1">
          <div className="subpage1">
            <img src={matchImage} alt="image" className="match-img" />
          </div>
          <div className="subpage2">
            {" "}
            <h1 className="h1class">
              Bringing the game to you, every ball of the way.
            </h1>
            <h4>Catch the action live!</h4>
            <Link to="/profile">
              <button className="live-btn" onClick={liveScore}>
                Live Matches
              </button>
            </Link>
          </div>
        </div>
      </Fade>

      <Fade direction="left" triggerOnce="true" delay="10">
        <div className="home-page1">
          <div className="subpage1">
            <img
              src="https://www.kindpng.com/picc/m/133-1330241_cricket-batsman-png-transparent-png.png"
              alt="image"
              className="match-img"
            />
          </div>
          <div className="subpage2">
            {" "}
            <h1 className="h1class">
              Uncovering the player behind the statistics
            </h1>
            <h4>Get to know the ace behind the crease</h4>
            <Link to="/player">
              <button className="live-btn">Player Profile</button>
            </Link>
          </div>
        </div>
      </Fade>

      <Fade direction="left" triggerOnce="true" delay="10">
        <div className="home-page1">
          <div className="subpage1">
            <img
              src="https://www.pngkey.com/png/detail/28-280400_vector-free-stock-and-bat-png-transparent-images.png"
              alt="image"
              className="match-img"
            />
          </div>
          <div className="subpage2">
            <h1 className="h1class">
              Chronicling the milestones of cricket legends
            </h1>
            <h4>Making history, one record at a time.</h4>
            <Link to="/record">
              <button className="live-btn" onClick={submit2}>
                Records
              </button>
            </Link>
          </div>
        </div>
      </Fade>

      <Fade direction="left" triggerOnce="true" delay="10">
        <div className="home-page1">
          <div className="subpage1">
            <img src={rankingImage} alt="image" className="ranking-img" />
          </div>
          <div className="subpage2">
            <h1 className="h1class">
              Elevating the elite: Ranking the top players and teams in the game
            </h1>
            <h4>Ranking the best of the best in cricket</h4>
            <Link to="/ranking">
              <button className="live-btn" onClick={submitrank}>
                Rankings
              </button>
            </Link>
          </div>
        </div>
      </Fade>
    </>
  );
};

export default Home;
