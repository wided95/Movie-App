import React from "react";
import ReactStars from "react-rating-stars-component";
const MovieCard = ({ movie }) => {
  return (
    <div>
      <div className="a-box">
        <div className="img-container">
          <div className="img-inner">
            <div className="inner-skew">
              <img src={movie.posterurl} />
            </div>
          </div>
        </div>
        <div className="text-container">
          <h3>{movie.name}</h3>
          <div>{movie.description}</div>
          <ReactStars
            count={5}
            size={20}
            value={movie.rating}
            edit={false}
            activeColor="#ffd700"
          />
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
