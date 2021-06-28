import React from "react";
import ReactDOM from "react-dom";

const date = new Date(2021, 6, 28, 13);
const currentTime = date.getHours();
const currentMin = date.getMinutes();

let greeting;

const customColor = {
  color: ""
};

if (currentTime < 12) {
  greeting = "it is morning";
  customColor.color = "red";
} else if (currentTime < 18) {
  greeting = "it is afternoon";
  customColor.color = "green";
} else {
  greeting = "it is evening or night";
  customColor.color = "blue";
}

ReactDOM.render(
  <div className="heading">
    <h1 style={customColor}>{greeting}</h1>
  </div>,
  document.getElementById("root")
);
