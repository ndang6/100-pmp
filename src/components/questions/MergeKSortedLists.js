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

function MergeKSortedLists() {
    const name = "Merge k Sorted Lists"
    const hashTags = "#recursion"
    const headerSignature = "public static ListNode mergeKLists(ListNode[] lists)"

    // \n
    // eslint-disable-next-line no-multi-str
    const prompt = "You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.\n \
                    Merge all the linked-lists into one sorted linked-list and return it.\n"
                    
    const [code, setCode] = useState(
        "// lists = [[1,4,5],[1,3,4],[2,6]]\n// returns [1,1,2,3,4,4,5,6]\nclass Solution {\n\t" + headerSignature + "{\n\t\t\n\t}\n}\n"
    )

    // &lt;
    const hint1 = <p>public static ListNode merge(ListNode[] lists, int left, int right)</p>
    const hint2 = <p>if(left == right) return lists[left] ...</p>
    const hint3 = <p>ListNode l1 = merge(lists, left, mid);{"\n"}ListNode l2 = merge(lists, mid + 1, right);</p>

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
                        <button onClick={showHint1}>Hint 1</button>
                        { hint1Flag ? hint1 : null}
                    </div>
                    <div className="hint2">
                        <button onClick={showHint2}>Hint 2</button>
                        { hint2Flag ? hint2 : null}
                    </div>
                    <div className="hint3">
                        <button onClick={showHint3}>Hint 3</button>
                        { hint3Flag ? hint3 : null}
                    </div>                   
                </div>
            </div>          
        </div>
    )


}

export default MergeKSortedLists
