import React, { ReactElement } from "react";
import "98.css";

const PDFDisplay = ({ pdf = "" }: { pdf: string }): ReactElement => {
  return (
    <>
      <object data={pdf} type="application/pdf" width="100%" height="100%">
        <p>
          Alternative
          <a href={pdf}> link to the PDF!</a>
        </p>
      </object>
    </>
  );
};
PDFDisplay.displayName = "PDF Viewer";

export default PDFDisplay;
