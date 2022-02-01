import React,{useState} from "react";

export default Window = ({content=null, maximized=false, hidden=false, width=100, height=100}) => {
    
    return (
        <div style={{ width: 300 }} className="window">
        <div className="title-bar">
          <div className="title-bar-text">Counter</div>
          <div className="title-bar-controls">
            <button aria-label="Minimize" />
            <button aria-label="Maximize" />
            <button aria-label="Close" />
          </div>
        </div>
  
        <div className="window-body">
          <p style={{ textAlign: "center" }}>Current count: {count}</p>
          <div className="field-row" style={{ justifyContent: "center" }}>
            <button >+</button>
            <button >-</button>
            <button >0</button>
          </div>
        </div>
      </div>
    );
}