import React, { useState, useEffect } from "react";
import "./style.css";

const Carousel = ({ images = [] }: { images: string[] }) => {
  const [curImg, setCurImg] = useState<number>(0);
  const [curClassname, setCurClassname] = useState<string>("fade");

  const handleNext = () => {
    setCurClassname("fade hide");
    setTimeout(() => {
      if (curImg < images.length - 1) {
        setCurImg(curImg + 1);
      } else {
        setCurImg(0);
      }
      setCurClassname("fade");
    }, 500);
  };

  const handlePrev = () => {
    setCurClassname("fade hide");
    setTimeout(() => {
      if (curImg > 0) {
        setCurImg(curImg - 1);
      } else {
        setCurImg(images.length - 1);
      }
      setCurClassname("fade");
    }, 500);
  };

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <button
        style={{ height: 25, marginRight: 5 }}
        onClick={() => handlePrev()}
      >
        {"<"}
      </button>
      <img
        className={curClassname}
        style={{ flexGrow: 1, maxHeight: 250 }}
        src={images[curImg]}
      />
      <button
        style={{ height: 25, marginLeft: 5 }}
        onClick={() => handleNext()}
      >
        {">"}
      </button>
    </div>
  );
};
export default Carousel;
