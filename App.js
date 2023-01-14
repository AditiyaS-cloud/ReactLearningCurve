import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => (
  <h1 id="title" key="h2">
    Helllooo!!
  </h1>
)

//Composing Components
const HeaderComponent = () => {
  return (
    <div>
      <Title />
      <h2>This is a h2 tag</h2>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

//passing a react element inside the root

root.render(<HeaderComponent />);
