import React, { useState } from "react";
import "98.css";

const IntroWindow = () => {
  return (
    <>
      <p style={{ textAlign: "center" }}>
        Hello I'm Tomás Kavanagh, this will be my portafolio site, it's meant to
        immitate a functional windows98 desktop. Everythign in the desktop can
        be clicked and used, more to come as I work on it.
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
