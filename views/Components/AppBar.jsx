import React from "react";
import { Button, AppBar, Link, Avatar } from "@mui/material";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";

export default class AppBarComponent extends React.Component {
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
    const pages = ["Voter", "Scripts", ""];
    return (
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              LOGO
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={this.handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={this.anchorElNav}
                // anchorOrigin={{
                //   vertical: "bottom",
                //   horizontal: "left",
                // }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={true}
                onClose={this.handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={this.handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              LOGO
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <Link href="/voters" color="inherit">
                Home
              </Link>

              <Link href="/voters" color="inherit" paddingLeft={3}>
                Scripts
              </Link>
              {/* <Link href="#" color="inherit">
                {'color="inherit"'}
              </Link>
              <Link href="#" variant="body2">
                {'variant="body2"'}
              </Link> */}
              {/* {pages.map((page) => (
                <Button
                  key={page}
                  onClick={this.handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page}
                </Button>
              ))} */}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    );
  }
}
