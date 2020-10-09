import React from 'react'
import './style.css'
import Timer from '../Timer'
import CodeArea from '../CodeArea'

function reorderDataInLogFiles() {
    const template = "Class Solution {\n\tpublic String[] reorderLogFiles(String[] logs) {\n\t\t\n\t}\n}"  

    return (
        <div class="main">
            <div class="main1">
                <p class="prompt">
                You have an array of logs.  Each log is a space delimited string of words.{"\n"}
                For each log, the first word in each log is an alphanumeric identifier.  Then, either:{"\n"}
                Each word after the identifier will consist only of lowercase letters, or;{"\n"}
                Each word after the identifier will consist only of digits.{"\n"}
                We will call these two varieties of logs letter-logs and digit-logs. {"\n"} 
                It is guaranteed that each log has at least one word after its identifier.{"\n"}
                Reorder the logs so that all of the letter-logs come before any digit-log. {"\n"} 
                The letter-logs are ordered lexicographically ignoring identifier, with the identifier used in case of ties. {"\n"} 
                The digit-logs should be put in their original order.{"\n"}
                Return the final order of the logs.
                </p>

                <div class="example">
                    <p>Example 1{"\n"}
                    Input: logs = ["dig1 8 1 5 1","let1 art can","dig2 3 6","let2 own kit dig","let3 art zero"]{"\n"}
                    Output: ["let1 art can","let3 art zero","let2 own kit dig","dig1 8 1 5 1","dig2 3 6"]
                    </p>

                </div>
                <CodeArea template={template}/>
                <Timer />
                <a href="https://leetcode.com/problems/two-sum/">Try it on leetcode.com</a> 
            </div>
            <div class="main2">
                <img src="/images/hashmap.jpg" alt="hash map" width="500" height="600"/>
            </div>
            
        </div>
    )
}

export default reorderDataInLogFiles
