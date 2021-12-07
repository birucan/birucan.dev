import React,{useState} from "react";
import Typing from "react-typing-animation";

const ConsoleLine = ({text, color='white', speed='fast'}) => {
    const styles = {
        "margin-left": "5px",
        "padding-left": "5px"
    };
    return (
        <Typing style={styles} hideCursor={true} speed={2}>
            <h6>{text}</h6>
        </Typing>
    );
}
export default ConsoleLine;