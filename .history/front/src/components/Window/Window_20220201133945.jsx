import React,{useState,useEffect} from "react";

//position correspond to the upper left corner of the window 
export default Window = ({content=null, title="", maximized=false, minimized=false, width=100, height=100, xPos=0, yPos=0}) => {
    const [widthState, setWidthState] = useState(width);
    const [heightState, setHeightState] = useState(height);
    const [maximizedState, setMaximizedState]= useState(maximized);
    const [mousePosition, setMousePosition]= useState("");
    const [mouseState, setMouseState]= useState("up")

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

        if(x>widthState){
            setMousePosition("right")
        }else if(x<=2){
            setMousePosition("left")
        }else if(y)

        return !(( x > pLeft && x < width - pRight) &&
                 ( y > pTop && y < height - pBottom))
      }

      const handleHover = (e)=> {
        if (isPaddingClick(e)) {
          console.log('padding')
        } else {
          console.log('element') 
        }
      };

      const mouseDown=(e)=>{
        setMouseState("down")
        
        setWidthState(widthState+1)
        e.preventDefault()
      }

      const mouseUp=(e)=>{
        setMouseState("up")
      }

      useEffect(() => {
          console.log("a")
        
      }, [mouseState]);
      



    return (

        <div key={widthState}draggable="false" style={{ width: widthState, height: heightState, padding:'2px' }} className="window" onMouseOver={handleHover} onMouseDown={mouseDown} onMouseUp={mouseUp}>
        <div className="title-bar">
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