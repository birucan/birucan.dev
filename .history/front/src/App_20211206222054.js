import './App.css';
import React,{useState} from 'react';
import ConsoleLine from "./components/ConsoleLine";
import ConsoleTextBox from "./components/ConsoleTextBox"

function App() {
   const curDir = "root"
   const lines = []

  return (
    <div className="App">
      <header className="App-header">
        {
          lines.map(line => <ConsoleLine className="ConsoleLine" key={line} text={line}></ConsoleLine>)
        }
        <ConsoleTextBox dir={curDir}>
      </header>
    </div>
  );
}

export default App;
