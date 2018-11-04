import React from "react";
import "./Navbar.css";

const Navbar = props => (
    <ul className="nav nav-tabs">
      <li className="nav-item title">
        Clicky Game
      </li>
      <li className="nav-item center">
        Click any image to begin the game!
      </li>
      <li className="nav-item right">
        <p>Current Score: {props.currentScore}</p>
      </li>
      |
      <li className="nav-item">
        High Score:
      </li>
    </ul>
  );

export default Navbar;
