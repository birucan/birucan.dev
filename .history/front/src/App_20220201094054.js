import './App.css';
import React,{useState} from 'react';
import Screen from "./components/Screen/Screen"
import Window from "./components/Window/Window"
import '98.css'


function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Screen>
          <Window/>
        </Screen>
        
      </header>
    </div>
  );
}

export default App;
