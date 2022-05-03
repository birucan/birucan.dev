import React,{useState, useEffect} from "react";
import Window from "../Window/Window";
import IntroWindow from "../Applications/IntroWindow/IntroWindow";
import '98.css'


export default function Screen() {
    const [activeWindows, setActiveWindows] = useState([{id:0, window:<IntroWindow key={0}/>, zIndex:1, currentTop:false, title:"Intro", initHeight:150, initWidth:200}}], [{id:2, window:<IntroWindow key={2}/>, zIndex:2, currentTop:true, title:"Intro2"}]);
    const [windowNum, setWindowNum] = useState(2);
    const [windowRender, setWindowRender] = useState([])

    const addWindow=(newWindow)=>{
        setWindowNum(windowNum+1)
        setActiveWindows(activeWindows.map(window => {
            return {...window, id:window.id, window:window.window, zIndex:window.zIndex, currentTop:false}
        }));
        setActiveWindows(...activeWindows, {...window, id:windowNum, window:newWindow, zIndex:windowNum, currentTop:true);
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

    const clickWindow=(id, oldZIndex)=>{


        setActiveWindows(activeWindows.map(window => {

            if(window.id = id){
                return {...window, zIndex:windowNum, currentTop:true};
            }else{
                if(window.zIndex===windowNum){
                    return {...window, zIndex:oldZIndex, currentTop:false}
                }else{
                    return {...window, currentTop:false};
                }
            }
        }));

        
    }

    useEffect(() => {
        setWindowRender(activeWindows.map((window)=>{
          const newElement = window.window;
          console.log(newElement)
          return (<Window
                    zIndex={window.zIndex}
                    id={window.id}
                    style={{zIndex:window.zIndex}} 
                    content={newElement} 
                    title={window.title} 
                    key={window.id} 
                    height={window.initHeight}
                    width={window.initWidth}
                    clickHandle={clickWindow}
                    active={window.currentTop}

                    />) ;
        }))

    }, [activeWindows])
    
    return (
        <div style={{backgroundColor:"#008080", minHeight:'100vh',minWidth:'100vw', }}>
            {windowRender}
        </div>

    );
}