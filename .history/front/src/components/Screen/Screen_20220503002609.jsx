import React,{useState, useEffect} from "react";
import Window from "../Window/Window";
import IntroWindow from "../Applications/IntroWindow/IntroWindow";
import '98.css'


export default function Screen() {
    const [activeWindows, setActiveWindows] = useState([{id:0, window:<IntroWindow key={0}/>, zIndex:1, currentTop:true}]);
    const [windowNum, setWindowNum] = useState(1);
    const [windowRender, setWindowRender] = useState([])

    const addWindow=(newWindow)=>{
        setWindowNum(windowNum+1)
        setActiveWindows(activeWindows.map(window => {
            return {...window, id:window.id, window:window.window, zIndex:window.zIndex, currentTop:false}
        }));
        setActiveWindows(...activeWindows, {...window, id:windowNum, window:window, zIndex:windowNum, currentTop:true});
    }

    const closeWindow=(id)=>{
        setWindowNum(windowNum-1)

        let delElement;

        setActiveWindows(activeWindows.map(window => {

            if(window.id = id){
                delElement= window;
                return window;
            }else{
                if(window.zIndex>windowNum){
                    return {...window, id:window.id, window:window.window, zIndex:window.zIndex-1, currentTop:false}
                }else{
                    return window;
                }
            }
        }));

        setActiveWindows(activeWindows.filter(item => item !== delElement))
    }

    useEffect(() => {
        setWindowRender(activeWindows.map((window)=>{
          const newElement = window.window;
          console.log(newElement)
          return (<Window style={{zIndex:window.zIndex}} content={newElement} title={window.constructor.name}/>) ;
        }))

    }, [activeWindows])
    
    return (
        <div style={{backgroundColor:"#008080", minHeight:'100vh',minWidth:'100vw', }}>
            {windowRender}
        </div>

    );
}