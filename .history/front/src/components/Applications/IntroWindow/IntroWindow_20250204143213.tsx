import React, { useState } from "react";
import ReactGA from "react-ga";
import "98.css";

const IntroWindow = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <img
        style={{
          position: "relative",
          borderRadius: "50%",
          maxHeight: 150,
          boxShadow: "5px 5px 2px 1px rgba(0, 0, 0, .28)",
        }}
        src="https://s3.amazonaws.com/birucan.dev/gallery/lnkinPP.jpg"
      />

      <p style={{ textAlign: "center", fontSize: 14 }}>
        <br />
        <b> Hello!</b> <br /> <br />
        I'm Tomás Kavanagh, a Software Engineer.
        <br />
        <br />
        This is my portfolio site, it's meant to immitate a functional
        <img
          style={{ paddingLeft: 5, paddingRight: 5 }}
          height={16}
          width={16}
          src="favicon.ico"
        />
        Windows 98 desktop. It's built with{" "}
        <img
          style={{ paddingLeft: 5, paddingRight: 5 }}
          height={16}
          width={16}
          src="logo192.png"
        />{" "}
        React and everything in the desktop can be clicked and used, more to
        come as I work on it.
      </p>
      <br />
      <br />
      <br />

      <div className="field-row" style={{ justifyContent: "center" }}>
        <button
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          onClick={() => {
            ReactGA.event({ action: "open resume", category: "intro window" });
            window.open(
              "https://s3.amazonaws.com/birucan.dev/Tomas+Kavanagh+Resume.pdf"
            );
          }}
        >
          <img height={16} width={16} src="icons/textFile.png" />

          {"   Resume"}
        </button>
        <button
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          onClick={() => {
            ReactGA.event({ action: "open github", category: "intro window" });
            window.open("https://github.com/birucan");
          }}
        >
          <img height={16} width={16} src="icons/github.png" />

          {"   GitHub"}
        </button>
        <button
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          onClick={() => {
            ReactGA.event({
              action: "open linkedin",
              category: "intro window",
            });

            window.open("https://linkedin.com/in/tomas-kavanagh");
          }}
        >
          <img height={16} width={16} src="icons/linkedin.png" />

          {"   Linkedin"}
        </button>
      </div>
    </div>
  );
};
IntroWindow.displayName = "Intro";
export default IntroWindow;
