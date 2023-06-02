import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { currentWindowState } from "../../State/global";

const Taskbar = ({ handleMinimize, clickWindow }) => {
  const [activeWindows, setActiveWindows] = useRecoilState(currentWindowState);

  const sunk = {
    backgroundColor: "#b0b0b0",
    boxShadow: "inset -1px -1px #ffffff, inset -2px -2px #dfdfdf",
    padding: "2px 11px 0 13px",
    outline: "1px dotted #000000",
    outlineOffset: "-4px",
  };
  const buttonStyle = { textAlign: "right" };
  return (
    <div
      style={{
        background: "#c0c0c0",
        height: 35,
        width: "100vw",
        position: "fixed",
        bottom: 0,
        left: 0,
        borderTop: "2px solid #fff",
        zIndex: 2147483600,
      }}
    >
      <div
        className="startButtonContainer"
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <button
          style={{
            paddingLeft: 8,
            paddingRight: 5,
            height: 32,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <img
              style={{
                padding: "0px 8px 0px 0px",
                margin: "0px 0px 0px 0px",
              }}
              height={24}
              width={24}
              alt=""
              src="icons/start.png"
            />
            <b>Start</b>
          </div>
        </button>

        <div class="status-bar" />

        {activeWindows.map((window) => {
          return (
            <>
              <button
                style={
                  window.currentTop && !window.minimized
                    ? { ...sunk, ...buttonStyle }
                    : { ...buttonStyle }
                }
                onClick={() => {
                  window.minimized
                    ? handleMinimize(window.id)
                    : clickWindow(window.id, window.zIndex);
                }}
              >
                <div
                  style={{
                    display: "flex",
                    gap: 15,
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <img
                    style={{
                      maxHeight: "24px",
                      maxWidth: "24px",
                      padding: "0px 0px 0px 0px",
                      margin: "0px 0px 0px 0px",
                    }}
                    height={24}
                    width={24}
                    alt=""
                    src={window.icon}
                  />

                  <div>{window.title}</div>
                </div>
              </button>
            </>
          );
        })}
      </div>
    </div>
  );
};
export default Taskbar;
