import './App.css';
import React,{useState} from 'react';
import Screen from "./components/Screen/Screen"
import Window from "./components/Window/Window"
import {DndProvider} from 'react-dnd'
import '98.css'


function App() {

  return (
    <div className="App">

        
          <Window styles={{position:'absolute'}} content={<>test</>}/>
        
        

    </div>
  );
}

export default App;
