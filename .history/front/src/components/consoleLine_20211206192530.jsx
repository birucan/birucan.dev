import React,{setState} from "react";
import Typing from "react-typing-animation";

const ConsoleLine = ({text, color='white', speed='fast'}) => {
    const [displaySpeed, setdisplaySpeed] = useState(1)
    if(speed='slow'){
        setdisplaySpeed
    }
    
    return (
        <Typing hideCursor={true} speed={1}>
            {text}
        </Typing>
    );
}
export default ConsoleLine;