import './App.css';
import React,{useState} from 'react';
import ConsoleLine from "./components/ConsoleLine";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ConsoleLine className="ConsoleLine" key="test" text="bigger longer test"></ConsoleLine>
      </header>
    </div>
  );
}

export default App;
