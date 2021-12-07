import React from "react";
import Typing from "react-typing-animation";

const ConsoleLine = ({text, color='white'}) => {
    
    
    return (
        <Typing hideCursor={true} speed={10}>
            {text}
        </Typing>
    );
}
export default ConsoleLine;