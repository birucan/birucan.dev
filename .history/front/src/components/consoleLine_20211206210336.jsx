import React,{useState} from "react";
import Typing from "react-typing-animation";

const ConsoleLine = ({text, color='white', speed='fast'}) => {
    
    return (
        <Typing hideCursor={true} speed={2}>
            {text}
        </Typing>
    );
}
export default ConsoleLine;