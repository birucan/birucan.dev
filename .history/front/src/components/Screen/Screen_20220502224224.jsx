import React,{useState} from "react";
import Window from "../Window/Window";
import IntroWindow from "../Applications/IntroWindow/IntroWindow";
import '98.css'


export default function Screen() {
    const [activeWindows, setActiveWindows] = useState([<IntroWindow/>])


    return (
        <div style={{backgroundColor:"#008080", minHeight:'100vh',maxHeight:'100vh', }}>
            {activeWindows.map(window)=>{
                window;
            }

            }

        </div>

    );
}