import React from 'react'
import './style.css'

function TwoSum() {
    const template = "Class Solution {\n\tpublic int[] twoSum(int[] nums, int target) {\n\n\t}\n}"

    const handleKeyDown = (event) => {
        if(event.keyCode === 9){
            var text= event.target.value;
            var start = event.target.selectionStart;
            var end = event.target.selectionEnd;
            var newText = text.substring(0, start) + "\t" + text.substring(end);
            event.target.value = newText;

            event.target.selectionStart = start + 1;
            event.target.selectionEnd = start + 1;
            event.preventDefault();
        }          
    };

    return (
        <div class="main">
            <div class="main1">
                <p class="prompt">
                    Given nums and  target, return indices of the two numbers such that they add up to target{"\n"}
                    This problem has exactly one solution. Cannot use the same element twice{"\n"}
                    You can return the answer in any order
                </p>

                <div class="example">
                    <p>Example 1{"\n"}
                        Input: nums = [2,7,11,15], target = 9{"\n"}
                        Output: [0,1]{"\n"}
                        Explain: Because nums[0] + nums[1] == 9, we return [0, 1].
                    </p>
                    <p>Example 2{"\n"}
                        Input: nums = [3,2,4], target = 6{"\n"}
                        Output: [1,2]
                    </p>
                    <p>Example 3{"\n"}
                        Input: nums = [3,3], target = 6{"\n"}
                        Output: [0,1]
                    </p>
                </div>

                <textarea class="code" onKeyDown={handleKeyDown} spellcheck="false">{template}</textarea>

                <a href="https://leetcode.com/problems/two-sum/">Try it on leetcode.com</a> 
            </div>
            <div class="main2">
                <img src="/images/hashmap.jpg" alt="hash map" width="500" height="600"/>
            </div>
            
        </div>
    )
}

export default TwoSum
