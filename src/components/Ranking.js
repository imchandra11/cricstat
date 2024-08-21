import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { AiOutlineHome } from "react-icons/ai";
import "../css/player.css";
const label = { inputProps: { "aria-label": "Checkbox demo" } };

const drawerWidth = 240;

function Ranking({
  window,
  rankType,
  handleRank,
  bowler,
  handleBowler,
  men,
  handleMen,
  submitrank,
  ranking,
  handleDrawerToggles,
  mobileOpens,
}) {
  const drawer = (
    <div>
      <Toolbar />
      <div className="drawer">
        <div>
          {" "}
          <h3 className="filters">Filters</h3>
        </div>
        <div className="new-under"></div>
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-helper-label">Rankings</InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={rankType}
            label="Age"
            onChange={handleRank}
          >
            <MenuItem value={"test"}>TEST</MenuItem>
            <MenuItem value={"odi"}>ODI</MenuItem>
            <MenuItem value={"t20"}>T20i</MenuItem>
          </Select>
        </FormControl>

        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-helper-label">Player</InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={bowler}
            label="Age"
            onChange={handleBowler}
          >
            <MenuItem value={"batsman"}>Batsman</MenuItem>
            <MenuItem value={"bowlers"}>Bowler</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 100 }}>
          <InputLabel id="demo-simple-select-helper-label">Gender</InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={men}
            label="Age"
            onChange={handleMen}
          >
            <MenuItem value={0}>MEN</MenuItem>
            <MenuItem value={1}>WOMEN</MenuItem>
          </Select>
        </FormControl>

        <button onClick={submitrank} className="live-btn" variant="contained">
          sumbit
        </button>
      </div>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
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
            onClick={handleDrawerToggles}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Rankings
            <Link to="/">
              <AiOutlineHome className="home-nav" />
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{
          width: { sm: drawerWidth },
          flexShrink: { sm: 0 },
        }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpens}
          onClose={handleDrawerToggles}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: { sm: "#f1305f" },
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
        <div className="ranking-container">
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 350 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <div className="header-ranking">
                    <TableCell>Rank</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Country</TableCell>
                    <TableCell>Rating</TableCell>
                    <TableCell>Difference</TableCell>
                  </div>
                </TableRow>
              </TableHead>
              <TableBody>
                {ranking ? (
                  <div>
                    {ranking.rank.map((item) => {
                      return (
                        <article key={item.id} className="value-ranking">
                          <TableCell>{item.rank}</TableCell>
                          <TableCell>{item.name}</TableCell>
                          <TableCell>{item.country}</TableCell>
                          <TableCell>{item.rating}</TableCell>
                          <TableCell>{item.difference}</TableCell>
                        </article>
                      );
                    })}
                  </div>
                ) : (
                  []
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </Box>
    </Box>
  );
}

Ranking.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Ranking;
