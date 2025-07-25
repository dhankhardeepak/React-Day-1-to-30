import React, { useState } from 'react'
import Star from './ui-component/Star';
import './css/rating.css'

const Rating = () => {
  const [rating, setRating] = useState(0);  
  const [hoverRating,  setHoverRating] = useState(0)
  
  const handleMouseEnter = (id) => {
    setHoverRating(id)
    }

  const handleMouseLeave = () => {
    setHoverRating(0)
  }
  return (
    <div className='ratingDiv'>
      {
        [1,2,3,4,5].map((item, idx) => {
            return (
                <div onClick={() => setRating(idx + 1)} onMouseEnter={() => handleMouseEnter(item)} onMouseLeave={handleMouseLeave}>
                    <Star color={`${idx < (hoverRating || rating) ? "yellow" : "black"}`}/>
                </div>
            )
        })
      }
      <p>Rating :- {rating}/5</p>
    </div>
  )
}

export default Rating
