import React,{useState} from "react";

const ConsoleLine = ({dir}) => {
    const [text, settext] = useState('')
    const containerStyle ={
        display: "grid", 
        grid-template-columns:" 1fr 1fr", 
        gap: "0px 2px"; 
      }
    return (
        <div style={{}}>
            <input/>
        </div>
        
    );
}
export default ConsoleLine;