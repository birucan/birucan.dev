import React, { useState, useEffect, useRef } from "react";
import { useOutsideClick } from "../../hooks/useOutisdeClick";

const StartMenu = ({
  isOpen = false,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (arg: boolean) => void;
}) => {
  const startmenu = useRef(null);

  useOutsideClick(startmenu, () => {
    if (isOpen) {
      setIsOpen(false);
    }
  });

  return (
    <>
      {isOpen ? (
        <div
          ref={startmenu}
          onClick={(e) => {
            e.stopPropagation();
            console.log("inside");
          }}
          style={{
            background: "#c0c0c0",
            height: 350,
            minWidth: 200,
            position: "fixed",
            bottom: 37,
            left: 0,
            border: "2px solid #fff",
            zIndex: 2147483600,
            display: "flex",
            flexDirection: "column",
            userSelect: "none",
          }}
        >
          <div
            style={{
              height: 20,
              borderBottom: "2px solid darkGrey",
              padding: "8px 0px 8px 8px",
              fontSize: 15,
            }}
            onClick={() => {
              window.open(
                "https://github.com/birucan/birucan.dev/blob/main/LICENSE"
              );
            }}
          >
            License
          </div>
          <div
            style={{
              height: 20,
              borderBottom: "2px solid darkGrey",
              padding: "8px 8px 8px 8px",
              fontSize: 15,
            }}
            onClick={() => {
              window.open(
                "https://github.com/birucan/birucan.dev/tree/main/front"
              );
            }}
          >
            Source Code
          </div>
          <div
            style={{
              height: 20,
              borderBottom: "2px solid darkGrey",
              padding: "8px 8px 8px 8px",
              fontSize: 15,
            }}
            onClick={() => {
              window.open(
                "https://raw.githubusercontent.com/birucan/birucan.dev/main/front/package.json"
              );
            }}
          >
            Dependencies
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};
export default StartMenu;
