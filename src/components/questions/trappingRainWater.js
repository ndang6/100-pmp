import React from 'react'
import './style.css'
import Timer from '../Timer'
import CodeArea from '../CodeArea'

function trappingRainWater() {
    const template = "Class Solution {\n\tpublic int trap(int[] height) {\n\t\t\n\t}\n}"  

    return (
        <div class="main">
            <div class="main1">
                <p class="prompt">
                Given n non-negative integers representing an elevation map where the width of each bar is 1,{"\n"} 
                compute how much water it is able to trap after raining.
                </p>

                <div class="example">
                    <p>Example {"\n"}
                    Input: [0,1,0,2,1,0,1,3,2,1,2,1]
                    Output: 6
                    </p>
                </div>
                <CodeArea template={template}/>
                <Timer />
                <a href="https://leetcode.com/problems/trapping-rain-water/">Try it on leetcode.com</a> 
            </div>
            <div class="main2">
                <img src="/images/trapping-rain-water.png" alt="hash map" width="500" height="600"/>
            </div>
            
        </div>
    )
}

export default trappingRainWater
