import React from 'react'
import './style.css'
import CodeArea from '../CodeArea'

function LruCache() {
    const template = "Class Solution {\n\tpublic int[] twoSum(int[] nums, int target) {\n\t\t\n\t}\n}"  
    const name = "LRU Cache"
    const hyperLink = "https://leetcode.com/problems/lru-cache/"
    const hashTags = "#hash-table #doubly linked list"

    return (
        <div>
            <h1 class="title">{name}</h1>
            <h5 class="tag">{hashTags}</h5>
            <div class = "main">
                <div class="main1">            
                    <p class="prompt">
                    Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.{"\n\n"}
                    LRUCache(int capacity) Initialize the LRU cache with positive size capacity.{"\n"}
                    int get(int key) Return the value of the key if the key exists, otherwise return -1.{"\n"}
                    void put(int key, int value) Update the value if the key exists. Otherwise, add to the cache.{"\n"} 
                    If the number of keys exceeds the capacity, evict the least recently used key.
                    </p>   
                                 
                    <CodeArea template={template}/>                   
                    <a href={hyperLink}>Test it on leetcode.com</a> 
                </div>
                <div class="main2">
                     <div class="example">
                        <p>Example</p>
                    </div>

                    <img src="/images/lru-cache.png" alt="hash map" width="500" height="600"/>
                </div>
            </div>          
        </div>
    )
}

export default LruCache
