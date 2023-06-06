import React, { useState } from "react";
import "98.css";
import { getFile, openFile } from "../utils/fileManager";
import { FileEnum, ValidTypeEnum } from "../../../types";
const FileExplorer = ({
  currentFolder = [FileEnum.root],
}: {
  currentFolder?: FileEnum[];
}) => {
  return (
    <>
      <div
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
        {currentFolder.map((item) => {
          const obj = getFile(item);
          return (
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
                margin: "3px",
                width: "52px",
                height: "58px",
                textAlign: "center",
                flexDirection: "column",
                alignItems: "center",
                zIndex: 0,
              }}
              onDoubleClick={() => {
                //openFile(getFile(item));
              }}
            >
              <img
                height={32}
                width={32}
                alt=""
                src={
                  obj.type === ValidTypeEnum.FOLDER
                    ? "icons/folder.png"
                    : obj.icon
                }
              />
              <div
                style={{
                  maxHeight: 22,
                  padding: "2px 3px",
                  maxWidth: "100%",
                  overflow: "hidden",
                  display: "inline-block",
                  position: "absolute",
                  marginTop: 2,
                  top: 33,
                }}
              >
                {obj.title}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
FileExplorer.displayName = "Intro";
export default FileExplorer;
