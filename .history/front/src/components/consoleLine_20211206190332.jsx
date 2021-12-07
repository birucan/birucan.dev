import React from "react";
import Typing from "react-typing-animation";

const ConsoleLine = ({text, color='white'}) => {
    
    
    return (
        <Typing hideCursor={true} speed={50}>
            {text}
        </Typing>
    );
}
export default ConsoleLine;