import React from "react";
import { AppBar, Link } from "@mui/material";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import WhereToVoteIcon from "@mui/icons-material/WhereToVote";

export default class AppBarComponent extends React.Component {
  render() {
    return (
      <AppBar position="static" className="fullWidth">
        <Toolbar disableGutters fullWidth className="navLinks paddingRL">
          <Box display="flex">
            <WhereToVoteIcon
              sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
              color="secondary"
              fontSize="large"
            />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "roboto",
                fontWeight: 700,
                letterSpacing: ".1rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              pollUp
            </Typography>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
            }}
          >
            <Link href="/voters" color="inherit">
              Home
            </Link>

            <Link href="/voters" color="inherit" paddingLeft={3}>
              Scripts
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    );
  }
}
