import React from 'react';
import ReactStars from "react-rating-stars-component";
const Filter = ({setrate , settext}) => {
    return (
        <div className="filter">
            <div className="search">
                <input type="text" placeholder="Search for your favorite movie..."onChange={(e)=>settext(e.target.value)}></input>
                <i class="material-icons"> search</i></div>
                <ReactStars
            count={5}
            size={20}
            edit={true}
            activeColor="#ffd700" onChange={(newRating)=>setrate(newRating)}
          />
                </div>
                
            
        
    )
}

export default Filter
