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
import './TreeTraversal.css'

function TreeTraversal() {
    const [code1, setCode1] = useState(
        // eslint-disable-next-line no-multi-str
        "// Node.java\n\
public class Node{\n\
    public String name;\n\
    public Node left;\n\
    public Node right;\n\
    \n\
    public Node(String name){\n\
        this.name = name;\n\
    }\n\
    \n\
    public void setLeft(Node child){\n\
        this.left = child;\n\
    }\n\
    \n\
    public void setRight(Node child){\n\
        this.right = child;\n\
    }\n\
    \n\
    public static void inOrderTraversal(Node node){\n\
        if(node == null)\n\
            return;\n\n\
        inOrderTraversal(node.left);\n\
        System.out.println(node.name);\n\
        inOrderTraversal(node.right);\n\
    }\n\
    \n\
    public static void preOrderTraversal(Node node){\n\
        if(node == null)\n\
            return;\n\n\
        System.out.println(node.name);\n\
        preOrderTraversal(node.left);\n\
        preOrderTraversal(node.right);\n\
    }\n\
    \n\
    public static void postOrderTraversal(Node node){\n\
        if(node == null)\n\
            return;\n\n\
        postOrderTraversal(node.left);\n\
        postOrderTraversal(node.right);\n\
        System.out.println(node.name);\n\
    }\n}\
        "      
    )

    const [code2, setCode2] = useState(
        // eslint-disable-next-line no-multi-str
        "// Test.java\n\
public class Test{\n\
    public static void main(String[] args){\n\
        Node g = new Node(\"g\");\n\
        Node d = new Node(\"d\");\n\
        d.setRight(g);\n\
        \n\
        Node e = new Node(\"e\");\n\
        Node b = new Node(\"b\");\n\
        b.setLeft(d);\n\
        b.setRight(e);\n\
        \n\
        Node f = new Node(\"f\");\n\
        Node c = new Node(\"c\");\n\
        c.setLeft(f);\n\
        \n\
        Node a = new Node(\"a\");\n\
        a.setLeft(b);\n\
        a.setRight(c);\n\
        \n\
        Node.inOrderTraversal(a);\n\
        Node.preOrderTraversal(a);\n\
        Node.postOrderTraversal(a);\n}\
        "
    )
    const hint1 = <p>left-self-right{"\n"}d g b e a f c{"\n"}d &lt; g &lt; b &lt; e &lt; a &lt; f &lt; c</p>
    const hint2 = <p>self-left-right{"\n"}a b d g e c f</p>
    const hint3 = <p>left-right-self{"\n"}g d e b f c a</p>

    const [hint1Flag, setHint1] = useState(false);
    const [hint2Flag, setHint2] = useState(false);
    const [hint3Flag, setHint3] = useState(false);

    const showHint1 = () => setHint1(!hint1Flag);
    const showHint2 = () => setHint2(!hint2Flag);
    const showHint3 = () => setHint3(!hint3Flag)

    return (
        <div className="treeTraversalMain">
    
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

        <div>
            <img src="/images/treeTraversal.png" alt="hash map"/>
            <div class="hint1">
                        <button onClick={showHint1}>In-order traversal (ascending traversal)</button>
                        { hint1Flag ? hint1 : null}
                    </div>
                    <div class="hint2">
                        <button onClick={showHint2}>Pre-order traversal</button>
                        { hint2Flag ? hint2 : null}
                    </div>
                    <div class="hint3">
                        <button onClick={showHint3}>Post-order traversal</button>
                        { hint3Flag ? hint3 : null}
                    </div> 
        </div>
        
        </div>
    )
}

export default TreeTraversal
