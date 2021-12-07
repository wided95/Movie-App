import React, { useState } from "react";

const MovieAdd = ({ handleAdd }) => {
  const [show, setshow] = useState(false);
  const [movie, setmovie] = useState({
      name:"",
      description:"",
      posterurl:"",
      rating:"",
  })
  return (
    <div className="add-movie">
      <button onClick={() => setshow(!show)}>Add movie</button>
      {show ? (
        <div class="modal-bg">
          <div className="modal-body"style={{position:"relative"}} >
            <i class="material-icons"style={{position:"absolute",top:"-40px",left:"350px",right:"10px",cursor:"pointer"}} onClick={()=>setshow(!show)}>close</i>
            <input type="text" placeholder="Movie name" onChange={(e)=>setmovie({...movie,name:e.target.value})}></input>
            <input type="text" placeholder="Movie description" onChange={(e)=>setmovie({...movie,description:e.target.value})}></input>
            <input type="text" placeholder="Movie image" onChange={(e)=>setmovie({...movie,posterurl:e.target.value})}></input>
            <input type="text" placeholder="Movie rate" onChange={(e)=>setmovie({...movie,rating:e.target.value})}></input>
            <button onClick={() => {handleAdd(movie); setshow(!show)}}>Add movie</button>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default MovieAdd;
