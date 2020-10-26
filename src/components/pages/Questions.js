import React, { useState, useEffect } from 'react'
import './Questions.css'
import { Link } from 'react-router-dom';
import { projectFirestore } from '../../firebase';

// 

function Questions() {
    // var namesComplete = ["Two Sum", "Add Two Numbers", "Number Of Islands", "Trapping Rain Water", "Reorder Data in Log Files", "LRU Cache", "Longest Palindromic Substring"]
    var namesInComplete = ["Maximum Subarray", "3Sum", "Longest Substring Without Repeating Characters", "Merge Two Sorted Lists", "Median of Two Sorted Arrays", "Decode Ways", "Merge k Sorted Lists", "Valid Parentheses", "Product of Array Except Self", "Consecutive Numbers Sum", "Integer to English Words", "Merge Intervals", "Verifying An Alien Dictionary", "Critical Connection in a Network", "Subarray Sum Equals K", "K Closest Points to Origin", "Next Permutation", "Reverse Linked List", "Top K Frequent Words", "Minimum Remove to Make Valid Parentheses", "Container With Most Water", "Decode String", "Maximal Rectangle", "Best Time To Buy and Sell Stock", "Coin Change", "Generate Parenthesis", "Minimum Window Substring", "Maximal Square", "Spiral Matrix", "Add Strings", "Meeting Rooms II", "Text Justification", "Burst Balloon", "Insert Delete GetRandom O(1)", "Reverse Integer", "Partition Labels", "Alien Dictionary", "Permutations", "Rotting Oranges", "Regular Expression Matching", "Strong Password Checker", "Kth Largest Element in an Array", "Search in Rotated Sorted Array"];

    const [marks, setMarks] = useState([])
    const [pending, setPending] = useState(true);
    
    useEffect(() => {
        projectFirestore.collection('marks').onSnapshot((snapshot) => {
            const newMarks = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }))
            setMarks(newMarks)
            setPending(false);
        })      
    }, [])

    // if(pending){
    //     return []
    // }

    const markAsReviewed = (e) => {
        projectFirestore.collection('marks').doc(e.target.value).update({reviewed: true})
    }

    const unMark = (e) => {
        projectFirestore.collection('marks').doc(e.target.value).update({reviewed: false})
    }

    return (
        <div className='column-field'>
            {marks.map(function(mark, index) { 
                let name = mark.title ? mark.title : "";
                return (
                    <div className='question-field' key={mark.id}>
                        {mark.reviewed ? 
                            <div className="reviewed">
                                <button className='marked-reviewed' value={mark.id} onClick={unMark}>Reviewed</button> 
                            </div> 
                            : 
                            <div className="not-reviewed">
                                <button className='marked' value={mark.id} onClick={markAsReviewed}>Mark as Reviewed</button> 
                            </div>
                        }
                        <p className='name'>{mark.title}</p>
                        <Link to={'/questions/' + name.toLowerCase().replaceAll(" ", "-")}><i className="fas fa-biking"></i></Link>
                    </div>
                )
            })}

            {!pending &&
                <div>
                    <p className="underDevelopment">*Under Development*</p>
                    {namesInComplete.map(function(name, index){
                        return(
                            <div className='question-field-incomplete'>                       
                                <p className='marked'>Mark Reviewed</p>
                                <input type="checkbox" />                        
                                <p className='name'>{name}</p>
                            </div> 
                        )
                    })} 
                </div>
            }
            
                             
        </div>        
    )
}

export default Questions
