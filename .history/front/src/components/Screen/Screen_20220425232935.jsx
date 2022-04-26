import React,{useState} from "react";
import Window from "../Window/Window";
import '98.css'


export default function Screen() {
      

    return (
        <div styles={{minHeight:'100vh', minWidth:'100vw'}} >
            <div styles={{position:'absolute', top: '300px', left: '400px' }} >
                <Window 
                content={<b>Hello I'm Tomas Kavanagh, this will be my portafolio site, currently a WIP.</b>} 
                title="Portafolio" 
                maximized={false}
                minimized={false}
                width={100}
                height={100}
                xPos={0}
                yPos={0}
                />
            </div>

        </div>

    
    );
}