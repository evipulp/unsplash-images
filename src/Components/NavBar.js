import React from "react";
import "./Styles/NavBar.css";

import ViewStreamIcon from "@material-ui/icons/ViewStream";
import ViewModuleIcon from "@material-ui/icons/ViewModule";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar">
      <Link
        className="active"
        style={{ textDecoration: "none" }}
        to="/trending"
      >
        <h4 className="tr_h4">Trening</h4>
      </Link>
      <Link className="active" style={{ textDecoration: "none" }} to="/new">
        <h4 className="tr_h4">New</h4>
      </Link>
      <div className="nav_right">
        <ViewStreamIcon style={{ marginRight: "20px" }} />
        <ViewModuleIcon />
      </div>
    </nav>
  );
};

export default NavBar;
