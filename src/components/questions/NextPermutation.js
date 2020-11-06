import React, { useState } from 'react'
import './style.css'
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

function NextPermutation() {
    const name = "Next Permutation"
    const hashTags = ""
    const headerSignature = "public void nextPermutation(int[] nums)"

    // \n
    // eslint-disable-next-line no-multi-str
    const prompt = "Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers.\n \
                    If such an arrangement is not possible, it must rearrange it as the lowest possible order.\n"
                    
    const [code, setCode] = useState(
        "// nums = [2,3,6,5,4,1]\n// returns [2,4,1,3,5,6]\nclass Solution {\n\t" + headerSignature + "{\n\t\t\n\t}\n}\n"
    )

    // &lt;
    const hint1 = <p>Step 1, from right to left, find the first number which not increase in a ascending order. In this case which is 3.
    {"\n"}Step 2, here we can have two situations:  
    {"\n"}We cannot find the number, all the numbers increasing in a ascending order. This means this permutation is the last permutation, we need to rotate back to the first permutation. So we reverse the whole array, for example, 6,5,4,3,2,1 we turn it to 1,2,3,4,5,6.
    {"\n\n"}We can find the number, then the next step, we will try to find the closest number which is larger than 3 on its right side. In this case it is 4.
    Then we swap 3 and 4, the list turn to 2,4,6,5,3,1.
    {"\n"}Step 3, we sort the numbers at the right of 4, we finally get 2,4,1,3,5,6.</p>
    // const hint2 = <p>Hint 2</p>
    // const hint3 = <p>Hint 3</p>

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

    const formattedName = name.toLowerCase().replaceAll(" ", "-")
    const hyperLink = "https://leetcode.com/problems/" + formattedName
    const solution =  "https://github.com/ndang6/code-workout-solutions/blob/main/" + formattedName + ".java"
    const imgPath = "/images/" + formattedName + ".png"
    
    return (
        <div>
            <h1 className="title">{name}</h1>
            <h5 className="tag">{hashTags}</h5>

            <div className = "main">
                <div className="main1">   
                    <p className="prompt">
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
                    
                    <div className="buttons">
                        <Timer />
                        <div>
                            <button onClick={increaseFontSize}>+</button>  
                            <button onClick={decreaseFontSize}>-</button>
                        </div>                                                                
                    </div>
                    
                    <div className="foot">                      
                        <button onClick={() => { navigator.clipboard.writeText(code) }}>Copy Your Code</button>
                        <a className="leetcode" target="_blank" rel="noopener noreferrer" href={hyperLink}>Test it on leetcode.com</a> 
                        <a className="leetcode" target="_blank" rel="noopener noreferrer" href={solution}>Suggested Solution</a> 
                    </div>
                
                </div>
                <div className="main2">
                    <img src={imgPath} alt="hash map" width="500" height="600"/>
                
                    <div className="hint1">
                        <button onClick={showHint1}>Hint</button>
                        { hint1Flag ? hint1 : null}
                    </div>

                    <iframe 
                        title="next-permutation"
                        width="560" 
                        height="315" 
                        src="https://www.youtube.com/embed/quAS1iydq7U" 
                        FrameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        AllowFullScreen>

                    </iframe>
                    {/* <div className="hint2">
                        <button onClick={showHint2}>Hint 2</button>
                        { hint2Flag ? hint2 : null}
                    </div>
                    <div className="hint3">
                        <button onClick={showHint3}>Hint 3</button>
                        { hint3Flag ? hint3 : null}
                    </div>                    */}
                </div>
            </div>          
        </div>
    )


}

export default NextPermutation
