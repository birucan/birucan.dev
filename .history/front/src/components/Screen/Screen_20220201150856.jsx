import React,{useState} from "react";
import Window from "../Window/Window";
import '98.css'


export default Screen = () => {
      
  const [screenMouseState, setScreenMouseState] = useState("up");

  const mouseUp = (e)=>{
    setScreenMouseState("up")
  }

  const mouseDown = (e)=>{
    setScreenMouseState("down")
  }
    return (
        <Window styles={{position:'fixed', top: '40vh', left: '40vw' }} 
        content={<></>} 
        title="test" 
        maximized={false}
        minimized={false}
        width={100}
        height={100}
        xPos={0}
        yPos={0}
        screenMouseState={screenMouseState}
        />
    
    );
}