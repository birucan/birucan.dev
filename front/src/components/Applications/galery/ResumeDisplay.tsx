import React, { useState } from "react";
import "98.css";

export const ResumeDisplay = () => {
  return (
    <>
      <object
        data="https://s3.amazonaws.com/birucan.dev/Tomas+Kavanagh+Resume.pdf"
        type="application/pdf"
        width="100%"
        height="100%"
      >
        <p>
          Alternative
          <a href="https://s3.amazonaws.com/birucan.dev/Tomas+Kavanagh+Resume.pdf">
            to the PDF!
          </a>
        </p>
      </object>
    </>
  );
};
ResumeDisplay.displayName = "Resume";

export default ResumeDisplay;
