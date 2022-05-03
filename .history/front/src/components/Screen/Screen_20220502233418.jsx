import React,{useState} from "react";
import Window from "../Window/Window";
import IntroWindow from "../Applications/IntroWindow/IntroWindow";
import '98.css'


export default function Screen() {
    const [activeWindows, setActiveWindows] = useState([{id:0, window:<IntroWindow key={0}/>, zIndex:1, currentTop:true}]);
    const [windowNum, setWindowNum] = useState(1);
    const [windowRender, setWindowRender] = useState([])

    const addWindow=(window)=>{
        setWindowNum(windowNum+1)
        setActiveWindows(activeWindows.map(window => {
            return {id:window.id, window:window.window, zIndex:window.zIndex-1, currentTop:false}
        }));
        setActiveWindows(...activeWindows, {id:windowNum, window:window, zIndex:windowNum, currentTop:true});
    }

    


    return (
        <div style={{backgroundColor:"#008080", minHeight:'100vh',minWidth:'100vw', }}>
            
        </div>

    );
}