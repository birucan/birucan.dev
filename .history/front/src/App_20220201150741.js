import './App.css';
import React,{useState} from 'react';
import Screen from "./components/Screen/Screen"
import Window from "./components/Window/Window"
import {DndProvider} from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import '98.css'


function App() {
  
  const [screenMouseState, setScreenMouseState] = useState("up");

  const mouseUp = (e)=>{
    setScreenMouseState("up")
  }

  const mouseDown = (e)=>{
    setScreenMouseState("down")
  }

  return (

    <div className="App">
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
    </div>

  );
}

export default App;