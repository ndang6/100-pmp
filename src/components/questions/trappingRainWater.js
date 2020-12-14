import React, { useState } from 'react'
import './style.scss'
import { Controlled as CodeMirror } from "react-codemirror2";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/abcdef.css";
import "codemirror/mode/clike/clike";
import "codemirror/addon/hint/show-hint";
import "codemirror/addon/comment/comment";
import "codemirror/addon/hint/javascript-hint";
import "codemirror/addon/hint/show-hint.css";
import "codemirror/keymap/sublime";
import "codemirror/addon/edit/closebrackets";
import "codemirror/addon/edit/closetag";
import "codemirror/addon/fold/foldcode";
import "codemirror/addon/fold/foldgutter";
import "codemirror/addon/fold/brace-fold";
import "codemirror/addon/fold/comment-fold";
import "codemirror/addon/fold/foldgutter.css";
import Timer from '../Timer'

function TrappingRainWater() {
    const name = "Trapping Rain Water"
    const hashTags = "#two-pointers"
    const headerSignature = "public int trap(int[] height)"

    // \n
    // eslint-disable-next-line no-multi-str
    const prompt = "Given n non-negative integers representing an elevation map where the width of each bar is 1\n \
                    Compute how much water it is able to trap after raining."
                    
    const [code, setCode] = useState(
        "// heights = [2,0,1,0,3,1,0,2,2,0,5]\n// returns 15\nclass Solution {\n\t" + headerSignature + "{\n\t  \n\t}\n}\n"
    )

    // &lt;
    const hint1 = <p>leftMax = Math.max(leftMax, height[i]);{"\n"}rightMax = Math.max(rightMax, height[j]);</p>
    const hint2 = <p>if(leftMax &lt;= rightMax)...</p>
    const hint3 = <p>There is no hint 3</p>

    /* --DO NOT MODIFY--------------------------------------------------------------------------------------- */
    const [hint1Flag, setHint1] = useState(false);
    const [hint2Flag, setHint2] = useState(false);
    const [hint3Flag, setHint3] = useState(false);

    const showHint1 = () => setHint1(!hint1Flag);
    const showHint2 = () => setHint2(!hint2Flag);
    const showHint3 = () => setHint3(!hint3Flag);

    var fontSize = 17

    const increaseFontSize = () => {
        fontSize = fontSize + 1
        document.getElementsByClassName("main")[0].getElementsByClassName("main1")[0].children[1].style.fontSize = fontSize + "px";
    }

    const decreaseFontSize = () => {
        fontSize = fontSize - 1
        document.getElementsByClassName("main")[0].getElementsByClassName("main1")[0].children[1].style.fontSize = fontSize + "px";       
    }

    const [darkMode, setDarkMode] = useState(false);
    const toggle = (e) => {
        if(!darkMode){
            document.body.style.backgroundColor = "black";
            document.body.style.color = "white";
            setDarkMode(true);
        }
        else{
            document.body.style.backgroundColor = "white";
            document.body.style.color = "black";
            setDarkMode(false);
        }    
    }


    const formattedName = name.toLowerCase().replaceAll(" ", "-")
    const hyperLink = "https://leetcode.com/problems/" + formattedName
    const solution =  "https://github.com/ndang6/code-workout-solutions/blob/main/" + formattedName + ".java"
    const imgPath = "/images/" + formattedName + ".png"
    
    return (
        <div>
            <h1 class="title">{name}</h1>
            <h5 class="tag">{hashTags}</h5>

            <div class = "main">
                <div class="main1">   
                    <p class="prompt">
                        {prompt}
                    </p>   
                    <CodeMirror value={code} 
                        options = {{
                            mode: "text/x-java",
                            theme: "abcdef",
                            lineWrapping: true,
                            smartIndent: true,
                            lineNumbers: true,                            
                            gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],
                            autoCloseTags: true,
                            keyMap: "sublime",
                            matchBrackets: true,
                            autoCloseBrackets: true,
                            extraKeys: {
                                "Ctrl-/": "toggleComment"
                            }
                        }}
                        onBeforeChange={(editor, data, value) => {
                            setCode(value);
                        }}
                        onChange={(editor, data, value) => {
                            setCode(value);
                        }}
                    />   
                    
                    <div class="buttons">
                        <Timer />
                        <div>
                            <button onClick={increaseFontSize}>+</button>  
                            <button onClick={decreaseFontSize}>-</button>
                            <button className="btn-darkMode" onClick={toggle}>Dark Mode</button>
                        </div>                                                                
                    </div>
                    
                    <div class="foot">                      
                        <button onClick={() => { navigator.clipboard.writeText(code) }}>Copy Your Code</button>
                        <a class="leetcode" target="_blank" rel="noopener noreferrer" href={hyperLink}>Test it on leetcode.com</a> 
                        <a class="leetcode" target="_blank" rel="noopener noreferrer" href={solution}>Suggested Solution</a> 
                    </div>
                
                </div>
                <div class="main2">
                    <img src={imgPath} alt="hash map" width="500" height="600"/>
                
                    <div class="hint1">
                        <button onClick={showHint1}>Hint 1</button>
                        { hint1Flag ? hint1 : null}
                    </div>
                    <div class="hint2">
                        <button onClick={showHint2}>Hint 2</button>
                        { hint2Flag ? hint2 : null}
                    </div>
                    <div class="hint3">
                        <button onClick={showHint3}>Hint 3</button>
                        { hint3Flag ? hint3 : null}
                    </div>                   
                </div>
            </div>          
        </div>
    )


}

export default TrappingRainWater
