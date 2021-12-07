import React,{useState} from "react";
import Typing from "react-typing-animation";

const ConsoleLine = ({text, color='white', speed='fast'}) => {
    const style = {
        "margin-left": 5px;
        "padding-left": 5px;
    }
    return (
        <Typing hideCursor={true} speed={2}>
            {text}
        </Typing>
    );
}
export default ConsoleLine;