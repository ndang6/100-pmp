import React, { useState } from 'react'
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
import "./Fibonacci.css"

function Fibonacci() {
    const [code1, setCode1] = useState(
        // eslint-disable-next-line no-multi-str
        "// Simple recursion\n\
public int fib(int N) {\n\
            if(N == 0) return 0; // fib(0) = 0\n\
            if(N <= 2) return 1; // base case\n\
            return fib(N-2) + fib(N-1);\n\
}\n\
    // Time Complexity: O(2^N)\n\
    // Space Complexity: O(N)\n\
    // fib(50) = 2^50 steps = 1,125,899,906,842,624 steps  "
    );

    const [code2, setCode2] = useState(
        // eslint-disable-next-line no-multi-str      
        "// Memoization approach\n\
public int fib(int N){\n\
          int[] cache = new int[N + 1];\n\
          return fib(N, cache);\n\
}\n\n\
private int fib(int N, int[] cache){\n\
    if(N == 0) return 0; // base case\n\
    if(N <= 2) return 1; // base case\n\
    \n\
    if(cache[N] != 0) return cache[N];\n\
    \n\
    cache[N] = fib(N - 2, cache) + fib(N - 1, cache);  \n\
    return cache[N];\n\
}\n\
    // Time Complexity: O(2N) = O(N)\n\
    // Space Complexity: O(N)\n"
    )

    return (
        <div className="fibonacciMain">
            <img class="prompt" src={require('./images/fibonacci_prompt.png')} alt="prompt"/> 

            <div className="solution1">
            <CodeMirror value={code1} 
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
                            setCode1(value);
                        }}
                        onChange={(editor, data, value) => {
                            setCode1(value);
                        }}
                    />
                    <img src={require('./images/fibonacci_tree.png')} alt="fibonacci tree"/>                 
            </div>
            <hr />  
            <div className="solution1">
            <CodeMirror value={code2} 
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
                            setCode2(value);
                        }}
                        onChange={(editor, data, value) => {
                            setCode2(value);
                        }}
                    />
                    <img src={require('./images/fibonacci_tree_2.png')} alt="fibonacci tree"/>                 
            </div>
        </div>
    )
}

export default Fibonacci
