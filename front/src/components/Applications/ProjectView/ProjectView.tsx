import React, { useState } from "react";
import Carousel from "../../Carousel/Carousel";

const ProjectView = ({
  images,
  title,
  text,
  hasSourceCode,
  sourceCode,
  isHosted,
  hostLink,
}: {
  images: string[];
  title: string;
  text: string;
  hasSourceCode: boolean;
  sourceCode?: string;
  isHosted?: boolean;
  hostLink?: string;
}) => {
  return (
    <>
      <Carousel images={images} />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <b style={{ paddingTop: 20, fontSize: 18 }}>{title}</b>
        <p style={{ paddingLeft: 75, paddingRight: 75, fontSize: 13 }}>
          {text}
        </p>
        <div className="field-row" style={{ justifyContent: "center" }}>
          {hasSourceCode ? (
            <button
              style={{ left: 100 }}
              onClick={() => {
                window.open(sourceCode);
              }}
            >
              Source Code
            </button>
          ) : (
            <></>
          )}
          {isHosted ? (
            <button
              style={{ left: 100 }}
              onClick={() => {
                window.open(hostLink);
              }}
            >
              Project Link
            </button>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
};
export default ProjectView;
