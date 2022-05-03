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
    yPos=0,
    clickHandle,
    zIndex,
    id,
    active=false,
  }) {

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
      onClick={()=>clickHandle(id, zIndex)}
      
      minWidth={width}
      minHeight={height} 
      disableDragging={!canDrag} 
      style={{ width: width, height: height, padding:'2px' }} className="window" >
        <div  >
        <div className={(active===true)?"title-bar":"title-bar inactive"} onMouseLeave={()=>{setCanDrag(false)}} onMouseOver={()=>{setCanDrag(true)}} >
          <div className="title-bar-text" >{title}</div>
          <div className="title-bar-controls">
            <button aria-label="Minimize" />
            <button aria-label="Maximize" onClick={handleMaximize}/>
            <button aria-label="Close" />
          </div>
        </div>
  
        <div className="window-body">
          {content}
        </div>
        </div>

      </Rnd>




    );
};