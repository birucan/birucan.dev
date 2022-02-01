import './App.css';
import React,{useState} from 'react';
import Screen from "./components/Screen/Screen"
import Window from "./components/Window/Window"
import {DndProvider} from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import '98.css'


function App() {


  return (

    <div className="App">
      <Screen></Screen>
    </div>

  );
}

export default App;
