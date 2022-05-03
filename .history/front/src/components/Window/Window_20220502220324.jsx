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
    setX,
    setY, screenMouseState}) {
    const [widthState, setWidthState] = useState(width);
    const [heightState, setHeightState] = useState(height);
    const [maximizedState, setMaximizedState]= useState(maximized);
    const [xPosState, setXPosState] = useState(xPos);
    const [yPosState, setYPosState] = useState(xPos);

    // const [mousePosition, setMousePosition]= useState("");
    // const [mouseState, setMouseState]= useState("up")
    // const [pointerState, setPointerState] = useState("auto")

    // function isPaddingClick(e) {
    //     var element = e.target
    //     var style = window.getComputedStyle(element, null);
    //     var pTop = parseInt( style.getPropertyValue('padding-top') );
    //     var pRight = parseFloat( style.getPropertyValue('padding-right') );
    //     var pLeft = parseFloat( style.getPropertyValue('padding-left') );  
    //     var pBottom = parseFloat( style.getPropertyValue('padding-bottom') );
    //     var width = element.offsetWidth;
    //     var height = element.offsetHeight;
    //     var x = parseFloat( e.clientX );
    //     var y = parseFloat( e.clientY );

    //     if(x>widthState-3 ){
    //         setMousePosition("right")
    //         setPointerState("ew-resize")
    //     }else if(x<=3){
    //         setMousePosition("left")
    //         setPointerState("ew-resize")
    //     }else if(y>heightState-3){
    //         setMousePosition("down")
    //         setPointerState("ns-resize")

    //     }else{
    //         setMousePosition("inside")
    //         setPointerState("auto")
    //     }

    //     return !(( x > pLeft && x < width - pRight) &&
    //              ( y > pTop && y < height - pBottom))
    //   }

    //   const mouseDown=(e)=>{
    //     setMouseState("down")
 
    //   }



    //   window.addEventListener('mouseup', function(event){
    //     setMouseState("up")
    //     })

    //   const mouseDownTitle=(e)=>{
    //     setMouseState("downTitle")
    //     e.stopPropagation();
    //   }

    //   const mouseUpTitle=(e)=>{
    //     setMouseState("upTitle")
    //     e.stopPropagation();
    //   }

    //   const mouseMoveTitle=(e)=>{
    //     console.log("titleclick", e)
    //     setMousePosition("title")
    //     e.stopPropagation();
    //   }
      
    //   const mouseMove=(e)=>{
    //     isPaddingClick(e)
    //       if(mouseState==="down" && mousePosition==="right"){
    //         setWidthState(e.clientX+2)
    //       }
    //       if(mouseState==="down" && mousePosition==="down"){
    //         setHeightState(e.clientY+2)
    //       }    
    //   }

      const handleMaximize=(e)=>{
        setMaximizedState(true)
        //TODO change position to 0,0 change width and heigh to the size of the view port
      }


    return (
      <>
      <Rnd     
      default={{
        x: xPosState,
        y: yPosState,
        width: widthState,
        height: heightState
      }}>
        <div key={widthState}  style={{ width: widthState, height: heightState, padding:'2px' }} className="window" >
        <div className="title-bar" >
          <div className="title-bar-text">{title}</div>
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

      <Rnd
    default={{
      x: 0,
      y: 0,
      width: 320,
      height: 200
    }}
  >
    Rnd
  </Rnd>
      </>



    );
};