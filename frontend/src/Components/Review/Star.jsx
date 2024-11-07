import React, { useState } from 'react';
import { FaStar } from "react-icons/fa";

export function Star({onRatingSelect}) {
  const[rating, setRating]=useState(null)
  const[hover,setHover]=useState(null);

  const handleRatingSelect = (currentRating) => {
    setRating(currentRating);
    if (onRatingSelect) {
      onRatingSelect(currentRating); 
    }
  };
  return(
   <>
   <div className="App flex m-4">
    {[...Array(5)].map((star,index)=>{
      const currentRating = index+1;
      return(
        <label>
          <input type='radio' name='rating' value={currentRating} onClick={()=>{setRating(currentRating);handleRatingSelect(currentRating)}} style={{display:"none"}}/>
          <FaStar className='star cursor-default' size={40} color={currentRating <= (hover || rating) ? "#ffc107": "#e4e5e9"}
          onMouseEnter={() => setHover(currentRating)} onMouseLeave={()=>setHover(null)} />
        </label>
      )
    })
    }
   </div>
   </>
  )
}
