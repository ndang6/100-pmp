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

function LongestPalindromicSubstring() {
    const name = "Longest Palindromic Substring"
    const hashTags = "#string #helper-method"
    const headerSignature = "public String longestPalindrome(String s)"

    // \n
    // eslint-disable-next-line no-multi-str
    const prompt = "Given a string s, return the longest palindromic substring in s"
                    
    const [code, setCode] = useState(
        "// s = \"babad\"\n// returns \"bab\"\nclass Solution {\n\t" + headerSignature + "{\n\t\t\n\t}\n}\n"
    )

    // &lt;
    const hint1 = <p>private String extend(String s, int i, int j)</p>
    const hint2 = <p>String s1 = extend(s, i, i);{"\n"}String s2 = extend(s, i, i + 1);</p>
    const hint3 = <p>if (s1.length() &gt; max.length()) max = s1;{"\n"}if (s2.length() &gt; max.length()) max = s2;</p>

    /* --DO NOT MODIFY--------------------------------------------------------------------------------------- */
    const [hint1Flag, setHint1] = useState(false);
    const [hint2Flag, setHint2] = useState(false);
    const [hint3Flag, setHint3] = useState(false);

    const showHint1 = () => setHint1(!hint1Flag);
    const showHint2 = () => setHint2(!hint2Flag);
    const showHint3 = () => setHint3(!hint3Flag);

    const hyperLink = "https://leetcode.com/problems/" + name.toLowerCase().replace(" ", "-")
    const solution = hyperLink + "/solution"
    const imgPath = "/images/" + name.toLowerCase().replaceAll(" ", "-") + ".png"

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
                    <Timer /> 
                    <div class="foot">                      
                        <button onClick={() => { navigator.clipboard.writeText(code) }}>Copy Your Code</button>
                        <a class="leetcode" target="_blank" rel="noopener noreferrer" href={hyperLink}>Test it on leetcode.com</a> 
                        <a class="leetcode" target="_blank" rel="noopener noreferrer" href={solution}>Solution</a> 
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

export default LongestPalindromicSubstring
