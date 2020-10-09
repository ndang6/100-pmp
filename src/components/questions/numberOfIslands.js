import React from 'react'
import './style.css'
import Timer from '../Timer'
import CodeArea from '../CodeArea'

function numberOfIslands() {
    const template = "Class Solution {\n\tpublic int numIslands(char[][] grid) {\n\t\t\n\t}\n}"  

    return (
        <div class="main">
            <div class="main1">
                <p class="prompt">
                Given a grid of '1's (land) and '0's (water), count the number of islands.{"\n"}
                </p>

                <div class="example">
                    <p>Example 1{"\n"}
                    Input: grid = [{"\n"}
                        ["1","1","1","1","0"],{"\n"}
                        ["1","1","0","1","0"],{"\n"}
                        ["1","1","0","0","0"],{"\n"}
                        ["0","0","0","0","0"]{"\n"}
                        ]{"\n"}
                    Output: 1
                    </p>
                    <p>Example 2{"\n"}
                    Input: grid = [{"\n"}
                        ["1","1","1"],{"\n"}
                        ["0","1","0"],{"\n"}
                        ["1","1","1"],{"\n"}
                        ]{"\n"}
                    Output: 3
                    </p>
                </div>
                <CodeArea template={template}/>
                <Timer />
                <a href="https://leetcode.com/problems/number-of-islands/">Try it on leetcode.com</a> 
            </div>
            <div class="main2">
                <img src="/images/hashmap.jpg" alt="hash map" width="500" height="600"/>
            </div>
            
        </div>
    )
}

export default numberOfIslands
