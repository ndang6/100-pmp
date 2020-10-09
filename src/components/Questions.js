import React from 'react'
import './Questions.css'
import { Link } from 'react-router-dom';

function Questions() {
    var names = ["two-sum", "add-two-numbers", "number-of-islands", "trapping-rain-water", "reorder-data-in-log-files", "lru-cache"];
    // var names = ["two-sum", "add-two-numbers", "number-of-islands", "trapping-rain-water", "Reorder Data in Log Files", "LRU Cache", "Longest Palindromic Substring", "Maximum Subarray", "3Sum", "Longest Substring Without Repeating Characters", "Merge Two Sorted Lists", "Median of Two Sorted Arrays", "Decode Ways", "Merge k Sorted Lists", "Valid Parentheses", "Product of Array Except Self", "Consecutive Numbers Sum", "Integer to English Words", "Merge Intervals", "Verifying An Alien Dictionary", "Critical Connection in a Network", "Subarray Sum Equals K", "K Closest Points to Origin", "Next Permutation", "Reverse Linked List", "Top K Frequent Words", "Minimum Remove to Make Valid Parentheses", "Container With Most Water", "Decode String", "Maximal Rectangle", "Best Time To Buy and Sell Stock", "Coin Change", "Generate Parenthesis", "Minimum Window Substring", "Maximal Square", "Spiral Matrix", "Add Strings", "Meeting Rooms II", "Text Justification", "Burst Balloon", "Insert Delete GetRandom O(1)", "Reverse Integer", "Partition Labels", "Alien Dictionary", "Permutations", "Rotting Oranges", "Regular Expression Matching", "Strong Password Checker", "Kth Largest Element in an Array", "Search in Rotated Sorted Array"];

    return (
        <div className='column-field'>           
            {names.map(function(name, index){
                return(
                    <div className='box-field'>
                        <p className='marked'>Mark Reviewed</p>
                        <input type="checkbox" />
                        <p className='name'>{name}</p>
                        <Link to={'/' + name}><i class="fas fa-biking"></i></Link>
                    </div> 
                )
            })}                 
        </div>        
    )
}

export default Questions
