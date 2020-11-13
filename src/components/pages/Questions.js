import React, { useState, useEffect } from 'react'
import './Questions.css'
import { projectFirestore } from '../../firebase';
import { BeatLoader } from 'react-spinners'
import DelayLink from '../DelayLink';
import StarRating from '../StarRating';
import ProgessBar from '../ProgessBar';


function Questions() {
    var namesInComplete = ["Integer to English Words", "Merge Intervals", "Verifying An Alien Dictionary", "Critical Connection in a Network", "Subarray Sum Equals K", "K Closest Points to Origin", "Next Permutation", "Reverse Linked List", "Top K Frequent Words", "Minimum Remove to Make Valid Parentheses", "Container With Most Water", "Decode String", "Maximal Rectangle", "Best Time To Buy and Sell Stock", "Coin Change", "Generate Parenthesis", "Minimum Window Substring", "Maximal Square", "Spiral Matrix", "Add Strings", "Meeting Rooms II", "Text Justification", "Burst Balloon", "Insert Delete GetRandom O(1)", "Reverse Integer", "Partition Labels", "Alien Dictionary", "Permutations", "Rotting Oranges", "Regular Expression Matching", "Strong Password Checker", "Kth Largest Element in an Array", "Search in Rotated Sorted Array"];

    const [marks, setMarks] = useState([])
    const [pending, setPending] = useState(true);
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState("");
    const delayTime = 1000;
    
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

    const markAsReviewed = (e) => {
        projectFirestore.collection('marks').doc(e.target.value).update({reviewed: true})
    }

    const unMark = (e) => {
        projectFirestore.collection('marks').doc(e.target.value).update({reviewed: false})
    }

    const onDelayStart = () => {
        setLoading(true)
    }

    const updateSearch = (e) => {
        console.log(e.target.value)
        setSearch(e.target.value.substring(0, 20))
    }

    let filteredQuestions = marks.filter((question) => {
        return question.title.toString().toLowerCase().indexOf(search) !== -1
    });

    return (   
        <div className='column-field'>
            {!pending &&
                <div className="num">
                    <ProgessBar done={marks.length}></ProgessBar>
                    <BeatLoader loading={loading} />

                    <div className="difficulty">
                        <p>Level of Difficulty</p>
                    </div>             
                </div>
            }
            
            {!pending &&
                <div>
                    <input className="searchBox" type="text" placeholder="Search" value={search} onChange={updateSearch} />
                    <button className="pickQuestion"><DelayLink className="pickQuestionLink" onDelayStart={onDelayStart} delay={delayTime} to={'/questions/' + marks[Math.round(Math.random() * marks.length)].title.toLowerCase().replaceAll(" ", "-")}>Pick A Question</DelayLink></button>
                </div>
            }
            
            {filteredQuestions.map( (mark) => { 
                let name = mark.title ? mark.title : "";
                return (
                    <div className='question-field' key={mark.id}>
                            <div className="title">
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
                                <DelayLink onDelayStart={onDelayStart} delay={delayTime} to={'/questions/' + name.toLowerCase().replaceAll(" ", "-")}><i className="fas fa-biking"></i></DelayLink>
                                
                            </div>
                                                                                                  

                            <div className="rating">
                                <StarRating id={mark.id}></StarRating>
                            </div>                           
                    </div>
                )
            })}

            {/* {!pending &&
                <div>
                    <p className="underDevelopment">*Under Development*</p>
                    {namesInComplete.map(function(name, index){
                        return(
                            <div className='question-field-incomplete' key={index}>                       
                                <p className='marked'>Mark Reviewed</p>
                                <p className='name'>{name}</p>
                            </div> 
                        )
                    })} 
                </div>
            } */}
                                  
        </div>        
    )
}

export default Questions
