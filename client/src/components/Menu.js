import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import HomeIcon from "@material-ui/icons/Home";
import Button from "@material-ui/core/Button";
import { Link, useLocation } from "react-router-dom";

const isActive = (location, path) => {
  if (location.pathname === path) return { color: "#69f0ae" };
  else return { color: "#ffffff" };
};
const Menu = (props) => {
  const location = useLocation();
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" color="inherit">
          Book Review
        </Typography>
        <div>
          <Link to="/">
            <IconButton aria-label="Home" style={isActive(location, "/")}>
              <HomeIcon />
            </IconButton>
          </Link>
        </div>
        <div style={{ position: "absolute", right: "10px" }}>
          <span style={{ float: "right" }}>
            <span>
              <Link to="/signup">
                <Button style={isActive(location, "/signup")}>Sign up</Button>
              </Link>
              <Link to="/login">
                <Button style={isActive(location, "/login")}>Sign In</Button>
              </Link>
            </span>
          </span>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Menu;
