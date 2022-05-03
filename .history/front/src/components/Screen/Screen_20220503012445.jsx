import React,{useState, useEffect} from "react";
import Window from "../Window/Window";
import IntroWindow from "../Applications/IntroWindow/IntroWindow";
import '98.css'


export default function Screen() {
    const [activeWindows, setActiveWindows] = useState([{id:0, window:<IntroWindow key={0}/>, zIndex:1, currentTop:false, title:"Intro", initHeight:150, initWidth:200, initX:20, initY:20}, 
    {id:2, window:<IntroWindow key={2}/>, zIndex:2, currentTop:true, title:"Intro2", initHeight:150, initWidth:200, initX:100, initY:100}]);
    const [windowNum, setWindowNum] = useState(2);
    const [windowRender, setWindowRender] = useState([])
    const [updateState, setUpdateState] = useState(Math.random())

    const addWindow=(newWindow, title="untitled", initHeight=200, initWidth=200, initX=0, initY=0)=>{
        setWindowNum(windowNum+1)
        setActiveWindows(activeWindows.map(window => {
            return {...window, id:window.id, window:window.window, zIndex:window.zIndex, currentTop:false}
        }));
        setActiveWindows(...activeWindows, {id:windowNum, window:newWindow, zIndex:windowNum, currentTop:true, title:title, initHeight:initHeight, initWidth:initWidth, initX:initX, initY:initY});
        setUpdateState(Math.random())
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
        setUpdateState(Math.random())

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

        setUpdateState(Math.random())
    }

    useEffect(() => {
        console.log("useEffect")
        setWindowRender(activeWindows.map((window)=>{
            console.log("a", window)
          return (<Window
                    zIndex={window.zIndex}
                    id={window.id}
                    style={{zIndex:window.zIndex}} 
                    content={window.window} 
                    title={window.title} 
                    key={window.id} 
                    height={window.initHeight}
                    width={window.initWidth}
                    xPos={window.initX}
                    yPos={window.initY}
                    clickHandle={clickWindow}
                    active={window.currentTop}
                
                    />) ;
        }))

    }, [updateState, windowNum])
    
    return (
        <div style={{backgroundColor:"#008080", minHeight:'100vh',minWidth:'100vw', }}>
           { windowRender}
        </div>

    );
}