import React from "react";
import RefreshIcon from "./RefreshIcon";

const RandomButton = (props) => {
  return (
    <button className="resetButton" onClick={props.onClick}>
      random <RefreshIcon />
    </button>
  );
};

export default RandomButton;
