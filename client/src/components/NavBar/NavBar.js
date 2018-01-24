import React from "react";
import { Link } from "react-router-dom";


// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navbar = props =>
  <nav className="navbar navbar-default">
    <div className="container-fluid">
      <div className="navbar-header">
        <Link className="navbar-brand" to="/">
          MadKeys
        </Link>
      </div>
      
      <ul className="nav navbar-nav navbar-right">

        <li
          className={
            window.location.pathname === "/" ||
            window.location.pathname === "/"
              ? "active"
              : ""
          }
        >
          <Link to="/">About</Link>
        </li>
        <li
          className={window.location.pathname === "/" ? "active" : ""}
        >
          <Link to="/Login">Login</Link>
        </li>
      
      </ul>
    </div>
  </nav>;

export default Navbar;