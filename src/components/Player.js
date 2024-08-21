import Navbar from "./Navbar";
import react, { useState } from "react";
import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import player1Image from "../assets/player1.svg";
import "../css/player.css";
import NavbarMobile from "./NavbarMobile";

const Player = ({ id, getId, players, handlePlayer, batting, info }) => {
  

  return (
    <div>
      <div className="web-hide">
        <Navbar />
      </div>
      <div className="mobile-hide">
        <NavbarMobile />
      </div>
      <div className="search-container">
        <div className="sub-search">
          <input
            type="text"
            value={players}
            onChange={handlePlayer}
            className="player-input"
            placeholder="Enter Full Name Of Player.."
          />
        </div>
        <div className="sub-search">
          <button
            variant="contained"
            size="small"
            onClick={getId}
            className="player-btn"
          >
            Submit
          </button>
        </div>
      </div>

      <Typography>
        <div className="batting-container">
          {info ? (
            <div className="info-container">
              <div className="p-image">
                {" "}
                <img src={info.image} alt="image" />
              </div>
              <div className="rows">
                <div className="row-header">Name:</div>
                <div>{info.name}</div>{" "}
              </div>

              <div className="rows">
                <div className="row-header">Role:</div>
                <div> {info.role}</div>
              </div>

              <div className="rows">
                <div className="row-header">Height:</div>
                {info.height ? <div> {info.height}</div> : `-`}
              </div>

              <div className="rows">
                <div className="row-header">Place:</div>
                <div> {info.birthPlace}</div>
              </div>

              <div className="rows">
                <div className="row-header">Team:</div>
                <div> {info.intlTeam}</div>
              </div>

              <div className="rows">
                <div className="row-header">DOB:</div>
                <div> {info.DoB}</div>
              </div>
              <div className="special">
                <div className="rows">
                  <div className="row-header">Rank:</div>
                  <div className="rank-bat">
                    <div className="row-header">Test</div>
                    <div className="row-header">Odi</div>
                    <div className="row-header">T20</div>
                    {/* <div>{info.rankings.bat[0].testRank}</div>
                    <div>{info.rankings.bat[0].odiRank}</div>
                    <div>{info.rankings.bat[0].t20Rank}</div> */}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            []
          )}

          <TableContainer component={Paper} className="table-container">
            <Table sx={{ minWidth: 350 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>
                    {batting ? (
                      <div className="top-head">
                        {batting.headers.map((items) => {
                          return (
                            <>
                              <article className="head">{items}</article>
                            </>
                          );
                        })}
                      </div>
                    ) : (
                      []
                    )}
                  </TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {batting ? (
                  <div>
                    {batting.values.map((items) => {
                      return (
                        <>
                          <article className="batting-values">
                            {items.values.map((item) => {
                              return (
                                <TableCell>
                                  <article className="ivalues">{item}</article>
                                </TableCell>
                              );
                            })}
                          </article>
                        </>
                      );
                    })}
                  </div>
                ) : (
                  ``
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </Typography>
    </div>
  );
};

export default Player;
