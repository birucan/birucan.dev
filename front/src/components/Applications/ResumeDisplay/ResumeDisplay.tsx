import React, { useState } from "react";
import "98.css";

export const ResumeDisplay = () => {
  return (
    <>
      <object
        data="http://africau.edu/images/default/sample.pdf"
        type="application/pdf"
        width="100%"
        height="100%"
      >
        <p>
          Alternative text - include a link{" "}
          <a href="http://africau.edu/images/default/sample.pdf">to the PDF!</a>
        </p>
      </object>
    </>
  );
};
ResumeDisplay.displayName = "Intro";

export default ResumeDisplay;
