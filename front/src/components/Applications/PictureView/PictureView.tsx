import React, { useState } from "react";
import "98.css";

const PictureView = ({ src }: { src: string }) => {
  return (
    <>
      <img src={src} style={{ width: "100%", height: "auto" }} />
    </>
  );
};
export default PictureView;
