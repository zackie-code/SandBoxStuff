//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
import React from "react";
import ReactDOM from "react-dom";
date = new Date(2026, 1, 1, 14);
let color = "red";
let message = "Morning";
const hours = date.getHours();
if (hours >= 12 && hours < 18) {
  color = "green";
  message = "Afternoon";
}
if (hours >= 18 || hours < 5) {
  color = "blue";
  message = "Night";
}

ReactDOM.render(
  <div>
    <h1 className="heading" style={{ color: color }}>
      Good {message}
    </h1>
  </div>,
  document.getElementById("root")
);
