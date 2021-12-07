import React from "react";
import Typing from "react-typing-animation";

const ConsoleLine = ({text, color='white'}) => {
    
    
    return (
        <Typing hideCursor={true}>
            {text}
        </Typing>
    );
}
export default ConsoleLine;