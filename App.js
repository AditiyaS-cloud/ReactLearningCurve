import React from "react";
import ReactDOM  from "react-dom/client";

const heading = React.createElement(
    "h1",
    {
      id: "title",
    },
    "React Learning Curve"
  );
  const heading2 = React.createElement(
    "h2",
    {
      id: "title",
    },
    "First Project- Basic concepts!!"
  );
  const container = React.createElement(
    "div",
    {
      id: "container",
    },
    //this is an array
    [heading, heading2]
  );


  const root = ReactDOM.createRoot(document.getElementById("root"));

  //passing a react element inside the root
  
  root.render(container);