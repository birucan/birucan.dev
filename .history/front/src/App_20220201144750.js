import './App.css';
import React,{useState} from 'react';
import Screen from "./components/Screen/Screen"
import Window from "./components/Window/Window"
import {DndProvider} from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import '98.css'


function App() {

  return (
  <DndProvider backend={HTML5Backend}>
    <div className="App">
          <Window styles={{position:'fixed', top: '40vh', left: '40vw' }} content={<></>}/>
    </div>
  </DndProvider>

  );
}

export default App;
