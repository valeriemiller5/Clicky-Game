import React from "react";
import "./Footer.css";

const Footer = props => (
    <ul className="nav nav-tabs footer">
      <li className="nav-item endtitle">
        Created with React
      </li>
      <li className="ionimage">
      < img className="ion" src={require("../../images/reacticon.png")} alt={props.name}></img>
      </li>
    </ul>
  );

export default Footer;
