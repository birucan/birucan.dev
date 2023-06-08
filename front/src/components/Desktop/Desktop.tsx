import React, { useState } from "react";

import { getFile, openFile, fileMap } from "../Applications/utils/fileManager";
import { ValidTypeEnum, FileEnum } from "../../types";

const Desktop = () => {
  const desktop = fileMap[FileEnum.desktop].dir;
  const [currentSelected, setCurrentSelected] = useState<string | FileEnum>();
  return (
    <>
      <div
        onClick={() => {
          setCurrentSelected("");
        }}
        style={{
          paddingLeft: 10,
          paddingRight: 10,
          display: "flex",
          flexFlow: "column wrap",
          height: "100%",
          width: "100%",
          alignContent: "flex-start",
        }}
      >
        {desktop.map((item) => {
          const obj = getFile(item);
          const src = obj.icon ? obj.icon : "icons/folder.png";
          return (
            <div>
              <div
                style={{
                  position: "relative",
                  display: "flex",
                  outline: "none",
                  background: "none",
                  border: "none",
                  color: "initial",
                  textDecoration: "none",
                  padding: "1px 7px 2px initial",
                  margin: "3px 0px 10px 0px",
                  width: "52px",
                  minHeight: "58px",
                  textAlign: "center",
                  flexDirection: "column",
                  alignItems: "center",
                  zIndex: 0,
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentSelected(item);
                }}
                onDoubleClick={() => {
                  openFile(obj);
                }}
              >
                <img
                  height={32}
                  width={32}
                  alt=""
                  src={src}
                  style={{
                    filter:
                      item === currentSelected
                        ? "hue-rotate(180deg) opacity(0.5)"
                        : "initial",
                  }}
                />

                <div
                  style={{
                    maxHeight: 22,
                    padding: "2px 3px",
                    whiteSpace: "initial",
                    display: "inline-block",
                    position: "absolute",
                    marginTop: 2,
                    top: 33,
                    filter:
                      item === currentSelected
                        ? "hue-rotate(180deg) opacity(0.75)"
                        : "initial",
                    color: "white",
                  }}
                >
                  {obj.title}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Desktop;
