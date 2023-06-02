import React, { useState } from "react";
import "98.css";

const TestApp = () => {
  const [cowboyState, setCowboyState] = useState("");

  return (
    <>
      <p style={{ textAlign: "center", overflow: true }}>{cowboyState}</p>
      <br />
      <br />

      <div className="field-row" style={{ justifyContent: "center" }}>
        <button
          style={{ left: 100 }}
          onClick={() => {
            setCowboyState(cowboyState + "🤠");
          }}
        >
          Add Cowboy 🤠
        </button>
        <button
          style={{ left: 100 }}
          onClick={() => {
            setCowboyState(cowboyState + "🐄");
            new Audio("https://s3.amazonaws.com/birucan.dev/moo.wav").play();
          }}
        >
          Add Cow 🐄
        </button>
      </div>
    </>
  );
};
TestApp.displayName = "Test";
export default TestApp;
