import './App.css';
import React,{useState} from 'react';
import ConsoleLine from "./components/consoleLine";

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <ConsoleLine text="hola como estas sapo hijueputa"></ConsoleLine>
      </header>
    </div>
  );
}

export default App;
