import React, { useState } from 'react'
import './CodeArea.css'
import Timer from './Timer'

function CodeArea(props) {
    const [codeValue, setCodeValue] = useState(props.template);

    const handleKeyDown = (event) => {
        if(event.keyCode === 9){
            var text= event.target.value;
            var start = event.target.selectionStart;
            var end = event.target.selectionEnd;
            var newText = text.substring(0, start) + "\t" + text.substring(end);
            event.target.value = newText;

            event.target.selectionStart = start + 1;
            event.target.selectionEnd = start + 1;
            event.preventDefault();
        }          
    };

    const handleChange = (event) => {
        setCodeValue(event.target.value);
    }

    return (
        <div>
            <Timer /> 
            <button onClick={() => { navigator.clipboard.writeText(codeValue) }}>Copy</button>
        </div>
    )
}

export default CodeArea
