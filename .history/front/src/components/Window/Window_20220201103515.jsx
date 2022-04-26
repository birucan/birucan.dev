import React,{useState} from "react";

export default Window = ({content=null, title="", maximized=false, hidden=false, width=100, height=100}) => {
    const [widthState, setWidthState] = useState(width);
    const [heightState, setHeightState] = useState(height);
    const [maximizedState, setMaximizedState]= useState(maximized);

    return (
        <div style={{ width: widthState, height: heightState, padding:'2px' }} className="window">
        <div className="title-bar">
          <div className="title-bar-text">{title}</div>
          <div className="title-bar-controls">
            <button aria-label="Minimize" />
            <button aria-label="Maximize" />
            <button aria-label="Close" />
          </div>
        </div>
  
        <div styles={{color:"green"}} className="window-body">
          {content}

        </div>
        </div>
    );
}