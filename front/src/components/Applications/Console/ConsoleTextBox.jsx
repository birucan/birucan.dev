import React,{useState} from "react";

const ConsoleLine = ({dir}) => {
    const [text, settext] = useState('')
    const containerStyle ={
        display: "grid", 
        gridTemplateColumns:" 1fr 1fr", 
        gap: "0px 2px" 
      }
    return (
        <div style={containerStyle}>
            <input/>
        </div>
        
    );
}
export default ConsoleLine;