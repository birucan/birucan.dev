import React, { useState } from "react";
import Screen from "./components/Screen/Screen";
import ReactGA from "react-ga";

ReactGA.initialize("G-VPN1R31TE3");

function App() {
  return (
    <div className="App">
      <Screen></Screen>
    </div>
  );
}

export default App;
