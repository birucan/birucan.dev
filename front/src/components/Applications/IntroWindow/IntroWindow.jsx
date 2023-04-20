import React, { useState } from "react";
import "98.css";

const IntroWindow = () => {
  return (
    <>
      <p style={{ textAlign: "center" }}>
        Hello I'm Tomas Kavanagh, this will be my portafolio site, it's meant to
        immitate a functional windows98 desktop, currently a work in progress,
        for now you can visit my github
      </p>
      <br />
      <br />

      <div className="field-row" style={{ justifyContent: "center" }}>
        <button
          style={{ left: 100 }}
          onClick={() => {
            window.open("https://github.com/birucan");
          }}
        >
          github
        </button>
      </div>
    </>
  );
};
IntroWindow.displayName = "Intro";
export default IntroWindow;
