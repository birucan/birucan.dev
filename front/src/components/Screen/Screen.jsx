import React,{useState, useEffect} from "react";
import Window from "../Window/Window";
import IntroWindow from "../Applications/IntroWindow/IntroWindow";
import Taskbar from "../Taskbar/Taskbar";
import Desktop from "../Desktop/Desktop";



export default function Screen() {
    const [activeWindows, setActiveWindows] = useState([{id:1, window:<IntroWindow key={Math.random()}/>, zIndex:1, currentTop:false, icon:"icons/intro.png", title:"Intro", minimized:false, initHeight:200, initWidth:200, initX:20, initY:20}, 
    {id:2, window:<IntroWindow key={Math.random()}/>, zIndex:2, currentTop:true, title:"Intro2", icon:"icons/intro.png", minimized:false, initHeight:200, initWidth:200, initX:200, initY:100}]);
    const [windowNum, setWindowNum] = useState(2);
    const [windowRender, setWindowRender] = useState([])
    const [updateState, setUpdateState] = useState(Math.random())


    const update = ()=>{
        setUpdateState(Math.random())
    }

    const addWindow=(newWindow, title="untitled", initHeight=200, initWidth=200, initX=0, initY=0)=>{
        setWindowNum(windowNum+1)
        setActiveWindows(activeWindows.map(window => {
            return {...window, id:window.id, window:window.window, zIndex:window.zIndex, currentTop:false}
        }));
        setActiveWindows(...activeWindows, {id:windowNum, window:newWindow, zIndex:windowNum, currentTop:true, title:title, initHeight:initHeight, initWidth:initWidth, initX:initX, initY:initY});
        update()
    }

    const closeWindow=(id,e )=>{
        e.stopPropagation();
        setWindowNum(windowNum-1)

        let delElement;

        setActiveWindows(activeWindows.map(window => {

            if(window.id === id){
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
        update()

    }

    const clickWindow=(id, oldZIndex)=>{

        setActiveWindows(activeWindows.map(window => {

            if(window.id === id){
                return {...window, zIndex:windowNum, currentTop:true};
            }else{
                if(window.zIndex===windowNum){
                    return {...window, zIndex:oldZIndex, currentTop:false}
                }else{
                    return {...window, currentTop:false};
                }
            }
        }));

        update()
    }

    const handleMinimize = (id) =>{
        setActiveWindows(activeWindows.map(window => {

            if(window.id === id){

                return {...window, minimized:(window.minimized)?false:true, currentTop:(window.minimized)?false:true};
            }else{
                return window
            }
        }));

        update()
    }
    



    useEffect(() => {
        setWindowRender(activeWindows.map((window)=>{
        
          return (<Window
                    zIndex={window.zIndex}
                    id={window.id}
                    style={{zIndex:window.zIndex, visibility:(window.minimized)?"hidden":"visible"}} 
                    content={window.window} 
                    title={window.title} 
                    key={window.id} 
                    initHeight={window.initHeight}
                    initWidth={window.initWidth}
                    xPos={window.initX}
                    yPos={window.initY}
                    clickHandle={clickWindow}
                    handleClose={closeWindow}
                    handleMinimize={handleMinimize}
                    active={window.currentTop}
                    icon={window.icon}
                
                    />) ;
        }))

    }, [updateState, windowNum])
    
    return (
        <>
        <div style={{backgroundColor:"#008080", minHeight:'100vh',minWidth:'100vw', overflow:"hidden",}}>
        
           { windowRender}
        <Desktop/>
        </div>
        <Taskbar activeWindows={activeWindows} handleMinimize={handleMinimize} clickWindow={clickWindow}/>
        </> 

    );
}