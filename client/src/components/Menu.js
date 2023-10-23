import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import HomeIcon from "@material-ui/icons/Home";
import AddIcon from "@material-ui/icons/AddBoxRounded";
import Button from "@material-ui/core/Button";
import auth from "../service/auth-helper";
import { Link, useLocation, useNavigate } from "react-router-dom";

const isActive = (location, path) => {
  if (location.pathname == path) return { color: "#69f0ae" };
  else return { color: "#ffffff" };
};
const isButtonActive = (location, path) => {
  if (location.pathname.includes(path))
    return { color: "#fffde7", backgroundColor: "#2bbd7e", marginRight: 10 };
  else
    return {
      color: "#2bbd7e",
      backgroundColor: "#ffffff",
      border: "1px solid #2bbd7e",
      marginRight: 10,
    };
};
const Menu = (props) => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" color="inherit">
          MERN Expense Tracker
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
            {!auth.isAuthenticated() && (
              <span>
                <Link to="/signup">
                  <Button style={isActive(location, "/signup")}>Sign up</Button>
                </Link>
                <Link to="/login">
                  <Button style={isActive(location, "/login")}>Sign In</Button>
                </Link>
              </span>
            )}
            {auth.isAuthenticated() && (
              <span>
                <Button
                  color="inherit"
                  onClick={() => {
                    auth.clearJWT(() => navigate("/"));
                  }}
                >
                  Sign out
                </Button>
              </span>
            )}
          </span>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Menu;
