import React from "react";
import { Button, AppBar } from "@mui/material";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";

class Index extends React.Component {
  handleOpenNavMenu = () => {
    console.log("handle open nav menu");
  };
  handleOpenUserMenu = () => {
    console.log("handle open user menu");
  };
  handleCloseNavMenu = () => {
    console.log("handle close nav menu");
  };
  handleCloseUserMenu = () => {
    console.log("handle close user menu");
  };

  render() {
    const { voters } = this.props;
    const pages = ["Products", "Pricing", "Blog"];
    // const settings = ["Profile", "Account", "Dashboard", "Logout"];
    return (
      <div>
        <AppBarComponent></AppBarComponent>
        <h1>pollUp Master Index</h1>
        <nav>
          <a href="/new">Create New Voter</a>
        </nav>
        <ul>
          {this.props.voters.map((voter, i) => {
            return (
              <li key={i}>
                <a href={`/voters/${voter.id}`}> {voter.name} </a> is a
                registered {voter.affiliation}.
                <form action={`/voters/${voter._id}/edit`} method="GET">
                  <button variant="outlined" type="submit" value="Edit">
                    Edit
                  </button>
                </form>
                <form
                  action={`/voters/${voter._id}?_method=DELETE`}
                  method="POST"
                >
                  <input type="submit" value="DELETE" />
                </form>
                <p>I am putting this text here to see if tailwind is working</p>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

module.exports = Index;
