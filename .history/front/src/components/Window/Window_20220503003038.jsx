import React,{useState,useEffect} from "react";
import { Rnd } from "react-rnd";

// 
//position correspond to the upper left corner of the window 
export default function Window({content=null,
    title="", 
    maximized=false,
    minimized=false,
    width=100,
    height=100,
    xPos=0,
    yPos=0}) {

    const [maximizedState, setMaximizedState]= useState(maximized);

    const [canDrag, setCanDrag] = useState(false)


      const handleMaximize=(e)=>{
        setMaximizedState(true)
        //TODO change position to 0,0 change width and heigh to the size of the view port
      }


    return (
      <Rnd     
      default={{
        x: xPos,
        y: yPos,
        width: width,
        height: height
      }}
      minWidth=100
      minHeight=100 
      disableDragging={!canDrag} 
      style={{ width: width, height: height, padding:'2px' }} className="window" >
        <div  >
        <div className="title-bar" onMouseLeave={()=>{setCanDrag(false)}} onMouseOver={()=>{setCanDrag(true)}} onMouseUp={()=>{setCanDrag(false)}}>
          <div className="title-bar-text" >{title}</div>
          <div className="title-bar-controls">
            <button aria-label="Minimize" />
            <button aria-label="Maximize" onClick={handleMaximize}/>
            <button aria-label="Close" />
          </div>
        </div>
  
        <div className="window-body">
          {content}
          {/* {mousePosition} */}
          {/* <br/> */}
          {/* {mouseState} */}

        </div>
        </div>

      </Rnd>




    );
};