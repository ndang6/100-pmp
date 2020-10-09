import React from 'react'
import './style.css'
import Timer from '../Timer'
import CodeArea from '../CodeArea'

function addTwoNumbers() {
    const template = "Class Solution {\n\tpublic ListNode addTwoNumbers(ListNode l1, ListNode l2) {\n\t\t\n\t}\n}"  
    const name = "Add Two Numbers"
    const hyperLink = "https://leetcode.com/problems/add-two-numbers/"
    const hashTags = "#hash-map"

    return (
        <div>
            <h1 class="title">{name}</h1>
            <h5 class="tag">{hashTags}</h5>
            <div class = "main">
                <div class="main1">              
                    <p class="prompt">
                    You are given two non-empty linked lists representing two non-negative integers.{"\n"}
                    The digits are stored in reverse order, and each of their nodes contains a single digit.{"\n"}
                    Add the two numbers and return the sum as a linked list.{"\n"}
                    You may assume the two numbers do not contain any leading zero, except the number 0 itself.
                    </p>  
                                 
                    <CodeArea template={template}/>                   
                    <a href={hyperLink}>Test it on leetcode.com</a> 
                </div>
                <div class="main2">
                <div class="example">
                    <p>Example 1{"\n"}
                    Input:{"\n"}
                    l1 = [2,4,3], l2 = [5,6,4]{"\n"}
                    Output: [7,0,8]{"\n"}
                    Explanation: 342 + 465 = 807.
                    </p>
                </div>

                    <img src="/images/add-two-numbers.jpg" alt="hash map" width="500" height="600"/>
                </div>
            </div>          
        </div>
    )

}

export default addTwoNumbers


