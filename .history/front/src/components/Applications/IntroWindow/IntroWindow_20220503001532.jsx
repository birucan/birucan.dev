import React,{useState} from "react";
import Window from "../../Window/Window";
import '98.css'


export default function IntroWindow() {


    return (

                <>
                    <p style={{ textAlign: "center" }}>Hello I'm Tomas Kavanagh, this will be my portafolio site, currently a WIP. for now you can check my github.</p>
                    <br/><br/>

                    <div className="field-row" style={{ justifyContent: "center" }}>
                    <button style={{left:100 }}onClick={()=>{ window.open("https://github.com/birucan");}}>
                        github
                    </button>
                 </div>

                </>

                } 
                maximized={false}
                minimized={false}
                width={200}
                height={200}
                xPos={0}
                yPos={0}
                />
     

  

    
    );
    IntroWindow.displayName = "Intro"
}