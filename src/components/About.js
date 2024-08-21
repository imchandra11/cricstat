import React from "react";
import Navbar from "./Navbar";
import NavbarMobile from "./NavbarMobile";
const About = () => {
  return (
    <>
      <div className="web-hide">
        <Navbar />
      </div>
      <div className="mobile-hide">
        <NavbarMobile />
      </div>
      <div style={{ paddingTop: "12vh" }}>
        <div className="aboutpart">About</div>
        <div className="desc">
          Welcome to my cricket website, where we provide an unparalleled
          experience for all cricket enthusiasts. Our website is built using
          React JS and Tailwind CSS, and it utilizes multiple REST APIs to
          provide you with up-to-date information on all the latest cricket
          matches, players, and records.
          <br />
          One of the key features of our website is the live scorecard, which
          provides real-time updates on all the ongoing cricket matches from
          around the world. Whether you are a die-hard fan of the Indian Premier
          League or the Ashes, you can follow your favorite teams and players as
          they compete on the field. <br />
          In addition to live scorecards, our website also provides a
          comprehensive database of players from all over the world. You can
          browse through the profiles of your favorite players and get access to
          their career statistics, such as their batting and bowling averages,
          highest scores, and number of wickets taken. Whether you are a fan of
          the greats like Sachin Tendulkar or Virat Kohli, or you want to learn
          more about the latest cricketing sensations, our player database has
          got you covered. <br /> Our website also features a dedicated section
          for cricket records, where you can explore all the all-time records in
          the sport. From the highest individual scores to the most wickets
          taken in a single innings, our database provides you with all the
          information you need to become a true cricketing expert. <br /> In
          addition to player profiles and records, our website also offers a
          comprehensive ranking system, where you can see how your favorite
          players stack up against their peers. Whether you are interested in
          the ICC rankings or the rankings of individual teams, our website
          provides you with all the information you need to stay up-to-date on
          the latest developments in the world of cricket. <br /> Overall, our
          cricket website is the ultimate destination for all cricket fans. With
          its user-friendly interface, real-time updates, and comprehensive
          database of players and records, it is the perfect place to immerse
          yourself in the wonderful world of cricket. So why wait? Come and
          explore our website today and discover everything that cricket has to
          offer! <br />
          <div
            style={{ fontSize: "2rem", textAlign: "end", marginTop: "1rem" }}
          >
            ~Chandra prakash <br />
            <a
              style={{ fontSize: "1rem" }}
              href="https://github.com/imchandra11"
              target="_blank"
            >
              Github
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
