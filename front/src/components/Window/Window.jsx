import React, { useState, useEffect } from "react";
import { Rnd } from "react-rnd";

//
//position correspond to the upper left corner of the window
export default function Window({
  content = null,
  title = "",
  maximized = false,
  minimized = false,
  initWidth = 100,
  initHeight = 100,
  xPos = 0,
  yPos = 0,
  clickHandle,
  zIndex,
  id,
  active = false,
  style,
  handleMinimize,
  handleClose,
  icon,
  disableResize = false,
}) {
  const [pos, setPos] = useState({ x: xPos, y: yPos });
  const [size, setSize] = useState({ height: initHeight, width: initWidth });

  const [prevPos, setPrevPos] = useState({ x: xPos, y: yPos });
  const [prevSize, setPrevSize] = useState({
    height: initHeight,
    width: initWidth,
  });

  const [maximizedState, setMaximizedState] = useState(maximized);

  const [canDrag, setCanDrag] = useState(false);

  const maximizeHandler = () => {
    if (!maximizedState) {
      setPrevPos(pos);
      setPos({ x: 0, y: 0 });
      setPrevSize(size);
      let newSize = {
        height: window.innerHeight - 38,
        width: window.innerWidth - 10,
      };
      setSize(newSize);
      setMaximizedState(true);
    } else {
      setPos(prevPos);
      setSize(prevSize);
      setMaximizedState(false);
    }
  };

  return (
    <Rnd
      default={{
        x: xPos,
        y: yPos,
        width: initWidth,
        height: initHeight,
      }}
      position={{
        x: pos.x,
        y: pos.y,
      }}
      size={{
        height: size.height,
        width: size.width,
      }}
      onDragStop={(e, d) => {
        setPos({ x: d.x, y: d.y });
      }}
      onDragStart={(e, d) => {
        if (maximizedState === true) {
          setSize(prevSize);
          setMaximizedState(false);
        }
      }}
      onResizeStop={(e, direction, ref, delta, position) => {
        setSize({ height: ref.offsetHeight, width: ref.offsetWidth });
      }}
      onMouseDown={() => clickHandle(id, zIndex)}
      minWidth={initWidth}
      minHeight={initHeight}
      disableDragging={!canDrag}
      disableResize={disableResize}
      style={{
        ...style,
        padding: "2px",
      }}
      className="window"
    >
      <div
        className={active === true ? "title-bar" : "title-bar inactive"}
        onMouseLeave={() => {
          setCanDrag(false);
        }}
        onMouseOver={() => {
          setCanDrag(true);
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            maxWidth: size.width - 80,
          }}
        >
          <img
            style={{ padding: "0px 0px 0px 0px", margin: "0px 0px 0px 0px" }}
            height={16}
            width={16}
            alt=""
            src={icon}
          />
          <div className="title-bar-text" style={{ textOverflow: "ellipsis" }}>
            {" "}
            {title}
          </div>
        </div>

        <div
          className="title-bar-controls"
          onMouseOver={(e) => {
            e.stopPropagation();
            setCanDrag(false);
          }}
        >
          <button
            aria-label="Minimize"
            onClick={() => {
              handleMinimize(id);
            }}
          />
          <button
            aria-label={maximizedState ? "Restore" : "Maximize"}
            onClick={() => maximizeHandler()}
          />
          <button
            aria-label="Close"
            onClick={(e) => {
              handleClose(id, e);
            }}
          />
        </div>
      </div>

      <div style={{ height: "95%" }} className="window-body">
        {content}
      </div>
    </Rnd>
  );
}
