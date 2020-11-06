import React, { useState, useEffect } from 'react'
import { FaStar } from "react-icons/fa"
import './StarRating.css'
import { projectFirestore } from '../firebase';

function StarRating(props) {
    const [ rating, setRating ] = useState(null);
    const [  hover, setHover  ] = useState(null);
    const [ marks, setMarks ] = useState(null);

    useEffect(() => {
        projectFirestore.collection('marks').onSnapshot((snapshot) => {
            const newMarks = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }))
            setMarks(newMarks);

            newMarks.forEach(mark =>{
                if(mark.id === props.id){
                    setRating(mark.rating);
                }
            })
        })      
    }, [props])
    

    return (
        
        <div className="starRating-main">
            {(rating == null || rating == 0) && <p className="no-rating">No rating yet</p>}
            {[...Array(10)].map((star, i) => {
                const ratingValue = i + 1;

                return (
                    <label key={i}>
                        <input type="radio" name="rating" value={ratingValue} 
                        onClick={() => {
                            setRating(ratingValue);
                            marks.forEach(mark => {
                                if(mark.id === props.id){
                                    projectFirestore.collection('marks').doc(mark.id).update({rating: ratingValue})
                                }
                            })
                        }}
                        >

                        </input>

                        <FaStar className="star" color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                        onMouseEnter={() => setHover(ratingValue)}
                        onMouseLeave={() => setHover(null)}
                        >

                        </FaStar>
                    </label>
                )              
            })}
            
        </div>
    )
}

export default StarRating
