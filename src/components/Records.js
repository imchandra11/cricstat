import React from "react";
import Navbar from "./Navbar";
import "../css/player.css";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { AiOutlineHome } from "react-icons/ai";
import { Link } from "react-router-dom";

const drawerWidth = 240;

function Record({
  window,
  record,
  type,
  handleType,
  format,
  handleChange,
  year,
  handleYear,
  team,
  handleTeam,
  opo,
  handleOpo,
  submit2,
  handleDrawerToggle,
  mobileOpen,
  loading,
}) {
  const drawer = (
    <div className="pretty2">
      <Toolbar />
      <div className="drawer">
        <div>
          {" "}
          <h3 className="filters">Filters</h3>
        </div>
        <div className="new-under"></div>

        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-helper-label">Records</InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={type}
            label="Age"
            onChange={handleType}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={"mostRuns"}>Most Runs</MenuItem>
            <MenuItem value={"mostHundreds"}>Most Hundreds</MenuItem>
            <MenuItem value={"mostFifties"}>Most Fifties</MenuItem>
            <MenuItem value={"mostFours"}>Most Fours</MenuItem>
            <MenuItem value={"mostSixes"}>Most Sixes</MenuItem>
            <MenuItem value={"mostWickets"}>Most Wickets</MenuItem>
          </Select>
        </FormControl>

        <FormControl sx={{ m: 1, minWidth: 100 }}>
          <InputLabel id="demo-simple-select-helper-label">Format</InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={format}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={1}>TEST</MenuItem>
            <MenuItem value={2}>ODI</MenuItem>
            <MenuItem value={3}>T20i</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 100 }}>
          <InputLabel id="demo-simple-select-helper-label">Year</InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={year}
            label="Age"
            onChange={handleYear}
          >
            <MenuItem value="">
              <em>All</em>
            </MenuItem>
            <MenuItem value={"2024"}>2024</MenuItem>
            <MenuItem value={"2023"}>2023</MenuItem>
            <MenuItem value={"2022"}>2022</MenuItem>
            <MenuItem value={"2021"}>2021</MenuItem>
            <MenuItem value={"2020"}>2020</MenuItem>
            <MenuItem value={"2019"}>2019</MenuItem>
            <MenuItem value={"2018"}>2018</MenuItem>
            <MenuItem value={"2017"}>2017</MenuItem>
            <MenuItem value={"2016"}>2016</MenuItem>
            <MenuItem value={"2015"}>2015</MenuItem>
            <MenuItem value={"2014"}>2014</MenuItem>
            <MenuItem value={"2013"}>2013</MenuItem>
            <MenuItem value={"2012"}>2012</MenuItem>
            <MenuItem value={"2011"}>2011</MenuItem>
            <MenuItem value={"2010"}>2010</MenuItem>
            <MenuItem value={"2009"}>2009</MenuItem>
            <MenuItem value={"2008"}>2008</MenuItem>
            <MenuItem value={"2007"}>2007</MenuItem>
            <MenuItem value={"2006"}>2006</MenuItem>
            <MenuItem value={"2005"}>2005</MenuItem>
            <MenuItem value={"2004"}>2004</MenuItem>
            <MenuItem value={"2003"}>2003</MenuItem>
            <MenuItem value={"2002"}>2002</MenuItem>
            <MenuItem value={"2001"}>2001</MenuItem>
            <MenuItem value={"2000"}>2000</MenuItem>
          </Select>
        </FormControl>

        <FormControl sx={{ m: 1, minWidth: 100 }}>
          <InputLabel id="demo-simple-select-helper-label">Team</InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={team}
            label="Age"
            onChange={handleTeam}
          >
            <MenuItem value="">
              <em>All</em>
            </MenuItem>
            <MenuItem value={2}>IND</MenuItem>
            <MenuItem value={27}>IRE</MenuItem>
            <MenuItem value={3}>PAK</MenuItem>
            <MenuItem value={4}>AUS</MenuItem>
            <MenuItem value={5}>SL</MenuItem>
            <MenuItem value={6}>BAN</MenuItem>
            <MenuItem value={9}>ENG</MenuItem>
            <MenuItem value={10}>WI</MenuItem>
            <MenuItem value={11}>RSA</MenuItem>
            <MenuItem value={12}>ZIM</MenuItem>
            <MenuItem value={13}>NZ</MenuItem>
            <MenuItem value={96}>AFG</MenuItem>
          </Select>
        </FormControl>

        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-helper-label">Opponent</InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={opo}
            label="Age"
            onChange={handleOpo}
          >
            <MenuItem value="">
              <em>All</em>
            </MenuItem>
            <MenuItem value={2}>IND</MenuItem>
            <MenuItem value={27}>IRE</MenuItem>
            <MenuItem value={3}>PAK</MenuItem>
            <MenuItem value={4}>AUS</MenuItem>
            <MenuItem value={5}>SL</MenuItem>
            <MenuItem value={6}>BAN</MenuItem>
            <MenuItem value={9}>ENG</MenuItem>
            <MenuItem value={10}>WI</MenuItem>
            <MenuItem value={11}>RSA</MenuItem>
            <MenuItem value={12}>ZIM</MenuItem>
            <MenuItem value={13}>NZ</MenuItem>
            <MenuItem value={96}>AFG</MenuItem>
          </Select>
        </FormControl>

        <button onClick={submit2} className="live-btn" variant="contained">
          sumbit
        </button>
      </div>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className="pretty2">
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
            backgroundColor: { sm: "#f1305f" },
            fontSize: { sm: "1.4" },
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              Records
              <Link to="/">
                <AiOutlineHome className="home-nav" />
              </Link>
            </Typography>
          </Toolbar>
        </AppBar>
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: "none", sm: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>
        <Box
          component="random"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}
        >
          <Toolbar />
          <Typography>
            <div className="record-container">
              <TableContainer component={Paper} className="table-container">
                <Table sx={{ minWidth: 350 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>
                        {record ? (
                          <div className="head">
                            {[record].flat().map((items) => {
                              return (
                                <article className="headers">
                                  #ID
                                  {items.headers.map((item) => {
                                    return (
                                      <article className="iheaders">
                                        {item}
                                      </article>
                                    );
                                  })}
                                </article>
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
                    {record ? (
                      <div>
                        {record.values.map((item) => {
                          return (
                            <article className="values">
                              {item.values.map((person) => {
                                return (
                                  <TableCell>
                                    <article className="ivalues">
                                      {person}
                                    </article>
                                  </TableCell>
                                );
                              })}
                            </article>
                          );
                        })}
                      </div>
                    ) : (
                      <div>
                        we Ran out of api calls.. please try again later
                      </div>
                    )}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </Typography>
        </Box>
      </Box>
    </div>
  );
}

Record.propTypes = {
  window: PropTypes.func,
};

export default Record;
