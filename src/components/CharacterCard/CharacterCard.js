import React from "react";
import "./CharacterCard.css";

const CharacterCard = props => (
  <div className="card">
    <div className="img-container">
      <img alt={props.name} onClick={() => props.handleClick(props.id)} src={require("../../images/" + props.image)} />
    </div>
  </div>
);

export default CharacterCard;
