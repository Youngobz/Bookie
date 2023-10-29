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
import styled from "styled-components";

const AddBookButton = styled.button`
  background: #fff;
  display: flex;
  cursor: pointer;

  span {
    align-self: center;
  }
`;

const RightNavBar = styled.div`
  position: absolute;
  right: 10px;

  a {
    display: inline-block;
  }
`;

const isActive = (location, path) => {
  if (location.pathname == path) return { color: "#69f0ae" };
  else return { color: "#ffffff" };
};

const Menu = (props) => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" color="inherit">
          Bookie
        </Typography>
        <div>
          <Link to="/">
            <IconButton aria-label="Home" style={isActive(location, "/")}>
              <HomeIcon />
            </IconButton>
          </Link>
        </div>
        <RightNavBar>
          {auth.isAuthenticated() && (
            <Link to="/add-book">
              <AddBookButton>
                <AddIcon />
                <span>Add Book</span>
              </AddBookButton>
            </Link>
          )}
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
        </RightNavBar>
      </Toolbar>
    </AppBar>
  );
};

export default Menu;
