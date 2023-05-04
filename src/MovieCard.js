import React, { useState } from "react";
import StarRatingComponent from "react-star-rating-component";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const [rating, setRating] = useState(1);
  

  const onStarClick = (nextValue) => {
    setRating(nextValue);
  };
  

  return (
    <>
      <div class="movie_card" id="bright" >
        <div class="info_section">
          <div class="movie_header">
            <img class="locandina" src={movie.posterURL} alt="movie poster" />
            <h1>{movie.title}</h1>
            <StarRatingComponent
              name="rate1"
              starCount={5}
              value={movie.rating}
              onStarClick={onStarClick}
            />
          </div>
          <div class="movie_desc">
            <p class="text">{movie.description}</p>
          </div>
          <Link to={`/movie/${movie.id}`} > Trailer </Link>
        </div>
        <div class="blur_back"></div>
      </div>
    </>
  );
};

export default MovieCard;
