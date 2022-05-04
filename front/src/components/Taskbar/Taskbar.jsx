import React,{useState} from "react";


export default function Taskbar(){
    return(
        <div style={{   
            background:"#c0c0c0",
            height:35,
            width:"100vw",
            position: "fixed",
            bottom: 0,
            left: 0,
            borderTop: "2px solid #fff",
            zIndex:2147483600}}>

            <div className="startButtonContainer">
                <button style={{  
                    paddingLeft: 28,
                    paddingRight: 5,
                    height: 32,

                 }}>
                    <b>Start</b>
                </button>
            </div>

            

        </div>
    );
}