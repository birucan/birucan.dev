import React,{useState} from "react";

export default Window = ({content=null, title="", maximized=false, hidden=false, width=100, height=100}) => {
    const [widthState, setWidthState] = useState(width);
    const [heightState, setHeightState] = useState(height);
    const [maximizedState, setMaximizedState]= useState(maximized);

    function isPaddingClick(e) {
        var element = e.target
        var style = window.getComputedStyle(element, null);
        var pTop = parseInt( style.getPropertyValue('padding-top') );
        var pRight = parseFloat( style.getPropertyValue('padding-right') );
        var pLeft = parseFloat( style.getPropertyValue('padding-left') );  
        var pBottom = parseFloat( style.getPropertyValue('padding-bottom') );
        var width = element.offsetWidth;
        var height = element.offsetHeight;
        var x = parseFloat( e.offsetX );
        var y = parseFloat( e.offsetY );  
      
        return !(( x > pLeft && x < width - pRight) &&
                 ( y > pTop && y < height - pBottom))
      }

      const handleClick = (e)=> {
        if (isPaddingClick(e)) {
          console.log('click on padding')
        } else {
          console.log('click on element') 
        }
      };

    return (


        
        <div style={{ width: widthState, height: heightState, padding:'2px' }} className="window" onClick={handleClick}>
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

        </div>
        </div>

    );
}