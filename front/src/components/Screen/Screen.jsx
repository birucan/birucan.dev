import React, { useState, useEffect } from "react";
import Window from "../Window/Window";
import IntroWindow from "../Applications/IntroWindow/IntroWindow";
import Taskbar from "../Taskbar/Taskbar";
import Desktop from "../Desktop/Desktop";
import PDFDisplay from "../Applications/ResumeDisplay/ResumeDisplay";
import { useRecoilState } from "recoil";
import { currentWindowState } from "../../State/global";
const Screen = () => {
  const [activeWindows, setActiveWindows] = useRecoilState(currentWindowState);
  // const [activeWindows, setActiveWindows] = useState([
  //   {
  //     id: 1,
  //     window: <IntroWindow key={Math.random()} />,
  //     zIndex: 1,
  //     currentTop: false,
  //     icon: "icons/intro.png",
  //     title: "Intro",
  //     minimized: false,
  //     initHeight: 200,
  //     initWidth: 200,
  //     initX: 50,
  //     initY: 20,
  //   },
  //   {
  //     id: 2,
  //     window: <ResumeDisplay key={Math.random()} />,
  //     zIndex: 2,
  //     currentTop: true,
  //     title: "resume",
  //     icon: "icons/textFile.png",
  //     minimized: false,
  //     initHeight: 800,
  //     initWidth: 700,
  //     initX: 300,
  //     initY: 50,
  //   },
  // ]);
  const [windowNum, setWindowNum] = useState(2);
  const [windowRender, setWindowRender] = useState([]);
  const [updateState, setUpdateState] = useState(Math.random());

  const update = () => {
    setUpdateState(Math.random());
  };

  const addWindow = (newWindow) => {
    setWindowNum(windowNum + 1);
    setActiveWindows(
      activeWindows.map((window) => {
        return {
          ...window,
          id: window.id,
          window: window.window,
          zIndex: window.zIndex,
          currentTop: false,
        };
      })
    );
    setActiveWindows(...activeWindows, {
      id: windowNum,
      window: newWindow,
      zIndex: windowNum,
      currentTop: true,
      // title: title,
      // initHeight: initHeight,
      // initWidth: initWidth,
      // initX: initX,
      // initY: initY,
    });
    update();
  };

  const closeWindow = (id, e) => {
    e.stopPropagation();
    setWindowNum(windowNum - 1);

    let delElement;

    setActiveWindows(
      activeWindows.map((window) => {
        if (window.id === id) {
          delElement = window;
          return window;
        } else {
          if (window.zIndex > windowNum) {
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
    update();
  };

  const clickWindow = (id, oldZIndex) => {
    setActiveWindows(
      activeWindows.map((window) => {
        if (window.id === id) {
          return { ...window, zIndex: windowNum, currentTop: true };
        } else {
          if (window.zIndex === windowNum) {
            return { ...window, zIndex: oldZIndex, currentTop: false };
          } else {
            return { ...window, currentTop: false };
          }
        }
      })
    );

    update();
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

    update();
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
  }, [updateState, windowNum]);

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
        <Desktop addWindow={addWindow} />
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
