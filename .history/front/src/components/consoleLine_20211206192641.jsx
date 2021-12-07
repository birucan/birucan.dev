import React,{useState} from "react";
import Typing from "react-typing-animation";

const ConsoleLine = ({text, color='white', speed='fast'}) => {
    const [displaySpeed, setdisplaySpeed] = useState(1);

    if(speed==='slow'){
        setdisplaySpeed(1000)
    }elseif(speed==='medium'){
        
    }
    
    return (
        <Typing hideCursor={true} speed={1}>
            {text}
        </Typing>
    );
}
export default ConsoleLine;