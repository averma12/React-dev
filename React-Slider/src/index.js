import React from "react";
import ReactDOM from "react-dom";
import Slider from "./Slider";

import "./styles.css";

function App() {
  return (
    <React.Fragment>
      <Slider />
    </React.Fragment>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
