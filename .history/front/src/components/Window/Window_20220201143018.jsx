import React,{useState,useEffect} from "react";

//position correspond to the upper left corner of the window 
export default Window = ({content=null,
    title="", 
    maximized=false,
    minimized=false,
    width=100,
    height=100,
    xPos=0,
    yPos=0,
    setX,
    setY}) => {
    const [widthState, setWidthState] = useState(width);
    const [heightState, setHeightState] = useState(height);
    const [maximizedState, setMaximizedState]= useState(maximized);
    const [mousePosition, setMousePosition]= useState("");
    const [mouseState, setMouseState]= useState("up")
    const [pointerState, setPointerState] = useState("auto")

    function isPaddingClick(e) {
        var element = e.target
        var style = window.getComputedStyle(element, null);
        var pTop = parseInt( style.getPropertyValue('padding-top') );
        var pRight = parseFloat( style.getPropertyValue('padding-right') );
        var pLeft = parseFloat( style.getPropertyValue('padding-left') );  
        var pBottom = parseFloat( style.getPropertyValue('padding-bottom') );
        var width = element.offsetWidth;
        var height = element.offsetHeight;
        var x = parseFloat( e.clientX );
        var y = parseFloat( e.clientY );

        if(x>widthState-3 ){
            setMousePosition("right")
            setPointerState("ew-resize")
        }else if(x<=3){
            setMousePosition("left")
            setPointerState("ew-resize")
        }else if(y>heightState-3){
            setMousePosition("down")
            setPointerState("ns-resize")

        }else{
            setMousePosition("inside")
            setPointerState("auto")
        }

        return !(( x > pLeft && x < width - pRight) &&
                 ( y > pTop && y < height - pBottom))
      }

      const handleHover = (e)=> {
        
      };

      const mouseDown=(e)=>{
        setMouseState("down")

        setWidthState(e.clientX)
 
      }

      const mouseUp=(e)=>{
        setMouseState("up")
      }

      const mouseDownTitle=(e)=>{
        setMouseState("downTitle")
        e.stopPropagation();
      }

      const mouseUpTitle=(e)=>{
        setMouseState("upTitle")
        e.stopPropagation();
      }

      const mouseMoveTitle=(e)=>{
        console.log("titleclick", e)
        e.stopPropagation();
      }
      

      const mouseMove=(e)=>{
        isPaddingClick(e)
          if(mouseState==="down" && mousePosition==="right"){
            setWidthState(e.clientX+2)
          }    
      }



      



    return (

        <div key={widthState}draggable="false" style={{cursor: pointerState, width: widthState, height: heightState, padding:'2px' }} className="window" onMouseOver={handleHover} onMouseDown={mouseDown} onMouseUp={mouseUp} onMouseMove={mouseMove}>
        <div className="title-bar" onMouseDown={mouseDownTitle} onMouseUp={mouseUpTitle} onMouseMove={mouseMoveTitle}>
          <div className="title-bar-text">{title}</div>
          <div className="title-bar-controls">
            <button aria-label="Minimize" />
            <button aria-label="Maximize" />
            <button aria-label="Close" />
          </div>
        </div>
  
        <div className="window-body">
          {content}
          {mousePosition}

        </div>
        </div>

    );
}