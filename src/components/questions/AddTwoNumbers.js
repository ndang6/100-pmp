import React, { useState } from 'react'
import './style.css'

function AddTwoNumbers() {
    const [template] = useState("public static void main(String[] args) {\n\tpublic int[] twoSum(int[] nums, int target) {\n\n\t}\n}");

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
    

    return (
        <div class="main">
            <textarea class="code" onKeyDown={handleKeyDown}>{template}</textarea>          
        </div>
    )
}

export default AddTwoNumbers


