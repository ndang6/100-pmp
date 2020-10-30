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
import './GraphTraversal.css'

function GraphTraversal() {
    const [code1, setCode1] = useState(
        // eslint-disable-next-line no-multi-str
        "// Graph.java\n\
public class Graph {\n\
    private int numVertices;\n\
    private LinkedList<Integer> adjList[];\n\
    \n\
    public Graph(int num){\n\
        this.numVertices = num;\n\
        adjList = new LinkedList[num];\n\n\
        for(int i = 0; i < num; i++){\n\
            adjList[i] = new LinkedList<>();\n\
        }\n\
    }\n\
    \n\
    public void addEdge(int list, int num){\n\
        adjList[list].add(num);\n\
    }\n\
    \n\
    public void DFS(int start){\n\
        boolean visited[] = new boolean[this.numVertices];\n\
        Stack<Integer> stack = new Stack<>();\n\
        stack.push(start);\n\n\
        while(!stack.isEmpty()){\n\
            int current = stack.pop();\n\
            if(!visited[current]){\n\
                System.out.println(current);\n\
                visited[current] = true;\n\
            }\n\
            for(int dest: adjList[current]){\n\
                if(!visited[dest])\n\
                    stack.push(dest);\n\
            }\n\
        }\n\
    }\n\
    \n\
    public void BFS(int start){\n\
        boolean visited[] = new boolean[this.numVertices];\n\
        Queue<Integer> queue = new LinkedList<>();\n\
        queue.push(start);\n\n\
        while(!queue.isEmpty()){\n\
            int current = queue.poll();\n\
            if(!visited[current]){\n\
                System.out.println(current);\n\
                visited[current] = true;\n\
            }\n\
            for(int dest: adjList[current]){\n\
                if(!visited[dest])\n\
                queue.add(dest);\n\
            }\n\
        }\n\
    }\n\
        "      
    )

    const [code2, setCode2] = useState(
        // eslint-disable-next-line no-multi-str
        "// Test.java\n\
public class Test{\n\
    public static void main(String[] args){\n\
        Graph g = new Graph(6);\n\n\
        g.addEdge(0, 1);\n\
        g.addEdge(0, 4);\n\
        g.addEdge(0, 5);\n\
        g.addEdge(1, 4);\n\
        g.addEdge(1, 3);\n\
        g.addEdge(2, 1);\n\
        g.addEdge(3, 4);\n\
        g.addEdge(3, 2);\n\n\
        g.DFS(0);\n\
        g.BFS(0);\n\
        "
    )
    const hint1 = <p>use Stack{"\n"}0 5 4 1 3 2</p>
    const hint2 = <p>use Queue{"\n"}0 1 4 5 3 2</p>

    const [hint1Flag, setHint1] = useState(false);
    const [hint2Flag, setHint2] = useState(false);

    const showHint1 = () => setHint1(!hint1Flag);
    const showHint2 = () => setHint2(!hint2Flag);

    return (
        <div className="graphTraversalMain">
    
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
            <img src="/images/graphTraversal.png" alt="hash map"/>
            <div class="hint1">
                        <button onClick={showHint1}>Depth First Search</button>
                        { hint1Flag ? hint1 : null}
                    </div>
                    <div class="hint2">
                        <button onClick={showHint2}>Breadth First Search</button>
                        { hint2Flag ? hint2 : null}
                    </div>
        </div>
        
        </div>
    )
}

export default GraphTraversal
