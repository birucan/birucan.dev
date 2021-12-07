import './App.css';
import React,{useState} from 'react';
import ConsoleLine from "./components/consoleLine";

function App() {

  


  
  return (
    <div className="App">
      <header className="App-header">
        <ConsoleLine key="hola como estas sapo hijueputa" text="hola como estas sapo hijueputa" speed={5}></ConsoleLine>
      </header>
    </div>
  );
}

export default App;
