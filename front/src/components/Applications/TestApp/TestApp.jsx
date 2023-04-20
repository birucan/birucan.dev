import React, { useState } from "react";
import "98.css";

export default function IntroWindow() {
  return (
    <>
      <p style={{ textAlign: "center" }}>
        hello I'm a test app running on a window
      </p>
      <br />
      <br />

      <div className="field-row" style={{ justifyContent: "center" }}>
        <button
          style={{ left: 100 }}
          onClick={() => {
            window.open("https://www.google.com/");
          }}
        >
          Google
        </button>
      </div>
    </>
  );
}
IntroWindow.displayName = "Intro";
