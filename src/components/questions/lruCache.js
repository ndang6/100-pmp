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

function LruCache() {
    const name = "LRU Cache"
    const hashTags = "#design #hash-map #doubly-linked list"
    const headerSignature = "public LRUCache(int capacity) {\n\n\t}\n\n\tpublic int get(int key) {\n\n\t}\n\n\tpublic void put(int key, int value) {\n\n\t}"

    // \n
    // eslint-disable-next-line no-multi-str
    const prompt = "Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.\n \
                    int get(int key) Return the value of the key if the key exists, otherwise return -1.\n \
                    void put(int key, int value). If the number of keys exceeds the capacity from this operation, evict the least recently used key."
                    
    const [code, setCode] = useState(
        // "class Solution {\n\t" + headerSignature + "{\n\t\t\n\t}\n}\n"
        "class Solution {\n\t" + headerSignature + "\n}"
    )

    // &lt;
    const hint1 = <p>Design a class Node (doubly-linked list){"\n"}Create a Head and a Tail node</p>
    const hint2 = <p>get(): remove(node), then insert(node)</p>
    const hint3 = <p>put(): remove in hashmap and linked list, then insert(new Node(key, value))</p>

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
                        </div>                                                                
                    </div>
                    
                    <div class="foot">                      
                        <button onClick={() => { navigator.clipboard.writeText(code) }}>Copy Your Code</button>
                        <a class="leetcode" target="_blank" rel="noopener noreferrer" href={hyperLink}>Test it on leetcode.com</a> 
                        <a class="leetcode" target="_blank" rel="noopener noreferrer" href={solution}>Suggested Solution</a> 
                    </div>
                
                </div>
                <div class="main2">
                    <img src={imgPath} alt="hash map"/>
                    <img src="/images/lru-cache-2.png" alt="hash map"/>
                
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

export default LruCache
