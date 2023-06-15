import React, { useState } from "react";
import "98.css";

const IntroMobileWindow = () => {
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
        I'm Tomás Kavanagh, a Software Engineer with 3 years of expirience.
        <br />
        <br />
        This is be my portafolio site, it's meant to immitate a functional
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
        React and everything in the desktop can be clicked and used.
        <b>
          {" "}
          I believe you are on a mobile device, so this is a very simple version
          of the site, If you want to see the full site, please visit birucan.cc
          on a desktop!
        </b>
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
            window.open("https://linkedin.com/in/tomas-kavanagh");
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
            window.open("https://github.com/birucan");
          }}
        >
          <img height={16} width={16} src="icons/linkedin.png" />

          {"   Linkedin"}
        </button>
      </div>
    </div>
  );
};
IntroMobileWindow.displayName = "IntroMobileWindow";
export default IntroMobileWindow;
