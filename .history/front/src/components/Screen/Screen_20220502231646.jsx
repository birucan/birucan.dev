import React,{useState} from "react";
import Window from "../Window/Window";
import IntroWindow from "../Applications/IntroWindow/IntroWindow";
import '98.css'


export default function Screen() {
    const [activeWindows, setActiveWindows] = useState([{window:<IntroWindow key={0}/>, zIndex:1, currentTop:true}])
    


    


    return (
        <div style={{backgroundColor:"#008080", minHeight:'100vh-200px',minWidth:'100vw', }}>
            
        </div>

    );
}