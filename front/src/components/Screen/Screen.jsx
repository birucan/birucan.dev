import React, { useState, useEffect } from "react";
import Window from "../Window/Window";
import IntroWindow from "../Applications/IntroWindow/IntroWindow";
import Taskbar from "../Taskbar/Taskbar";
import Desktop from "../Desktop/Desktop";
import PDFDisplay from "../Applications/ResumeDisplay/ResumeDisplay";
import { useRecoilState } from "recoil";
import { currentWindowState } from "../../State/global";
import { ValidTypeEnum } from "../../types";
const Screen = () => {
  const [activeWindows, setActiveWindows] = useRecoilState(currentWindowState);

  //const [windowNum, setWindowNum] = useState(2);
  const [windowRender, setWindowRender] = useState([]);
  const [updateState, setUpdateState] = useState(Math.random());

  const toggleRender = () => {
    setUpdateState(Math.random());
  };

  const closeWindow = (id, e) => {
    e.stopPropagation();
    //setWindowNum(activeWindows.length - 1);

    let delElement;

    setActiveWindows(
      activeWindows.map((window) => {
        if (window.id === id) {
          delElement = window;
          return window;
        } else {
          if (window.zIndex > activeWindows.length) {
            return {
              ...window,
              id: window.id,
              window: window.window,
              zIndex: window.zIndex - 1,
              currentTop: false,
            };
          } else {
            return window;
          }
        }
      })
    );

    setActiveWindows(activeWindows.filter((item) => item !== delElement));
    toggleRender();
  };

  const clickWindow = (id, oldZIndex) => {
    setActiveWindows(
      activeWindows.map((window) => {
        if (window.id === id) {
          return {
            ...window,
            zIndex: activeWindows.length,
            currentTop: true,
          };
        } else {
          if (window.zIndex === activeWindows.length) {
            return { ...window, zIndex: oldZIndex, currentTop: false };
          } else {
            return { ...window, currentTop: false };
          }
        }
      })
    );
    toggleRender();
  };

  const handleMinimize = (id) => {
    setActiveWindows(
      activeWindows.map((window) => {
        if (window.id === id) {
          return {
            ...window,
            minimized: window.minimized ? false : true,
            currentTop: window.minimized ? false : true,
          };
        } else {
          return window;
        }
      })
    );

    toggleRender();
  };

  useEffect(() => {
    setWindowRender(
      activeWindows.map((window) => {
        return (
          <Window
            zIndex={window.zIndex}
            id={window.id}
            style={{
              zIndex: window.zIndex,
              visibility: window.minimized ? "hidden" : "visible",
            }}
            content={window.window}
            title={window.title}
            key={window.id}
            initHeight={window.initHeight}
            initWidth={window.initWidth}
            xPos={window.initX}
            yPos={window.initY}
            clickHandle={clickWindow}
            handleClose={closeWindow}
            handleMinimize={handleMinimize}
            active={window.currentTop}
            icon={window.icon}
          />
        );
      })
    );
  }, [updateState, activeWindows.length]);

  return (
    <>
      <div
        style={{
          backgroundColor: "#008080",
          minHeight: "100vh",
          minWidth: "100vw",
          overflow: "hidden",
        }}
      >
        {windowRender}
        <Desktop />
      </div>
      <Taskbar
        activeWindows={activeWindows}
        handleMinimize={handleMinimize}
        clickWindow={clickWindow}
      />
    </>
  );
};
export default Screen;
