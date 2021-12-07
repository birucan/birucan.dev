import React from "react";
import Typing from "react-typing-animation";

const ConsoleLine = ({text, color='white'}) => {
    
    
    return (
        <Typing>
            {text}
        </Typing>
    );
}
export default ConsoleLine;