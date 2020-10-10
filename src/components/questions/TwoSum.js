import React, { useState } from 'react'
import './style.css'
// import CodeArea from '../CodeArea'
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

function TwoSum() {
    const name = "Two Sum"
    const hyperLink = "https://leetcode.com/problems/two-sum/"
    const solution = "https://leetcode.com/problems/two-sum/solution/"
    const hashTags = "#array #hash-map"
    const [code, setCode] = useState(
        "// nums = [2,7,11,15], target = 9\n// returns [0,1]\nclass Solution {\n\tpublic int[] twoSum(int[] nums, int target) {\n\t\t\n\t}\n}\n"
    )

    return (
        <div>
            <h1 class="title">{name}</h1>
            <h5 class="tag">{hashTags}</h5>

            <div class = "main">
                <div class="main1">              
                    <p class="prompt">
                        Given nums and  target, return indices of the two numbers such that they add up to target.{"\n"}
                        This problem has exactly one solution. Cannot use the same element twice.{"\n"}
                        You can return the answer in any order.
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

                    <Timer /> 
                    <div class="foot">                      
                        <button onClick={() => { navigator.clipboard.writeText(code) }}>Copy Your Code</button>
                        <a class="leetcode" target="_blank" rel="noopener noreferrer" href={hyperLink}>Test it on leetcode.com</a> 
                        <a class="leetcode" target="_blank" rel="noopener noreferrer" href={solution}>Solution</a> 
                    </div>
                
                </div>
                <div class="main2">
                    <img src="/images/two-sum.png" alt="hash map" width="500" height="600"/>
                
                    <div class="hint1">
                        <button>Hint 1</button>
                        <p>This is hint 1</p>
                    </div>
                    <div class="hint2">
                        <button>Hint 2</button>
                        <p>This is hint 2</p>
                    </div>
                    <div class="hint3">
                        <button>Hint 3</button>
                        <p>This is hint 3</p>
                    </div>                   
                </div>
            </div>          
        </div>
    )
}

export default TwoSum
