import React,{useState,useRef} from "react";
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
    style
  }) {


    const [pos, setPos] = useState({x:xPos, y:yPos})
    const [size, setSize] = useState({height:height, width:width})

    const [prevPos, setPrevPos] = useState({x:xPos, y:yPos})
    const [prevSize, setPrevSize] = useState({height:height, width:width})

    const [maximizedState, setMaximizedState]= useState(maximized);

    const [canDrag, setCanDrag] = useState(false)


      const maximizeHandler=()=>{
        if(!maximizedState){
          setPrevPos(pos)
          setPos({x:0, y:0})

          setPrevSize(size)
          setSize({height:window.screen.height, width:window.screen.width})


          setMaximizedState(true)
        }else{
          setPos(prevPos)

          setSize(prevSize)

          setMaximizedState(false)
        }

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
      position={{
        x: pos.x,
        y: pos.y,
        width: size.width,
        height: size.height
      }}
      onDragStop={(e, d) => { setPos({ x: d.x, y: d.y });}}
      onResize={(e, direction, ref, delta, position) => {
        setSize({height: ref.offsetHeight, width:ref.offsetWidth})
      }}
      onMouseDown={()=>clickHandle(id, zIndex)}
      
      minWidth={width}
      minHeight={height} 
      disableDragging={!canDrag} 
      style={{ ...style, width: width, height: height, padding:'2px' }} className="window" >
        <div  >
        <div className={(active===true)?"title-bar":"title-bar inactive"} onMouseLeave={()=>{setCanDrag(false)}} onMouseOver={()=>{setCanDrag(true)}} >
          <div className="title-bar-text" >{title}</div>
          <div className="title-bar-controls">
            <button aria-label="Minimize" />
            <button aria-label={(maximizedState)?"Restore":"Maximize"} onClick={()=>maximizeHandler()}/>
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