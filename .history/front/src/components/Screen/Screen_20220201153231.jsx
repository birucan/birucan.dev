import React,{useState} from "react";
import Window from "../Window/Window";
import '98.css'


export default function Screen() {
      
  const [screenMouseState, setScreenMouseState] = useState("up");

  const mouseUp = (e)=>{
    setScreenMouseState("up")
  }

  const mouseDown = (e)=>{
    setScreenMouseState("down")
  }
    return (
        <div styles={{minHeight:'100vh', minWidth:'100vw'}} onMouseDown={mouseDown} onMouseUp={mouseUp}>
            <div styles={{position:'absolute', top: '300px', left: '400px' }} >
                <Window 
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
            </div>

        </div>

    
    );
}