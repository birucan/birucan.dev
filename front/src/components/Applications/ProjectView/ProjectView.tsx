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
      {images.length === 0 ? <></> : <Carousel images={images} />}
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
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              onClick={() => {
                window.open(sourceCode);
              }}
            >
              <img height={16} width={16} src="icons/github.png" />
              {"   Source Code"}
            </button>
          ) : (
            <></>
          )}
          {isHosted ? (
            <button
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              onClick={() => {
                window.open(sourceCode);
              }}
            >
              <img height={16} width={16} src="icons/ie.png" />
              {"   Project Link"}
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
