import React,{useState} from "react";
import Typing from "react-typing-animation";

const ConsoleLine = ({text, color='white', speed='fast'}) => {
    
    const [displaySpeed, setdisplaySpeed] = useState(S1);

    if(speed==='slow'){
        setdisplaySpeed(1000)
    }else if(speed==='medium'){
        setdisplaySpeed(500)
    }else if(typeof speed=== 'number'){
        setdisplaySpeed(speed)
    }else{
        setdisplaySpeed(1)
    }
    
    return (
        <Typing hideCursor={true} speed={displaySpeed}>
            {text}
        </Typing>
    );
}
export default ConsoleLine;