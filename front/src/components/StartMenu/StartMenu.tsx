import React, { useState } from "react";

const StartMenu = ({ isOpen = false }: { isOpen: boolean }) => {
  return (
    <>
      {isOpen ? (
        <div
          style={{
            background: "#c0c0c0",
            height: 350,
            width: 200,
            position: "fixed",
            bottom: 37,
            left: 0,
            border: "2px solid #fff",
            zIndex: 2147483600,
          }}
        ></div>
      ) : (
        <></>
      )}
    </>
  );
};
export default StartMenu;
