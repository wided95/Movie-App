import React, { useState } from 'react'
import Filter from './Filter'
import MovieCard from './MovieCard'

const MovieList = ({movies}) => {
    const [text, settext] = useState("");
    const [rate, setrate] = useState("");
    return (
        <div>
            <Filter setrate={setrate} settext={settext}/>
         <div className="list">
         {movies.filter((el)=>el.name.toLowerCase().includes(text.toLowerCase())&& el.rating>=rate).map(el=> <MovieCard movie={el}/>).reverse()}
             </div>   
        </div>
    )
}

export default MovieList
