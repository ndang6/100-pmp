import React, { useState } from 'react'
import { FaStar } from "react-icons/fa"
import './StarRating.css'
import { projectFirestore } from '../firebase';

function StarRating() {
    const [ rating, setRating ] = useState(null);
    const [  hover, setHover  ] = useState(null);

    return (
        <div className="starRating-main">
            {[...Array(10)].map((star, i) => {
                const ratingValue = i + 1;

                return (
                    <label key={i}>
                        <input type="radio" name="rating" value={ratingValue} 
                        onClick={() => {
                            setRating(ratingValue);
                            console.log(ratingValue);
                        }}
                        >

                        </input>

                        <FaStar className="star" color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"} size={20}
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
