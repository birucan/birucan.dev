import React, { useState } from "react";
import "98.css";

const TestApp = () => {
  const [cowboyState, setCowboyState] = useState("");

  return (
    <div style={{ justifyContent: "center", position: "relative" }}>
      <div
        style={{
          textAlign: "center",
          overflowY: "scroll",
          height: "100px",
          maxHeight: "100px",
        }}
      >
        <p style={{ textAlign: "center" }}>{cowboyState}</p>
      </div>

      <div
        className="field-row"
        style={{
          justifyContent: "center",
          marginTop: "20%",
        }}
      >
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
    </div>
  );
};
TestApp.displayName = "Test";
export default TestApp;
