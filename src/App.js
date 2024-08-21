import Home from "./components/Home";
import React, { useState, useEffect } from "react";
import { Routes, Route, BrowserRouter, Link } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Matches from "./components/Matches";
import Player from "./components/Player";
import Records from "./components/Records";
import Ranking from "./components/Ranking";
import "./css/Home.css";

function App() {
  const odibatting = () => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "07ef2d038dmsh72b55d44f90823ap1288abjsn32222cb465c1",
        "X-RapidAPI-Host": "unofficial-cricbuzz.p.rapidapi.com",
      },
    };

    fetch(
      `https://unofficial-cricbuzz.p.rapidapi.com/stats/get-records?statsType=${type}&year=${year}&matchType=${format}&team=${team}&opponent=${opo}`,
      options
    )
      .then((response) => response.json())
      .then((data) => setRecord(data))
      .catch((err) => console.error(err));
    setLoading(false);
  };
  // console.log(info.rankings);

  const [mobileOpen, setMobileOpen] = useState(false);
  const [record, setRecord] = useState("");
  const [type, setType] = useState("mostRuns");
  const [format, setFormat] = useState("1");
  const [year, setYear] = useState("2024");
  const [team, setTeam] = useState("");
  const [opo, setOpo] = useState("");
  const [loading, setLoading] = useState(true);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const submit2 = () => {
    odibatting();
    if (mobileOpen) {
      setMobileOpen(false);
    }
  };

  const handleChange = (event) => {
    setFormat(event.target.value.toString());
  };

  const handleYear = (e) => {
    setYear(e.target.value.toString());
  };

  const handleTeam = (e) => {
    setTeam(e.target.value.toString());
  };

  const handleOpo = (e) => {
    setOpo(e.target.value.toString());
  };

  const handleType = (e) => {
    setType(e.target.value);
  };

  const [ranking, setRanking] = useState("");
  const [rankType, setRankType] = useState("test");
  const [bowler, setBowler] = useState("batsman");
  const [men, setMen] = useState("0");
  const [mobileOpens, setMobileOpens] = useState(false);

  const rankings = () => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "07ef2d038dmsh72b55d44f90823ap1288abjsn32222cb465c1",
        "X-RapidAPI-Host": "unofficial-cricbuzz.p.rapidapi.com",
      },
    };

    fetch(
      `https://unofficial-cricbuzz.p.rapidapi.com/stats/get-icc-rankings?category=${bowler}&formatType=${rankType}&isWomen=${men}`,
      options
    )
      .then((response) => response.json())
      .then((rank) => setRanking(rank))
      .catch((err) => console.error(err));
  };

  const handleRank = (e) => {
    setRankType(e.target.value);
  };

  const handleBowler = (e) => {
    setBowler(e.target.value);
  };

  const handleDrawerToggles = () => {
    setMobileOpens(!mobileOpens);
  };

  const submitrank = () => {
    rankings();
    if (mobileOpens) {
      setMobileOpens(false);
    }
  };

  const handleMen = (e) => {
    setMen(e.target.value.toString());
  };

  const [live, setLive] = useState("");

  const liveScore = () => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "07ef2d038dmsh72b55d44f90823ap1288abjsn32222cb465c1",
        "X-RapidAPI-Host": "livescore6.p.rapidapi.com",
      },
    };

    fetch(
      "https://livescore6.p.rapidapi.com/matches/v2/list-live?Category=cricket&Timezone=-7",
      options
    )
      .then((response) => response.json())
      .then((data) => setLive(data))
      .catch((err) => console.error(err));
  };

  const [id, setId] = useState("");
  const [players, setPlayers] = useState("");
  const [batting, setBatting] = useState("");
  const [info, setInfo] = useState("");

  const handlePlayer = (e) => {
    setPlayers(e.target.value);
  };

  const f1 = () => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "07ef2d038dmsh72b55d44f90823ap1288abjsn32222cb465c1",
        "X-RapidAPI-Host": "cricbuzz-cricket.p.rapidapi.com",
      },
    };

    fetch(
      `https://cricbuzz-cricket.p.rapidapi.com/stats/v1/player/search?plrN=${players}`,
      options
    )
      .then((response) => response.json())
      .then((data) => setId(data))
      .catch((err) => console.error(err));
  };

  const f2 = () => {
    if (id) {
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "07ef2d038dmsh72b55d44f90823ap1288abjsn32222cb465c1",
          "X-RapidAPI-Host": "cricbuzz-cricket.p.rapidapi.com",
        },
      };

      fetch(
        `https://cricbuzz-cricket.p.rapidapi.com/stats/v1/player/${id.player[0].id}/batting`,
        options
      )
        .then((response) => response.json())
        .then((data) => setBatting(data))
        .catch((err) => console.error(err));
    }
  };

  const f3 = () => {
    if (id) {
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "07ef2d038dmsh72b55d44f90823ap1288abjsn32222cb465c1",
          "X-RapidAPI-Host": "cricbuzz-cricket.p.rapidapi.com",
        },
      };

      fetch(
        `https://cricbuzz-cricket.p.rapidapi.com/stats/v1/player/${id.player[0].id}`,
        options
      )
        .then((response) => response.json())
        .then((data) => setInfo(data))
        .catch((err) => console.error(err));
    }
  };

  const getId = () => {
    f1();
    f2();
    f3();
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                liveScore={liveScore}
                submit2={submit2}
                submitrank={submitrank}
              />
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/player"
            element={
              <Player
                id={id}
                getId={getId}
                players={players}
                handlePlayer={handlePlayer}
                batting={batting}
                info={info}
              />
            }
          />
          <Route path="/profile" element={<Matches live={live} />} />
          <Route
            path="/record"
            element={
              <Records
                record={record}
                type={type}
                handleType={handleType}
                format={format}
                handleChange={handleChange}
                year={year}
                handleYear={handleYear}
                team={team}
                handleTeam={handleTeam}
                opo={opo}
                handleOpo={handleOpo}
                submit2={submit2}
                handleDrawerToggle={handleDrawerToggle}
                mobileOpen={mobileOpen}
                loading={loading}
              />
            }
          />
          <Route
            path="/ranking"
            element={
              <Ranking
                rankType={rankType}
                handleRank={handleRank}
                bowler={bowler}
                handleBowler={handleBowler}
                men={men}
                handleMen={handleMen}
                submitrank={submitrank}
                ranking={ranking}
                handleDrawerToggles={handleDrawerToggles}
                mobileOpens={mobileOpens}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
