import React,{useState} from "react";
import Window from "../Window/Window";
import '98.css'


export default function Screen() {
      

    return (
        <div styles={{minHeight:'100vh', minWidth:'100vw'}} >
            <div styles={{position:'absolute', top: '300px', left: '400px' }} >
                <Window 
                content={
                <>
                    <b>Hello I'm Tomas Kavanagh, this will be my portafolio site, currently a WIP. for now you can check my github.</b>
                    <br/><br/>
                    <button style={{minWidth:"50%"}}onClick={()=>{ window.open("https://github.com/birucan");}}>
                        github
                    </button>
                </>

                } 
                title="Portafolio" 
                maximized={false}
                minimized={false}
                width={200}
                height={200}
                xPos={0}
                yPos={0}
                />
            </div>

        </div>

    
    );
}