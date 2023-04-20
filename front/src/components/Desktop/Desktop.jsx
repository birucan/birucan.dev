import React, { useState } from "react";

import { getFile, createFile, addFileToFolder } from "../../utils/fileManager";

export default function Desktop() {
  // eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
  const desktop = require("../../objects/defaultFolders.json").root.desktop;

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
        {Object.keys(desktop).map((item) => {
          console.log(getFile(item).icon);
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
              }}
              onDoubleClick={() => {
                console.log("doubleClick!");
              }}
            >
              <img
                height={32}
                width={32}
                alt=""
                src={
                  getFile(item).type === "folder" &&
                  getFile(item).icon === "default"
                    ? "icons/folder.png"
                    : getFile(item).icon
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
                {item}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
