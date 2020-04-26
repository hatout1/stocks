import React from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";

function Navbar() {
  return (
    <div className="navBarDiv">
      <div className="navBarTag">
        <Link to="/home">
          <p>home</p>
        </Link>
      </div>
      <div className="navBarTag">
        <Link to="/watchList">
          <p> Watch List</p>
        </Link>
      </div>
      <div className="navBarTag">
        <Link to="/alerts">
          <p>Alert</p>
        </Link>
      </div>
      <div className="navBarTag">
        <Link to="/indicators">
          <p>Indicators</p>
        </Link>
      </div>
      <div className="navBarTag">
        <Link to="/big-moves">
          <p> Big Moves</p>
        </Link>
      </div>
      <div className="navBarTag">
        <Link to="/portfolio">
          <p>Portfolio</p>
        </Link>
      </div>
      <div className="navBarTag">
        <Link to="/login">
          <p>Login</p>
        </Link>
      </div>
      <div className="navBarTag">
        <Link to="/register">
          <p>Register</p>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
